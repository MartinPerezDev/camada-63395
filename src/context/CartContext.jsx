import { createContext, useState, useEffect } from "react";

const CartContext = createContext()

const CartProvider = ({ children }) => {
  const cartLocalStorage = JSON.parse(localStorage.getItem("cart-ecommerce"))
  const [cart, setCart] = useState( cartLocalStorage ? cartLocalStorage : [] )

  useEffect(()=> {
    localStorage.setItem("cart-ecommerce", JSON.stringify(cart))
  }, [cart])

  const addProduct = (newProduct) => {
    const index = cart.findIndex( (productCart) => productCart.id === newProduct.id )

    if(index === -1){
      //agregar el producto como nuevo
      setCart( [ ...cart, newProduct ] )
    }else{
      //modificar solamente la cantidad del producto
      const newCart = [...cart]
      newCart[index].quantity = newCart[index].quantity + newProduct.quantity
      setCart(newCart)
    }

  }

  const totalQuantity = () => {
    const quantity = cart.reduce( (total, productCart) => total + productCart.quantity , 0 )
    return quantity
  }

  const totalPrice = () => {
    const price = cart.reduce( (total, productCart) => total + ( productCart.quantity * productCart.price ) , 0 )
    return price
  }

  const deleteProductById = (idProduct) => {
    const filterProducts = cart.filter( (productCart) => productCart.id !== idProduct )
    setCart(filterProducts)
  }

  const deleteCart = () => {
    setCart([])
  }

  return(
    <CartContext.Provider value={ { cart, addProduct, totalQuantity, totalPrice, deleteProductById, deleteCart } } >
      {children}
    </CartContext.Provider>
  )
}

export { CartContext, CartProvider }