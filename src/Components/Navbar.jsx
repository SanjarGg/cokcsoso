import React, { useState } from "react";
import "../navbar.css";
import { Link } from "react-router-dom";
import { TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { ClientContext } from "../contexts/ClientProvider";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  const [Mobile, setMobile] = useState(false);
  const { searchWord, setSearchWord, getMakaroons } =
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
    <div className="navbar">
      <h3 className="logo">the Taste</h3>
      <div className="nav-left">
        <ul
          className={Mobile ? "nav-links-mobile" : "nav-links"}
          onClick={() => setMobile(false)}
        >
          {pages.map((page) => (
            <Link to={page.path} className="home">
              <li>{page.name}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="menu">
        <MenuIcon onClick={() => setIsOpen(!isOpen)} />
      </div>
      {isOpen && (
        <div className="mobile-nav">
          <ul>
            {pages.map((page) => (
              <Link to={page.path} className="home">
                <li>{page.name}</li>
              </Link>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
