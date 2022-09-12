import ItemCount from '../ItemCount';
import ItemList from '../ItemList';
import React, {useState, useEffect} from 'react';
import Title from '../Title';


const producto =[
    {id: 1, image:"https://whiskypedia.com.ar/wp-content/uploads/2020/06/Tequila-Jose-Cuervo-Reposado-750-ml.jpg",
    title: "Tequila"},
    {id: 2, image:"https://www.venestore.com.ar/productos/santa-teresa-gran-reserva/",
    title: "Ron"},
    {id: 3, image:"https://vinotecaligier.com/vg-rutini-malbec-2004-750.html",
    title: "Vino"},

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
        <Title greeting = {texto} />
        <ItemCount initial={1} stock={10} onAdd={onAdd}/>
        <ItemList data={data}/>
        </>
    );
}

export default ItemListContainer;