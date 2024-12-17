import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import EjemploContadorEventListener from "./components/Ejemplos/EjemploContadorEventListener"
import EjemploFormulario from "./components/Ejemplos/EjemploFormulario"
import './App.css'

function App() {

  return (
    <div className="container-app" >
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path="/" element={<ItemListContainer greeting={"Bienvenidos a mi ecommerce"} />} />
          <Route path="/category/:idCategory" element={<ItemListContainer greeting={"Bienvenidos a mi ecommerce"} />} />
          <Route path="/detail/:idProduct" element={<ItemDetailContainer />} />
          <Route path="/ejemplos" element={<EjemploContadorEventListener />} />
          <Route path="/formulario" element={<EjemploFormulario />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App