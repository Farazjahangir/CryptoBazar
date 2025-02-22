import {
  collection,
  addDoc,
  doc,
  setDoc,
  getDocs,
  serverTimestamp,
  getDoc,
  query,
  limit,
  startAfter,
  orderBy,
  startAt,
  endAt,
  where,
  updateDoc,
} from "firebase/firestore";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

import { db, auth, storage } from "./config";
import { PAGE_SIZE } from "../constants";

export const createUser = async (data) => {
  const authUser = await createUserWithEmailAndPassword(
    auth,
    data.email,
    data.password
  );
  return authUser.user;
};

export const getProducts = async () => {
  const productsSnapshot = await getDocs(collection(db, "Products"));
  const products = productsSnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  // Extract unique category IDs
  const categoryIds = [
    ...new Set(products.map((p) => p.category).filter(Boolean)),
  ];

  // Fetch all categories in parallel
  const categoryDocs = await Promise.all(
    categoryIds.map((categoryId) => getDoc(doc(db, "Categories", categoryId)))
  );

  // Create a category map for quick lookup
  const categoriesMap = new Map();
  categoryDocs.forEach((categorySnap, index) => {
    if (categorySnap.exists()) {
      categoriesMap.set(categoryIds[index], {
        id: categorySnap.id,
        ...categorySnap.data(),
      });
    }
  });

  // Attach category data to products
  return products.map((product) => ({
    ...product,
    category: categoriesMap.get(product.category) || null,
  }));
};

export const createDoc = async (data, collectionName, docId) => {
  let docRef;
  let id = docId;
  if (docId) {
    docRef = doc(db, collectionName, docId);
    await setDoc(docRef, {
      ...data,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    });
  } else {
    docRef = await addDoc(collection(db, collectionName), {
      ...data,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    });
    id = docRef.id;
  }
  return readDoc(collectionName, id);
};

export const readDoc = async (collectionName, docId) => {
  const docRef = doc(db, collectionName, docId);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return { ...docSnap.data(), uid: docId };
  } else {
    return null;
  }
};

export const signIn = async (data) => {
  const authUser = await signInWithEmailAndPassword(
    auth,
    data.email,
    data.password
  );
  return readDoc("users", authUser.user.uid);
};

export const uploadImageToFirebase = (file, folderName = "images") => {
  return new Promise((resolve, reject) => {
    if (!file) return reject("No file selected");

    const storageRef = ref(storage, `${folderName}/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      },
      (error) => reject(error),
      async () => {
        const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
        resolve(downloadURL);
      }
    );
  });
};

export const getCategories = async (params = {}) => {
  const { search = "" } = params;
  let q;
  const categoriesRef = collection(db, "Categories");

  if (search) {
    q = query(
      categoriesRef,
      where("isActive", "==", true), // ✅ Requires Composite Index
      orderBy("name"),
      startAt(search),
      endAt(search + "\uf8ff")
    );
  } else {
    q = query(
      categoriesRef,
      where("isActive", "==", true),
      orderBy("createdAt", "desc") // ✅ Requires Composite Index
    );
  }

  const querySnapshot = await getDocs(q);
  const data = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

  return { data };
};

export const updateDocument = async (collectionName, docId, payload) => {
  if (!collectionName || !docId || !payload) {
    throw new Error("Invalid parameters provided!");
  }
  const docRef = doc(db, collectionName, docId);
  await updateDoc(docRef, { ...payload, updatedAt: serverTimestamp() });
};

export const hasActiveProducts = async (categoryId) => {
  const q = query(
    collection(db, "Products"), // Apne products ka collection
    where("category", "==", categoryId),
    where("isActive", "==", true) // Sirf active products check karne hain
  );

  const querySnapshot = await getDocs(q);
  return !querySnapshot.empty; // Agar koi bhi product mila to true return karega
};

export const deleteCategory = async (category) => {
  const hasActiveProduct = await hasActiveProducts(category)
  if (hasActiveProduct) {
    throw new Error('Cannot delete this category because it has products')
  }
  const docRef = doc(db, "Categories", category);
  await updateDoc(docRef, { isActive: false, updatedAt: serverTimestamp() });
};
