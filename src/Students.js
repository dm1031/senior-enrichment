import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const Students = ({ students }) => {
  return (
    <ul>
      {students.map(student => (
        <Link to={`/student/${student.id}`} key={student.id}>
          {student.firstName} {student.lastName}
        </Link>
      ))}
    </ul>
  );
};

const mapStateToProps = state => {
  return {
    students: state.students
  };
};

export default connect(mapStateToProps)(Students);
