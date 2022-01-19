import './App.css';
import {BrowserRouter, Link, Switch, Route} from 'react-router-dom';
import Profile from './components/Profile';
import Notice from './components/Notice';
import Noticed from './components/Noticed';
// Browser Router enables routing in enclosed elements
// Link tag replaces anchor tags. Link does not reload page when anchor would
// Switch defines our routes and attaches components to them

function App() {
  return (
    <BrowserRouter> 
      <div className="App">
        <h1>Welcome!</h1>    
        <span>
          <Link to="/">Home</Link>
          <span> || </span>
          <Link to="/profile">Profile</Link>
          <span> || </span>
          <Link to="/notice">Notice</Link>
        </span>

        <Switch>
          <Route exact path="/">
            <h2>Welcome to my page</h2>
          </Route>
          <Route exact path="/profile/:id">
            <Profile></Profile>
          </Route>
          <Route exact path="/profile/:id/:color/:size">
            <Profile></Profile>
          </Route>
          <Route exact path="/notice">
            <Notice></Notice>
          </Route>
          <Route exact path="/noticed">
            <Noticed></Noticed>
          </Route>
        </Switch>

      </div>
    </BrowserRouter>
  );
}

export default App;
