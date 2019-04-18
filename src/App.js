import React, { Component } from "react";
import { connect } from "react-redux";
import { HashRouter as Router, Route } from "react-router-dom";
import { fetchCampuses, fetchStudents } from "./store";
import Campuses from "./Components/Campus/Campuses";
import Campus from "./Components/Campus/Campus";
import Students from "./Components/Student/Students";
import Student from "./Components/Student/Student";
import Create from "./Forms/Create/Create";
import Nav from "./Components/Utility/Nav";

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true
    };
  }
  componentDidMount() {
    this.props.fetchData();
    this.setState({ isLoading: false });
  }
  render() {
    const { isLoading } = this.state;
    return (
      <Router>
        {isLoading === true ? (
          <div>Page Loading!</div>
        ) : (
          <div>
            <Route component={Nav} />
            <Route component={Campuses} path="/campuses" />
            <Route component={Students} path="/students" />
            <Route component={Campus} path="/campus/:id" />
            <Route component={Student} exact path="/student/:id" />
            <Route component={Create} path="/create" />
          </div>
        )}
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
