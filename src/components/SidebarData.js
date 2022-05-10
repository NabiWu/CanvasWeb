import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";

export const SidebarData = [
  {
    title: "Home",
    path: "/home",
    icon: <FaIcons.FaUserAlt />,
    cName: "nav-text",
  },
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: <FaIcons.FaRegChartBar />,
    cName: "nav-text",
  },
  {
    title: "Courses",
    path: "/courses",
    icon: <FaIcons.FaBook />,
    cName: "nav-text",
  },
  {
    title: "Setting",
    path: "/setting",
    icon: <AiIcons.AiFillSetting />,
    cName: "nav-text",
  },
  {
    title: "Logout",
    path: "/login",
    icon: <AiIcons.AiOutlineLogout />,
    cName: "nav-text",
  },
];
