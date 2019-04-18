/* eslint-disable no-confusing-arrow */
import React, { Component } from "react";
import { connect } from "react-redux";
import { addCampus, addStudent } from "../../store";
import faker from "faker";

class Create extends Component {
  constructor(props) {
    super(props);
    if (props.location.pathname === "/create/campus") {
      this.state = {
        fields: ["name", "address", "city", "state", "zip", "description"],
        name: "",
        address: "",
        city: "",
        state: "",
        zip: "",
        description: "",
        errors: []
      };
    } else {
      this.state = {
        fields: ["firstName", "lastName", "email", "gpa", "campus"],
        firstName: "",
        lastName: "",
        email: "",
        gpa: "",
        campus: "",
        errors: []
      };
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(ev) {
    ev.preventDefault();
    if (this.props.location.pathname === "/create/campus") {
      const createdCampus = {
        name: this.state.name,
        imageUrl: faker.image.city(),
        address: this.state.address,
        city: this.state.city,
        state: this.state.state,
        zip: this.state.zip,
        description: this.state.description
      };

      this.props
        .setCampus(createdCampus)
        .then(() => {
          this.props.history.push("/campuses");
        })
        .catch(ex => this.setState({ errors: ex.response.data.errors }));
    } else {
      const createdStudent = {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
        imageUrl: faker.image.people(),
        gpa: this.state.gpa,
        campusId: this.state.campus
      };

      this.props
        .setStudent(createdStudent)
        .then(() => {
          this.props.history.push("/students");
        })
        .catch(ex => this.setState({ errors: ex.response.data.errors }));
    }
  }
  render() {
    const { fields, errors } = this.state;
    const { campuses } = this.props;
    return (
      <div>
        {errors.length
          ? errors.map((error, idx) => (
              <div key={idx} className="alert alert-danger">
                {error.message}
              </div>
            ))
          : ""}
        <form onSubmit={this.handleSubmit} className="form-group">
          {fields.map(field =>
            field === "campus" ? (
              <div key={field}>
                <div>{field[0].toUpperCase() + field.slice(1)}</div>
                <select
                  value={this.state.campusId}
                  onChange={ev => this.setState({ campus: ev.target.value })}
                  className="form-control"
                >
                  {campuses.map(campus => (
                    <option value={campus.id} key={campus.id}>
                      {campus.name}
                    </option>
                  ))}
                </select>
              </div>
            ) : (
              <div key={field}>
                <div>
                  {field === "firstName"
                    ? "First Name"
                    : field === "lastName"
                    ? "Last Name"
                    : field === "gpa"
                    ? "GPA"
                    : field[0].toUpperCase() + field.slice(1)}
                  :
                </div>
                <input
                  type="text"
                  value={this.state[field]}
                  onChange={ev => this.setState({ [field]: ev.target.value })}
                  className="form-control"
                />
              </div>
            )
          )}
          <span>
            <input
              type="submit"
              value="Create"
              className="mt-3 btn btn-primary"
            />
          </span>
          <span>
            <button
              type="submit"
              className="mt-3 mx-3 btn btn-primary"
              onClick={() =>
                this.props.location.pathname === "/create/campus"
                  ? this.props.history.push("/campuses")
                  : this.props.history.push("/students")
              }
            >
              Cancel
            </button>
          </span>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    campuses: state.campuses
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setCampus: campus => dispatch(addCampus(campus)),
    setStudent: student => dispatch(addStudent(student))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Create);
