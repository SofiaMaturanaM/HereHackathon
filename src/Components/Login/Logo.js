import React from 'react';
import './Login.css';
import logoApp from '../../img_logos/logoTest.jpg';

const Logo = () => {
  return (
    <div>
      <img className="logoImg" alt="logo de la aplicacion" src={logoApp} />
    </div>
  );
};

export default Logo;