import React from "react";
import NavBar from "./components/templates/NavBar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Main from "./components/pages/Main";
import Properties from "./components/pages/Properties";

const theme = {
  colors: {
    lightGray: "#BBBBBB",
    gray: "#7B7B7B",
    white: "#FBFBFB",
    pureWhite: "#FFFFFF",
    pureBlack: "#000000",
    pointBlue: "#7DA2F2",
  },
  fonts: {
    small: "0.75em",
    normal: "1em",
    bold: "1.5em",
    semiBig: "2em",
    big: "3em",
    extra: "5em",
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/" render={() => <Main />}></Route>
          <Route exact path="/properties" render={() => <Properties />}></Route>
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
