import CartWidget from "./CartWidget"
import { BsBox } from "react-icons/bs";
import { NavLink, Link, useNavigate } from "react-router-dom";

import "./navbar.css"

const NavBar = () => {

  const navigate = useNavigate()

  return (
    <nav className="navbar">

      <button onClick={ () => navigate(-1) } >Ir hacia atras</button>

      <ul className="categories">
        <NavLink to="/category/remeras" className={ ( { isActive } ) => isActive ? "category-active" : "category" } >Remeras</NavLink>
        <NavLink to="/category/pantalones" className={ ( { isActive } ) => isActive ? "category-active" : "category" }>Pantalones</NavLink>
        <NavLink to="/category/zapatillas" className={ ( { isActive } ) => isActive ? "category-active" : "category" }>Zapatillas</NavLink>
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