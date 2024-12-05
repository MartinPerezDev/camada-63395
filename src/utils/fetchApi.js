const getProducts = () => {
  return fetch("http://localhost:8080/api/productos")
    .then((response) => response.json())
    .catch((error) => console.log(error))
}

const addProduct = (newProduct) => {
  return fetch("http://localhost:8080/api/productos", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newProduct)
  })
    .then((response) => response.json())
    .catch((error) => console.log(error))
}

const modProductById = (idProduct, mod) => {
  return fetch(`http://localhost:8080/api/productos/${idProduct}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(mod)
  })
    .then((response) => response.json())
    .catch((error) => console.log(error))
}

const deleteProductById = (idProduct) => {
  return fetch(`http://localhost:8080/api/productos/${idProduct}`, {
    method: "DELETE"
  })
    .then((response) => response.json())
    .catch((error) => console.log(error))
}

export { getProducts, addProduct, modProductById, deleteProductById }