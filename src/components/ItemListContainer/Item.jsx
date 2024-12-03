const Item = ({ product }) => {
  return (
    <div className="item">
      <img src={product.image} width={100} alt="" />
      <p>{product.name}</p>
      <p>Precio: {product.price}</p>
    </div>
  )
}
export default Item