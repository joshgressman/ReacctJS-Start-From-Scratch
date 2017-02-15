var GreeterMessage = React.createClass({ //this is a nested component
render: function (){
  return (
    <div>
      <h1>Some H1</h1>
      <p>Some Paragraph</p>
    </div>
  );
}
});

var GreeterForm = React.createClass({
    render: function () {
       return (
         <form >
           <input type="text" ref="name"></input>
           <button>Set Name</button>
         </form>

       );
    }
});

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

    <GreeterMessage/>

    <form onSubmit={this.onButtonClick}>
      <input type="text" ref="name"></input>
      <button>Set Name</button>
    </form>
      <GreeterForm/>
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
