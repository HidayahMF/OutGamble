import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./sections/Home.jsx";
import StatsSection from "./sections/StatsSection.jsx";
import EducationSection from "./sections/EducationSection.jsx";
import LayananKami from "./sections/LayananKami.jsx";
import CommunitySection from "./sections/CommunitySection.jsx";
import Chatbot from "./sections/Chatbot.jsx";
import Cerita from "./sections/Cerita.jsx";
import Menghindari from "./sections/Menghindari.jsx";
import Berita from "./sections/Berita.jsx";
import Statistik from "./sections/Statistik.jsx";
import EducationVid from "./sections/EducationVid.jsx";
import Footer from "./components/Footer.jsx";
import Pertanyaan from "./sections/Pertanyaan.jsx";
import OutGambleBot from "./pages/OutGambleBot.jsx";
import Community from "./pages/Community.jsx";

const App = () => {
  const location = useLocation();

  const hideLayout = location.pathname === "/OutGambleBot";

  return (
    <div className="text-white min-h-screen flex flex-col">
      {!hideLayout && <Navbar />}

      <div className="grow">
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
          <Route path="/komunitas" element={<Community />} />
        </Routes>
      </div>

      {!hideLayout && <Footer />}
    </div>
  );
};

export default App;
