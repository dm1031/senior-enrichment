import React, { Component } from "react";
import { connect } from "react-redux";
import { updateStudent, updateCampus } from "../../store";

class EditDataForm extends Component {
  constructor(props) {
    super(props);
    const { edit, campus, student } = props;

    const initialState = edit.reduce((acc, field) => {
      acc[field] = campus ? campus[field] : student[field];
      return acc;
    }, {});
    initialState.errors = [];
    this.state = initialState;
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(ev) {
    ev.preventDefault();
    const { edit, dataId, location } = this.props;
    const updatedData = edit.reduce((acc, field) => {
      acc[field] = this.state[field];
      return acc;
    }, {});
    updatedData.id = dataId;

    if (location.pathname.slice(0, 7) === "/campus") {
      this.props
        .onSaveCampus(updatedData)
        .catch(ex => this.setState({ errors: ex.response.data.errors }));
    } else {
      this.props
        .onSaveStudent(updatedData)
        .catch(ex => this.setState({ errors: ex.response.data.errors }));
    }
  }
  render() {
    const { edit } = this.props;
    const { errors } = this.state;
    return (
      <div className="mt-2">
        {errors
          ? errors.map(error => (
              <div key={error.message} className="alert alert-danger">
                {error.message}
              </div>
            ))
          : " "}
        <form onSubmit={this.handleSubmit}>
          {edit.map(field => (
            <input
              key={field}
              type="text"
              value={this.state[field]}
              onChange={ev => this.setState({ [field]: ev.target.value })}
              placeholder={field}
              className="mx-1 mt-1"
            />
          ))}
          <button className="far fa-save mx-1" type="submit" />
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state, { dataId, location }) => {
  if (location.hash.slice(1, 9) === "/student") {
    const currentStudent = state.students.find(
      student => student.id === dataId
    );
    return {
      student: currentStudent
    };
  } else {
    const currentCampus = state.campuses.find(campus => campus.id === dataId);
    return {
      campus: currentCampus
    };
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onSaveStudent: student => dispatch(updateStudent(student)),
    onSaveCampus: campus => dispatch(updateCampus(campus))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditDataForm);
