
import React from "react";
import './../styles/App.css';

const App = () => {
  let weather={
    temperature:25,
    condditions:"Sunny"

    
  }
  return (
    <div>
        <p style={weather.temperature> 20?{backgroundColor:'red'}:{backgroundColor:'blue'}}>Temperature: {weather.temperature}</p>
        <span > Condition: {weather.conditions}</span>
    </div>
  )
}

export default App
