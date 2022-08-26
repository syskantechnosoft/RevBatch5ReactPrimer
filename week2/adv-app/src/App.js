import React from 'react';
//import logo from './logo.svg';
import './App.css';
// import HelloWorld from './Component1';
// import StateComponent from './Component2';
// import Alert from './Alert';
import Listing from './ListComponent';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <h1>Welcome to React</h1>
      <Listing></Listing>
    </div>
  );
}

export default App;
