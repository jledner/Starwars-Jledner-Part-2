import React from "react";
import { Link } from "react-router-dom";

export const Card = () => {
  return (
    <div className="col-sm-3">
      <div className="card" >
        <img
          src="https://lumiere-a.akamaihd.net/v1/images/resistance-db-cb-23-main-image_8806a891.jpeg?region=0%2C0%2C1560%2C878&width=768"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
    </div>
  );
};
