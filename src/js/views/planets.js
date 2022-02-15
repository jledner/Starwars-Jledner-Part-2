import React from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Card } from "../component/card";

export const Planets = () => {
  return (
    <div>
      <div>
        <Card />
        <Card />
        <Card />
        <Card />
      </div>

      <Link to="/">
        <span className="btn btn-primary btn-lg" href="#" role="button">
          Back home
        </span>
      </Link>
    </div>
  );
};

// Card.propTypes = {
//   match: PropTypes.object,
// };
