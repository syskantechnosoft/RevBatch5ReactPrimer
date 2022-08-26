import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import CustomerList from './customerList';

function App() {
  return (
      <div>
          <h2>Welcome to Customers App</h2>
          <CustomerList/>
      </div>
  );
}

export default App;
