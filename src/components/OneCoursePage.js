import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import '../CSS/Course.css';
import {
  Routes,
  Route,
} from "react-router-dom";
import { AnnouncementsData, AssignmentsData } from './pseudoData';
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
      <h1>{name}'s Announcements</h1>
      {getAnnBox(AnnouncementsData)}
    </>
  );
}
const Assignments = (props) => {
  const AssignmentDetails = () => {
    let { id } = useParams();
    //TODO: need to call API by ID to fetch data
    //
    let assi = AssignmentsData[id - 1];
    return (
      <>
        <div className='AssiDetail'>
          <h2>{assi.title}</h2>
          <div className='assignDesc'>
            {assi.description}

          </div>
          <div className='assignDueDate'>
            Due Date: <span>{assi.due_date}</span>
          </div >
          <div className='assignPoint'>
            Point: <span>{assi.max_points}</span>
          </div>

        </div>
      </>
    )

  }

  let getAssiLists = (assis) => {
    return (
      <>
        <ul>
          {assis.map((assi, idx) => {
            return (
              <li key={assi.id}>
                <div className="AssiRow">

                  <Link to={assi.id.toString()}>
                    <h3>{assi.title}</h3>
                  </Link>
                </div>
              </li>
            )
          })}
        </ul>
      </>
    )
  }

  const AssignmentsList = (props) => {
    return (
      <>
        <h1>
          {props.courseName}'s Assignments
        </h1>

        {getAssiLists(AssignmentsData)}
      </>

    )
  }

  return (
    <>
      <Routes>
        <Route path=":id" element={<AssignmentDetails />}></Route>
        <Route path="" element={<AssignmentsList courseName={props.courseName} />}></Route>
      </Routes>
    </>
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
  return (
    <div>
      <ul>
        <li>
          <Link to={"Announcements"}>
            <span>Announcements</span>
          </Link>
        </li>
        <li>
          <Link to={"Assignments"}>
            <span>Assignments</span>
          </Link>
        </li>
        <li>
          <Link to={"Grades"}>
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
            <Route path="/Assignments/*" element={<Assignments courseName={name} />} />
            <Route path="/Grades" element={<Grades courseName={name} />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default CoursePage;
