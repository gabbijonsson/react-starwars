import React, { useState, useEffect } from "react";
import InfoCard from "./InfoCard";
import ApiHandler from "../ApiHandler.js";
import "./PeopleList.css";

function PeopleList() {
  const [people, setPeople] = useState([
    // {
    //   name: "Luke Skywalker",
    //   birth_year: "19BBY",
    //   gender: "male",
    //   id: 1,
    // },
    // {
    //   name: "C-3PO",
    //   birth_year: "112BBY",
    //   gender: "n/a",
    //   id: 2,
    // },
    // {
    //   name: "R2-D2",
    //   birth_year: "33BBY",
    //   gender: "n/a",
    //   id: 3,
    // },
    // {
    //   name: "Darth Vader",
    //   birth_year: "41.9BBY",
    //   gender: "male",
    //   id: 4,
    // },
  ]);
  useEffect(() => {
    ApiHandler.getPeople((peopleList) => setPeople(peopleList));
  }, []);

  return (
    <div className="infocard__container">
      {people.map((person) => (
        <InfoCard key={people.indexOf(person)} people={person} />
      ))}
      ;
    </div>
  );
}

export default PeopleList;
