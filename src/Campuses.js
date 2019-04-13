import React from "react";
import { connect } from "react-redux";

const Campuses = ({ campuses }) => {
  return (
    <ul>
      {campuses.map(campus => (
        <div key={campus.id}>
          <div>{campus.name}</div>
          <div>
            <img src={campus.imageUrl} />
          </div>
        </div>
      ))}
    </ul>
  );
};

const mapStateToProps = state => {
  return {
    campuses: state.campuses
  };
};

export default connect(mapStateToProps)(Campuses);
