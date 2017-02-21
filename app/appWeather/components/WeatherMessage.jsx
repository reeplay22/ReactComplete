var React = require('react');
var WeatherNextForm = require('WeatherNextForm');
var WeatherNextMessage = require('WeatherNextMessage');
var openWeatherMap = require('openWeatherMap');

var WeatherMessage = React.createClass({


  getInitialState: function () {
    return {
      holdBack: true,
      forecast: []
    }
  },

  handleSearchForecast: function (nextLocation) {
    var that = this;
  //   this.setState({
  //     holdBack: false,
  //     go: true
  //  });
    openWeatherMap.getForecast(nextLocation).then(

      function (data) {
          that.setState({
            holdBack: false,
            go: true,
            forecast: data,
          })
          //console.log(that.state.forecast);
    },  function(data){
      that.setState({
        holdBack: false,
        errorMessage: data.message,
        errorCode: data.cod
       });
    });
    //console.log("forecast 2 :" + that.state.forecast);
  },



  render: function () {

    var {temp, location, nextLocation, tempMax, tempMin, wind, clouds, humidity, weatherMain, weatherDescription, holdBack, today } = this.props;

    var {forecast, go} = this.state;

    function renderNextMessage (){
      if(holdBack){
        return <h3 className="text-center">hold up AAAHHHHH!!!</h3>
      }else if(go){
        //console.log(forecast);
        return <WeatherNextMessage forecast={forecast} />
      }
    }


    return(
      <div>
        <h5 className="text-center">its <span className="temp">{temp}</span> in {location} with a high of
          <span className="temp tempMax">{tempMax}</span> and low of <span className="temp tempMin">{tempMin}</span></h5>

            <div className="text-center">
              <ul className="text-left">
              <li>wind: {wind} mph</li>
              <li>clouds: {clouds} %</li>
              <li>humidity: {humidity}</li>
              <li>description: {weatherMain} and {weatherDescription}</li>
              </ul>
            </div>

            <div>
              <WeatherNextForm location={location} onSearchForecast={this.handleSearchForecast} />
            </div>

            <div>
              {renderNextMessage()}
            </div>
      </div>
    );
  }

})


module.exports = WeatherMessage;
