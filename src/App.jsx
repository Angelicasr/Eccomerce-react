import './App.css';
import Navbar from './components/Navbar';
import Cart from "./components/Cart";
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";



document.body.style.backgroundColor = "#f5f5dc";
function App() {
  return (
        <>
        <BrowserRouter>
          <Navbar/>
          <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/Categoria' element={<ItemListContainer/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/detalle' element={<ItemListContainer/>}/>
          </Routes>
          <ItemListContainer/>
          <ItemDetailContainer/>
          <Cart />
          </BrowserRouter>
        </>
  );
}

export default App;
