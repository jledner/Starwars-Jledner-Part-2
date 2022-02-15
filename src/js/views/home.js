import React, { useState, useEffect } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Home = () => {
  // const [planetsArray, setPlanetsArray] = useState([]);
  const [charactersArray, setCharactersArray] = useState([]);
 

  const getCharacters = (params) => {
    fetch("https://swapi.dev/api/people/")
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        // Read the response as json.
        const data = response.json();
        return data;
      })
      .then((responseAsJson) => {
        // Do stuff with the JSONified response
        console.log(responseAsJson);
      })
      .catch((error) => {
        console.log("Looks like there was a problem: \n", error);
      });
  };
  useEffect(() => {
    getCharacters();
    //  getPlanets();
  }, []);
  //   	const response = fetch("https://swapi.dev/api/people/");
  //     	const data =  response.json();
  //       setCharactersArray(data.results);
  //       console.log(data);
  // };
  // const getPlanets = (params) => {
  //   	const response =  fetch("https://swapi.dev/api/planets/");
  //     	const data =  response.json();
  //       setPlanetsArray(data.results);
  //       console.log(data);

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
