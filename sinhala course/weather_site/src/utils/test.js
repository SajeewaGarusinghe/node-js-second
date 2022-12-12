//import axios from 'axios';
const axios = require('axios'); // legacy way
// lat = 6.1497;
// lon = 'abc';
// lon = 80.6897;

// const url =
//   'https://api.openweathermap.org/data/2.5/weather?lat=' +
//   lat +
//   '&lon=' +
//   lon +
//   '&units=metric&appid=8a24320a9646acb1f43700be66e48727';
// // const url =
// //   'https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&units=metric&appid=8a24320a9646acb1f43700be66e48727';
// // Make a request for a user with a given ID
// axios
//   .get(url)
//   .then(function (response) {
//     // handle success

//     console.log(
//       'currently ' +
//         response.data.weather[0].description +
//         ' and temperature= ' +
//         response.data.main.temp
//     );
//   })
//   .catch(function (error) {
//     // handle error
//     console.log(error.response.data.message);
//   });

const location = 'malabe';

const url =
  'http://api.openweathermap.org/geo/1.0/direct?q=' +
  location +
  '&limit=1&appid=8a24320a9646acb1f43700be66e48727';

axios
  .get(url)
  .then(function (response) {
    // handle success
    console.log(response.data[0].lat, ' , ', response.data[0].lon);
    // console.log(
    //   'currently ' +
    //     response.data.weather[0].description +
    //     ' and temperature= ' +
    //     response.data.main.temp
    // );
  })
  .catch(function (error) {
    // handle error
    console.log('cant find the location');
  });
