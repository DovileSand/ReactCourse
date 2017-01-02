var React = require('react');

var GreeterForm = React.createClass({
  onFormSubmit: function(e) {
    e.preventDefault();

    var updates = {};
    var name = this.refs.name.value;
    var message = this.refs.message.value;

    if (name.length  > 0) {
      this.refs.name.value = '';
      updates.name = name;
    }

    if (message.length > 0) {
      this.refs.message.value = '';
      updates.message = message;
    }
    this.props.onNewData(updates);
  },
  render: function() {
    return(
      <form onSubmit={this.onFormSubmit} >
        <input type= "text" ref="name" placeholder="Enter your name" />
        <br/>
        <textarea ref="message" placeholder="Enter your message" />
        <br/>
        <button> Update  </button>
      </form>
    );
  }
});

module.exports = GreeterForm;
