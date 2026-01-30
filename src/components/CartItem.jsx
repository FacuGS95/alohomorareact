import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "./CartItem.css";

function CartItem({ item }) {
  const { removeItem, increaseQuantity, decreaseQuantity } = useContext(CartContext);

  return (
    <div className="cart-item">
      <div className="cart-item-content">
        <img src={item.img} alt={item.name} className="cart-item-img" />

        <div className="cart-item-details">
          <h3>{item.name}</h3>
          <p>Precio: ${item.price}</p>
          <p>Subtotal: ${item.price * item.quantity}</p>

          <div className="quantity-controls">
            <button className="qty-btn" onClick={() => decreaseQuantity(item.id)}>
              –
            </button>

            <span className="qty-number">{item.quantity}</span>

            <button className="qty-btn" onClick={() => increaseQuantity(item.id)}>
              +
            </button>
          </div>

          <button className="delete-btn" onClick={() => removeItem(item.id)}>
            Eliminar
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;