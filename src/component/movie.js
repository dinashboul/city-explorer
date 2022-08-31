import React from "react";
// import axios from "axios";
import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

class Movie extends React.Component {
    render(){
    return (
            
        <Card className="card" style={{ width: "18rem"  }}>
          <Card.Img className="img" variant="top" src={this.props.item.poster_path} />
          <Card.Body>
            <Card.Title>{this.props.item.title}</Card.Title>
            <Card.Text>
              <p>Overview: {this.props.item.overview}</p>
              <p>Release Date:  {this.props.item.release_date}</p>
              <p>Average Vote: {this.props.item.vote_average}</p>
              <p>Total Votes:  {this.props.item.vote_count}</p>
              <p>Popularity:  {this.props.item.popularity}</p>
            </Card.Text>
          </Card.Body>
        </Card>
        
    );

    }
}
export default Movie;