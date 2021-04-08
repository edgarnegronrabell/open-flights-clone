import React from "react";
import { Route, Switch } from "react-router-dom";
import Airlines from "../components/Airlines";
import Airline from "../components/Airline";
import Navbar from "../components/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Airlines} />
        <Route exact path="/airlines/:slug" component={Airline} />
      </Switch>
    </>
  );
};

export default App;
