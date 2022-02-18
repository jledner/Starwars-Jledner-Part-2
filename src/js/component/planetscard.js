import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";

export const PlanetsCard = (props) => {
  return (
    // <div className="card mb-3" style={{ maxwidth: "540px" }}>
    //   <div className="col-sm-3">
    <div className="col-sm-3 card">
      <img
        src="https://upload.wikimedia.org/wikipedia/en/6/6d/Tatooine_%28fictional_desert_planet%29.jpg"
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <div className="card-text">
          {/* Here are some of the planet's properties: */}
          <ul>
            <span>Planet: {props.planet.name}</span>
            {/* <li>terrain: {props.planet.terrain}</li>
            <li>gravity: {props.planet.gravity}</li> */}
          </ul>
          <Link to={{
                pathname: "/planetdetails/" + props.planet.name,
                 state :{
                    props,
                 },
                 }}>
                <button>Click here to see details</button>
              </Link>
        </div>
      </div>
      <link></link>
    </div>
    //   </div>
    // </div>
  );
};

PlanetsCard.propTypes = {
  planet: PropTypes.object,
};
