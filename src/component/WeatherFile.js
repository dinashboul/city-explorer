import React from "react";
import axios from "axios";
// import Card from "react-bootstrap/Card";

import "bootstrap/dist/css/bootstrap.min.css";
class WeatherFile extends React.Component {
  constructor(prop) {
    super(prop);
    this.setstate = {
      Error: "",
      weather: [],
      description: "[0].description",
      datetime: "",
      flage: false,
    };
  }

  weatherreq = async () => {
    const URL = `http://localhost:3001/Forcast?name=${this.props.cityName}`;

    try {
      let result = await axios.get(URL);
      console.log(result);
      console.log(this.props.mapFlag);
      let data = result.data;

      console.log(data);

      this.setState({
        weather: data,
        description: data[0].description,
        datetime: data[0].datetime,
        flage: true,
      });
    } catch {
      this.setState({
        flage: false,
      });
      console.log(' "error": "Something went wrong."');
    }
  };

  render() {

    return (
          <div >
            <h3 onClick={this.weatherreq}>click here to see the weather</h3>
            {this.state.flage &&<div><p>description :{this.state.description}</p> 
           <p>datetime :{this.state.datetime}</p> </div>}
           

          
      </div>
    
    );
  }
}

export default WeatherFile;
