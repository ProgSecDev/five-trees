// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";

import Nav from "./Components/Nav";
import "./App.css";
import FiveTreesPage from "./Sections/FiveTreesPage";
import AboutUs from "./Sections/About Us/AboutUs";
import Products from "./Sections/Products/Products";
import Media from "./Sections/Media/Media";
import ContactUs from "./Sections/Contact Us/ContactUs";
import ScrollToTop from "../src/Components/ScrollToTop";

const AppContent = () => {
  const location = useLocation();

  

  return (
    <>

    <ScrollToTop />
      {location.pathname !== "/recipes" && <Nav />}

      <Routes>
        <Route path="/" element={<FiveTreesPage />} />
        <Route path="/fivetreespage" element={<FiveTreesPage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/product" element={<Products />} />
        <Route path="/media" element={<Media />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;