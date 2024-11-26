import "./banner.css"

const Banner = ({ urlImage, saludo, saludando }) => {

  return (
    <div className="banner" onClick={saludando} >
      <h2>{saludo}</h2>
      <img src={urlImage} alt="" />
    </div>
  )
}
export default Banner