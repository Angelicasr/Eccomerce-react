import React from 'react';
import {useCartContext} from '../../context/CartContext';
import {Link} from 'react-router-dom';
import ItemCart from '../ItemCart';
import {addDoc, getFirestore, collection} from 'firebase/firestore';


const Cart  = () => {
    const {cart, totalPrice}= useCartContext();
    const order = {
        buyer: {
            name:'Oriana',
            email:'orianaoopmg@gmail.com',
            phone:'7623187',
            address:'honduras 4413'


        },
        items: cart.map(product =>({ id: product.id, title: product.title, price: product.price, quantity:product.quantity})),
        total: totalPrice(),
    }
    const handleClick = () => {
const db = getFirestore();
const ordersCollection = collection (db, 'orders');
addDoc(ordersCollection, order)
.then (({id }) => console.log(id))
}


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
        <button onClick={handleClick}>Generar Orden</button>
        </>
    )
}
export default Cart;
