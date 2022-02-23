import PropTypes from "prop-types";
import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Card = ({ data }) => {
  const { store, actions } = useContext(Context);
  return (
    // <div className="card mb-3" style={{ maxwidth: "540px" }}>
    //   <div className="col-sm-3">
    
    <div className="card bg-dark mb-3" style={{ width: "20rem" }}>
      <img src={data.imgURL} className="card-img-top" alt="..." />
      <hr
        style={{
          backgroundColor: 'color',
          height: "5px",
        }}
      />
      <div className="card-body">
        <div className="card-title">
          <h5>{data.value1}</h5>
          <div className="p-0 mb-3">
            <i className="text-white">
              Here are some of the planet's properties:
            </i>
            <ul>
              <li className="list-unstyled">
                {data.prop2}: {data.value2}
              </li>
              <li className="list-unstyled">
                {data.prop3}: {data.value3}
              </li>
            </ul>
            <Link
              to={{
                pathname: "/details/" + data.prop1,
                state: {
                  data,
                },
              }}
            >
              <button type="button" className="btn btn-light">
                Click here to see details
              </button>
            </Link>
            
            <button>
              <i onClick={() => actions.addFavorite(data)} className="far fa-heart" style={{ width: "2rem" }}></i>
            </button>
            {/* <span><i className="fas fa-heart"></i></span> */}
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
};

Card.propTypes = {
  planet: PropTypes.object,
};
