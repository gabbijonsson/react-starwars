import React from "react";
import "./InfoCard.css";

const InfoCard = (props) => {
  console.log(JSON.stringify(props));
  return (
    <>
      <div className="card__container">
        <p className="card__name">{props.people.name}</p>
        <p className="card__gender">Gender: {props.people.gender}</p>
        <p className="card__birthyear">Birthyear: {props.people.birth_year}</p>
        <button className="btn__fav">♡</button>
      </div>
    </>
  );
};

export default InfoCard;
