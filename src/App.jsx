import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Sidebar from "./components/Sidebar";
import ProjectDetail from "./pages/ProjectDetail";
import { CiMenuBurger } from "react-icons/ci";

function App() {
  const [toggleSidebar, setToggleSidebar] = useState(false);

  return (
    <div className="app">
      <Sidebar
        toggleSidebar={toggleSidebar}
        setToggleSidebar={setToggleSidebar}
      />
      <div className="page">
        <CiMenuBurger
          className="burger__menu"
          onClick={() => setToggleSidebar(true)}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/detail/:id" element={<ProjectDetail />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
