import React, { Component } from 'react';
import Login from './Components/Login/Login';
import MapView from './Components/MapView/MapView';
import PlaceInfo from './Components/PlaceInfo/PlaceInfo';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Login />
        <MapView />
        <PlaceInfo />
      </div>
    );
  }
}

export default App;
