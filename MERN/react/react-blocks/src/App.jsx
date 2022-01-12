import React from "react";
import "./App.css";
import Header from "./components/HeaderComponent";
import Navigation from "./components/NavigationComponent";
import Main from "./components/MainComponent";
import SubContents from "./components/SubContentsComponent";
import Advertisement from "./components/AdvertisementComponent";


function App() {
  return <div className="App">
    <Header></Header>
    <Navigation></Navigation>
    <Main>
      <SubContents></SubContents>
      <SubContents></SubContents>
      <SubContents></SubContents>
      <Advertisement></Advertisement>
    </Main>
  </div>;
}

export default App;
