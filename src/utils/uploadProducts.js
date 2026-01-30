import products from "../data/products.js";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";

export async function uploadProducts() {
  console.log("Subiendo productos mágicos...");

  const productsRef = collection(db, "products");

  for (const product of products) {
    await addDoc(productsRef, product);
  }

  console.log("Productos subidos:", products.length);
}