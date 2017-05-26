import React from 'react';
var {connect} = require('react-redux');

export class CountdownForm extends React.Component{

  onSubmit (e) {
    e.preventDefault();
    var strSeconds = this.refs.seconds.value;

    if(strSeconds.match(/^[0-9]*$/)) {
        this.refs.seconds.value = '';
        this.props.onSetCountdown(parseInt(strSeconds, 10));
    }
  }

  render ()  {
    return (
      <div>
        <form ref="form" onSubmit={this.onSubmit} className="countdown-form">
          <input type="text" ref="seconds" placeholder="enter time in seconds"/>
          <button className="button expanded">Start</button>
        </form>
      </div>
    );
  }
};

export default connect(
   (state) => {
    return state
  }
)(CountdownForm)
