import React from 'react'

function Weatherdisplay({weather}) {
    const { temperature, conditions } = weather;
    const tempStyle = {
      color: temperature > 20 ? 'red' : 'blue',
    };
  
  return (
    <div> 
        <h1>Weather Conditions</h1>
    <p style={tempStyle}>Temperature: {temperature}°C</p>
    <p>Conditions: {conditions}</p>
  </div>

  )
}

export default Weatherdisplay