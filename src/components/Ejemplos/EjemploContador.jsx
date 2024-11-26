import { useState } from "react"
import Contador from "./Contador"

//Componente contenedor
const EjemploContador = () => {
  //hook de estado: estado o variable de estado
  const [ contador, setContador ] = useState(1)

  const aumentarContador = () => {
    setContador( contador + 1 )
  }

  return (
    <Contador contador={contador} aumentarContador={aumentarContador} />
  )
}
export default EjemploContador