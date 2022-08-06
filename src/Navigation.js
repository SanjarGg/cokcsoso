import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import ClientProvider from "./contexts/ClientProvider";
import AdminProvider from "./contexts/AdminProvider";
import AdminEditPage from "./Pages/AdminEditPage";
import AllProductPage from "./Pages/AllProductPage";
import BoxPage from "./Pages/BoxPage";
import MainPage from "./Pages/MainPage";
import UpdatePage from "./Pages/UpdatePage";
import AdminAddPage from "./Pages/AdminAddPage";
import RegularMakaroonsPage from "./Pages/RegularMakaroonsPage";
import BayPage from "./Pages/BayPage";

function Navigation() {
  return (
    <div>
      <ClientProvider>
        <AdminProvider>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/adminadd" element={<AdminAddPage />} />
              <Route path="/update" element={<UpdatePage />} />
              <Route path="/allsweets" element={<AllProductPage />} />
              <Route path="/onlybox" element={<BoxPage />} />
              <Route path="/onlymakaroons" element={<RegularMakaroonsPage />} />
              <Route path="/admin/edit/:id" element={<AdminEditPage />} />
              <Route path="/bay" element={<BayPage />} />
            </Routes>
          </BrowserRouter>
        </AdminProvider>
      </ClientProvider>
    </div>
  );
}

export default Navigation;
