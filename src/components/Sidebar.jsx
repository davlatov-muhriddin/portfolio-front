import React, { useState } from "react";
import avatarImage from "../assets/avatar.png";
import { Link, useHref } from "react-router-dom";
import { IoMdClose } from "react-icons/io";

function Sidebar({ toggleSidebar, setToggleSidebar }) {
  const [sidebarLinks, setSidebarLinks] = useState([
    { title: "Home", path: "/" },
    { title: "About", path: "/about" },
    { title: "Portfolio", path: "/portfolio" },
    { title: "Contact", path: "/contact" },
  ]);
  const href = useHref();

  return (
    <section className={`sidebar ${toggleSidebar ? "show" : "hide"}`}>
      <IoMdClose
        className="sidebar__close"
        onClick={() => setToggleSidebar(false)}
      />
      <div className="sidebar__avatar">
        <img src={avatarImage} alt="avatar" />
      </div>
      <div className="sidebar__body">
        <h1>Davlatov Muhriddin</h1>
        <p>MERN STACK DEVELOPER</p>

        <ul className="sidebar__list">
          {sidebarLinks.map((item) => (
            <li key={item.title} onClick={() => setToggleSidebar(false)}>
              <Link
                className={href == item.path ? "active" : ""}
                to={item.path}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Sidebar;
