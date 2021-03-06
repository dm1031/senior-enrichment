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

export const addCampus = campus => {
  return dispatch => {
    return axios
      .post("/api/create/campus", campus)
      .then(() => dispatch(fetchCampuses()));
  };
};

export const addStudent = student => {
  return dispatch => {
    return axios
      .post("/api/create/student", student)
      .then(() => dispatch(fetchStudents()));
  };
};

export const destroyCampus = id => {
  return dispatch => {
    return axios
      .delete(`/api/campus/${id}`)
      .then(() => dispatch(fetchCampuses()));
  };
};

export const destroyStudent = id => {
  return dispatch => {
    return axios
      .delete(`/api/student/${id}`)
      .then(() => dispatch(fetchStudents()));
  };
};

export const updateCampus = campus => {
  return dispatch => {
    return axios
      .put(`/api/campus/${campus.id}`, campus)
      .then(() => dispatch(fetchCampuses()));
  };
};

export const updateStudent = student => {
  return dispatch => {
    return axios
      .put(`/api/student/${student.id}`, student)
      .then(() => dispatch(fetchStudents()));
  };
};

export default createStore(reducer, applyMiddleware(thunk));
