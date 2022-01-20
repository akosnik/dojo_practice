import './App.css';
import {BrowserRouter, Link, Switch, Route} from 'react-router-dom';

import StarWarsApi from './components/StarWarsApi';
// Browser Router enables routing in enclosed elements
// Link tag replaces anchor tags. Link does not reload page when anchor would
// Switch defines our routes and attaches components to them

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <StarWarsApi></StarWarsApi>
      </div>
    </BrowserRouter>
  );
}

export default App;
