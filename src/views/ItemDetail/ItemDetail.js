import React, { useContext } from 'react'
import "./ItemDetail.css";
import ItemCount from '../../components/ItemCount/ItemCount'
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

function ItemDetail({ Productos }) {
    const {addItem} = useContext(CartContext)

    const onAdd = (cantidad) => {
        addItem(Productos, cantidad)
    }


	return (
		<div className='ItemDetail'>
            <img src={Productos.img} alt={Productos.nombre}/>
            <div className='details'>
                <h1 className='nombreProducto'>{Productos.nombre}</h1>
                <ul>
                    <li>Material: {Productos.material}</li>
                    <li>Cuello: {Productos.cuello}</li>
                    <li>Color: {Productos.color}</li>

                </ul>
                <h2 className='precio'>Precio: ${Productos.precio}</h2>
                <div className='counter'>
                        <ItemCount stock={5} initial={1} onAdd={onAdd}/>
                </div>
                <Link to='/cart'>Finalizar compra</Link>
            </div>
        </div>
	);
};

export default ItemDetail;