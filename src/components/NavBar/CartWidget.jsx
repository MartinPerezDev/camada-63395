import { PiShoppingCartBold } from "react-icons/pi";

const CartWidget = () => {
  return (
    <div className="cartwidget">
      <PiShoppingCartBold className="icon-cartwidget" />
      <p className="number-cartwidget">1</p>
    </div>
  )
}
export default CartWidget