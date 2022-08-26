import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const numbers = [4,75,21,36,10];
  const listItems = numbers.map( (number)=> <li>{number}</li>);
  return (
    <div className="App">
      <header className="App-header">
        <h2>List Rendering</h2>
        <ul>{listItems}</ul>
      </header>
    </div>
  );
}

export default App;
