import { BrowserRouter, Switch, Route } from "react-router-dom";
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
          <Route exact path='/products'>
            <AllProductsView />
          </Route>
          <Route exact path='/product/view/:id'>
            <SingleProductView />
          </Route>
          <Route exact path='/product/new'>
            <ProductForm />
          </Route>
          <Route exact path='/product/edit/:id'>
            <EditProductForm />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
    );
}

export default App;
