const FormCheckout = ({ dataForm, handleChangeInput, handleSubmitForm }) => {
  return (
    <form onSubmit={handleSubmitForm} >
      <label>Nombre completo</label>
      <input type="text" value={dataForm.fullname} name="fullname" onChange={handleChangeInput} />

      <label>Telefono</label>
      <input type="number" value={dataForm.phone} name="phone" onChange={handleChangeInput} ></input>

      <label>Email</label>
      <input type="email" value={dataForm.email} name="email" onChange={handleChangeInput} ></input>

      <button type="submit">Enviar orden</button>
    </form>
  )
}
export default FormCheckout