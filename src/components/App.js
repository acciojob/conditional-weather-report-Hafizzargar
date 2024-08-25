
import './../styles/App.css';
import WeatherDisplay from './weatherDisplay';

import React ,{useState, useEffect} from 'react';

const App = () => {
  const [weather, setWeather] = useState({ temperature: 0, conditions: '' });

  useEffect(() => {
    // Simulate fetching weather data
    const weatherData = { temperature: 25, conditions: 'Sunny' };
    setWeather(weatherData);
  }, []);

  return (
    <div className="app">
      <WeatherDisplay weather={weather} />
    </div>
  );
};

export default App

