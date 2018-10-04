import React, { Component } from 'react'
import { Container, Row, Col } from 'react-grid-system';
import iconoFace from '../../img_logos/facebook-f-brands.svg';
import iconoGoogle from '../../img_logos/google-plus-g-brands.svg';

export default class AuthButton extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col sm={6}>
              < button className="buttonLogin fb" > 
              <img className="iconsAuth" src={iconoFace}/>
              FACEBOOK </button > 
            </Col>
          </Row>
          <Row>
            <Col sm={6}>
              < button className="buttonLogin google" >
              <img className="iconsAuth" src={iconoGoogle}/>
               GOOGLE </button > 
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}
