const axios = require('axios'); // legacy way


const getWeather = (lat, lon) => {
  return new Promise((resolve, reject) => {
    const url =
      'https://api.openweathermap.org/data/2.5/weather?lat=' +
      lat +
      '&lon=' +
      lon +
      '&units=metric&appid=8a24320a9646acb1f43700be66e48727';

    // Make a request for a user with a given ID
    axios
      .get(url)
      .then(function (response) {
        // handle success
        resolve({
          weather:
            'currently ' +
            response.data.weather[0].description +
            ' and temperature= ' +
            response.data.main.temp +
            ' C',
        });
        // console.log(
        //   'currently ' +
        //     response.data.weather[0].description +
        //     ' and temperature= ' +
        //     response.data.main.temp
        // );
      })
      .catch(function (error) {
        // handle error
        reject({ error: 'please try again' });
        // console.log('please try again');
      });
  });
};

module.exports = getWeather;
