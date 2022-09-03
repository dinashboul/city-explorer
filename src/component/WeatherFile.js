import React from "react";

import WeatherDay from "./WeatherDay";
import "bootstrap/dist/css/bootstrap.min.css";
class WeatherFile extends React.Component {
  render() {
    return (
        <div>
        {this.props.weather.map(item => {
        return (
          <WeatherDay item={item}/>
        )
      })
    }
    <br></br>
    </div>
  );
  }
}

export default WeatherFile;
