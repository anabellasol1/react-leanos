import { Link } from "react-router-dom";
import { Item } from "./Item"

export function ItemList({ productosFetch }) {
  return (
    <div className="container">
      <div className="d-flex justify-content-aroud flex-wrap">
        {productosFetch.map((producto) => (
          <Link key={producto.id} to={`/item/${producto.id}`}>
          <Item  name={producto.name} description={producto.description} price={producto.price} />
          </Link>
        ))}
      </div>
    </div>
  );
}