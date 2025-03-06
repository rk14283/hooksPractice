import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'

function App() {


  const API_KEY ="57b1fe20064b916ba73ab0d32a949dc1";

  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState("paris");

  useEffect(()=>{
    const fetchWeatherData = async (cityName) => {
      try {
      const url = `https://api.weatherstack.com/current?access_key=env.key=${cityName}`;
      const response = await fetch(url);
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.log(error);
    }
  };

  fetchWeatherData(city)
},[city]);
console.log(weatherData)
//info we need: cityName, temprature, condition(clouds), humidity, wind speed

if (weatherData == null)
{
  console.log('waiting for data')
}
else{
  console.log('cityName',weatherData.location.name)
  console.log('temprature',weatherData.current.
    temperature)
console.log('condition(clouds)',weatherData.current.weather_descriptions[0])
console.log('humidity',weatherData.current.humidity)
console.log('wind speed',weatherData.current.wind_speed)
}

{/*
console.log('cityName',weatherData.location.name)
console.log('temprature',weatherData.current.temprature)
console.log('condition(clouds)',weatherData.current.weather_descriptions[0])
console.log('humidity',weatherData.current.humidity)
console.log('wind speed',weatherData.current.windspeed)
*/
}

let weatherFragment = <div></div>
if (weatherData == null)
  {
    console.log('waiting for data')
  }
  else {
   weatherFragment = 
    <>
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
      </>
  }
  return(
   weatherFragment
    )}
  

export default App
