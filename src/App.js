import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/navbar';
import Catalog from './components/catalog';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <h1>Welcome to Organika!</h1>
      <Catalog></Catalog>
    </div>
  );
}

export default App;
