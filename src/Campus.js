import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const Campus = ({ currentCampus, studentsOfCampus }) => {
  return (
    <ul>
      {currentCampus.map(({ id, name, imageUrl, address, description }) => (
        <div key={id}>
          <div>
            <b>Name: </b>
            {name}
          </div>
          <div>
            <img src={imageUrl} />
          </div>
          <div>
            <b>Address: </b>
            {address}
          </div>
          <div>
            <b>Description: </b>
            {description}
          </div>
          <b>Students: </b>
          <div>
            {studentsOfCampus.map(student => (
              <Link to={`/student/${student.id}`} key={student.id}>
                {student.firstName} {student.lastName}
              </Link>
            ))}
          </div>
        </div>
      ))}
    </ul>
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
