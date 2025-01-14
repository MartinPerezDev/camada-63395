import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { CartProvider } from "./context/CartContext"
import Cart from "./components/Cart/Cart"
import Checkout from "./components/Checkout/Checkout"
import { ToastContainer } from "react-toastify"
import './App.css'

function App() {

  return (
    <div className="container-app" >
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <ToastContainer theme="dark" position="bottom-center" />

          <Routes>
            <Route path="/" element={<ItemListContainer greeting={"Bienvenidos a mi ecommerce"} />} />
            <Route path="/category/:idCategory" element={<ItemListContainer greeting={"Bienvenidos a mi ecommerce"} />} />
            <Route path="/detail/:idProduct" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  )
}

export default App