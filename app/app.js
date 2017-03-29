import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import {Route, Router, IndexRoute, hashHistory} from 'react-router';

var Main   = require('Main');
var Report = require('Report');
var User   = require('User');
var About  = require('About');
var Help   = require('Help');
var { Test } = require('Test');

var store  = require('configureStore').configure();

// Load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles')

store.subscribe(() => {
  var state = store.getState();
  // console.log("New state: ", state);
  TodoAPI.setTodos(state.todos);
});

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={Main}>
        <Route path="user" component={User}/>
        <Route path="about" component={About}/>
        <Route path="help" component={Help}/>
        <Route path="test" component={Test}/>
        <IndexRoute component={Report}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
