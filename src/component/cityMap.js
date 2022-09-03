import React from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import WeatherFile from "./WeatherFile";
import Mdtaa from "./mdata"

class CityMap extends React.Component{
constructor(props){
  super(props);
  this.state={
    cityName:'',
    lat:'',
    lon:'',
    errFlag:false,
    mapFlag:false, 
    movieData:[],
    weather: [],
    description: "[0].description",
    datetime: "",
   
  }

  

}

getLocation =async (event)=>{
event.preventDefault();
const Input = event.target.cityName.value;
const key='pk.25b28815b31c6ac5577db6cf23d0e1f5';
const url =`https://us1.locationiq.com/v1/search?key=${key}&q=${Input}&format=json`;
const res = await axios.get(url);


try{
  this.getMovieData(Input);
  this.weatherreq(Input);
  this.setState({
    cityName:res.data[0].display_name,
    lat:res.data[0].lat,
    lon:res.data[0].lon,
    mapFlag:true ,
   
  
  })
}
catch{
  console.log('err');
  this.setState({
    errFlag:true,
    cityName :"",
    lon:"",
    lat:"",
    mapFlag:false,
    weather:[],

  })
  

}  
}

weatherreq = async (Input) => {
  const URL = `http://localhost:3001/Forcast?name=${Input}`;

  try {
     const weatherData = await axios.get(URL);
    this.setState({
      
      weather: weatherData.data,
     
    })}
    catch {
    this.setState({
      weather: []
      })}
     
}


     
getMovieData = async (data) => {
  const Movie_URL = `http://localhost:3001/movie?cityName=${data}`;
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
          <h3> Display Name :{this.state.cityName}</h3>
          <p>LON :{this.state.lon}</p>
          <p>LAT :{this.state.lat}</p>
        
          {this.state.mapFlag && <img class="rounded" alt ="Map" src={`https://maps.locationiq.com/v3/staticmap?key=pk.25b28815b31c6ac5577db6cf23d0e1f5&center=${this.state.lat},${this.state.lon}`}></img>}
         {this.state.errFlag && <h4>Error :Unable to geocode</h4>}
         <WeatherFile weather={this.state.weather}/>
        <Mdtaa  movieData={this.state.movieData}/>
      </div>

    )
  }

}
export default CityMap;