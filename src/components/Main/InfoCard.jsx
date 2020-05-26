import React from "react";
import "./InfoCard.css";

const InfoCard = (props) => {
  return (
    <>
      <div className="card__container">
        <p className="card__name">{props.name}</p>
        <p className="card__gender">{props.gender}: </p>
        <p className="card__birthyear">{props.birthyear}: </p>
        <button className="btn__fav">♡</button>
      </div>
    </>
  );
};

export default InfoCard;
