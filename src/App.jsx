import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import './App.css'

function App() {

  return (
    <div className="container-app" >
      <NavBar />
      <ItemListContainer greeting={"Bienvenidos a mi ecommerce"} />
    </div>
  )
}

export default App