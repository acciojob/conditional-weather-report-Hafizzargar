// WeatherDisplay.js
import React from 'react';

const WeatherDisplay = (props) => {
    let { weather }=props;
  const temperatureStyle = {
    color: weather.temperature > 20 ? 'red' : 'blue',
  };

  return (
    <div className="weather-display">
      <p style={temperatureStyle}>Temperature: {weather.temperature}</p>
      <p>Conditions: {weather.conditions}</p>
    </div>
  );
};

export default WeatherDisplay;
