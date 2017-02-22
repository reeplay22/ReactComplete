import React from 'react';
import Navigation from 'Navigation';
import * as Redux from 'react-redux';
import About from 'WeatherComponents/About';

export class Main extends React.Component {

  // constructor () {
  //   super(props);
  //   this.props = props;
  // }  


  render(){
    return (
      <div>
        <Navigation/>
        <div className="row">
          <div className="columns medium-6 large-6 small-centered">
             {this.props.children}     
          </div>
        </div>
      </div>
    );
  }
}
//   {props.children}
export default Redux.connect()(Main);

Main.defaultProps= {

};
