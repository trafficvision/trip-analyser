var React    = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var Main          = require('Main');
var Report        = require('Report');
var User          = require('User');
var About         = require('About');
var Documentation = require('Documentation');

// Load foundation
require('style!css!foundation-sites/dist/css/foundation.min.css');
$(document).foundation();

// App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="user" component={User}/>
      <Route path="about" component={About}/>
      <Route path="documentation" component={Documentation}/>
      <IndexRoute component={Report}/>
    </Route>
  </Router>,
  document.getElementById('app')
);
