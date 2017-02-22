import React from 'react';
import * as Redux from 'react-redux';
import WeatherForm from 'WeatherComponents/WeatherForm';
import WeatherMessage from 'WeatherComponents/WeatherMessage';
import Navigation from 'Navigation';
import openWeatherMap from 'openWeatherMap';
import ErrorModal from 'WeatherComponents/ErrorModal';

export class WeatherMain extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      isLoading: false,
    };
  }

  // getInitialState () {
  //   return {
  //     isLoading: false,
  //   }
  // }

  handleSearch(location){
    var that = this;

    this.setState({
      isLoading: true,
      errorMessage: undefined,
      datalocation: undefined,
      main: undefined,
      weather:undefined,
      wind: undefined,
      clouds: undefined

    });

    openWeatherMap.getWeather(location).then(
      function (data) {
        setTimeout(function(){
          that.setState({
            main: data.main,
            weather: data.weather[0],
            wind: data.wind,
            clouds: data.clouds,
            datalocation: data.name,
            nextLocation: data.name,
            isLoading: false
          })
       }, 1000);
    },  function(data){
      that.setState({
        isLoading: false,
        errorMessage: data.message,
        errorCode: data.cod
       });
    });

  }

  componentDidMount () {
    var location = this.props.location.query.location;

    if(location && location.length > 0 ){
      this.handleSearch(location);
      window.location.hash = '#/';
    }
  }

  componentWillReceiveProps (newProps) {
    var location = newProps.location.query.location;

    if(location && location.length > 0 ){
      this.handleSearch(location);
      window.location.hash = '#/';
    }
  }

  render () {
    var {main, weather, wind, clouds, datalocation, isLoading, errorMessage, errorCode, nextLocation} = this.state;

    function renderMessage (){
      if(isLoading){
        return <div><h3 className="text-center">Fetching Weather ....</h3><h3 className="text-center">It takes a sec (literally)</h3></div>;
      }else if(main){
        return <WeatherMessage temp={main.temp} location={datalocation} tempMax={main.temp_max}
          tempMin={main.temp_min} wind={wind.speed} clouds={clouds.all}
          humidity={main.humidity} weatherMain={weather.main} weatherDescription={weather.description}
          nextLocation={nextLocation}/>
      }
    }


    function renderError(){
      if (typeof errorMessage === 'string'){
        return(
          <ErrorModal errorMessage={errorMessage} errorCode={errorCode}/>
        )
      }
    }

    return(
      <div>
      
        <div>
          <h1 className="text-center page-title">Get Weather</h1>
          <WeatherForm onSearch={this.handleSearch}/>
          {renderMessage()}
          {renderError()}
        </div>
      </div>
    )

  }
};
export default Redux.connect(
  (state) => {
    return state
  }
)(WeatherMain);

//WeatherMain.getInitialState
