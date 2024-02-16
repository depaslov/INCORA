import React, { useState } from 'react';
import './Login.css'
import Header from '../Header/Header';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Perform login logic here (not implemented in this example)
    console.log('Logging in with username:', username, 'and password:', password);
  };

  return (
    <div>

    <div className='Login'>
      <h2>Login</h2>
      <form className='Logins' onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
    </div>
  );
};

export default Login;
