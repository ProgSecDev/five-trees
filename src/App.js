// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";

import Nav from "./Components/Nav";
import "./App.css";
import Recipes from "./Screens/Recipes";
import FiveTreesPage from "./Sections/FiveTreesPage";
import AboutUs from "./Sections/About Us/AboutUs";
import Products from "./Sections/Products/Products";

const AppContent = () => {
  const location = useLocation();

  return (
    <>
      {location.pathname !== "/recipes" && <Nav />}

      <Routes>
        <Route path="/" element={<FiveTreesPage />} />
        <Route path="/fivetreespage" element={<FiveTreesPage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/product" element={<Products />} />
        <Route path="/recipes" element={<Recipes />} />
      </Routes>
    </>
  );
};

const App = () => {
  return (
    <Router basename="/">
      <AppContent />
    </Router>
  );
};

export default App;