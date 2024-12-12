import CartWidget from "./CartWidget"
import { BsBox } from "react-icons/bs";
import { Link } from "react-router-dom";

import "./navbar.css"

const NavBar = () => {


  return (
    <nav className="navbar">

      <ul className="categories">
        <Link to="/category/remeras" className="category">Remeras</Link>
        <Link to="/category/pantalones" className="category">Pantalones</Link>
        <Link to="/category/zapatillas" className="category">Zapatillas</Link>
      </ul>

      <Link to="/" className="brand primary-font-color">
        <BsBox className="icon-brand" />
        <p className="title-brand ">Box Ecommerce</p>
      </Link>

      <CartWidget />
    </nav>
  )
}
export default NavBar