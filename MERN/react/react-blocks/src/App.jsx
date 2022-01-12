import React from "react";
import "./App.css";
import Header from "./components/HeaderComponent";
import Navigation from "./components/NavigationComponent";
import Main from "./components/MainComponent";


function App() {
  return <div className="App">
    <Header></Header>
    <Navigation></Navigation>
    <Main></Main>
  </div>;
}

export default App;
