import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Main from "./components/Main";
import ProductForm from "./components/ProductForm";
import AllProductsView from "./components/AllProductsView";
import SingleProductView from "./components/SingleProductView";
import EditProductForm from "./components/EditProductForm";



function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Main />
        <Switch>
          <Route exact path='/'>
            <AllProductsView />
          </Route>
          <Route exact path='/products/view/:id'>
            <SingleProductView />
          </Route>
          <Route exact path='/products/new'>
            <ProductForm />
          </Route>
          <Route exact path='/products/edit/:id'>
            <EditProductForm />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
