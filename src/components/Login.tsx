import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../redux/authSlice';
import axios from 'axios';

const Login: React.FC = () => {
  const dispatch = useDispatch();
  const [email, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      // Replace 'your_backend_url' with the actual URL of your login endpoint
      const response = await axios.post('http://localhost:7000/login', { email, password });

      // Simulate successful login
      dispatch(login(response.data.username));
    } catch (error) {
      console.error('Login failed:', error);
      // Handle login failure, e.g., show an error message
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <label>
        Username:
        <input type="text" value={email} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <br />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
