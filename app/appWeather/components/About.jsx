var React = require('react');

//original code

// var About = React.createClass({
//   render: function (){
//     return(
//       <h3>About</h3>
//     );
//   }
// });

// this is a stateless function using arrowFunc of lambda to pass the return through the arrow from the createClass
var About = (props) => {
  return(
    <div>
      <h1 className="text-center page-title">About Me</h1>
      <h6>My name is Tim Reed and as you can see I am that ninja!!!!!!!!</h6>
      <p>oh yeah my spirit name is Tehuti Ra Akenaten</p>

      <p>
        This is a weather application built on React and Node JS. I
        have built this for the Catalyst React Development Bootcamp.
      </p>
      <p>Here are some other tools i used for the development of this application</p>
      <ul>
        <li><a href="https://facebook.github.io/react">React</a> - This was the javaScript framework used.</li>
        <li><a href="http://openweathermap.org">Open Weather Map</a>- I Used Open Weather Map to search for weather data by city name.</li>

      </ul>
    </div>
  );
}


module.exports = About;
