import ItemDetail from '../ItemDetail';
import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';


const producto = [
    { id:1, price: 4200, image:"https://d3ugyf2ht6aenh.cloudfront.net/stores/001/926/291/products/bfbdc6f7-cf46-437c-9904-9789dfcfd26b-5f6dbf03b61ff2814216372567269719-1024-1024.jpeg",
    title: "Tequila Jose Cuervo Dorado", category:'wisky'},
    { id:2, price: 3000, image:"https://whiskypedia.com.ar/wp-content/uploads/2019/11/Jack-Daniel-Honey-1.jpg",
    title: "Jack Daniels Honey", category:'wisky'},
    { id:3, price: 1500, image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC-45-ZNcCl5jeY50Vh0-KCVLfjlGIB98NfQ&usqp=CAU",
    title: "Ron havanna ", category:'Ron'},
    { id:4, price: 5200, image:"https://www.vinosyspirits.com/media/catalog/product/cache/5f7992a8ddb3a20898660fa147334422/3/0/30004_2.jpg",
    title: "Black Label", category:'wisky'},
    { id:5, price: 900, image:"https://d2r9epyceweg5n.cloudfront.net/stores/001/185/448/products/jyb-blended-scotch-750ml1-5b03eb0b66da76cd1115898302932181-1024-1024.png",
    title: "Whisky J&b", category:'wisky'},
];

export const ItemDetailContainer = () => {
    const [data, setData] = useState({});
    const {detalleId} = useParams();

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(producto);
            }, 1000);
        });

        getData.then(res =>  setData(res.find(product => product.id === parseInt(detalleId))));;
    }, [])
    return(
        <ItemDetail data={data}/>
        );
    }
    export default ItemDetailContainer;