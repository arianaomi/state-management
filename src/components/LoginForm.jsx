import React, {useState } from 'react'

export default function LoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleEmailChange = (e) =>  setEmail(e.target.value)
  

  const handlePasswordChange = ({target: {value}}) => setPassword(value)
  

  const handleFormSubmit = (e) => {
    e.preventDefault()
    alert(`usuario: ${email}`)
  }

  return (
    <div className="App">
     <form onSubmit={handleFormSubmit}>
      <h2> Iniciar sesion</h2>
      <label>Correo
        <input type='email' value={email} onChange={handleEmailChange}/>
      </label>
      <label>Contraseña
        <input type='password' value={password} onChange={handlePasswordChange}/>
      </label>
      <button type='submit'>
        Enter
      </button>
     </form>
    </div>
  );
}

