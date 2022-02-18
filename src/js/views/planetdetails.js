import React from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { PlanetsCard } from "../component/planetscard";

export const PlanetDetails = (props) => {
  let planet = props.location.state.props.planet;
  return (
    
    <div className="card mb-3 border border-success " style={{ maxWidth: "540px" }}>
      <div className="row g-0">
        <div className="col-md-12">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/6/6d/Tatooine_%28fictional_desert_planet%29.jpg"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <div className="card-text">
              <h5 className="font-weight-light">Here are some of the planet's properties:</h5>
              <h3 className="font-bold">{planet.name}</h3>
              <ul>
                <li>terrain: {planet.terrain}</li>
                <li>gravity: {planet.gravity}</li>
                <li>climate: {planet.climate}</li>
                <li>population: {planet.population}</li>
              </ul>
            </div>
          </div>

          <Link to="/">
            <span className="btn btn-primary btn-lg d-flex justify-content-center" href="#" role="button">
              Back home
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};


PlanetDetails.propTypes = {
  planet: PropTypes.object,
};