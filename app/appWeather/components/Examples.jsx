var React = require('react');
var{Link} = require('react-router');
// original code
// var Examples = React.createClass({
//   render: function (){
//     return(
//       <h3>Examples</h3>
//     );
//   }
// });



// this is a stateless function using arrowFunc of lambda to pass the return through the arrow from the createClass
var Examples = (props) => {
  return(
    <div>
    <h1 className="text-center page-title">Examples</h1>
    <p>I told you i could do it</p>
    <p> WE OUTCHEAAA!!!!!</p>
    <p>Try out some links to weather in these cities</p>
    <ol>
      <li>
        <Link to='/?location=Baltimore'> Baltimore, MD</Link>
      </li>
      <li>
        <Link to='/?location=Washington DC'>Washington DC</Link>
      </li>
      <li>
        <Link to='/?location=Philadelphia'>Philadelphia, PA</Link>
      </li>
    </ol>
    </div>
  );
}

module.exports = Examples;
