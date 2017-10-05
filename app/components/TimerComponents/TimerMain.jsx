import React from 'react';
import * as Redux from 'react-redux';
import Clock from 'TimerComponents/Clock';
import Controls from 'TimerComponents/Controls';


export class TimerMain extends React.Component {


  constructor (props) {
    super(props);
    this.state = {
      count: 0,
      timerStatus: 'stopped'
    }

    this.startTimer = this.startTimer.bind(this)
    this.handleStartTimer = this.handleStartTimer.bind(this)
    this.handleStatusChange = this.handleStatusChange.bind(this)
  }
  // getInitialState () {
  //   return {
  //     count:0,
  //     timerStatus: 'stopped'
  //   };
  // }

  componentWillUnmount () {
    clearInterval(this.timer);
    this.timer = undefined;
  }

  handleStartTimer () {
    this.setState({
      timerStatus: 'started'
    });
  }

  handleStatusChange(newStatus) {
    this.setState({timerStatus: newStatus})
  }

  componentDidUpdate (prevProps, prevState) {

    if (this.state.timerStatus !== prevState.timerStatus){
      switch (this.state.timerStatus){
        case 'started':
        this.startTimer();
        break;

        case 'stopped':
        this.setState({count: 0});

        case 'paused':
        clearInterval(this.timer);
        this.timer = undefined;
        break;
      }
    }
  }

  startTimer () {
    this.timer = setInterval(() => {
      var newCount = this.state.count + 1;
      this.setState({
        count: newCount
      });
    }, 1000);

  }

  render () {
      
    var {count, timerStatus} = this.state;

      var renderControlArea = () => {
        if(timerStatus !== 'started'){
          return <button className="button expanded" onClick={this.handleStartTimer}>Start</button>
        } else {
          return <Controls countStatus={timerStatus} onStatusChange={this.handleStatusChange} />;
        }
      };

    return (
      <div>
     
      <div>
          <h1 className="page-title">Timer SHOOORRR!!</h1>
          <Clock totalSeconds={count} />
          {renderControlArea()}
          </div>
      </div>
    )
  }

};

export default Redux.connect(
  (state) => {
    return state
  }
)(TimerMain);
