import React from 'react';
import Navigation from 'Navigation';
import Clock from 'TimerComponents/Clock';
import Controls from 'TimerComponents/Controls';


export class TimerMain extends React.Component {

  getInitialState () {
    return {
      count:0,
      timerStatus: 'stopped'
    };
  }

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

module.exports = TimerMain;
