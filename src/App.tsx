import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Button from '@mui/material/Button';

import './App.css'
import Login from './components/Login';
import { logout } from './redux/authSlice';

const App: React.FC = () => {
  const isAuthenticated = useSelector((state: any) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
      {isAuthenticated ? (
        <div className="welcome-container">
          <h1 className="welcome-message">you have successfully logged in to your account!</h1>
          <Button style={{ backgroundColor: '#BAA182', color: '#2A2118', textTransform: 'capitalize' }} className="login-button" onClick={handleLogout} variant="contained">Log out</Button>
        </div>
      ) : (
        <Login />
      )}
    </div>
  );
};

export default App;
