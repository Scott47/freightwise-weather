import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Weather.css";
import SatelliteMapGet from "./GetSatellite.js"
// import Weather from "./Weather";

//Author: Scott Silver
//Purpose: Display current weather associated.
//Methods: GET Current Weather

const WeatherGET = (props) => {
//Declare new state variable called 'myWeather'
  const [myWeather, setMyWeather] = useState({});

//Define axios after yarn add axios
  const axios = require('axios');

// Make a request for a user with a given ID
const getMyWeather = () => { axios.get('https://api.openweathermap.org/data/2.5/weather?zip=37027,us&appid=25e989bd41e3e24ce13173d8126e0fd6')
  .then(function (response) {
    // handle success
    setMyWeather(response.data);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
}

//Convert wind degrees to compass direction
  const convertDeg = function (deg) {
    if (deg > 11.25 && deg < 33.75) {
      return "NNE";
    } else if (deg > 33.75 && deg < 56.25) {
      return "ENE";
    } else if (deg > 56.25 && deg < 78.75) {
      return "E";
    } else if (deg > 78.75 && deg < 101.25) {
      return "ESE";
    } else if (deg > 101.25 && deg < 123.75) {
      return "ESE";
    } else if (deg > 123.75 && deg < 146.25) {
      return "SE";
    } else if (deg > 146.25 && deg < 168.75) {
      return "SSE";
    } else if (deg > 168.75 && deg < 191.25) {
      return "S";
    } else if (deg > 191.25 && deg < 213.75) {
      return "SSW";
    } else if (deg > 213.75 && deg < 236.25) {
      return "SW";
    } else if (deg > 236.25 && deg < 258.75) {
      return "WSW";
    } else if (deg > 258.75 && deg < 281.25) {
      return "W";
    } else if (deg > 281.25 && deg < 303.75) {
      return "WNW";
    } else if (deg > 303.75 && deg < 326.25) {
      return "NW";
    } else if (deg > 326.25 && deg < 348.75) {
      return "NNW";
    } else {
      return "N";
    }
  };

  //life cycle hook similiar to componentDidMount and componentWillUpdate
  useEffect(() => {
    getMyWeather("37027");
  }, []);

  return (
    <>
    <section id="background">
      <div className="container">
        {myWeather.main ? (
          <div className="row">
            <div className="col sm-6">
              <div className="card">
                <div className="card-header card-header1">
                  <h5 className="">Weather today at FreightWise in {myWeather.name}</h5>
                  <div className="row">
                  <div className="col sm">
                      <h3>{Math.round(
                        ((myWeather.main.temp - 273.15) * 9) / 5 + 32
                      )}
                      ° F
                      <img
                        src={`http://openweathermap.org/img/wn/${myWeather.weather[0].icon}@2x.png`}
                        alt="weather-icon"
                      />
                      </h3>
                      {myWeather.weather[0].description}
                    </div>
                    <div className="col sm-6">
                      <p id="sunrise">
                        {" "}
                        🌅 Sunrise:{" "}
                        {new Date(
                          myWeather.sys.sunrise * 1000
                        ).toLocaleTimeString()}
                      </p>
                      <p id="sunrise">
                        🌇 Sunset:{" "}
                        {new Date(
                          myWeather.sys.sunset * 1000
                        ).toLocaleTimeString()}
                      </p>
                      {/* closes out sunrise/sunset */}
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col sm-4">
                      <strong>🌡 High/Low:</strong>{" "}
                    </div>
                    <div className="col sm-4">
                      {Math.round(
                        ((myWeather.main.temp_max - 273.15) * 9) / 5 + 32
                      )}
                      °/
                      {Math.round(
                        ((myWeather.main.temp_min - 273.15) * 9) / 5 + 32
                      )}
                      °
                    </div>
                    <div className="col sm-4">
                      <strong>💨 Wind:</strong>
                    </div>
                    <div className="col sm-4">
                      {convertDeg(myWeather.wind.direction)} at{" "}
                      {myWeather.wind.speed} mph
                    </div>
                  </div>
                  <div className="row">
                    <div className="col sm-4">
                      💧 <strong>Humidity:</strong>
                    </div>
                    <div className="col sm-4">{myWeather.main.humidity}%</div>
                    <div className="col sm-4">
                      <strong>
                        <img
                          src="https://img.icons8.com/ios/50/000000/atmospheric-pressure.png"
                          alt="air-pressure"
                          id="air"
                        />{" "}
                        Pressure:{" "}
                      </strong>
                    </div>
                    <div className="col sm-4">{(myWeather.main.pressure * 0.030).toFixed(2)} in.</div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="row">
                <div className="col-sm-12">
                <SatelliteMapGet />
                </div>
            </div> */}
          </div>
        ) : (
          <p>There is no weather information for this zipcode</p>
        )}
      </div>
    </section>
    </>
  );
};

export default WeatherGET;