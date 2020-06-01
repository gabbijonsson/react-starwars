import ApiHandler from "./ApiHandler";

function updateFavoriteStatus(people) {
  let favorites = ApiHandler.getFavorites();
  people.forEach((person) => {
    if (favorites) {
      let i = favorites.findIndex((favorite) => favorite.name === person.name);
      if (i >= 0) {
        person.isFavorite = true;
      }
    }
  });
}

const FAVORITE_UTIL = {
  updateFavoriteStatus,
};

export default FAVORITE_UTIL;
