import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'




function App() {


  const access_key = import.meta.env.VITE_SOME_KEY


  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState("lisbon");
  const [searchInput, setSearchInput] = useState("");
  const [submitDetector, setSubmitDetector] = useState(false)
 
 

  let inputFragment = <>
  <div className="wrapper">
  <form onSubmit={handleSearch} className="search-form">
    <input
      type="text"
      value={searchInput}
      onChange={(e) => setSearchInput(e.target.value)}
      placeholder="Enter city name"
      className="search-input"
      
    />
    <button type="submit" className="search-button">
      Search
    </button>
  </form>
 
</div>

</>



const fetchWeatherData = async (cityName) => {
  setCity(cityName);
  console.log('cityName from inside function',cityName)
  try {
  const url = `http://api.weatherstack.com/current?access_key=${access_key}&query=${cityName}`;
  console.log('url', url)
  const response = await fetch(url);
  const data = await response.json();
  setWeatherData(data);
} catch (error) {
  console.log(error);
}
};

  useEffect(()=>{
   
  fetchWeatherData(city)
},[city]);


function handleSearch(e) {
  e.preventDefault();
  fetchWeatherData(searchInput);
  setSubmitDetector(true)
}





if(submitDetector == true) {
  inputFragment =     <>
  <div className="header">
    <h1 className="city">{weatherData.location.name}</h1>
    <p className="temperature"> {weatherData.current.temperature}°F</p>
    <p className="condition">{weatherData.current.weather_descriptions[0]}</p>
  </div>
  <div className="weather-details">
    <div >
      <p >Humidity</p>
      <p style={{fontWeight:"bold"}}>{weatherData.current.humidity}%</p>
    </div>
    <div>
      <p>Wind Speed</p>
      <p style={{fontWeight:"bold", marginRight:50}}>{weatherData.current.wind_speed} mph</p>
    </div>
  </div>
  <div className="forecast">
  <h2 className="forecast-header">Forecast</h2>
  <img
   src={weatherData.current.
weather_icons
}
/>
  </div>
</>
}

  
  return(
    inputFragment
    )}
  

export default App
