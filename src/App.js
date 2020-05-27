import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header.jsx";
import InfoCard from "./components/Main/InfoCard";
import ApiHandler from "./components/ApiHandler";

function App() {
  const [view, setView] = useState("everyone");
  const [favorites, setFavorite] = useState([]);
  const [people, setPeople] = useState([
    {
      name: "Luke Skywalker",
      birth_year: "19BBY",
      gender: "male",
      id: 1,
    },
    {
      name: "C-3PO",
      birth_year: "112BBY",
      gender: "n/a",
      id: 2,
    },
    {
      name: "R2-D2",
      birth_year: "33BBY",
      gender: "n/a",
      id: 3,
    },
    {
      name: "Darth Vader",
      birth_year: "41.9BBY",
      gender: "male",
      id: 4,
    },
  ]);

  return (
    <div className="App">
      <Header />
      <div className="infocard__container">
        {people.map((person) => (
          <InfoCard key={person.id} people={person} />
        ))}
        ;
      </div>
    </div>
  );
}

export default App;
