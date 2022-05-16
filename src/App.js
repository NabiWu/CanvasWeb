import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Courses from "./pages/Courses";
import Setting from "./pages/Setting";
import Register from "./pages/Register";
import CoursePage from "./components/OneCoursePage"



function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Register />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/courses" element={<Courses />} />
        <Route exact path="/setting" element={<Setting />} />
        <Route path="/course/:id/*" element={<CoursePage />} />
      </Routes>
    </>
  );
}

export default App;
