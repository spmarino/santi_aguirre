import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const ItemCart = ({ Productos }) => {
    const { deleteItem } = useContext(CartContext);

    return(
        <div className="itemCart">
            <img src={Productos.img} alt={Productos.nombre}></img>
            <div>
                <p>Producto: {Productos.nombre}</p>
                <p>Cantidad: {Productos.quantity}</p>
                <p>Precio unitario: {Productos.precio}</p>
                <p>Subtotal: ${Productos.quantity * Productos.precio}</p>
                <button onClick={() => deleteItem(Productos.id)}>Eliminar</button>
            </div>
        </div>
    )
}

export default ItemCart