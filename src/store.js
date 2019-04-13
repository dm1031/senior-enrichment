import React from "react";
import { createStore, applyMiddleware, combineReducers } from "redux";
import axios from "axios";
import thunk from "redux-thunk";

const SET_CAMPUSES = "SET_CAMPUSES";
const SET_STUDENTS = "SET_STUDENTS";

const campuses = (state = [], action) => {
  switch (action.type) {
    case SET_CAMPUSES:
      state = action.campuses;
      return state;
    default:
      return state;
  }
};

const students = (state = [], action) => {
  switch (action.type) {
    case SET_STUDENTS:
      state = action.students;
      return state;
    default:
      return state;
  }
};

const reducer = combineReducers({ campuses, students });

const setCampuses = campuses => {
  return {
    type: SET_CAMPUSES,
    campuses
  };
};

const setStudents = students => {
  return {
    type: SET_STUDENTS,
    students
  };
};

export const fetchCampuses = () => {
  return dispatch => {
    return axios
      .get("/api/campuses")
      .then(response => response.data)
      .then(campuses => dispatch(setCampuses(campuses)));
  };
};

export const fetchStudents = () => {
  return dispatch => {
    return axios
      .get("/api/students")
      .then(response => response.data)
      .then(students => dispatch(setStudents(students)));
  };
};

export default createStore(reducer, applyMiddleware(thunk));
