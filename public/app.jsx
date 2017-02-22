var GreeterMessage = React.createClass({ //this is a nested component
render: function (){
  var name = this.props.name;
  return (
    <div>
      <h1>Hello {name}!</h1>
      <p>Some Paragraph</p>
    </div>
  );
}
});

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
    <GreeterMessage name={name}/>
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
