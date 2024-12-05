import { useState, useEffect } from "react"
import ItemList from "./ItemList.jsx"
import { getProducts, addProduct, modProductById, deleteProductById } from "../../utils/fetchApi.js"
import "./itemlistcontainer.css"

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([])

  const newProduct = {
    nombre: "Remera Extreme",
    descripcion: "",
    precio: 400,
    stock: 10,
    imagen: "/img/remera-h.jpg",
    categoria: "remeras"
  }

  const mod = {
    nombre: "producto modificado",
    precio: 9500
  }

  useEffect(() => {
    getProducts()
      .then((data)=> setProducts(data) )
  }, [])

  const clickEvento = () => {
    /*
    addProduct(newProduct)
      .then((data) => setProducts(data))¨
      
    modProductById(2, mod)
      .then((data)=> setProducts(data))
      */
    deleteProductById(2)
      .then((data)=> setProducts(data))
  }

  return (
    <div className="itemlistcontainer">
      <h1>{greeting}</h1>
      <button onClick={clickEvento} >Eliminar producto</button>
      <ItemList products={products} />
    </div>
  )
}
export default ItemListContainer