const products = [
  {
    id: "Afttt2112",
    name: "Remera Verde",
    description: "",
    image: "https://th.bing.com/th/id/OIP.WjjrgzWqkRPuE-b15zdhUQHaHZ?rs=1&pid=ImgDetMain",
    price: 500,
    stock: 10,
    category: "remera"
  },
  {
    id: "Rttt22131",
    name: "Pantalon Adidas",
    description: "",
    image: "https://th.bing.com/th/id/OIP.CBA78ZqCA0W97KBBULjEbAAAAA?rs=1&pid=ImgDetMain",
    price: 300,
    stock: 4,
    category: "pantalon"
  },
  {
    id: "Ghh23323",
    name: "Zapatillas Nike",
    description: "",
    image: "https://th.bing.com/th/id/OIP.OlrL677E_4UMv0P-HEKw_wHaE7?rs=1&pid=ImgDetMain",
    price: 600,
    stock: 2,
    category: "zapatilla"
  }
]

const getProducts = () => {
  return new Promise( (resolve, reject) => {
    //simulamos un retraso de red de 2segundos
    setTimeout(()=>{
      resolve(products)
    }, 2000)
  })
}

export { getProducts }