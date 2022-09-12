import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemsListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';



function App() {
  return (

        <div>
          <Navbar/>
          <ItemListContainer/>
          <ItemDetailContainer/>
        </div>
  );
}

export default App;
