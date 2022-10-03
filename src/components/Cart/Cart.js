import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import { CartContext } from "../../context/CartContext";
import ItemCart from "../ItemCart/ItemCart";



const Cart = () => {

    const { cart, getItemPrice } = useContext(CartContext);

    if (cart.length <= 0) {
        return (
            <>
                    <h1>El carrito de compras está vacío</h1>
                    <Link to='/'><p>Hacer compras</p></Link>
                    </>
        )
    }
    

    return(
        <>
            {
                cart.map((Productos) => <ItemCart key={Productos.id} Productos={Productos}/>)
            }
            <p>
                Total: {getItemPrice()}
            </p>        
        </>
    )
}

export default Cart;