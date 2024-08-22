
import React from "react";
import './../styles/App.css';
import Weatherdisplay from "./weatherdisplay";

const App = () => {
  // let weather={
  //   temperature:25,
  //   condditions:"Sunny"
  // }
  const [weather, setWeather] = useState({ temperature: 0, conditions: '' });
  useEffect(() => {
   
    const weatherInput = { temperature: 25, conditions: 'Sunny' };
    setWeather(weatherInput);
  }, []);
  return (
    <div>

      <Weatherdisplay weather={weather}/>
        
   </div>
  )
}

export default App
