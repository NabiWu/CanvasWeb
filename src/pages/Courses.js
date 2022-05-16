import React from "react";
import CoursesList from "../components/CoursesList"


function Course() {
  return (
    <>
      <h2>
        Select a course:
      </h2>
      <CoursesList props/>
    </>
  );
}

export default Course;
