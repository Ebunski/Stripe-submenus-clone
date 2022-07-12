import React from "react";
import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "./context";

const Sidebar = () => {
  const { sublinks, isSidebarOpen, closeSidebar } = useGlobalContext();

  const sidebarItems = sublinks.map((x, index) => (
    <article key={index}>
      <h4>{x.page}</h4>
      <ul className="sidebar-sublinks">
        {x.links.map((y, pos) => (
          <li key={pos}>
            <a href={y.url}>
              {" "}
              {y.icon} {y.label}
            </a>
          </li>
        ))}
      </ul>
    </article>
  ));
  /*
=============== 
Sidebar
===============
*/
  return (
    <section className={`sidebar-wrapper ${isSidebarOpen && "show"}`}>
      <aside className="sidebar">
        <button className="close-btn" onClick={closeSidebar}>
          <FaTimes />
        </button>
        {sidebarItems}
      </aside>
    </section>
  );
};

export default Sidebar;
