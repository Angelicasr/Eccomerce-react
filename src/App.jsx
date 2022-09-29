import './App.css';
import Navbar from './components/Navbar';
import Cart from "./components/Cart";
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartProvider from './context/CartContext';
import React from 'react';

document.body.style.backgroundColor = "grey";



function App() {
  return (
        <>
        <BrowserRouter>
          <CartProvider>
          <Navbar/>
          <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/Categoria/:categoriaId' element={<ItemListContainer/>}/>
          <Route path='/Cart' element={<Cart/>}/>
          <Route path='/contacto' element={<ItemListContainer/>}/>
          <Route path='/detalle/:detalleId' element={<ItemDetailContainer/>}/>
          </Routes>
          </CartProvider>
          </BrowserRouter>
        </>
  );
}

export default App;
