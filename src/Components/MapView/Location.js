import React, { Component } from 'react';


class Location extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: '0,0', 
      error: null,
    }
  }

  componentDidMount() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          this.setState({
            value: position.coords.latitude + ',' + position.coords.longitude,
            error: null,
          });
        },
        (error) => this.setState(
          {error: error.message}
        )
      );
    }
  }


  
changeLocation(evt) {
    this.setState({
        value: evt.target.value,
      }
    )
  }

  render() {
    return (
            <input
              className="new-todo"
              value={ this.state.value }
              onChange={ evt => this.changeLocation(evt) }
              />
    );
  }
}

export default Location; 