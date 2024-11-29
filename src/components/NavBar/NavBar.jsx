import CartWidget from "./CartWidget"
import "./navbar.scss"

const NavBar = () => {

  const categories = ["Remeras", "Zapatillas", "Buzos", "Musculosas"]

  return (
    <nav className="navbar">

      <div className="brand">
        <img src="https://logos-world.net/wp-content/uploads/2020/09/Fila-Emblem.png" alt="" />
        <p>Toyota</p>
      </div>

      <ul className="categories">
        {
          categories.map( (category) => {
            return <li>{category}</li>
          })
        }
      </ul>

      <CartWidget />
    </nav>
  )
}
export default NavBar