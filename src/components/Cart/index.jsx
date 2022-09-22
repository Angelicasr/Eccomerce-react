import React from 'react';
import {useCartContext} from '../../context/CartContext';
import {Link} from 'react-router-dom';
import ItemCart from '../ItemCart';


const Cart  = () => {
    const {cart, totalPrice}= useCartContext();
    if( cart.length === 0 ) {
        return (
            <>
            <p>NO HAY PRODUCTOS EN EL CARRITO</p>
            <Link to='/'>SEGUIR COMPRANDO </Link>
            </>
        );
    }

    return (
        <>
        {
            cart.map(product => <ItemCart key={product.id} product={product} /> )
        }
        <p>
            total:{totalPrice()}
        </p>
        </>
    )
}
export default Cart;
