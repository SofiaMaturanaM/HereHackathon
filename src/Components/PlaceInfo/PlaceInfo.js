import React from 'react';
import './PlaceInfo.css';
import HeaderPlace from './HeaderPlace';
import PlaceImg from './PlaceImg';
import PlaceText from './PlaceText';

const PlaceInfo = () => {
  return (
   <div>
     <HeaderPlace />
     <PlaceImg />
     <PlaceText />
   </div>
  );
};

export default PlaceInfo;