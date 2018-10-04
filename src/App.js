import React, { Component } from 'react';
import Login from './Components/Login/Login';
import MapView from './Components/MapView/MapView';
import PlaceInfo from './Components/PlaceInfo/PlaceInfo';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeadphones } from '@fortawesome/free-solid-svg-icons';
import { faAdjust } from '@fortawesome/free-solid-svg-icons';


library.add(faHeadphones, faAdjust);

class App extends Component {
  render() {
    return (
      <div>
        <Login /> 
        {/* <MapView /> */}
        {/* <PlaceInfo />  */}
      </div>
    );
  }
}

export default App;
