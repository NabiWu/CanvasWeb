import React from "react";
import {UsersData} from "../components/pseudoData";

const Users = () => {
  let users = (username, email, status) => {
    return (
      <>
        <span>{username}</span>
        <span>{email}</span>
        <span>{status}</span>
      </>
    )
  }

  return (
    <>
      <div>
        <ul>
          {UsersData.map((item, index) => {
            return (
              <li>
                {users(item.username, item.email, item.status)}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
  
}
function Setting() {
  return (
    <div >
      <Users/>
    </div>
  );
}

export default Setting;
