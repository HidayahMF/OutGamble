import React from "react";
import Navbar from "./components/Navbar.jsx";
import Home from "./sections/Home.jsx";
import StatsSection from "./sections/StatsSection.jsx";
import EducationSection from "./sections/EducationSection.jsx";
import LayananKami from "./pages/LayananKami.jsx";
import CommunitySection from "./pages/CommunitySection.jsx";
import Chatbot from "./sections/Chatbot.jsx";

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-black">
        <Home />
      </div>
      <StatsSection />
      <EducationSection />
      <LayananKami />
      <CommunitySection />
      <Chatbot />
    </div>
  );
};

export default App;
