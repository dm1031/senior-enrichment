import React from "react";
import { connect } from "react-redux";

const Students = ({ students }) => {
  console.log(students);
  return (
    <ul>
      {students.map(student => (
        <div key={student.id}>
          {student.firstName} {student.lastName}
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

export default connect(mapStateToProps)(Students);
