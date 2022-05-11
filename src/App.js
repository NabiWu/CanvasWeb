import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Course from "./pages/Courses";
import Setting from "./pages/Setting";
import CoursePage from "./components/OneCoursePage"

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/courses" element={<Course />} />
          <Route exact path="/setting" element={<Setting />} />
          <Route path="/course/:name/*" element={<CoursePage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
