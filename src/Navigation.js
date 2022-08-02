import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import AdminPage from "./Pages/AdminPage";
import AllProductPage from "./Pages/AllProductPage";
import BoxPage from "./Pages/BoxPage";
import MainPage from "./Pages/MainPage";

function Navigation() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/allsweets" element={<AllProductPage />} />
          <Route path="/onlybox" element={<BoxPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Navigation;
