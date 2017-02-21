var axios = require('axios');

const OPEN_WEATHER_MAP_URL='http://api.openweathermap.org/data/2.5/weather?appid=3cac20eaa50aa6da3a13a2ce47398fae&units=imperial';
const OPEN_WEATHER_MAP_FORECAST_URL='http://api.openweathermap.org/data/2.5/forecast?&appid=3cac20eaa50aa6da3a13a2ce47398fae&units=imperial'

module.exports = {
  getWeather: function(location){
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then(function (res){

      if(res.data.cod && res.data.message) {
        throw new Error(res.data.message)
      } else {
        return res.data;
      }

    },function(res){
      throw new Error(res.data);
    });
  },

  getForecast: function(location){
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_FORECAST_URL}&q=${location}`;

    return axios.get(requestUrl).then(function (res){

    //   if(res.data.message) {
    //     throw new Error(res.data.message)
    //  } else {
        return res.data.list;
   // }

    },function(res){
      throw new Error(res.data);
    });
  }

}
