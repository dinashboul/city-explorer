import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Movie from "./movie"

class Mdtaa extends React.Component {
    render() {
        return (
          <>
            {this.props.movieData.map((item) => {
              return (
                <Movie item={item}/>
              );
            })}
          </>
        );
      }
}

export default Mdtaa;
