import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Weather.css";
// import Weather from "./Weather";

//Author: Scott Silver
//Purpose: Display current weather associated.
//Methods: GET Current Weather

const SatelliteMapGet = (props) => {
  const [mySatellite, setMySatellite] = useState({});

  const axios = require('axios');

// reader to convert to img
const reader = new FileReader ()
//axios api call to openweatherapi
const getSatelliteMap = () => { axios.get('https://tile.openweathermap.org/map/temp_new/2/1/1.png?appid=25e989bd41e3e24ce13173d8126e0fd6')
    .then(function (response) {
        // handle success
        console.log(response.data)
        console.log(reader.readAsDataURL(response.data));
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
    .then(function () {
        // always executed
    });
}
// const getSatelliteMap = () => {
//     return axios
//       .get('https://tile.openweathermap.org/map/temp_new/2/1/1.png?appid=25e989bd41e3e24ce13173d8126e0fd6', {
//         responseType: 'arraybuffer'
//       })
//       .then(reader.readAsDataURL(response.) => Buffer.from(response.data, 'binary').toString('base64'))
//   }



//life cycle hook similiar to componentDidMount and componentWillUpdate
useEffect(() => {
    getSatelliteMap();
  }, []);

  return (
      <>
<div className="container">
    <div className="row">
        <img src={mySatellite} alt="" width="200" height="150" />
    </div>
</div>
      </>
  )
}

export default SatelliteMapGet