import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useColorScheme } from "./useColorScheme";

const Navbar = () => {
  const { isDark, setIsDark } = useColorScheme();
  const [isOpen, setIsOpen] = useState(false);

  function toggleSidebar() {
    setIsOpen(!isOpen);
    const sidebarElement = document.getElementById("sidebar");
    const currentDisplay = sidebarElement.style.display;

    if (!currentDisplay || currentDisplay === "none") {
      sidebarElement.style.display = "block";
    } else {
      sidebarElement.style.display = "none";
    }
  }

  return (
    <header>
      <nav aria-label="primary">
        <div className="content container container--lg">
          <a className="logo" href="/">
            <img id="logo" src="/favicon_io/favicon.ico" />
          </a>

          <ul className="navbar-links">
            <li>
              <a href="/">
                <span>Hjem</span>
              </a>
            </li>
            <li>
              <a href="/jobposts">
                <span>Se annonser</span>
              </a>
            </li>
          </ul>

          <ul className="navbar-links">
            <li>
              <button
                className="button button__secondary"
                onClick={() => setIsDark(!isDark)}
              >
                {isDark ? "Lys" : "Mørk"} Modus
              </button>
            </li>
          </ul>
          <button id="menu-icon" onClick={() => toggleSidebar()}>
            {isOpen ? (
              <FontAwesomeIcon icon={faXmark}></FontAwesomeIcon>
            ) : (
              <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
            )}
          </button>
        </div>
        <aside id="sidebar" className="content container container-lg sidebar">
          <ul className="sidebar-links">
            <li>
              <a href="/">
                <span>Hjem</span>
              </a>
            </li>
            <li>
              <a href="/jobposts">
                <span>Se annonser</span>
              </a>
            </li>
            <li>
              <button
                className="button button__secondary"
                onClick={() => setIsDark(!isDark)}
              >
                {isDark ? "Lys" : "Mørk"} Modus
              </button>
            </li>
          </ul>
        </aside>
      </nav>
    </header>
  );
};

export default Navbar;
