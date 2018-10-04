import React, { Component} from 'react';
import './Login.css';
import logoApp from '../../img_logos/logoMiercoles.jpeg';
import { Container, Row, Col } from 'react-grid-system';

export default class Logo extends Component{
  render() {
    return (
      <Container className="logoContainer">
        <img className="logoImg" src={logoApp}/> 
      </Container>     
    );
  }   
}
  


