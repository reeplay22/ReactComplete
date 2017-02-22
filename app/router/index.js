var React = require('react');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

import Main from 'Main';
import About from 'WeatherComponents/About';
import Examples from 'WeatherComponents/Examples'
import TimerMain from 'TimerComponents/TimerMain';
import WeatherMain from 'WeatherComponents/WeatherMain';
import TodoMain from 'TodoComponents/TodoMain';
import Login from 'Login';
import firebase from 'app/firebase/';


var requireLogin = (nextState, replace, next) =>{
  if(!firebase.auth().currentUser){
    replace('/login');
  }
  next();
}

var redirectIfLoggedIn = (nextState, replace, next) => {
  if(firebase.auth().currentUser){
    replace('/main');
  }
  next();
}

export default (
    <Router history={hashHistory}>
      <Route path='/' component={Main} onEnter={requireLogin}>   
        <Route path='main' component={About} />   
        <Route path='todos'component={TodoMain} />        
        <Route path="weather" component={WeatherMain} />
        <Route path="timer" component={TimerMain} />
        <Route path="examples" component={Examples} />
        <IndexRoute component={About} />
      </Route>
      <Route path='login' component={Login} onEnter={redirectIfLoggedIn}></Route>
    </Router>
    );
    //<Route path='Login'></Route>

    //<IndexRoute component={Main} onEnter={redirectIfLoggedIn}/>