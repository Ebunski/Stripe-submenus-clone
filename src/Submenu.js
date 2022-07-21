import React, { useState, useRef, useEffect } from "react";
import { useGlobalContext } from "./context";

const Submenu = () => {
  const { sublinks, isSubmenuOpen, location, page } = useGlobalContext();
  const [columns, setColumns] = useState("col-2");
  const menuRef = useRef(null);
  console.log(page);

  useEffect(() => {
    const submenu = menuRef.current;
    submenu.style.left = `${location.center}px`; //center of button
    submenu.style.top = `${location.bottom}px`; //placing under button

    if (sublinks[page].links.length === 3) setColumns("col-3");
    if (sublinks[page].links.length > 3) setColumns("col-4");
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location, sublinks[page].links]);

  const menu = sublinks[page].links.map((x, index) => (
    <li key={index}>
      <a href={x.url}>
        {x.icon} {x.label}
      </a>
    </li>
  ));

  /*
=============== 
submenu
===============
*/
  return (
    <aside ref={menuRef} className={`submenu ${isSubmenuOpen && "show"}`}>
      <h4>{sublinks[page].page}</h4>
      <ul className={`submenu-center ${columns}`}>{menu}</ul>
    </aside>
  );
};

export default Submenu;
