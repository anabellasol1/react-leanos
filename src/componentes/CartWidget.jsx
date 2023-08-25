import Cart from '../assets/img/Cart.png'
import '../componentes/CartWidget.css'

export function CartWidget ({item}) { 
    return (
        <div class="cart">
           <img class="pngCart" src={Cart} />
           {item}
        </div>
               
    );
};