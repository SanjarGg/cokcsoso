import React, { useState } from "react";
import "../navbar.css";
import { Link } from "react-router-dom";
import { ClientContext } from "../contexts/ClientProvider";

const Navbar = () => {
  const [Mobile, setMobile] = useState(false);
  const { searchWord, setSeachWord, getMakaroons } =
    React.useContext(ClientContext);

  React.useEffect(() => {
    getMakaroons();
  }, [searchWord]);
  return (
    <>
      <div className="navbar-swip">
        <nav className="navbar">
          <h3 className="logo">the Taste</h3>
          <div className="input-search">
            <input
              type="text"
              value={searchWord}
              onChange={(e) => {
                setSeachWord(e.target.value);
              }}
              placeholder="Найти Вкусняшку..."
              inputProps={{ "aria-label": "search" }}
            />
          </div>
          <ul
            className={Mobile ? "nav-links-mobile" : "nav-links"}
            onClick={() => setMobile(false)}
          >
            <Link to="/" className="text-navbar">
              <li>Home</li>
            </Link>
            <Link to="/allsweets" className="text-navbar">
              <li>All</li>
            </Link>
            <Link to="/onlybox" className="text-navbar">
              <li>Only Box</li>
            </Link>
            <Link to="/onlymakaroons" className="text-navbar">
              <li>Only Makaroons</li>
            </Link>
          </ul>
        </nav>
      </div>
    </>
  );
};
export default Navbar;
