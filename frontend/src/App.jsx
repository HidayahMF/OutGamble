import React from "react";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import StatsSection from "./pages/Statssection.jsx";
import EducationSection from "./pages/EducationSection.jsx";

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-black">
        <Home />
      </div>
      <StatsSection />
      <EducationSection />
    </div>
  );
};

export default App;
