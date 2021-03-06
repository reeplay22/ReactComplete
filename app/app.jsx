var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var {hashHistory} = require('react-router');

var actions = require ('actions');
var store = require('configureStore').configure();
import firebase from 'app/firebase/';
import Router from 'app/router/';

firebase.auth().onAuthStateChanged((user) => {
  if(user) {  
    store.dispatch(actions.login(user));
    store.dispatch(actions.startAddTodos());
    hashHistory.push('/main');
  } else {
    store.dispatch(actions.logout());
    hashHistory.push('/login');
  }
});



//Load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles');

ReactDOM.render(
  <Provider store={store}>
    {Router}
  </Provider>
  ,
document.getElementById('app')
);


