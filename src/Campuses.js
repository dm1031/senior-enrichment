import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const Campuses = ({ campuses }) => {
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

export default connect(mapStateToProps)(Campuses);
