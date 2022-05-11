import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import '../CSS/Course.css';
import {
  Routes,
  Route,
} from "react-router-dom";
import { AnnouncementsData } from './pseudoData';
const Announcements = (props) => {
  let name = props.courseName;
  let getAnnRow = (id, title, content, date) => {
    return (
      <li key={id}>
        <div className="AnnRow">
          <h3>{title}</h3>
          <span className="AnnContent">{content}</span>
          <span className="Date">{date}</span>
        </div>
      </li>
    )
  }
  let getAnnBox = (AnnData) => {
    return (
      <>
        <div className="AnnBox">

          <h1>Announcements</h1>
          <ul>
            {
              AnnData.map((item, index) => {
                return getAnnRow(item.id, item.title, item.content, item.date)
              })
            }
          </ul>
        </div>
      </>
    )
  }
  return (
    <>
      {getAnnBox(AnnouncementsData)}
    </>
  );
}

const Assignments = (props) => {
  let name = props.courseName;
  return (
    <div>
      {name}'s Assignments
    </div>
  );
}
const Grades = (props) => {
  let name = props.courseName;
  return (
    <div>
      {name}'s Grades
    </div>
  );
}


const Menu = (props) => {

  let name = props.courseName;
  let curPath = "/course/" + name;


  return (
    <div>
      <ul>
        <li>
          <Link to={curPath + "/Announcements"}>
            <span>Announcements</span>
          </Link>
        </li>
        <li>
          <Link to={curPath + "/Assignments"}>
            <span>Assignments</span>
          </Link>
        </li>
        <li>
          <Link to={curPath + "/Grades/"}>
            <span>Grades</span>
          </Link>
        </li>
      </ul>
    </div>
  )
}
function CoursePage() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  let { name } = useParams();
  return (
    <>
      <div className="cousePage">
        <div className="menu">
          <h1>{name}</h1>
          <Menu courseName={name} />
        </div>
        <div className="content">
          <Routes>
            <Route path="/Announcements" element={<Announcements courseName={name} />} />
            <Route path="/Assignments" element={<Assignments courseName={name} />} />
            <Route path="/Grades" element={<Grades courseName={name} />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default CoursePage;
