import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"
import ItemCount from "../ItemCount/ItemCount"
import { Link } from "react-router-dom"
import "./itemdetail.css"

const ItemDetail = ({ product }) => {
  //estado para controlar si se muestra o no el componente ItemCount
  const [showItemCount, setShowItemCount] = useState(true)

  const { addProduct } = useContext(CartContext)

  const addProductInCart = (count) => {
    //producto que vamos a añadir al carrito
    const productCart = { ...product, quantity: count }

    addProduct(productCart)
    
    //cambiamos el estado para que se deje de mostrar ItemCount
    setShowItemCount(false)
  }

  return (
    <div className="item-detail">
      <div className="images-detail-container">
        <div className="secondary-images">
        </div>
        <div className="main-image">
          <img src={product.image} alt="" />
        </div>
      </div>

      <div className="text-detail-container">
        <h2 className="title-detail">{product.name}</h2>
        <p className="text-detail">{product.description}</p>
        <p className="text-detail">Precio: ${product.price}</p>
        {
          showItemCount === true ? (
            <ItemCount stock={product.stock} addProductInCart={addProductInCart} />
          ) : (
            <Link to="/cart">Terminar mi compra</Link>
          )
        }
      </div>
    </div>
  )
}
export default ItemDetail