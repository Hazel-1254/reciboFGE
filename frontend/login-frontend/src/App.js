import React, { useState } from 'react';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    
    // Envía datos al backend (Java)
    const response = await fetch('http://localhost:8080/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    });

    if (response.ok) {
      setIsLoggedIn(true);
    } else {
      alert('Login fallido');
    }
  };

  if (isLoggedIn) {
    return <h1>Bienvenido, {username}!</h1>;
  }

  return (
    <div style={{ marginTop: '100px', textAlign: 'center' }}>
      <h2>Iniciar sesión</h2>
      <form onSubmit={handleLogin}>
        <input 
          type="text" 
          placeholder="Usuario" 
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        /><br /><br />
        <input 
          type="password" 
          placeholder="Contraseña" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        /><br /><br />
        <button type="submit">Ingresar</button>
      </form>
    </div>
  );
}

export default App;
