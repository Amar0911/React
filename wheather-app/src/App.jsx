import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import WeatherCard from './components/WeatherCard'
import cities from './data/cities.json'



// function square(num){
//   return num * num
// }

// const arr = [1, 2, 3, 4, 5]

// const squaredArry = arr.map(square)  // map return in new array
// console.log(squaredArry)




function App() {

  const [weatherData, setWeatherData] = useState([]);



  const apiKey = "4cbac1e834ba2abc24a9e2a8e8d8e30e";
  const api = "https://api.openweathermap.org/data/2.5/weather";
  
  const fetchWeather = async(city) => {
    try {
      const response = await fetch(`${api}?q=${city}&appid=${apiKey}&units=metric`)
      if (!response.ok) 
        throw new Error("City not found");
      const data = await response.json();

      return {
        city: data.name,
        temperature: data.main.temp,
        weather: data.main.weather,
      };

    } catch (error) {
      console.error(error.message);
      return null;
    }
  };

  useEffect(() => {
    const fetchAllCities = async() => {
      const Promises = cities.map((city) => fetchWeather(city.city));
      const result = await Promise.all(Promises)
      setWeatherData(result.filter((data) => data))
    }
    fetchAllCities();
  
    
  }, []);
  

  return (
    <>
      
      {weatherData.map((city, index) => (
        <WeatherCard 
        key={index} 
        city={city.city} 
        temperature={city.temperature} 
        weather={city.weather}/>
    ))}
    </>
  )
}

export default App
