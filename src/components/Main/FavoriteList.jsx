import React, { useState, useEffect } from "react";
import ApiHandler from "../ApiHandler";
import InfoCard from "./InfoCard";
import "./FavoriteList.css";

function FavoriteList() {
  const [favorite, setFavorite] = useState([]);

  function updateFavorites() {
    let favoriteList = ApiHandler.getFavorites();
    setFavorite(favoriteList);
  }

  useEffect(() => {
    updateFavorites();
  }, []);

  if (favorite) {
    return (
      <div className="infocard__container">
        {favorite.map((person) => (
          <InfoCard
            key={favorite.indexOf(person)}
            person={person}
            updateFavorites={updateFavorites}
          />
        ))}
      </div>
    );
  } else {
    return (
      <p className="favlist__nofav">
        Oh no! You have no favorites! Go back and add some!
      </p>
    );
  }
}

export default FavoriteList;
