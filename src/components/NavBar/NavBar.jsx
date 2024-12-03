import CartWidget from "./CartWidget"
import { BsBox } from "react-icons/bs";

import "./navbar.css"

const NavBar = () => {


  return (
    <nav className="navbar">

      <ul className="categories">
        <li className="category">Remeras</li>
        <li className="category">Pantalones</li>
        <li className="category">Zapatillas</li>
      </ul>

      <div className="brand primary-font-color">
        <BsBox className="icon-brand" />
        <p className="title-brand ">Box Ecommerce</p>
      </div>

      <CartWidget />
    </nav>
  )
}
export default NavBar