import React from "react";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import StatsSection from "./components/Statssection.jsx";
import EducationSection from "./components/EducationSection.jsx";

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
