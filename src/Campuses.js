import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { destroyCampus } from "./store";

const Campuses = ({ campuses, destroy }) => {
  return (
    <div>
      <Link to="/create/campus" className="float-right btn btn-primary">
        Add Campus
      </Link>
      <ul>
        {campuses.map(campus => (
          <div key={campus.id}>
            <div>
              <b>{campus.name}</b>
            </div>
            <button
              className="float-right btn btn-danger"
              onClick={() => destroy(campus.id)}
            >
              X
            </button>
            <Link to={`/campus/${campus.id}`}>
              <img src={campus.imageUrl} />
            </Link>
          </div>
        ))}
      </ul>
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
