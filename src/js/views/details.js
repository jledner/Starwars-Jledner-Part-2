import React from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Card } from "../component/card";

export const Details = (props) => {
  let data = props.location.state.data;
  return (
    <div
      className="card mb-3 border border-success "
      style={{ maxWidth: "540px" }}
    >
      <div className="row g-0">
        <div className="col-md-12">
          <img
            src={data.imgURL}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <div className="card-text">
              <h5 className="font-weight-light">
                Here are some of the planet's properties:
              </h5>
              <h3 className="font-bold">{data.prop1}: {data.value1}</h3>
              <ul>
                <li>{data.prop2}: {data.value2}</li>
                <li>{data.prop3}: {data.value3}</li>
              </ul>
            </div>
          </div>

          <Link to="/">
            <span
              className="btn btn-primary btn-lg d-flex justify-content-center"
              href="#"
              role="button"
            >
              Back home
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

Details.propTypes = {
  planet: PropTypes.object,
};
