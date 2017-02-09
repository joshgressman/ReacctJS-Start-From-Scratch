var Greeter = React.createClass({
  getDefaultProps: function () { //default info 
      return {
        name: 'React'
      };
  },
render: function () {
  var name = this.props.name; //initilizes value to property in Greet name =
  return (
    <div>
      <h1>Hello {name}!</h1>
      <p>This is from the component</p>
   </div>

  );
}

}); //Component Creation

//Will render the Greeter div with JSX to the DOM
  ReactDOM.render(
     <Greeter name="Josh"/>,
    document.getElementById('app')
  );



//This is a React component create in Greeter create clas
