import React from "react";
import Navbar from "./components/Navbar.jsx";
import Home from "./sections/Home.jsx";
import StatsSection from "./sections/StatsSection.jsx";
import EducationSection from "./sections/EducationSection.jsx";
import LayananKami from "./pages/LayananKami.jsx";
import CommunitySection from "./pages/CommunitySection.jsx";
import Chatbot from "./sections/Chatbot.jsx";
import Cerita from "./sections/Cerita.jsx";
import Menghindari from "./sections/Menghindari.jsx";
import Berita from "./sections/Berita.jsx";
import Statistik from "./sections/Statistik.jsx";
import EducationVid from "./sections/EducationVid.jsx";

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
      <Cerita />
      <Menghindari />
      <Berita />
      <Statistik/>
      <EducationVid/>
    </div>
  );
};

export default App;
