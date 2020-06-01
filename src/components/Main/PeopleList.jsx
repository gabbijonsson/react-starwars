import React, { useState, useEffect } from "react";
import InfoCard from "./InfoCard";
import ApiHandler from "../ApiHandler.js";
import FavoriteUtil from "../FavoriteUtil.js";
import "./PeopleList.css";

function PeopleList(props) {
  const [people, setPeople] = useState([]);
  const uniqueResults = (value, index, self) => {
    return self.indexOf(value) === index;
  }
  useEffect(() => {
    ApiHandler.getPeople((peopleList) => {
      FavoriteUtil.updateFavoriteStatus(peopleList);
      let peopleNameList = peopleList.filter((person) => person.name.toLowerCase().includes(props.searchTerm.toLowerCase()));
      let peopleGenderList = peopleList.filter((person) => person.gender.toLowerCase().includes(props.searchTerm.toLowerCase()));
      let peopleBYearList = peopleList.filter((person) => person.birth_year.toLowerCase().includes(props.searchTerm.toLowerCase()));
      let nonUniquePeopleList = peopleNameList.concat(peopleGenderList, peopleBYearList);
      peopleList = nonUniquePeopleList.filter(uniqueResults);    
      setPeople(peopleList);
    });
  }, [props.searchTerm]);

  return (
    <div className="infocard__container">
      {people.map((person) => (
        <InfoCard
          key={people.indexOf(person)}
          person={person}
          shouldToggleFavoriteStatus={true}
        />
      ))}
      ;
    </div>
  );
}

export default PeopleList;
