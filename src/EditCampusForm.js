import React, { Component } from "react";
import { connect } from "react-redux";
import { updateCampus } from "./store";

class EditCampusForm extends Component {
  constructor(props) {
    super(props);

    const { edit } = props;
    const initialState = edit.reduce((acc, field) => {
      acc[field] = "";
      return acc;
    }, {});
    initialState.errors = [];
    this.state = initialState;
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(ev) {
    ev.preventDefault();
    const { edit, dataId } = this.props;
    const updatedData = edit.reduce((acc, field) => {
      acc[field] = this.state[field];
      return acc;
    }, {});
    updatedData.id = dataId;

    this.props
      .update(updatedData)
      .catch(ex => this.setState({ errors: ex.response.data.errors }));
  }
  render() {
    const { edit } = this.props;
    const { errors } = this.state;
    return (
      <div>
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
            />
          ))}
          <button className="far fa-save" type="submit" />
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
    update: campus => dispatch(updateCampus(campus))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditCampusForm);
