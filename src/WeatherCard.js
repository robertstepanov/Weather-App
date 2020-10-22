import React from 'react';

const WeatherCard = (props) => {
  return (
    <div>
      <h2>Description: {props.main}</h2>
      <img src={props.icon} alt='weather'></img>
      <h2>Temperature: {props.temp}&#176;F</h2>
      <h2>
        Location: {props.location}, {props.region}
      </h2>
      {/* <img src="http://cdn.weatherapi.com/weather/64x64/day/116.png" alt="weather"></img> */}
    </div>
  );
};

export default WeatherCard;
