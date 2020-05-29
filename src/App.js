import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header.jsx";
import PeopleList from "./components/Main/PeopleList";
import FavoriteList from "./components/Main/FavoriteList";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/everyone">
            <PeopleList />
          </Route>
          <Route path="/favorites">
            <FavoriteList />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
