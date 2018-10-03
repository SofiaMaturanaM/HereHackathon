import React from 'react';
import './Login.css';
import Logo from './Logo';
// import Auth from './Auth';
import Options from './Options';

const Login = () => {
  return (
    <div className="loginMainContainer">
      <Logo />
      <Options/>
     
    </div>
  );
};

export default Login;