import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const Campus = ({ currentCampus, studentsOfCampus }) => {
  return (
    <div>
      {currentCampus.map(({ id, name, imageUrl, address, description }) => (
        <div className="single-campus-container">
          <div className="name-container">
            <div className="header">{name}</div>
          </div>
          <div className="info-image-container">
            <div>
              <img src={imageUrl} className="single-campus-image" />
            </div>
            <div className="info-box-container">
              <div className="header-container">Current Students</div>
              <div>
                {studentsOfCampus.map(student => (
                  <div>
                    <Link to={`/student/${id}`}>
                      {student.firstName} {student.lastName}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state, { location }) => {
  const currentCampus = state.campuses.filter(
    campus => campus.id === location.pathname.slice(-1) * 1
  );
  const studentsOfCampus = state.students.filter(
    student => student.campusId === location.pathname.slice(-1) * 1
  );
  return {
    currentCampus,
    studentsOfCampus
  };
};

export default connect(mapStateToProps)(Campus);
