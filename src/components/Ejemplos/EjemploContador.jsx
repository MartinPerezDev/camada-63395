import { useState, useEffect } from "react"
import Banner from "./Banner"
import Contador from "./Contador"

//Componente contenedor
const EjemploContador = () => {
  //hook de estado: estado o variable de estado
  const [contador, setContador] = useState(1)
  const [toggle, setToggle] = useState(true)

  //se ejecuta solo al montar el componente
  //ej: llamadas a api, suscripciones a eventListener
  useEffect( () => {
    console.log("1er useEffect")
  }, [] )

  //se ejecuta en el montaje y cada vez que contador se actualice
  //ej: para realizar acciones especificas cuando una variable dependiente cambie
  useEffect( () => {
    console.log("2do useEffect")
  }, [contador] )

  //se ejecuta en el montaje y cada vez que se actualice cualquier estado de mi componente
  //ej: operaciones globales de monitoreo o registo
  useEffect(()=> {
    console.log("3er useEffect")
  })

  const aumentarContador = () => {
    setContador(contador + 1)
  }

  const alternarToggle = () => {
    setToggle(!toggle)
  }

  return (
    <>
      <Contador contador={contador} aumentarContador={aumentarContador} />
      <div>
        <p>Toggle: {toggle.toString()}</p>
        <button onClick={alternarToggle} >Alternar valor</button>
        {
          toggle === true && <Banner />
        }
      </div>
    </>
  )
}
export default EjemploContador