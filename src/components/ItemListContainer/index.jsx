import ItemCount from '../ItemCount';
import ItemList from '../ItemList';
import React, {useState, useEffect} from 'react';
import Title from '../Title';


const producto = [
    { id:1, image:"https://d3ugyf2ht6aenh.cloudfront.net/stores/001/926/291/products/bfbdc6f7-cf46-437c-9904-9789dfcfd26b-5f6dbf03b61ff2814216372567269719-1024-1024.jpeg",
    title: "Tequila Jose Cuervo Dorado"}
];

export const ItemListContainer = ({texto}) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(producto);
            }, 1000);
        });
        getData.then(res => setData(res));

    }, [])


    const onAdd = (quantity) => {
        console.log('compraste $ {quantity} unidades');
    }
    return (  
        <>
        <Title greeting ={texto} />
        <ItemCount initial={1} stock={10} onAdd={onAdd} />
        <ItemList data={data}/>
        </>
    );
}

export default ItemListContainer;