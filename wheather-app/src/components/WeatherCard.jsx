import React from "react";



export const WeatherCard = ({city,temperature,weather}) => {
  return (
    <>
       <div className="weather">
       <h1>City: {city}</h1>
       <p>Teamperature: {temperature}</p>
       <p>Weather: {weather}</p>
       </div>
    </>
  )
}
export default WeatherCard