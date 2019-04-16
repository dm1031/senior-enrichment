import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { destroyCampus } from "./store";

const Campuses = ({ campuses, destroy }) => {
  return (
    <div>
      <Link to="/create/campus" className="btn btn-success mt-2">
        + Campus
      </Link>
      <hr />
      {campuses.map(campus => (
        <div key={campus.id}>
          <div className="name">{campus.name}</div>
          <div>
            <button
              type="submit"
              className="btn btn-danger float-right"
              onClick={() => destroy(campus.id)}
            >
              Delete Campus
            </button>
          </div>
          <div>
            <Link
              to={`/campus/${campus.id}`}
              className="btn btn-primary float-right"
            >
              View Campus
            </Link>
          </div>
          <div>
            <img src={campus.imageUrl} className="campus-image" />
          </div>
          <div className="blurb mb-2">{campus.blurb}</div>
          <div className="location">
            <i>
              {campus.city}, {campus.state}
            </i>
          </div>
          <hr />
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    campuses: state.campuses
  };
};

const mapDispatchToProps = dispatch => {
  return {
    destroy: id => dispatch(destroyCampus(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Campuses);
