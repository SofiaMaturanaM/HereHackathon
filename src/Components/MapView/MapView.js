import React from 'react';
import Footer from './Footer';
import Header from './Header';
import Map from './Map';
import Location from './Location';
import './MapView.css';

const MapView = () => {
  return (
   <div>
     <Header />
     <Map app_id="WbEPKWFEnfQM0IXSYfVc" app_code="vUFJOVT93XZ1xyAq4jcwzQ" />
     <Footer />
   </div>
  );
};

export default MapView;