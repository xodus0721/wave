import React from "react";
import NavBar from "./components/templates/NavBar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Main from "./components/pages/Main";
import Properties from "./components/pages/Properties";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/" render={() => <Main />}></Route>
        <Route exact path="/properties" render={() => <Properties />}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
