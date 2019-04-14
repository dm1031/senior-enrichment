import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { destroyStudent } from "./store";

const Students = ({ students, destroy }) => {
  return (
    <ul>
      <Link to="/create/student" className="float-right btn btn-primary">
        Add Student
      </Link>
      {students.map(student => (
        <div key={student.id}>
          <button
            onClick={() => destroy(student.id)}
            className="btn btn-danger"
          >
            X
          </button>
          <Link to={`/student/${student.id}`} key={student.id}>
            {student.firstName} {student.lastName}
          </Link>
        </div>
      ))}
    </ul>
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
