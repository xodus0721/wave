import React from "react";
import NavBar from "./components/templates/NavBar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Main from "./components/pages/Main";
import Properties from "./components/pages/Properties";

const theme = {
  colors: {
    header: "#242424",
    subHeader: "#C6C6C6",
    lightGray: "#F7F8FA",
    pureWhite: "#FFFFFF",
    pureBlack: "#000000",
    pointBlue: "#0E62FF",
  },
  fonts: {
    normal: "16px",
    small: "12px",
    big: "72px",
    extra: "240px",
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
