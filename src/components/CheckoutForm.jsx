import { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";

function CheckoutForm() {
  const { cart, totalPrice, clearCart } = useContext(CartContext);

  const [buyer, setBuyer] = useState({
    name: "",
    email: "",
    emailConfirm: "",
    phone: "",
  });

  const [orderId, setOrderId] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setBuyer({
      ...buyer,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!buyer.name || !buyer.email || !buyer.phone) {
      alert("Por favor completa todos los campos");
      return;
    }

    if (buyer.email !== buyer.emailConfirm) {
      alert("Los emails no coinciden");
      return;
    }

    setLoading(true);

    const order = {
      buyer,
      items: cart,
      total: totalPrice,
      date: new Date().toLocaleString(),
    };

    try {
      const ordersRef = collection(db, "orders");
      const docRef = await addDoc(ordersRef, order);

      setOrderId(docRef.id);
      clearCart();
    } catch (error) {
      console.error("Error al generar la orden:", error);
      alert("Hubo un error al procesar la compra");
    } finally {
      setLoading(false);
    }
  };

  if (orderId) {
    return (
      <div style={{ padding: "20px" }}>
        <h2>¡Gracias por tu compra!</h2>
        <p>Tu número de orden es:</p>
        <h3>{orderId}</h3>
      </div>
    );
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>Finalizar compra</h2>

      {loading && (
        <p style={{ fontStyle: "italic", marginBottom: "10px" }}>
          Procesando compra...
        </p>
      )}

      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          maxWidth: "300px",
        }}
      >
        <input
          type="text"
          name="name"
          placeholder="Nombre completo"
          value={buyer.name}
          onChange={handleChange}
          disabled={loading}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={buyer.email}
          onChange={handleChange}
          disabled={loading}
        />

        <input
          type="email"
          name="emailConfirm"
          placeholder="Confirmar email"
          value={buyer.emailConfirm}
          onChange={handleChange}
          disabled={loading}
        />

        <input
          type="text"
          name="phone"
          placeholder="Teléfono"
          value={buyer.phone}
          onChange={handleChange}
          disabled={loading}
        />

        <button
          type="submit"
          className="btn-primary"
          disabled={loading}
          style={{
            opacity: loading ? 0.6 : 1,
            cursor: loading ? "not-allowed" : "pointer",
          }}
        >
          {loading ? "Procesando..." : "Finalizar compra"}
        </button>
      </form>
    </div>
  );
}

export default CheckoutForm;