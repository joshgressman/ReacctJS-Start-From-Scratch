

//This is a presentaional component that renders stuff to the screen

//presentaional components do not handle state, this is done within the container component

var GreeterMessage = React.createClass({ //this is a nested component
render: function (){
  var name = this.props.name;
  var message = this.props.message;
  return (
    <div>
      <h1>Hello {name}!</h1>
      <p>{message}</p>
    </div>
  );
}
});

//GreeterForm is also a presentational component does not maintain state
//simply takes some props, renders the form, when the form gets submited it calls
//a function onNewName

var GreeterForm = React.createClass({
  onFormSubmit: function (e) {
    e.preventDefault();

    var name = this.refs.name.value;

    if(name.length > 0){
      this.refs.name.value = '';
      this.props.onNewName(name);
    }
  },
    render: function () {
       return (
         <form onSubmit={this.onFormSubmit} >
           <input type="text" ref="name"></input>
           <button>Set Name</button>
         </form>

       );
    }
});

// This is the container component, it maintains state for the app
// When state is updated it updates it's children
// <GreeterMessage name={name} message={message}/> rerenders
// <GreeterForm onNewName={this.handleNewName}/>
// Note state can change, props can not

var Greeter = React.createClass({
  getDefaultProps: function () { //default info
      return {
        name: 'React',
        message: 'This is a default message'
      };
  },
getInitialState: function () {
  return {
    name: this.props.name,
    message: this.props.message
  };
},
handleNewName: function (name) {
  this.setState({
    name: name
  });
},

render: function () {
  var name = this.state.name; //initilizes value to property in Greet name =
  var message = this.props.message;
  return (
    <div>
    <GreeterMessage name={name} message={message}/>
    <GreeterForm onNewName={this.handleNewName}/>
   </div>

  );
}

}); //Component Creation

var firstName = "Josh";
// var newMsg = "Whats up world";

//Will render the Greeter div with JSX to the DOM
  ReactDOM.render(
     <Greeter name={firstName} />,
    document.getElementById('app')
  );



//This is a React component create in Greeter create clas
