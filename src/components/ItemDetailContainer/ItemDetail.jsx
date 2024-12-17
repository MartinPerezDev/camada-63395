import { useState } from "react"
import "./itemdetail.css"

const ItemDetail = ({ product }) => {
  const [currentImage, setCurrentImage] = useState(product.image[0])

  const images = product.image.filter( (image) => image !== currentImage )

  return (
    <div className="item-detail">
      <div className="images-detail-container">
        <div className="secondary-images">
          {
            images.map((image)=>(
              <img src={image} key={image} onClick={ () => setCurrentImage(image) } />
            ))
          }
        </div>
        <div className="main-image">
          <img src={currentImage} alt="" />
        </div>
      </div>

      <div className="text-detail-container">
        <h2 className="title-detail">{product.name}</h2>
        <p className="text-detail">{product.description}</p>
        <p className="text-detail">Precio: ${product.price}</p>
      </div>
    </div>
  )
}
export default ItemDetail