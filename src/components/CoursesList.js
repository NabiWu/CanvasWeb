import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CoursesListData } from './pseudoData';
import '../CSS/Course.css';

function CoursesList() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <div className='nav-menu-items' onClick={showSidebar}></div>
      <div className='CourseList'>
        <ul>
          {CoursesListData.map((item, index) => {
            return (

              <li key={index} className="CourseLi">
                <Link to={'/course' + item.path}>
                  <span>{item.name}</span>
                </Link>
              </li>

            );
          })}
        </ul>
      </div>

    </>
  );
}

export default CoursesList;
