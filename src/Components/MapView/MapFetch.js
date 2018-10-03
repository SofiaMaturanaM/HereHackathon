import React from 'rect'

class Places extends React.Component  {
    constructor(props){
        super(props)
        this.state = {
        'at': '-35.675147,-71.5429689999999'
        }
    }
     componentWillMount() {
    fetch('https://image.maps.api.here.com/mia/1.6/mapview?app_id=Et3TmNWRG6LcVKwMUHgg_code=dY2tUsFQns7s5a0xJIXCNw')
      .then((response) => {
        return response.json()
      })
      .then((empleados) => {
        this.setState({ })
      })
  }
   render(){
       return(
        <div>
            
        </div>
       )
   }
}
export default Places

