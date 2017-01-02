var React = require('react');

var GreeterMessage = React.createClass({
  render: function() {

    var name = this.props.name;
    var message = this.props.message;

    return(
      <div>
        <h4> Hello {name} !</h4>
        <p> {message} </p>
      </div>
    );
  }
});

module.exports = GreeterMessage;
