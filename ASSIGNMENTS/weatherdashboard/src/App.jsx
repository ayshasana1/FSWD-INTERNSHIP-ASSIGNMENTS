/* import React, { useState } from "react";

function App(){

  const[city, setCity]=useState("");
  const[weather, setWeather]=useState(null);
  const[loading, setLoading]=useState(false);
  const[error, setError]=useState("");

  const getWeather = async()=>{
    if(!city){
      setError("Please Enter a City");
      return;
    }

    setLoading(true);
    setError("");
    setWeather(null);

    try{
      const response = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=12.97&logitude=77.59&current_weather=true`
      );

      if(!response.ok){
        throw new Error("Failed to Fetch Weather");
      }

      const data = await response.json();
      setWeather(data.current_weather);
    }catch(err){
      setError("Error Fetching Weather Data");
    }

    setLoading(false);
  };

  return(
    <div style={{textAlign:"center", marginTop:"50px"}}>
      <h1>Weather Dashboard</h1>

      <input 
      type="text" 
      placeholder="Enter City"
      value={city}
      onChange={(e)=>setCity(e.target.value)}
      />

      <button onClick={getWeather}>Get Weather</button>

      {loading && <p>Loading weather...</p>}

      {error && <p style={{color:"red"}}>{error}</p>}

      {weather && (
        <div>
          <h3>Temperature: {weather.temperature}</h3>
          <p>Wind Speed: {weather.windspeed}</p>
        </div>
      )}

    </div>
  );
}

export default App;
 */



/* 
import React, { useState } from "react";

function App(){

  const[city, setCity]=useState("");
  const[weather, setWeather]=useState(null);
  const[loading, setLoading]=useState(false);
  const[error, setError]=useState("");

  const getWeather = async()=>{
  
    setLoading(true);
    setError("");
    setWeather(null);

    try{
      const response = await fetch(
        "https://goweather.herokuapp.com/weather/${city}"
      );

      const data = await response.json();
      
      setWeather(data);
    }catch(err){
      setError("Error Fetching Weather Data");
    }

    setLoading(false);
  };

  return(
    <div style={{textAlign:"center", marginTop:"50px"}}>
      <h1>Weather Dashboard</h1>

      <input 
      type="text" 
      placeholder="Enter City"
      value={city}
      onChange={(e)=>setCity(e.target.value)}
      />

      <button onClick={getWeather}>Get Weather</button>

      {loading && <p>Loading weather...</p>}

      {error && <p style={{color:"red"}}>{error}</p>}

      {weather && (
        <div>
          <h3>Temperature: {weather.temperature}</h3>
          <p>Wind: {weather.wind}</p>
          <p>Description: {weather.description}</p>
        </div>
      )}

    </div>
  );
}

export default App;
 */




import { useState } from "react";

function App(){

  const[city, setCity]=useState("");
  const[weather, setWeather]=useState(null);
  const[loading, setLoading]=useState(false);
  const[error, setError]=useState("");

  const getWeather = async()=>{
  
    if(!city){
      setError("Please Enter a City");
      return;
    }

    setLoading(true);
    setError("");
    setWeather(null);

    try{
      const response = await fetch(
        `https://wttr.in/${city}?format=j1`
      );

      if(!response.ok){
        throw new Error("City not found");
      }

      const data = await response.json();
      
      setWeather(data);

    }catch(err){
      setError("Error Fetching Weather Data");
    }

    setLoading(false);
  };

  return(
    <div style={{textAlign:"center", marginTop:"50px"}}>
      <h1>Weather Dashboard</h1>

      <input 
      type="text" 
      placeholder="Enter City"
      value={city}
      onChange={(e)=>setCity(e.target.value)}
      />

      <button onClick={getWeather}>Get Weather</button>

      {loading && <p>Loading weather...</p>}

      {error && <p style={{color:"red"}}>{error}</p>}

      {weather && (
        <div>
          <h3>Temperature: {weather.current_condition[0].temp_C}</h3>
          <p>Weather: {weather.current_condition[0].weatherDesc[0].value}</p>
          <p>Humidity: {weather.current_condition[0].humidity}</p>
        </div>
      )}

    </div>
  );
}

export default App;
