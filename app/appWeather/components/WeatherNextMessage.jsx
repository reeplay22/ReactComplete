var React = require('react');

var WeatherNextMessage = React.createClass({

 getInitialState: function() {
   return {
     pause: true
   }
    
 },

render: function() {

  var {pause} = this.state;
  var {forecast} = this.props;


    return(<div>
        {forecast.map((day, index)=>{
          console.log(day);
          var date = new Date(day.dt_txt).toDateString();
          var time;
          //var time = date.getHours() + ":" + date.getMinutes();
         // while(index <= 4){
          return <div>
            <h6>Date: {date}</h6>
            <h6>Time: {}</h6>
            <div className="text-center">
              <ul className="text-left">
                <li>Temp: {day.main.temp}</li>
                <li  className="temp tempMax">Hi: {day.main.temp_max}</li>
                <li className="temp tempMin">Lo: {day.main.temp_min}</li>
                <li>wind: {day.wind.speed}</li>
                <li>clouds {day.clouds.all}</li>
                <li>humidity: {day.main.humidity}</li>
                <li>description: {day.weather.description}</li>
              </ul>
            </div>
          </div>
        })}
      </div>
        );

  }

    });
module.exports = WeatherNextMessage;
