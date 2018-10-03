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
     <Map app_id="Et3TmNWRG6LcVKwMUHgg" app_code="dY2tUsFQns7s5a0xJIXCNw" />
     <Footer />
   </div>
  );
};

export default MapView;