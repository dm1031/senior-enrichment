import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { destroyStudent } from "../../store";
import ToggleEditForm from "../../Forms/Edit/ToggleEditForm";

const Campus = ({ currentCampus, studentsOfCampus, destroy, location }) => {
  return (
    <div>
      {currentCampus.map(campus => (
        <div key={campus.id} className="single-campus-container">
          <div className="name-container mt-3" />
          <div className="info-image-container">
            <div>
              <img src={campus.imageUrl} className="single-campus-image" />
            </div>
            <div className="info-box-container">
              <div className="name">About {campus.name}</div>
              <ToggleEditForm
                edit={["name"]}
                dataId={campus.id}
                location={location}
              />
              <div className="blurb">
                <b>Located at </b>
                {campus.address} {campus.city}, {campus.state} {campus.zip}
              </div>
              <ToggleEditForm
                edit={["address", "city", "state", "zip"]}
                dataId={campus.id}
                location={location}
              />
              <div className="location">{campus.description}</div>
              <ToggleEditForm
                edit={["description"]}
                dataId={campus.id}
                location={location}
              />
            </div>
          </div>
          <div className="mt-3" />
          <div className="name">Students</div>
          <hr />
          {studentsOfCampus.map(student => (
            <div key={student.id}>
              <div className="name">
                <Link to={`/student/${student.id}`}>
                  {student.firstName} {student.lastName}
                </Link>
              </div>
              <button
                className="btn btn-danger float-right"
                onClick={() => destroy(student.id)}
              >
                Delete Student
              </button>
              <div className="blurb mb-2">{student.email}</div>
              <div className="location">GPA: {student.gpa}</div>
              <hr />
            </div>
          ))}
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

const mapDispatchToProps = dispatch => {
  return {
    destroy: id => dispatch(destroyStudent(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Campus);
