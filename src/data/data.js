const products = [
  {
    id: "Grt223",
    name: "Remera Extreme",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non aut repellat cupiditate praesentium incidunt ipsum nostrum. Vitae tenetur libero iure! Culpa sapiente assumenda veniam aperiam fugiat excepturi! Facere, sequi illum.",
    price: 400,
    stock: 10,
    image: ["/img/remera-h.jpg", "/img/remera-h-2.jpg", "/img/remera-h-3.jpg", "/img/remera-h-4.jpg"],
    category: "remeras"
  },
  {
    id: "Grt224",
    name: "Remera Fitz Roy",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non aut repellat cupiditate praesentium incidunt ipsum nostrum. Vitae tenetur libero iure! Culpa sapiente assumenda veniam aperiam fugiat excepturi! Facere, sequi illum.",
    price: 420,
    stock: 4,
    image: ["/img/remera-m.jpg", "/img/remera-m-2.jpg", "/img/remera-m-3.jpg", "/img/remera-m-4.jpg"],
    category: "remeras"
  },
  {
    id: "Hff556",
    name: "Pantalon Dorian",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non aut repellat cupiditate praesentium incidunt ipsum nostrum. Vitae tenetur libero iure! Culpa sapiente assumenda veniam aperiam fugiat excepturi! Facere, sequi illum.",
    price: 720,
    stock: 5,
    image: ["/img/pantalon-h.jpg", "/img/pantalon-h-2.jpg", "/img/pantalon-h-3.jpg", "/img/pantalon-h-4.jpg"],
    category: "pantalones"
  },
  {
    id: "Hff557",
    name: "Pantalon Ambar",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non aut repellat cupiditate praesentium incidunt ipsum nostrum. Vitae tenetur libero iure! Culpa sapiente assumenda veniam aperiam fugiat excepturi! Facere, sequi illum.",
    price: 620,
    stock: 17,
    image: ["/img/pantalon-m.jpg", "/img/pantalon-m-2.jpg", "/img/pantalon-m-3.jpg", "/img/pantalon-m-4.jpg"],
    category: "pantalones"
  },
  {
    id: "Wre442",
    name: "Zapatillas Cloudfield",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non aut repellat cupiditate praesentium incidunt ipsum nostrum. Vitae tenetur libero iure! Culpa sapiente assumenda veniam aperiam fugiat excepturi! Facere, sequi illum.",
    price: 800,
    stock: 2,
    image: ["/img/zapatillas-m.jpg", "/img/zapatillas-m-2.jpg", "/img/zapatillas-m-3.jpg", "/img/zapatillas-m-4.jpg"],
    category: "zapatillas"
  },
  {
    id: "Wre443",
    name: "Zapatillas Space",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non aut repellat cupiditate praesentium incidunt ipsum nostrum. Vitae tenetur libero iure! Culpa sapiente assumenda veniam aperiam fugiat excepturi! Facere, sequi illum.",
    price: 820,
    stock: 6,
    image: ["/img/zapatillas-h.jpg", "/img/zapatillas-h-2.jpg", "/img/zapatillas-h-3.jpg", "/img/zapatillas-h-4.jpg"],
    category: "zapatillas"
  },
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