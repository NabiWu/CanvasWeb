import React from "react";
import Navbar from "../components/Navbar";
import CourseList from "../components/CoursesList"


function Course() {
  return (
    <>
      <Navbar />
      <h2>
        Select a course:
      </h2>
      <CourseList />
    </>
  );
}

export default Course;
