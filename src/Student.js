import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const Student = ({ currentStudent, campuses }) => {
  let campusOfStudent = [];
  if (currentStudent.length) {
    campusOfStudent = campuses.filter(
      campus => campus.id === currentStudent[0].campusId
    );
  }
  return (
    <div>
      {currentStudent.map(student => (
        <div className="single-student-container">
          <div className="single-student-image-container mt-1">
            <div className="name">
              {student.firstName} {student.lastName}
            </div>
            <div>
              <img
                src={student.imageUrl}
                className="single-student-image mt-1"
              />
            </div>
            <div className="student-info-box mt-2" />
          </div>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state, { location }) => {
  const currentStudent = state.students.filter(
    student => student.id === location.pathname.slice(-1) * 1
  );
  return {
    currentStudent,
    campuses: state.campuses
  };
};

export default connect(mapStateToProps)(Student);
