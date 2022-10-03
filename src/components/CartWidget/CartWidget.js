import { useContext } from "react";
import { CartContext } from '../../context/CartContext';
import cart from './cart.png';

const CartWidget = () => {
    const {getItemQty} = useContext(CartContext)

    return(
        <>
        <img src={cart} alt='carrito'></img>
        
        {getItemQty() <= 0 ? '' : <span className='cartNumber'>{getItemQty()}</span>}
        
        </>
    );
}

export default CartWidget