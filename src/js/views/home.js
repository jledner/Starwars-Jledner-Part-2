import React, { useState, useEffect, useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Card } from "../component/card";
import { CharactersCard } from "../component/characterscard";
import { Details } from "./details";
import { Context } from "../store/appContext";

export const Home = () => {
  const { store, actions } = useContext(Context);
  return (
    <div className="items text-center mt-5">
      <h1>Star Wars</h1>
      <h3>Planets</h3>
      <div className="container" style={{ width: "100%" }}>
        <div className="cards characters-cards d-flex flex-nowrap p-0">
          {store.planetsArray?store.planetsArray.map((item, index) => {
            return (
            <span key={index} > 
            <Card data={{
              index: index,
              imgURL: 'https://upload.wikimedia.org/wikipedia/en/6/6d/Tatooine_%28fictional_desert_planet%29.jpg',
              prop1: 'name',
              prop2: 'terrain',
              prop3: 'gravity',
              value1: item.name,
              value2: item.terrain,
              value3: item.gravity,
              }} /></span>);
          }):"loading..."}
        </div>
      </div>
      <h3>Characters</h3>
      <div className="container">
        <div className="cards characters-cards d-flex flex-nowrap p-0">
          {store.charactersArray?store.charactersArray.map((item, index) => {
            return (
              <span key={index} > 
              <Card data={{
                imgURL: "https://api.time.com/wp-content/uploads/2015/12/star-wars-episode-iii-revenge-of-the-sith-obi-wan.jpg",
                prop1: 'name',
                prop2: 'gender',
                prop3: 'height',
                value1: item.name,
                value2: item.gender,
                value3: item.height,
                }} /></span>);
          }):"loading..."}
        </div>
      </div>
    </div>
  );
};
