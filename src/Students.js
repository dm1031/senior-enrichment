import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { destroyStudent } from "./store";
import ToggleEditStudent from "./ToggleEditStudent";

const Students = ({ students, destroy }) => {
  return (
    <div>
      <Link to="/create/student" className="btn btn-success mt-3">
        + Student
      </Link>
      <hr />
      {students.map(student => (
        <div key={student.id}>
          <div className="name">
            <Link to={`/student/${student.id}`}>
              {student.firstName} {student.lastName}
            </Link>
          </div>
          <ToggleEditStudent
            edit={["firstName", "lastName"]}
            dataId={student.id}
          />
          <button
            className="btn btn-danger float-right"
            onClick={() => destroy(student.id)}
          >
            Delete Student
          </button>
          <div className="blurb mb-2">{student.email}</div>
          <ToggleEditStudent edit={["email"]} dataId={student.id} />
          <div className="location">GPA: {student.gpa}</div>
          <hr />
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    students: state.students
  };
};

const mapDispatchToProps = dispatch => {
  return {
    destroy: id => dispatch(destroyStudent(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Students);
