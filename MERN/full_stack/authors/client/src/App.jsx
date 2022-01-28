import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import './App.css';
import NewAuthorForm from './components/forms/NewAuthorForm';
import EditAuthorForm from './components/forms/EditAuthorForm';
import AllAuthorsView from './components/views/AllAuthorsView';
import OneAuthorView from './components/views/OneAuthorView';
import AuthorNotFound from './components/views/AuthorNotFound';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>Favorite Authors</h1>
        <p><Link to='/'>Home</Link> | <Link to='/authors/new'>New</Link></p>
        <Switch>
          <Route exact path='/'>
            <AllAuthorsView />
          </Route>
          <Route exact path='/authors/new'>
            <NewAuthorForm />
          </Route>
          <Route exact path='/authors/view/:id'>
            <OneAuthorView />
          </Route>
          <Route exact path='/authors/edit/:id'>
            <EditAuthorForm />
          </Route>
          <Route exact path='/authors/404'>
            <AuthorNotFound />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
