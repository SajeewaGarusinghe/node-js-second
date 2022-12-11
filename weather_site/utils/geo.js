const axios = require('axios'); // legacy way


const getGeo = (location) => {
  return new Promise((resolve, reject) => {
    const url =
      'http://api.openweathermap.org/geo/1.0/direct?q=' +
      location +
      '&limit=1&appid=8a24320a9646acb1f43700be66e48727';

    axios
      .get(url)
      .then(function (response) {
        // handle success
        resolve({ lat: response.data[0].lat, lon: response.data[0].lon });
        // console.log(response.data[0].lat, ' , ', response.data[0].lon);
      })
      .catch(function (error) {
        // handle error
        reject({ error: 'cant find the location' });
        //console.log('cant find the location');
      });
  });
};

module.exports = getGeo;
