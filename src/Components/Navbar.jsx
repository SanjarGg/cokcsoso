import React, { useState } from "react";
import "../navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [Mobile, setMobile] = useState(false);
  return (
    <>
      <nav className="navbar">
        <h3 className="logo">the Taste</h3>
        <ul
          className={Mobile ? "nav-links-mobile" : "nav-links"}
          onClick={() => setMobile(false)}
        >
          <Link to="/" className="home">
            <li>Home</li>
          </Link>
          <Link to="/allsweets" className="All">
            <li>All</li>
          </Link>
          <Link to="/onlybox" className="Onlu-box">
            <li>Only Box</li>
          </Link>
          <Link to="/onlymakaroons" className="Onlu-makaroons">
            <li>Only Makaroons</li>
          </Link>
        </ul>
      </nav>
    </>
  );
};
export default Navbar;
