import React, { useState } from 'react';

const LoginForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleFormSubmit = (event) => {
  event.preventDefault();

  // Validar los datos ingresados (por ejemplo, verificar que el correo sea válido)
  if (!isValidEmail(email)) {
    console.log('Email no valid');
    return;
  }

  // Realizar llamadas a una API para verificar la autenticidad del usuario
  const isAuthenticated = authenticateUser(name, email);

  if (isAuthenticated) {
    console.log('Usuario autenticado:', name);
  } else {
    console.log('Usuario no autenticado');
  }
};


  return (
    <div>
      <h2>Sign in</h2>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit">Sign in</button>
      </form>
    </div>
  );
};

export default LoginForm;
