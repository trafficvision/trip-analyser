const React = require('react');

// components
var Nav = require('Nav');

var Main = (props) => {
  return (
    <div>
      <Nav />
      {props.children}
    </div>
  );
}

module.exports = Main;
