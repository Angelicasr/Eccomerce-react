import ItemDetail from '../ItemDetail';
import React, {useState, useEffect} from 'react';


const productos = {id: 1, image:"https://d3ugyf2ht6aenh.cloudfront.net/stores/001/926/291/products/bfbdc6f7-cf46-437c-9904-9789dfcfd26b-5f6dbf03b61ff2814216372567269719-1024-1024.jpeg",
title: "Tequila" };


export const ItemDetailContainer = () => {
    const [data, setData] = useState({});

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(productos);
            }, 1000);
        });

        getData.then(res => setData(res));
    }, [])
    return(
        <ItemDetail data={data}/>
        );
    }
    export default ItemDetailContainer;