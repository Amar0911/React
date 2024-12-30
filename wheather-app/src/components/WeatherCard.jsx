import React from "react";



export const WeatherCard = ({city,temperature,weather}) => {
  return (
    <>
       
       <h1>City: {city}</h1>
       <p>Teamperature: {temperature}</p>
       <p>Weather: {weather}</p>
    </>
  )
}
export default WeatherCard