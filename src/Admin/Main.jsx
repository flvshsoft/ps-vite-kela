import { createRoot } from "react-dom/client";
import "./Main.css";
import "bootstrap/dist/css/bootstrap.min.css";

import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Produk from "./pages/Produk";
import Artikel from "./pages/Artikel";

console.log("Aplikasi sedang dijalankan...");

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" />} /> {/* Default Redirect */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/produk" element={<Produk />} />
          <Route path="/artikel" element={<Artikel />} />
        </Routes>
      </div>
    </Router>
  );
};

createRoot(document.getElementById("root")).render(<App />);
