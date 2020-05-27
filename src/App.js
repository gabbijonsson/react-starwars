import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header.jsx";
import PeopleList from "./components/Main/PeopleList";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [favorites, setFavorite] = useState([]);

  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/everyone">
            <PeopleList />
          </Route>
          <Route path="/favorites">
            <div className="infocard__container">HELLO</div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
