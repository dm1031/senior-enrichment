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
    <ul>
      {currentStudent.map(student => (
        <div key={student.gpa}>
          <div>
            <b>Name: </b>
            {student.firstName} {student.lastName}
          </div>
          <div>
            <img src={student.imageUrl} />
          </div>
          <div>
            <b>Email: </b>
            {student.email}
          </div>
          <div>
            <b>GPA: </b>
            {student.gpa}
          </div>
          <b>Attending: </b>
          <Link to={`/campus/${student.campusId}`} key={student.id}>
            {campusOfStudent[0].name}
          </Link>
        </div>
      ))}
    </ul>
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
