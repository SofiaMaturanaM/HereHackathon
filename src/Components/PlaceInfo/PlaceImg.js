import React from 'react';
import './PlaceInfo.css';

const PlaceImg = () => {
  return (
   <div>
     <p>Nombre del lugar</p>
     <img className="buttonBack" alt="Imagen del lugar elegido" src=""/>
     <div className="interacionBar">
       <button><img className="buttonLike" alt="boton de dar me gusta al lugar" src=""/></button>
       <button><img className="buttonLike" alt="boton de no dar no me gusta" src=""/></button>
       <button><img className="buttonLike" alt="boton de comentarios" src=""/></button>
     </div>
   </div>
  );
};

export default PlaceImg;