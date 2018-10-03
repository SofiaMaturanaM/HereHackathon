import React from 'react';
import './Login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Options = () => {
  return (
    <div className="container-fluid">
      {/* opcion 1 */}
      <div> 
        <FontAwesomeIcon icon="headphones" />
        <p>Dictado por voz </p> 
        <label className="switch">
          <input type="checkbox"/>
          <span className="slider round"></span>
        </label>
      </div>
      {/* opcion 1 */}
      <div>
        <FontAwesomeIcon icon="adjust" />
        <p>Color contraste</p> 
        <label className="switch">
          <input type="checkbox"/>
          <span className="slider round"></span>
        </label>
      </div>
    </div>
  );
};

export default Options;