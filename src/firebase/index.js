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
  orderBy
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
  const querySnapshot = await getDocs(collection(db, "products"));

  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} =>`, doc.data());
  });
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

export const getCategories = async ({isPaginated = false, pageNumber = 1, lastDoc = null}) => {
  let q;
  if (isPaginated) {
    // Paginated query
    q = query(
      collection(db, "Categories"),
      orderBy("createdAt", "desc"),
      limit(PAGE_SIZE)
    );

    if (pageNumber > 1 && lastDoc) {
      q = query(
        collection(db, "Categories"),
        orderBy("createdAt", "desc"),
        startAfter(lastDoc),
        limit(PAGE_SIZE)
      );
    }
  } else {
    // Fetch all data without pagination
    q = query(collection(db, "Categories"), orderBy("createdAt", "desc"));
  }

  const querySnapshot = await getDocs(q);
  const data = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

  return {data};
};
