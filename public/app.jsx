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

var Greeter = React.createClass({
  getDefaultProps: function() {
    return {
      name: 'React',
      message: 'No message was provided...'
    };
  },
  getInitialState: function() {
    return {
      name: this.props.name,
      message: this.props.message
    }
  },
  handleNewData: function(updates) {
    this.setState(updates);
  },
  render: function() {

    var name = this.state.name;
    var message = this.state.message;

    return(
      <div>
        <GreeterMessage name={name} message={message} />
        <GreeterForm onNewData={this.handleNewData} />
      </div>
    );
  }
});

var firstName = 'Charlie'
var message = 'This is a message!';

ReactDOM.render(

  <Greeter name = {firstName} message = {message} />,
  document.getElementById('app')

);
