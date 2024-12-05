const Item = ({ product }) => {
  return (
    <div className="item">
      <img src={product.imagen} className="img-item" alt="" width={100} />
      <p className="text-item">{product.nombre}</p>
      <p className="text-item">${product.precio}</p>
    </div>
  )
}
export default Item