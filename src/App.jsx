import "./Admin/assets/tailwind.css";
import Sidebar from "./Admin/layouts/Sidebar";
import Header from "./Admin/layouts/Header";
import Dashboard from "./Admin/pages/Dashboard";
import { Routes, Route } from "react-router-dom"; // Import Routes and Route
import Produk from "./Admin/pages/Produk";
import Artikel from "./Admin/pages/Artikel";
import Karyawan from "./Admin/pages/Karyawan";

function App() {
  return (
    <div id="app-container" className="bg-gray-100 min-h-screen flex">
      <div id="layout-wrapper" className="flex flex-row flex-1">
        <Sidebar />
        <div id="main-content" className="flex-1 p-4">
          <Header />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/produk" element={<Produk />} />
            <Route path="/artikel" element={<Artikel />} />
            <Route path="/karyawan" element={<Karyawan />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
