import Cart from '../assets/img/Cart.png'
import '../componentes/CartWidget.css'
import { useContext } from "react"
import { CartContext } from '../context/CartContex'
import { Link } from "react-router-dom"


export const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext)

    return (
        <Link to="/cart" className='cart' style={{ display: totalQuantity() > 0 ? "block" : "none" }}>

            <img class="pngCart" src={Cart} />
            {totalQuantity()}
        </Link>
    )
}












