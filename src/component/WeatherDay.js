import React from "react";
import Card from "react-bootstrap/Card";


class WeatherDay extends React.Component {
  // console.log(this.props.weather)

  render() {
    return (
        <div className="output-data">
          <Card style={{ width: "700px", height: "fit-content" ,display:"inline-block" }}>
            <Card.Body>
              <Card.Text>
                <p>
                  <span>Date: </span>{this.props.item.datetime}
                </p>
                <p>
                  <span>Description: </span>  {this.props.item.description} 
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      )
    }
}

export default WeatherDay;