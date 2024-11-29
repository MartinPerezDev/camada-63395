import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import './App.css'

function App() {

  return (
    <div>
      <NavBar />
      <ItemListContainer greeting={"Bienvenidos a mi ecommerce"} />

      <button className='bg-blue-500 rounded text-white'>
        Click Me
      </button>
    </div>
  )
}

export default App
