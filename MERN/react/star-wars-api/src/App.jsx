import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import StarWarsApi from './components/StarWarsApi';
import SearchResult from './components/SearchResult';
// Browser Router enables routing in enclosed elements
// Link tag replaces anchor tags. Link does not reload page when anchor would
// Switch defines our routes and attaches components to them

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <StarWarsApi />

        <Switch>
          <Route exact path="/:criteria/:id">
            <SearchResult />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;


// <BrowserRouter> 
// <div className="App">
//   <h1>Welcome!</h1>    
//   <span>
//     <Link to="/">Home</Link>
//     <span> || </span>
//     <Link to="/profile">Profile</Link>
//     <span> || </span>
//     <Link to="/groups">Groups</Link>
//   </span>

//   <Switch>
//     <Route exact path="/">
//       <h2>Welcome to my page</h2>
//     </Route>
//     <Route exact path="/profile/:id">
//       <Profile></Profile>
//     </Route>
//     <Route exact path="/profile/:id/:color/:size">
//       <Profile></Profile>
//     </Route>
//     <Route exact path="/groups">
//       <Group></Group>
//     </Route>
//   </Switch>

// </div>
// </BrowserRouter>