import { useContext } from "react"
import { CartContext } from "../context/CartContex";
import { Link } from "react-router-dom";
import "../componentes/Cart.css"


export const Cart = () => {
    const { cart, clearCart, total } = useContext(CartContext)

    if (cart.length === 0) {
        return (
            <div>
                <h2>No hay items en el Carrito</h2>
                <Link to="/"><button>Productos</button></Link>
            </div>
        )
    }

    return (
        <>
            <div className="cartCarrito">
                {cart.map(p =>
                    <div className="card" key={p.id} style={{ width: '18rem' }}>
                        <div class="card-body">
                            <h5 class="card-title">{p.name}</h5>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">Precio: ${p.price}</li>
                            <li class="list-group-item">Cantidad: {p.quantity}</li>
                            <li class="list-group-item">Total: ${p.quantity * p.price}</li>
                        </ul>
                    </div>)}
            </div>
            <div>
                <h3>Total: ${total()}</h3>
                <button onClick={() => clearCart()}>Limpiar Carrito</button>
                <Link to="/checkout"><button>Checkout</button></Link>
            </div>

        </>
    )
}