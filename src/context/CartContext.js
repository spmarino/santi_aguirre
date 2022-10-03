import React, { createContext, useState } from "react";

export const CartContext = createContext([]);



export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const isInCart = (id) => {
        return cart.some(x => x.id === id)
    }

    // Agrega producto al cart, sin sobreponerse a los ya agregados.
    const addItem = (product, quantity) => {
        const newProduct = {...product, quantity}
        const auxArr = [...cart]

        console.log(product)

        if (isInCart(newProduct.id)) {
            const findProd = cart.find(x => x.id === newProduct.id)
            const prodIndex = cart.indexOf(findProd)

            auxArr[prodIndex].quantity += quantity
        } else {
            auxArr.push(newProduct)
        }
        setCart(auxArr)
        
    }

    // Vaciar carrito
    const emptyCart = () => {
        setCart([])
    }

    // Borra el item seleccionado
    const deleteItem = (id) => {
        return setCart(cart.filter(x => x.id !== id))
    }

    // Retorna la cantidad total de unidades en el state del cart.
    const getItemQty = () => {
        return cart.reduce((acc, x) => acc += x.quantity, 0)
    }

    // Retorna el precio total del cart.
    const getItemPrice = () => {
        return cart.reduce((acc, x) => acc += x.quantity * x.precio, 0)
    }




    return (
        <CartContext.Provider value={{ cart, addItem, emptyCart, deleteItem, getItemQty, getItemPrice}}>
            {children}
        </CartContext.Provider>
    )
}