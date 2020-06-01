import React, {useState} from "react";
import "./App.css";
import Header from "./components/Header/Header.jsx";
import PeopleList from "./components/Main/PeopleList";
import FavoriteList from "./components/Main/FavoriteList";
import FavoriteForm from "./components/Main/FavoriteForm";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [searchTerm, setSearchTerm] = useState('')
  return (
    <div className="App">
      <Router>
        <Header setSearchTerm={setSearchTerm} />
        <Switch>
          <Route path="/favorites">
            <FavoriteList />
          </Route>
          <Route path="/addfavorite">
            <FavoriteForm />
          </Route>
          <Route path="/">
            <PeopleList searchTerm={searchTerm}/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
