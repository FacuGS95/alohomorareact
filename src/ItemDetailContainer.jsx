import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./components/ItemDetail";
import { CartContext } from "./context/CartContext";

import { doc, getDoc } from "firebase/firestore";
import { db } from "./firebaseConfig";

function ItemDetailContainer() {
  const [item, setItem] = useState(null);
  const [added, setAdded] = useState(false);

  const { id } = useParams();
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const docRef = doc(db, "products", id);

    getDoc(docRef).then((snapshot) => {
      if (snapshot.exists()) {
        setItem({ id: snapshot.id, ...snapshot.data() });
      } else {
        setItem(null);
      }
      setAdded(false);
    });
  }, [id]);

  const handleAdd = (quantity) => {
    addToCart(item, quantity);
    setAdded(true);
  };

  return (
    <div>
      {item ? (
        <ItemDetail product={item} onAdd={handleAdd} added={added} />
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
}

export default ItemDetailContainer;