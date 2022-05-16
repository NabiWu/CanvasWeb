import React, { Component, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CoursesListData } from './pseudoData';
import '../CSS/Course.css';
import axios from 'axios';
import '../constant';
import { api } from '../constant';


function CourseList() {
  const [courses, setCourses] = useState([]);

  let getCourses = async () => {
    let data = await api.get('/course').then(({ data }) => data);
    setCourses(data);
  }
  useEffect(
    () => {
      console.log('CourseList mounted');
      getCourses()
    }, []
  )
  return (
    <>
      <div className='CourseList'>
        <ul>
          {courses.map(course => {
            return (
              <li key={course.id} className="CourseLi">
                <Link to={'/course/' + course.id}>
                  <span>{course.name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );


}

//not use, for referential purpose
class CourseListClass extends Component {
  getCourses = async () => {
    let data = await api.get('/course').then(({ data }) => data);
    this.setState({ courses: data });
  }
  state = {
    courses: []
  }
  constructor() {
    super();
  }
  componentDidMount() {
    this.getCourses();

  }
  render() {
    return (
      <>
        <div className='CourseList'>
          <ul>
            {this.state.courses.map(course => {
              return (
                <li key={course.id} className="CourseLi">
                  <Link to={'/course/' + course.id}>
                    <span>{course.name}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

      </>
    );
  }
}

export default CourseList;
