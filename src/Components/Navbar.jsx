import React, { useState } from "react";
import "../navbar.css";
import { Link } from "react-router-dom";
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
      name: "Sale",
      path: "/onlybox",
    },
    {
      name: "food",
      path: "/onlymakaroons",
    },
  ];
  React.useEffect(() => {
    getMakaroons();
  }, [searchWord]);

  return (
    <div className="Container">
      <div className="navbar">
        <h3 className="logo">Coocksoo</h3>
        <div className="search-inp">
          <input
            placeholder="Найти Блюдо..."
            type="text"
            value={searchWord}
            onChange={(e) => {
              setSeachWord(e.target.value);
            }}
          />
        </div>

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
    </div>
  );
};

export default Navbar;
