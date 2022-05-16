import React from "react";
import CoursesList from "../components/CoursesList"

function getStudentActivities () {
  return (<div>student activities</div>);
}

function getTeacherActivities () {
  return (<div>teacher activities</div>);
}

const Activities = (props) => {
  let userType = props.userType;
  if (userType === "user") {
    return (getStudentActivities());
  } else {
    return (getTeacherActivities());
  }
}

function Dashboard() {
  return (
    <div>
      <div> Dashboard</div>
      <div><CoursesList/></div>
      <Activities userType="user"/>
    </div>
  );
}

export default Dashboard;
