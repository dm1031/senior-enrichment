import React, { Component } from "react";
import { connect } from "react-redux";
import { HashRouter as Router, Route } from "react-router-dom";
import { fetchCampuses, fetchStudents } from "./store";
import Campuses from "./Campuses";
import Students from "./Students";
import Nav from "./Nav";

class App extends Component {
  componentDidMount() {
    this.props.fetchData();
  }
  render() {
    return (
      <Router>
        <div>
          <Route component={Nav} />
          <Route component={Campuses} path="/campuses" />
          <Route component={Students} path="/students" />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = ({ campuses, students }) => {
  return {
    campuses,
    students
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchData: () => {
      dispatch(fetchCampuses());
      dispatch(fetchStudents());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
