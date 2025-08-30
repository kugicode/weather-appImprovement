import './App.css';
import { useState } from 'react';
import axios from 'axios';
import WeatherDisplay from './components/WeatherDisplay';

function App() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  async function fetchWeatherData() {
    try {
      setIsLoading(true);
      setErrorMessage('');
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=My api key :)`;
      const { data } = await axios.get(apiUrl);
      setTimeout(() => {
      setIsLoading(false)
      console.log(data);
      setWeatherData(data);
      }, 2000)
    } catch (error) {
      setIsLoading(false);
      setErrorMessage("City not found!");
      console.error('An error has occured! ', error);
    }
  }

  return (
    <div id='weather-box'>
      <h1>Weather App</h1>
      <div className="search-container">
      <input id='input-box'
        type="text"
        value={city}
        onChange={(event) => {
          setCity(event.target.value);
        }}
      ></input>
      <button id='butn' onClick={fetchWeatherData}>Search</button>
      </div>
      {errorMessage.length > 0 ? (<h4 style={{color: "red"}}>{errorMessage}</h4>)
    : isLoading ? (<h1>Loading...</h1>) :
      (
      <WeatherDisplay weatherData={weatherData} />  
    )}
 
    </div>
    
  );
}

export default App;