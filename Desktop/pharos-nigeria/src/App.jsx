import React from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Community from "./pages/Community";
import Events from "./pages/Events";
import Members from "./pages/Members";

// Footer Component
import Footer from "./components/Footer";

export default function App() {
  return (
    <Router>
      {/* Navbar */}
      <nav className="bg-pharosGold text-nigeriaGreen p-4 flex justify-center gap-6 font-bold">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "underline text-white" : "text-nigeriaGreen hover:underline"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/community"
          className={({ isActive }) =>
            isActive ? "underline text-white" : "text-nigeriaGreen hover:underline"
          }
        >
          Community
        </NavLink>
        <NavLink
          to="/events"
          className={({ isActive }) =>
            isActive ? "underline text-white" : "text-nigeriaGreen hover:underline"
          }
        >
          Events
        </NavLink>
        <NavLink
          to="/members"
          className={({ isActive }) =>
            isActive ? "underline text-white" : "text-nigeriaGreen hover:underline"
          }
        >
          Members
        </NavLink>
      </nav>

      {/* Page Content */}
      <div className="transition-opacity duration-500 ease-in-out">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/community" element={<Community />} />
          <Route path="/events" element={<Events />} />
          <Route path="/members" element={<Members />} />
        </Routes>
      </div>

      {/* Footer */}
      <Footer />
    </Router>
  );
}
