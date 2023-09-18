import { createContext, useEffect, useState } from "react"

export const CartContext = createContext()

const cartInicial = JSON.parse(localStorage.getItem("cart") || "[]")

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState(cartInicial)
    console.log(cart)

    const addItem = (item, quantity) => {
        if(!isInCart(item.id)) {
            setCart (prev => [...prev, {...item, quantity}])
        } else { console.error("El producto ya fue agregado")
        }
    }

    const clearCart = () => {
        setCart([])
    }

    const isInCart = (itemId) => {
        return cart.some(prod => prod.id === itemId)
    }



    const totalQuantity = () => {
        return cart.reduce((acc, prod) => acc + prod.quantity, 0)
    }

    const total = () => {
        return cart.reduce((acc, prod) => acc + prod.price * prod.quantity, 0)
    }


    useEffect(()=>{
        localStorage.setItem("cart", JSON.stringify(cart))
    }, [cart])

    return (
        <CartContext.Provider value={{cart, addItem, clearCart, totalQuantity, total}}>
            {children}
        </CartContext.Provider>
    )
}