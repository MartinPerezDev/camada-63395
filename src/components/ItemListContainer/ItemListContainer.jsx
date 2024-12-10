import hocFilterProducts from "../../hoc/hocFilterProducts"
import ItemList from "./ItemList.jsx"
import "./itemlistcontainer.css"

const ItemListContainer = ({ greeting, products }) => {

  return (
    <div className="itemlistcontainer">
      <h1>{greeting}</h1>
      <ItemList products={products} />
    </div>
  )
}
//export default ItemListContainer

const ItemListContainerWithHoc = hocFilterProducts(ItemListContainer)

export default ItemListContainerWithHoc