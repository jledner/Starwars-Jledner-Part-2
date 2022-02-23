import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";

export const Card = ({data}) => {
  return (
    // <div className="card mb-3" style={{ maxwidth: "540px" }}>
    //   <div className="col-sm-3">
    <div className="col-sm-3 card">
      <img
        src={data.imgURL}
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <div className="card-text">
          <h5>Here are some of the planet's properties:</h5>
          <ul>
            <b>{data.prop1}: {data.value1}</b>
            <li>{data.prop2}: {data.value2}</li>
            <li>{data.prop3}: {data.value3}</li>
          </ul>
          <Link to={{
                pathname: "/details/" + data.prop1,
                 state :{
                    data,
                 },
                 }}>
                <button>Click here to see details</button>
              </Link>
        </div>
      </div>
    </div>
    //   </div>
    // </div>
  );
};

Card.propTypes = {
  planet: PropTypes.object,
};
