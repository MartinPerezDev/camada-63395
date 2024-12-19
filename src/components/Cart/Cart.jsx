import { useContext } from "react"
import { CartContext } from "../../context/CartContext"

const Cart = () => {
  const { cart, totalPrice } = useContext(CartContext)

  return (
    <div>
      <ul>
        {
          cart.map((productCart) => (
          <li key={productCart.id} style={{ display: "flex", justifyContent: "space-around", margin: "20px 0" }} >
            <img src={productCart.image} width={100} />
            <p>{productCart.name}</p>
            <p>cantidad: {productCart.quantity}</p>
            <p>precio c/u: {productCart.price}</p>
          </li>
        ))
        }
      </ul>

      <h3>Precio total: {totalPrice()}</h3>
    </div>
  )
}
export default Cart