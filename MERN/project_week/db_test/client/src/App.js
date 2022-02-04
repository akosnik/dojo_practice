import './App.css';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Home from './components/screen/Home'
import CreateChecklist from './components/screen/CreateChecklist';

function App() {
  return (
      <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          
          <Route exact path='/checklists/new'>
            <CreateChecklist />
          </Route>
          
          {/* <Route exact path='/checklists/:id'>
            <SingleProductView />
          </Route> */}
          
        </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
