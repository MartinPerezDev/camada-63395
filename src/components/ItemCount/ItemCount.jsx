import { useState } from "react"
import "./itemcount.css"

const ItemCount = ({ stock, addProductInCart }) => {
  const [count, setCount] = useState(1)

  const handleClickDecrement = () => {
    if (count > 1) {
      setCount(count - 1)
    }
  }

  const handleClickIncrement = () => {
    if (count < stock) {
      setCount(count + 1)
    }
  }

  return (
    <div className="item-count">
      <div className="controls-count">
        <button onClick={handleClickDecrement} >-</button>
        <p>{count}</p>
        <button onClick={handleClickIncrement} >+</button>
      </div>
      <button className="button-add-count" onClick={() => addProductInCart(count)} >Agregar producto</button>
    </div>
  )
}
export default ItemCount