import ItemDetail from '../ItemDetail';
import React, {useState, useEffect} from 'react';


const productos = {id: 1, image:"https://whiskypedia.com.ar/wp-content/uploads/2020/06/Tequila-Jose-Cuervo-Reposado-750-ml.jpg",
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