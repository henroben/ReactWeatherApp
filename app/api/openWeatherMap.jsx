var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?units=metric&appid=f4b974d2aa99329cdc842b22d061bff1';

// API key: f4b974d2aa99329cdc842b22d061bff1
// http://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=f4b974d2aa99329cdc842b22d061bff1

module.exports = {
    getTemp: function(location) {
        var encodedLocation = encodeURIComponent(location);
        var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

        console.warn(requestUrl);

        return axios.get(requestUrl).then(function(res) {

            if(res.data.cod != '200' && res.data.message) {
                throw new Error(res.data.message);
            } else {
                var weatherDetails = {};
                weatherDetails.location = res.data.name;
                weatherDetails.lon = res.data.coord.lon;
                weatherDetails.lat = res.data.coord.lat;
                weatherDetails.temp = res.data.main.temp;
                weatherDetails.description = res.data.weather[0].description;

                //return res.data.main.temp;
                return weatherDetails;
            }
        }, function(res) {
            throw new Error(res.data.message);
        });
    }
}