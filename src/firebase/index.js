import {
  collection,
  addDoc,
  doc,
  setDoc,
  getDocs,
  serverTimestamp,
  getDoc
} from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";

import { db, auth } from "./config";

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

export const createDoc = async (data, collection, docId) => {
  let docRef;
  if (docId) {
    docRef = doc(db, collection, docId);
    await setDoc(docRef, {
      ...data,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    });
  } else {
    docRef = await addDoc(collection(db, collection), {
      ...data,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    });
  }
  return readDoc(collection, docId)
};

export const readDoc = async (collection, docId) => {
  const docRef = doc(db, collection, docId);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    return null
  }
};
