var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Timer = require('Timer');

describe('Timer', () => {

  it('should exist', () => {
    expect(Timer).toExist();
  });

    describe('handleStartTimer', () => {
      it('should set state to start timer', (done) => {
        var timer= TestUtils.renderIntoDocument(<Timer/>);
        timer.handleStartTimer();

        expect(timer.state.count).toBe(0);

        setTimeout(()=> {
          expect(timer.state.timerStatus).toBe('started');
          expect(timer.state.count).toBe(1);
          done();
        }, 1001);
      });
    });

    describe('handleStatusChange', () => {
      it('should pause timer on paused status', (done) => {
        var timer = TestUtils.renderIntoDocument(<Timer/>);
        timer.handleStartTimer();

        setTimeout(() => {
          timer.handleStatusChange('paused');
          expect(timer.state.count).toBe(3);
          expect(timer.state.timerStatus).toBe('paused');
          done();
        }, 3001);

      });
        it('should reset count on stopped status', (done) => {
          var timer = TestUtils.renderIntoDocument(<Timer/>);
          timer.handleStartTimer();
          
          setTimeout(() => {
            timer.handleStatusChange('stopped');
            expect(timer.state.count).toBe(0);
            expect(timer.state.timerStatus).toBe('stopped');
            done();
          }, 2001);
        });
      });

});
