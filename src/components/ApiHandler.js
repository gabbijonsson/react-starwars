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
  localStorage.getItem("favorites");
}

const API_HANDLER = {
  getPeople,
  getFavorites,
};

export default API_HANDLER;
