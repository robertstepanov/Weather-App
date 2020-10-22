import React, { useState, useEffect } from 'react';
import axios from 'axios';
import WeatherCard from './WeatherCard';

export default function Weather() {
  // const dotenv = require('dotenv').config();
  const [current, setCurrent] = useState(Object);
  const [condition, setCondition] = useState(Object);
  const [location, setLocation] = useState(Object);
  const [forecast, setForecast] = useState(Object);

  const api_key = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    axios
      // .get(` http://api.weatherapi.com/v1/forecast.json?key=9f2df0ada34c43e9be7184628202210&q=33710&days=7`)
      .get(
        ` http://api.weatherapi.com/v1/forecast.json?key=${api_key}&q=33710&days=7`
      )
      .then((response) => {
        console.log(response.data);
        setCurrent(response.data.current);
        setCondition(response.data.current.condition);
        setLocation(response.data.location);
      })
      .catch((error) => {
        console.log('Could not get weather');
      });
  }, [api_key]);

  return (
    <div>
      <WeatherCard
        main={condition.text}
        icon={condition.icon}
        temp={Math.round(current.temp_f)} 
        location={location.name}
        region={location.region}
      />
    </div>
  );
}
