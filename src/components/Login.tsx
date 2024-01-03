import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import { login } from '../redux/authSlice';
import logo from './app-logo.svg';
import '../css/login.css';

const Login: React.FC = () => {
  const dispatch = useDispatch();
  const [email, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | undefined>();

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:7000/login', { email, password });

      dispatch(login(response.data.username));
    } catch (error) {
      console.error('Login failed:', error);
      setError(String(error));
    }
  };

  const onChangeEmail = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setError(undefined);
    setUsername(e.target.value)
  }

  const onChangePassword = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setError(undefined);
    setPassword(e.target.value)
  }

  let errorClassName = error ? 'error' : '';

  return (
    <Box
      className='login-container'
      component="form"
      noValidate
      autoComplete="off"
    >
      <div className='app-icon'>
        <img src={logo} className="app-icon" alt="logo" />
      </div>

      <div className='login-welcome-text'>
        Welcome to the <br />
        Product Security Platform
      </div>

      <div className={`login-form ${errorClassName}`}>
        <label className="login-label">Username:</label>
        <input required type="text" className="login-input" value={email} onChange={onChangeEmail} />
        <label className="login-label">Password:</label>
        <input required type="password" className="login-input" value={password} onChange={onChangePassword} />
        <br />
        {error && <span className="login-error-message">The email or password you entered don’t match</span>}<br />
        <span className='login-recover-password'>Forgot your password?</span>

        <Button style={{ backgroundColor: '#BAA182', marginTop: '2vh', color: '#2A2118', textTransform: 'capitalize' }} className="login-button" onClick={handleLogin} variant="contained" disableElevation>
          Log In
        </Button>
      </div>
    </Box>
  );
};

export default Login;
