import React, { useState, useEffect } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Home = () => {
  const [planetsArray, setPlanetsArray] = useState([]);
  const [charactersArray, setCharactersArray] = useState([]);
 
  //I joined both fetches in one fetch template since they are very similar in how they work, we just need to pass a url and a setter method to use it for any endpoint 
  const getData = (url, setArray) => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
        //there was a variable called data that was being returned here, but normally we just return the jsonification because we want the next .then to wait on the result if it takes longer  
      })
      .then((responseAsJson) => {
        setArray(responseAsJson.results);
      })
      .catch((error) => {
        console.log("Looks like there was a problem: \n", error);
      });
  };

  useEffect(() => {
    //I get both characters and planets by passing the respective url and the setter method for the appropriate array 
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
