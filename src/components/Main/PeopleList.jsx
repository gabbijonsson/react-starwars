import React, { useState, useEffect } from "react";
import InfoCard from "./InfoCard";
import ApiHandler from "../ApiHandler.js";
import UpdateFavorites from "../FavoriteUtil.js";
import "./PeopleList.css";

function PeopleList() {
  const [people, setPeople] = useState([]);
  useEffect(() => {
    ApiHandler.getPeople((peopleList) => setPeople(peopleList));
  }, []);

  return (
    <div className="infocard__container">
      {people.map((person) => (
        <InfoCard
          key={people.indexOf(person)}
          person={person}
          updateFavorites={UpdateFavorites}
        />
      ))}
      ;
    </div>
  );
}

export default PeopleList;
