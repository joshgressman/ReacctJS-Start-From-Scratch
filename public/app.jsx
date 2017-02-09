var Greeter = React.createClass({
  getDefaultProps: function () { //default info
      return {
        name: 'React',
        message: 'This is the default message'
      };
  },
render: function () {
  var name = this.props.name; //initilizes value to property in Greet name =
  var message = this.props.message;
  return (
    <div>
      <h1>Hello {name}!</h1>
      <p>{message}</p>
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
