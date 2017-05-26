import React from 'react';
import * as Redux from 'react-redux';
var {connect} = require('react-redux');

export class Controls extends React.Component{

  onStatusChange (newStatus) {
    return () => {
        this.props.onStatusChange(newStatus)
    }
  }

  render () {
    var {countStatus} = this.props;

    var renderStartStopButton = () => {
      if (countStatus === 'started'){
        return <button className="button secondary" onClick={this.onStatusChange('paused')}>Pause</button>
      } else if (countStatus === 'paused') {
        return <button className="button primary" onClick={this.onStatusChange('started')}>Start</button>
      }
    };

    return (
            <div className="controls">
              {renderStartStopButton()}
              <button className="button alert hollow" onClick={this.onStatusChange('stopped')}>Clear</button>
            </div>
    )
  }
};

export default Redux.connect(
  (state) => {
    return state
  }
)(Controls)

Controls.propTypes = {
countStatus: React.PropTypes.string.isRequired,
    onStatusChange: React.PropTypes.func.isRequired
}