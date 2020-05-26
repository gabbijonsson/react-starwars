import React from "react";
import "./App.css";
import Header from "./components/Header/Header.jsx";
import InfoCard from "./components/Main/InfoCard";

function App() {
  const PEOPLE = [
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
  ];
  return (
    <div className="App">
      <Header />
      <InfoCard people={PEOPLE} />
    </div>
  );
}

export default App;
