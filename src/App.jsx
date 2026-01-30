  import NavBar from './components/NavBar';
  import ItemListContainer from './components/ItemListContainer';
  import ItemDetailContainer from './ItemDetailContainer';
  import { Routes, Route } from 'react-router-dom';
  import Cart from "./components/Cart";
  import CheckoutForm from "./components/CheckoutForm";
  import UploadProductsPage from "./utils/UploadProductsPage"



  function App() {
    return (
      <>
        <NavBar />

        <Routes>
          <Route path="/" element={<ItemListContainer greeting="Todos los productos" />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<CheckoutForm />} />

        
          <Route path="/upload" element={<UploadProductsPage />} />

          <Route path="*" element={<h2>Bienvenid@ a Alohomora Store</h2>} />
        </Routes>
      </>
    );
  }

  export default App;