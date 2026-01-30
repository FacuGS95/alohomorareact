import "./ItemDetail.css";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";

function ItemDetail({ product, onAdd, added }) {
  if (!product) {
    return <h2>Cargando producto...</h2>;
  }

  return (
    <div className="detail-container">
      <div className="detail-img-wrapper">
        <img
          src={product.img}
          alt={product.name}
          className="detail-img"
        />
      </div>

      <div className="detail-info">
        <h2 className="detail-title">{product.name}</h2>

        <p className="detail-description">{product.description}</p>

        <p className="detail-price">Precio: ${product.price}</p>

        {/* 🔥 Si no hay stock */}
        {product.stock === 0 ? (
          <p className="no-stock">Producto sin stock</p>
        ) : (
          <>
            {/* 🔥 Si NO se agregó al carrito, mostrar ItemCount */}
            {!added ? (
              <ItemCount
                stock={product.stock}
                initial={1}
                onAdd={onAdd}
              />
            ) : (
              /* 🔥 Si YA se agregó, mostrar mensaje + botón */
              <div className="detail-after-add">
                <p className="success-msg">Producto agregado con éxito</p>

                <Link to="/cart">
                  <button className="btn-primary">Ir al carrito</button>
                </Link>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default ItemDetail;