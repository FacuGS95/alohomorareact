import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function CartWidget() {
  const { totalQuantity } = useContext(CartContext);

  return (
    <div style={{ position: "relative", cursor: "pointer" }}>
      <span style={{ fontSize: "24px" }}>🛒</span>

      {totalQuantity > 0 && (
        <span
          style={{
            position: "absolute",
            top: "-5px",
            right: "-10px",
            background: "red",
            color: "white",
            borderRadius: "50%",
            padding: "2px 6px",
            fontSize: "12px",
          }}
        >
          {totalQuantity}
        </span>
      )}
    </div>
  );
}

export default CartWidget;