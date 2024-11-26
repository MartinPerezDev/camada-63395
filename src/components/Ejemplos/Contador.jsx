//Componente de presentacion

const Contador = ({ contador, aumentarContador }) => {
  return (
    <div>
      <p>Contador: {contador}</p>
      <button onClick={aumentarContador} >+</button>
    </div>
  )
}
export default Contador