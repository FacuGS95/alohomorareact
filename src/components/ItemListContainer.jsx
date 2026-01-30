import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";

import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebaseConfig";

function ItemListContainer({ greeting }) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);

    const productsRef = collection(db, "products");

    const q = categoryId
      ? query(productsRef, where("category", "==", categoryId))
      : productsRef;

    getDocs(q).then((snapshot) => {
      const products = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setItems(products);
      setLoading(false);
    });
  }, [categoryId]);

  if (loading) {
    return <p style={{ padding: "20px" }}>Cargando productos...</p>;
  }

  return (
    <>
      <h2>{greeting}</h2>
      <ItemList items={items} />
    </>
  );
}

export default ItemListContainer;