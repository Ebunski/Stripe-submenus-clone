import React from "react";
import logo from "./images/logo.svg";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "./context";

const Navbar = () => {
  const { sublinks, openSidebar, openSubmenu, closeSubmenu } =
    useGlobalContext();

  function displaySubmenu(event) {
    const page = event.target.textContent; //event.target allows us to access the Dom nodes similar to useRef
    const btnPos = event.target.getBoundingClientRect();
    const center = (btnPos.right + btnPos.left) / 2;
    const bottom = btnPos.bottom;
    openSubmenu(page, { center, bottom });
  }

  function handleSubmenu(event) {
    if (!event.target.contains("list-btn")) closeSubmenu(); //to close if buttons are not hovered upon
  }

  const pages = sublinks.map((x, index) => (
    <li key={index}>
      <button className="link-btn" onMouseOver={displaySubmenu}>
        {x.page}
      </button>
    </li>
  ));

  /*
=============== 
Navbar
===============
*/

  return (
    <nav onMouseOver={handleSubmenu}>
      <div className="nav-center">
        <header className="nav-header">
          <img src={logo} alt="stripe" />

          <button className="btn toggle-btn" onClick={openSidebar}>
            <FaBars />
          </button>

          <ul className="nav-links">{pages}</ul>

          <button className="btn signin-btn">sign in</button>
        </header>
      </div>
    </nav>
  );
};

export default Navbar;
