import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";

export const CharactersCard = (props) => {
  return (
    // <div className="card mb-3" style={{ maxwidth: "540px" }}>
    //   <div className="col-sm-3">
        <div className="col-sm-3 card">
          <img
            src="https://api.time.com/wp-content/uploads/2015/12/star-wars-episode-iii-revenge-of-the-sith-obi-wan.jpg"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <div className="card-text">
              Here are some of the character's properties:
              <ul>
                <li>character: {props.character.name}</li>
                <li>gender: {props.character.gender}</li>
                <li>height: {props.character.height}</li>
              </ul>
              <Link to={{
                pathname: "/planetdetails" + props.name,
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

CharactersCard.propTypes = {
  character: PropTypes.object
};
