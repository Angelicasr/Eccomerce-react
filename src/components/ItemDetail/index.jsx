
import  './itemDetail.css';
import ItemCount from '../ItemCount';
import React, {useState} from 'react'; 
import {Link} from 'react-router-dom';
import {useCartContext} from '../../context/CartContext';



export const ItemDetail = ({data }) => {
    const [goToCart, setGoToCart] = useState(false);
    const { addProduct } = useCartContext();

    const onAdd = (quantity) => {
        setGoToCart(true);
        addProduct(data, quantity);
    
    }


    return(
        <div className="container">
            <div className="detail">
                <img className='detail__image' src={data.image} alt=""/>
                <div className="content">
                    <h1>{data.title}</h1>
                    <p> {data.title} </p>
                    <p>{data.price}</p>
            <p>750mL</p>
                {
                    goToCart
                    ? <Link to='/cart'> TERMINAR COMPRA</Link>
                    : <ItemCount initial={1} stock={5} onAdd={onAdd} />
                }


                </div>

            </div>

        </div>
        );
    }
    export default ItemDetail;