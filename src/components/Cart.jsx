import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";
import "./Cart.css";

function Cart() {
  const { cart, clearCart, totalPrice } = useContext(CartContext);

  if (cart.length === 0) {
    return <h2>El carrito está vacío</h2>;
  }

  return (
    <div className="cart-container">
      <h2>Carrito</h2>

      {cart.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}

      <h3>Total: ${totalPrice}</h3>

      <div className="cart-buttons">
        <button onClick={clearCart}>Vaciar carrito</button>

        <Link to="/checkout">
          <button className="btn-primary">Finalizar compra</button>
        </Link>
      </div>
    </div>
  );
}

export default Cart;