var React = require('react');
var ReactDOM = require('react-dom');

var objOne = {
  name: 'Srikanth',
  location: 'Bangalore'
};

var objTwo = {
  age: 32,
  ...objOne
};
console.log(objTwo);

ReactDOM.render(
  <h1>boilerplate app!</h1>,
  document.getElementById('app')
);
