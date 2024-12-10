import { useState } from "react"
import useProducts from "../hooks/useProducts"

const hocFilterProducts = (Component) => {


  return function () {
    const { products, loading } = useProducts()
    const [query, setQuery] = useState("")

    const changeInput = (event) => {
      setQuery( event.target.value.toLowerCase() )
    }

    const search = () => {
      const filterProducts = products.filter( (product) => {
        return product.name.toLowerCase().includes(query)
      })

      return filterProducts
    }

    return(
      <>
        <div>
          <input type="text" placeholder="buscar..." onChange={changeInput} />          
        </div>
        <Component products={ search() } />
      </>
    )
  }

}

export default hocFilterProducts