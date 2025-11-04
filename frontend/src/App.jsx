import React from "react";
import { Routes, Route } from "react-router-dom";
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
import Footer from "./components/Footer.jsx";
import Pertanyaan from "./sections/Pertanyaan.jsx";
import OutGambleBot from "./pages/OutGambleBot.jsx";

const App = () => {
  return (
    <div className=" text-white min-h-screen flex flex-col">
      <Navbar />

      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/stats" element={<StatsSection />} />
          <Route path="/education" element={<EducationSection />} />
          <Route path="/layanankami" element={<LayananKami />} />
          <Route path="/community" element={<CommunitySection />} />
          <Route path="/chatbot" element={<Chatbot />} />
          <Route path="/cerita" element={<Cerita />} />
          <Route path="/menghindari" element={<Menghindari />} />
          <Route path="/berita" element={<Berita />} />
          <Route path="/statistik" element={<Statistik />} />
          <Route path="/educationvid" element={<EducationVid />} />
          <Route path="/pertanyaan" element={<Pertanyaan />} />
          <Route path="/OutGambleBot" element={<OutGambleBot />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
};

export default App;
