import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { PiShoppingCartBold } from "react-icons/pi";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext)

  return (
    <Link to="/cart" className="cartwidget">
      <PiShoppingCartBold className="icon-cartwidget" />
      <p className="number-cartwidget"> { totalQuantity() } </p>
    </Link>
  )
}
export default CartWidget