import { Link } from "react-router-dom";
import "./Item.css";

function Item({ id, name, price, img }) {
  return (
    <div className="item-card">
      <div className="item-img-wrapper">
        <img src={img} alt={name} className="item-img" />
      </div>

      <h3 className="item-title">{name}</h3>
      <p className="item-price">Precio: ${price}</p>

      <Link to={`/item/${id}`} className="ver-detalle">
        Ver detalle
      </Link>
    </div>
  );
}

export default Item;