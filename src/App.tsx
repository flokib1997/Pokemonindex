import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import PokemonHeader from "./components/PokemonHeader/PokemonHeader";
import PokemonContentHome from "./components/PokemonContentHome/PokemonContentHome";
import PokemonContentDetail from "./components/PokemonContentDetail/PokemonContentDetail";
import { theme } from "./themes/customTheme";
import { ThemeProvider } from "@material-ui/core";
import ErrorPage from "./components/ErrorPage/ErrorPage";

const App = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <div className="App">
          <header>
            <PokemonHeader></PokemonHeader>
          </header>
          <div className="contentWrapper">
            <Switch>
              <Route exact path="/">
                <PokemonContentHome></PokemonContentHome>
              </Route>
              <Route exact path="/pokemon/:name">
                <PokemonContentDetail></PokemonContentDetail>
              </Route>
              <Route>
                <ErrorPage />
              </Route>
            </Switch>
          </div>
        </div>
      </ThemeProvider>
    </Router>
  );
};

export default App;
