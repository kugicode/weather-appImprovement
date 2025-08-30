
function WeatherDisplay({ weatherData }){
    return (
        <>
    {weatherData.name ? (
          <div>
            <p>City: {weatherData.name}</p>
            <p>Temp: {Math.round(weatherData.main.temp)} °C</p>
          </div>
         ): null}
         </>
    )

}

export default WeatherDisplay