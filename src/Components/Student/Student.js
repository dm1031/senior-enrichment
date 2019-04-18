import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { destroyStudent } from "../../store";
import ToggleEditForm from "../../Forms/Edit/ToggleEditForm";

const Student = ({ currentStudent, campuses, destroy, handleDelete }) => {
  let campusOfStudent = [];
  if (currentStudent.length) {
    campusOfStudent = campuses.find(
      campus => campus.id === currentStudent[0].campusId
    );
  }
  return (
    <div>
      {currentStudent.map(student => (
        <div key={student.id} className="single-student-container">
          <div className="student-info-box mt-3">
            <div>
              <img
                src={student.imageUrl}
                className="rounded mx-auto d-block mt-3"
                alt="Chania"
                width="250"
                height="200"
              />
            </div>
            <div className="student-name">
              {student.firstName} {student.lastName}
            </div>
            <div className="student-blurb">
              <b>Student at </b>
              {campusOfStudent.name}
            </div>
            <div className="student-gpa mt-1">
              <b>Email: </b>
              {student.email}
            </div>
            <div className="student-gpa mt-1">
              <b>GPA: </b>
              {student.gpa}
            </div>
            <div className="text-center mt-5">
              <button
                className="btn btn-danger"
                onClick={() => handleDelete(destroy, student.id)}
              >
                Delete Student
              </button>
            </div>
          </div>
          <div className="account-details mx-2 mt-3">
            <div className="student-view mx-2">Student View</div>
            <div className="mx-2">
              <ToggleEditForm
                edit={["firstName", "lastName", "email"]}
                dataId={student.id}
                location={location}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state, { location, history }) => {
  const currentStudent = state.students.filter(
    student => student.id === location.pathname.slice(-1) * 1
  );

  const handleDelete = (fn, id) => {
    fn(id);
    history.push("/students");
  };

  return {
    currentStudent,
    campuses: state.campuses,
    history,
    handleDelete
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
)(Student);
