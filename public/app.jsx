var Greeter = React.createClass({
  getDefaultProps: function () { //default info
      return {
        name: 'React',
        message: 'This is the default message'
      };
  },
getInitialState: function () {
  return {
    name: this.props.name
  };
},
onButtonClick: function (e) {
  e.preventDefault();
  var nameRef = this.refs.name;
  var name = nameRef.value;
  nameRef.value = '';

  if(typeof name === 'string' && name.length > 0 ){
    this.setState({
      name: name
    });
  } 
},

render: function () {
  var name = this.state.name; //initilizes value to property in Greet name =
  var message = this.props.message;
  return (
    <div>
      <h1>Hello {name}!</h1>
      <p>{message}</p>

    <form onSubmit={this.onButtonClick}>
      <input type="text" ref="name"></input>
      <button>Set Name</button>
    </form>
   </div>

  );
}

}); //Component Creation

var firstName = "Bob";
// var newMsg = "Whats up world";

//Will render the Greeter div with JSX to the DOM
  ReactDOM.render(
     <Greeter name={firstName} />,
    document.getElementById('app')
  );



//This is a React component create in Greeter create clas
