import React, { useState } from 'react';
import "./ItemCount.css";

const ItemCount = ({stock, initial, onAdd}) => {
    const [counter, setCounter] = useState(initial)

    const CounterUp = () => {
        if (counter < stock){
        setCounter(counter + 1);
        }
    };

    const CounterDown = () => {
        if(counter > 1){
            setCounter(counter - 1)
        }
    }

    const AgregarCantidad = () => {
        onAdd(counter)
    }

    return (
    <div id="ItemCount">
        <h1>Stock actual: {stock} unidades</h1>
        <div className='cantidad'>
        <button className='restar' onClick={CounterDown}>-</button>
        <p>{counter}</p>
        <button className='sumar' onClick={CounterUp}>+</button>
        </div>
        <button className='carrito' onClick={AgregarCantidad}>Agregar al carrito</button>
    </div>
    );
};

export default ItemCount;