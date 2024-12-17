import { useState, useEffect } from "react"

const EjemploContadorEventListener = () => {
  const [contador, setContador] = useState(1)

  const handleClickButton = () => {
    setContador( (prevContador) => prevContador + 1 )
  }

  useEffect( () => {
    const botonSumar = document.getElementById("botonSumar")

    botonSumar.addEventListener("click", handleClickButton)

    //cleanup effect
    return () => {
      botonSumar.removeEventListener("click", handleClickButton)
    }
  }, [] )

  return (
    <div>
      <p>{contador}</p>
      <button id="botonSumar">+</button>
    </div>
  )
}
export default EjemploContadorEventListener