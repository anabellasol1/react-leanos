import React, { useContext, useState } from 'react'
import { CartContext } from '../context/CartContex';
import { useForm } from "react-hook-form";
import { collection, addDoc } from "firebase/firestore";
import { base } from "../firebase/data"
import "../componentes/Checkout.css"

export const Checkout = () => {
    const { cart, clearCart, total } = useContext(CartContext);
    const [pedidoId, setPedidoId] = useState("");
    const { register, handleSubmit } = useForm();

    const comprar = (data) => {
        const pedido = {
            cliente: data,
            productos: cart,
            total: total()
        }

        console.log(pedido);
        const pedidosR = collection(base, "pedidos");
        addDoc(pedidosR, pedido).then((doc) => {
            setPedidoId(doc.id);
            clearCart()
        })
    }

    if (pedidoId) {
        return (
            <div>
                <h1>Muchas gracias por tu compra</h1>
                <p>Tu número de pedido es: {pedidoId}</p>
            </div>
        )
    }

    return (
        <div>
            <h1>Terminar Compra</h1>
            <form className='formularioCliente' onSubmit={handleSubmit(comprar)}>

                <input type="text" placeholder="Ingresá tu nombre" {...register("nombre")} />
                <input type="email" placeholder="Ingresá tu e-mail" {...register("email")} />
                <input type="phone" placeholder="Ingresá tu teléfono" {...register("telefono")} />

                <button className="enviar" type="submit">Comprar</button>

            </form>
        </div>
    )
}