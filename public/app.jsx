var React = require('react');
var ReactDOM = require('react-dom');
var Greeter = require('Greeter');

var firstName = 'Leila'
var message = 'We have an abundance of ice cream!';

ReactDOM.render(

  <Greeter name = {firstName} message = {message} />,
  document.getElementById('app')

);
