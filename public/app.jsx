var Greeter = React.createClass({
render: function () {
  return (
    <div>
      <h1>Hello World!</h1>
      <p>This is from the component</p>
   </div>

  );
}

}); //Component Creation

//Will render the Greeter div with JSX to the DOM
  ReactDOM.render(
     <Greeter/>,
    document.getElementById('app')
  );



//This is a React component create in Greeter create clas
