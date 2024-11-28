import { useEffect } from "react"
import "./banner.css"

const Banner = () => {

  useEffect(()=>{

    const mostraAnchoVentana = () => {
      console.log("Ancho: ", window.innerWidth)
    }

    window.addEventListener("resize", mostraAnchoVentana)

    //cleanup effect
    return () => {
      window.removeEventListener("resize", mostraAnchoVentana)
    }
  }, [])

  return (
    <div className="banner" >
      <img src="https://cdnb.artstation.com/p/assets/images/images/045/265/153/large/world-of-gaming-sports-banner.jpg?1642330191" alt="" />
    </div>
  )
}
export default Banner