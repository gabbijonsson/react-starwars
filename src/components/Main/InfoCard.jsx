import React, { useState } from "react";
import "./InfoCard.css";
import ApiHandler from "../ApiHandler.js";

const InfoCard = (props) => {
  const [isFavorite, setFavoriteStatus] = useState(props.person.isFavorite);
  return (
    <>
      <div className="card__container">
        <p className="card__name">{props.person.name}</p>
        <p className="card__gender">Gender: {props.person.gender}</p>
        <p className="card__birthyear">Birthyear: {props.person.birth_year}</p>
        <p className="card__isusercreated">
          Created by:
          {props.person.isUserCreated ? " Your imagination" : " George Lucas"}
        </p>
        <button
          onClick={() => {
            if (isFavorite) {
              ApiHandler.removeFavorite(props.person);
              if (props.onUnfavorite) {
                props.onUnfavorite();
              }
            } else {
              ApiHandler.addFavorite(props.person);
            }
            if (props.shouldToggleFavoriteStatus) {
              setFavoriteStatus(!isFavorite);
            }
          }}
          className="btn__fav"
        >
          {isFavorite ? "♥" : "♡"}
        </button>
      </div>
    </>
  );
};

export default InfoCard;
