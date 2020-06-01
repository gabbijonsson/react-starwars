function getPeople(callback) {
  fetch("https://swapi.dev/api/people/")
    .then((res) => res.json())
    .then(
      (result) => {
        callback(result.results);
      },
      (error) => {
        console.log("error", error);
      }
    );
}

function getFavorites() {
  let currentFavorite = localStorage.getItem("favorites");
  if (!currentFavorite) {
    return null;
  } else {
    return JSON.parse(currentFavorite);
  }
}

function addFavorite(favorite) {
  favorite.isFavorite = true;
  let currentFavorite = getFavorites();
  if (currentFavorite == null) {
    currentFavorite = [];
  }
  currentFavorite.push(favorite);
  localStorage.setItem("favorites", JSON.stringify(currentFavorite));
}

function removeFavorite(favorite) {
  let currentFavorite = getFavorites();
  if (currentFavorite != null) {
    let i = currentFavorite.findIndex(
      (person) => person.name === favorite.name
    );
    currentFavorite.splice(i, 1);
    localStorage.setItem("favorites", JSON.stringify(currentFavorite));
  }
}

const API_HANDLER = {
  getPeople,
  getFavorites,
  addFavorite,
  removeFavorite,
};

export default API_HANDLER;
