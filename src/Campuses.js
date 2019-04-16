import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { destroyCampus } from "./store";

const Campuses = ({ campuses, destroy }) => {
  return (
    <div>
      <Link to="/create/campus" className="btn btn-success mt-3">
        + Campus
      </Link>
      <hr />
      {campuses.map(campus => (
        <div key={campus.id} className="campuses-container">
          <div className="single-campus">
            <div>
              <div className="name">{campus.name}</div>
              <div className="blurb mb-1">{campus.blurb}</div>
              <div className="location">
                {campus.city}, {campus.state}
              </div>
            </div>
            <div>
              <div>
                <img src={campus.imageUrl} className="campus-image" />
              </div>
            </div>
            <div />
            <div className="button-container">
              <div>
                <Link
                  to={`/campus/${campus.id}`}
                  className="campus-btn btn btn-primary"
                >
                  View Campus
                </Link>
              </div>
              <div>
                <button
                  className="campus-btn btn btn-danger"
                  onClick={() => destroy(campus.id)}
                >
                  Delete Campus
                </button>
              </div>
            </div>
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
