import ApiHandler from "./ApiHandler";

function updateFavoriteStatus(people) {
  let favorites = ApiHandler.getFavorites();
  people.forEach((person) => {
    if (favorites.includes(person)) {
      person.isFavorite = true;
    }
  });
}

const FAVORITE_UTIL = {
  updateFavoriteStatus,
};

export default FAVORITE_UTIL;
