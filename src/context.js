import React, { useState, useContext } from "react";
import sublinks from "./data";

const AppContext = React.createContext();

export function AppProvider({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [location, setLocation] = useState({});
  const [page, setPage] = useState(0);

  function openSidebar() {
    setIsSidebarOpen(true);
  }
  function closeSidebar() {
    setIsSidebarOpen(false);
  }
  function openSubmenu(text, coordinates) {
    const tab = sublinks.findIndex((x) => x.page === text); //note: page is an object from sublinks
    setPage(tab);
    setLocation(coordinates);
    setIsSubmenuOpen(true);
  }
  function closeSubmenu() {
    setIsSubmenuOpen(false);
  }

  return (
    <AppContext.Provider
      value={{
        sublinks,
        isSidebarOpen,
        isSubmenuOpen,
        location,
        page,
        openSidebar,
        openSubmenu,
        closeSidebar,
        closeSubmenu,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useGlobalContext() {
  return useContext(AppContext);
}
