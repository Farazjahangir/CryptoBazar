import { collection, addDoc, doc, setDoc, getDocs } from "firebase/firestore";

import { db } from "./config";

export const getProducts = async () => {
  const querySnapshot = await getDocs(collection(db, "products"));

  console.log("querySnapshot", querySnapshot)
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} =>`, doc.data());
  });
};
