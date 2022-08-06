import React, { useState } from "react";
import "../navbar.css";
import { Link } from "react-router-dom";
import { TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { ClientContext } from "../contexts/ClientProvider";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  const [Mobile, setMobile] = useState(false);
  const { searchWord, setSeachWord, getMakaroons } =
    React.useContext(ClientContext);
  const [isOpen, setIsOpen] = useState(false);
  const pages = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "All",
      path: "/allsweets",
    },
    {
      name: "Only Box",
      path: "/onlybox",
    },
    {
      name: "Only Makaroons",
      path: "/onlymakaroons",
    },
  ];

  React.useEffect(() => {
    getMakaroons();
  }, [searchWord]);

  return (
    <div className="navbar-swip">
      <nav className="navbar">
        <div className="left-navbar">
          <div className="name-brand">
            <h3 className="logo">the Taste</h3>
          </div>
          <div className="just-input">
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
  );
};
export default Navbar;
