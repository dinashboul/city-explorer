import React from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';

class CityMap extends React.Component{
constructor(props){
  super(props);
  this.state={
    displayName:'',
    lat:'',
    lon:'',
    errFlag:false,
    mapFlag:false
  }

  

}

getLocation =async (event)=>{
event.preventDefault();
const cityName=event.target.city.value;
const key='pk.25b28815b31c6ac5577db6cf23d0e1f5';
const url =`https://us1.locationiq.com/v1/search?key=${key}&q=${cityName}&format=json`;

try{
  let res = await axios.get(url);
  this.setState({
    displayName:res.data[0].displayName,
    lat:res.data[0].lat,
    lon:res.data[0].lon,
    mapFlag:true 
  })
}
catch{
  console.log('err');
  this.setState({
    errFlag:true
  })

}

}
  render(){

    return(
      <div class="text-center">
          <h1> Location App</h1>
          <form onSubmit={this.getLocation}>
            <input type="text" name="city" placeholder="Enter a name of city"/>
            <button type="submit"> Get Location </button>

          </form>
          <h3> Display Name :{this.state.displayName}</h3>
          <p>LON :{this.state.lon}</p>
          <p>LAT :{this.state.lat}</p>
          {this.state.mapFlag && <img class="rounded" alt ="Map" src={`https://maps.locationiq.com/v3/staticmap?key=pk.25b28815b31c6ac5577db6cf23d0e1f5&center=${this.state.lat},${this.state.lon}`}></img>}
         {this.state.errFlag && <h4>Error :Unable to geocode</h4>}
           

      </div>

    )
  }

}
export default CityMap;