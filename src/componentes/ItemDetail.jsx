import { useContext, useState } from "react";
import { ItemCount } from "./ItemCount";
import { CartContext } from "../context/CartContex";
import { Link } from "react-router-dom";


export function ItemDetail({id, name, description, price, stock, image}) {

  const [quantityAdded, setQuantityAdded] = useState(0)

  const { addItem } = useContext(CartContext)

  const handleOnAdd = (quantity) => {
    setQuantityAdded(quantity)

    const item = {
      id, name, price, description
    }

    addItem(item, quantity)

  }

  return (
    <div className="card" style={{ width: '18rem' }}>
      <div class="card-body">
        <h5 class="card-title">{name}</h5>
        <img src={image} style={{ height: '16rem', width: '15rem' }} />
        <p class="card-text">{description}</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">{price}</li>
      </ul>
      <div class="card-body">
      {quantityAdded > 0 ? (<Link to="/cart"><button>Terminar Compra</button></Link>) : <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />}
      </div>
    </div>
  );
}