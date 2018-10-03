import React from 'react';
import Footer from './Footer';
import Header from './Header';
import Map from './Map';
import './MapView.css';

const MapView = () => {
  return (
   <div>
     <Header />
     <Map />
     <Footer />
   </div>
  );
};

export default MapView;