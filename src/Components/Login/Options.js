import React, { Component} from 'react';
import './Login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container, Row, Col } from 'react-grid-system';

export default class Options extends Component {
  constructor(props) {
    super(props);
    this.handleToggle = this.handleToggle.bind(this);
    this.state = {
      isActive: false
    }
  }
  
  handleToggle(e){
    e.preventDefault();
    this.setState({
       isActive: !this.state.isActive  
    })
  }

  handleToggle2(e){
    e.preventDefault();
    this.setState({
       isActive2: !this.state.isActive2  
    })
  }

  render(){
    const{isActive} = this.state;
    const{isActive2} = this.state;
    return(
      <Container className="optionsContainer">
      {/* opcion 1 */}
        <Row className="option1Container"> 
          
            <FontAwesomeIcon className="iconsOptions" icon="headphones" />
            <p className="subTitle textOptions" >Dictado por voz </p> 
            <label className="switch">
              <input type="checkbox"/>
              <div ref="element" onClick={(e) => 
                this.handleToggle(e)} 
                className={`slider ${isActive ? 'slider-isActive' : '' }`}>
                <span onClick={(e) => 
                  this.handleToggle(e)} 
                  className={`bolita ${isActive ? 'bolita-isActive' : '' }`}></span>  
              </div>
            </label>
          
        </Row>
        {/* opcion 2 */}
        <Row className="option2Container" >
                
            <FontAwesomeIcon className="iconsOptions" icon="adjust" />
            <p className="subTitle textOptions">Color contraste</p> 
            <label className="switch">
              <input type="checkbox"/>
              <span onClick={(e) => 
                this.handleToggle2(e)} className={`slider ${isActive2 ? 'slider-isActive' : '' }`}>
                <span onClick={(e) => 
                  this.handleToggle2(e)} 
                  className={`bolita ${isActive2 ? 'bolita-isActive' : '' }`}></span>
              </span>
            </label>
          
        </Row>
      </Container> 
    )
  }
}