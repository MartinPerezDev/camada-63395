import Banner from './components/Ejemplos/Banner'
import EjemploContador from './components/Ejemplos/EjemploContador'
import './App.css'

function App() {

  const saludando = () => {
    alert("saludos desde App")
  }

  return (
    <>
      <Banner saludando={saludando} saludo={"Banner 1"} urlImage={"https://cdnb.artstation.com/p/assets/images/images/045/265/153/large/world-of-gaming-sports-banner.jpg?1642330191"} />
      <Banner saludando={saludando} saludo={"Banner 2"} urlImage={"https://i.ytimg.com/vi/0JxhM7V5qwI/maxresdefault.jpg"} />

      <EjemploContador />
    </>
  )
}

export default App
