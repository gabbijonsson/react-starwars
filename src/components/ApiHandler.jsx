import React, { useState, useEffect } from "react";

function ApiHandler() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [people, setPeople] = useState([]);

  useEffect(() => {
    fetch("https://swapi.dev/api/people/")
      .then((res) => res.json())
      .then(
        (result) => {
          console.log("result0", result.results);
          setIsLoaded(true);
          setPeople(result.results);
        },
        (error) => {
          console.log("error", error);
          setIsLoaded(true);
          setError(error);
        }
      );
  });
  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return "people";
  }
}

export default ApiHandler;
