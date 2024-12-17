import { useState } from "react"

const EjemploFormulario = () => {
  const [nombre, setNombre] = useState("")
  const [email, setEmail] = useState("")

  const handleChangeName = (event) => {
    setNombre(event.target.value)
  }

  const handleChangeEmail = (event) => {
    setEmail(event.target.value)
  }

  const handleSubmitForm = (event) => {
    event.preventDefault()

    const usuario = { nombre, email }
    console.log(usuario)
  }

  return (
    <form onSubmit={handleSubmitForm} >
      <label>Nombre</label>
      <input type="text" value={nombre} onChange={handleChangeName} />

      <label>Email</label>
      <input type="email" value={email} onChange={handleChangeEmail} />

      <button type="submit" >Enviar Formulario</button>
    </form>
  )
}
export default EjemploFormulario