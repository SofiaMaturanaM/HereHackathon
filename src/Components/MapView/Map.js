import React, { Component } from 'react';



class Map extends Component {

    // For conciseness simply included all parameters in the querystring directly
  
    constructor(props) {
      super(props);
      this.state = {
        url: 'https://image.maps.api.here.com/mia/1.6/mapview?w=600&h=300&z=10&t=5&poitxs=16&poitxc=black&poifc=yellow',
        points: [],
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
    // Helper function to format list of points
  
    getPOIList() {
      if (this.state.points.length > 0) {
        let param = '&poi=';
        for (var poi in this.state.points) {
          param += poi.latitude + ',' + poi.longitude;
        }
        return param;
      }

      
  
      return '';
    }
  
    // Render method builds the URL dynamically to fetch the image from the
    // HERE Map Image API
  
    render() {
      return (
        <div>
          <input
              className="new-todo"
              value={ this.state.value }
              onChange={ evt => this.changeLocation(evt) }
              />
          <img
          src={ this.state.url
            + '&app_id=' + this.props.app_id
            + '&app_code=' + this.props.app_code
            + this.getPOIList()
            }
          alt="Here Maps"/>
        </div>
        

      );
    }
  }

  export default Map;