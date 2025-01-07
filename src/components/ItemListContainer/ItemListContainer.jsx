import { useState, useEffect } from "react"
import ItemList from "./ItemList.jsx"
import { useParams } from "react-router-dom"
import { collection, getDocs, query, where } from "firebase/firestore"
import db from "../../db/db.js"
import "./itemlistcontainer.css"

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([])

  const { idCategory } = useParams()

  const collectionName = collection(db, "products")

  const getProducts = async() => {
    try {
      const dataDb = await getDocs(collectionName)

      const data = dataDb.docs.map((productDb) => {
        return { id: productDb.id, ...productDb.data() }
      })

      setProducts(data)

    } catch (error) {
      console.log(error)
    }
  }

  const getProductsByCategory = async() => {
    try {
      const q = query( collectionName , where("category", "==", idCategory ) )
      const dataDb = await getDocs(q)
  
      const data = dataDb.docs.map((productDb) => {
        return { id: productDb.id, ...productDb.data() }
      })
  
      setProducts(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if(idCategory){
      getProductsByCategory()
    }else{
      getProducts()
    }
  }, [idCategory])


  return (
    <div className="itemlistcontainer">
      <h1>{greeting}</h1>
      <ItemList products={products} />
    </div>
  )
}
export default ItemListContainer