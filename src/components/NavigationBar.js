import React from "react";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  const handleNavigation = (event) => {
    let element = document.querySelectorAll(".active");
    element.forEach(function (el) {
      el.classList.toggle("active");
    });
    event.target.classList.add("active");
  };
  return (
    <div className="nav-wrraper">
      NavigationBar
      <div className="hero-section"></div>
      <nav className="nav-bar">
        <ul>
          <li>
            <Link
              to={"/"}
              onClick={(event) => handleNavigation(event)}
              className="active"
            >
              Find Your film
            </Link>
          </li>
          <li>
            <Link
              to={"/watch-list"}
              onClick={(event) => handleNavigation(event)}
            >
              My Watchlist
            </Link>
          </li>
          <li></li>
        </ul>
      </nav>
    </div>
  );
};

export default NavigationBar;
