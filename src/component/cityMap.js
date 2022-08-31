import React from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import WeatherFile from "./WeatherFile";
import Movie from "./movie"

class CityMap extends React.Component{
constructor(props){
  super(props);
  this.state={
    displayName:'',
    lat:'',
    lon:'',
    errFlag:false,
    mapFlag:false,
    cityName:'',
    movieData:[],
    weather: [],
   
  }

  

}

getLocation =async (event)=>{
event.preventDefault();
const Input = event.target.cityName.value;
const key='pk.25b28815b31c6ac5577db6cf23d0e1f5';
const url =`https://us1.locationiq.com/v1/search?key=${key}&q=${Input}&format=json`;
const res = await axios.get(url);

// this.setState({
//    cityName:event.target.cityName.value,
// })



try{
  
  this.setState({
    cityName:res.data[0].cityName,
    lat:res.data[0].lat,
    lon:res.data[0].lon,
    mapFlag:true ,
    weather:[],

  })
}
catch{
  console.log('err');
  this.setState({
    errFlag:true
  })
  

}  
  
}
     
getMovieData = async (data) => {
  const Movie_URL = `https://api.themoviedb.org/3/movie/550?api_key=23da52b93bbc12a21c92af0739a14122?cityName=${data}`;
  try
  {
    const movierData = await axios.get(Movie_URL);
    this.setState({
      movieData: movierData.data,
    })
  }
  catch {
    this.setState({
      movieData: []
    })
  }
}
  
  render(){

    return(
      <div class="text-center">
          <h1> Location App</h1>
          <form onSubmit={this.getLocation}>
            <input type="text" name="cityName" placeholder="Enter a name of city"/>
            <button type="submit"> Get Location </button>

          </form>
          <h3> Display Name :{this.state.displayName}</h3>
          <p>LON :{this.state.lon}</p>
          <p>LAT :{this.state.lat}</p>
          {/* <WeatherFile cityName={this.state.cityName}
          /> */}
          <Movie movieData={this.state.movieData}/>
          {this.state.mapFlag && <img class="rounded" alt ="Map" src={`https://maps.locationiq.com/v3/staticmap?key=pk.25b28815b31c6ac5577db6cf23d0e1f5&center=${this.state.lat},${this.state.lon}`}></img>}
         {this.state.errFlag && <h4>Error :Unable to geocode</h4>}
           

      </div>

    )
  }

}
export default CityMap;