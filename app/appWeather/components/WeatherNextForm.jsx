var React = require('react');

var WeatherNextForm = React.createClass({

  onFormSubmitForecast: function (e) {
    e.preventDefault();
    var nextLocation = this.props.location;
    this.props.onSearchForecast(nextLocation);

  },

  render: function(){
    return(
      <div>
        <form onSubmit={this.onFormSubmitForecast}>
          <button ref="location" className="button expanded ">Click Here For the 5 Day Forecast !!!!</button>
        </form>
      </div>
    );
  }
});

module.exports = WeatherNextForm;
