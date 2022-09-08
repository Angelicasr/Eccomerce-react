import Title from '../Title';
import ItemCount from '../ItemCount';
import ItemList from '../ItemList';
import React, {useState, useEffect} from 'react';


const productos =[
    {id: 1, image:"http://d3ugyf2ht6aenh.cloudfront.net/stores/001/211/660/products/jose-cuervo1-cc6f76f78705cf1bf416426897613153-640-0.jpg",
    title: "Jose Cuervo Dorado"
    },
    {id: 2, image:"https://www.venestore.com.ar/productos/santa-teresa-gran-reserva/",
    title: "santa teresa"
    },
    {id: 3, image:"https://vinotecaligier.com/vg-rutini-malbec-2004-750.html",
    title: "Vino rutini"
    },

];

export const ItemListContainer = ({texto}) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(productos);
            }, 1000);
        });
        getData.then(res => setData(res));
    }, [])


    const onAdd = (quantity) => {
        console.log('compraste ${quantity} unidades');
    }
    return (  
        <>
        <Title greeting = {texto} />
        <ItemCount initial={1} stock={10} onAdd={onAdd}/>
        <ItemList data={data}/>
        </>
    );
}

export default ItemListContainer;