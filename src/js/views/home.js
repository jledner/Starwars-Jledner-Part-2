import React, { useState, useEffect } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Home = () => {
  const [planetsArray, setPlanetsArray] = useState([]);
  const [charactersArray, setCharactersArray] = useState([]);
 

  const getData = (url, setArray) => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        // Read the response as json.
        return response.json();

      })
      .then((responseAsJson) => {
        // Do stuff with the JSONified response
        setArray(responseAsJson.results);
      })
      .catch((error) => {
        console.log("Looks like there was a problem: \n", error);
      });
  };

  useEffect(() => {
    getData("https://swapi.dev/api/people/", setCharactersArray);
    getData("https://swapi.dev/api/planets/", setPlanetsArray);
  }, []);
  
  return (
    <div className="text-center mt-5">
      <h1>Hello Rigo!</h1>
      <p>
        <img src={rigoImage} />
      </p>
      <a href="#" className="btn btn-success">
        If you see this green button, bootstrap is working
      </a>
    </div>
  );
};
