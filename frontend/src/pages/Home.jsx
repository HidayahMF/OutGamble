import React from "react";
import oranghome from "../assets/oranghome.png";
import bulathome from "../assets/bulathome.png";
import bercak3 from "../assets/bercak3.png";
import gridicons from "../assets/gridicons.png";
import bintang5 from "../assets/bintang5.png";
const Home = () => {
  return (
    <section className="bg-white relative py-16 ">
      <img src={bulathome} alt="grid" className="absolute w-20 ml-18" />

      <div className="flex justify-center py-8 text-[60px] font-bold text-center relative">
        <p className="text-black">
          Memberdayakan Generasi <br /> Cerdas untuk{" "}
          <span className="text-[#05B14F] relative inline-block">
            Menjauhi Judi Online
            <img
              src={bercak3}
              alt="decor"
              className="absolute -right-18 top-3.5 w-15"
            />
          </span>
        </p>
      </div>

      <div className="relative flex items-start font-regular text-gray-800 ml-20 mt-5 leading-relaxed max-w-xl">
        <img
          src={gridicons}
          alt="grid"
          className="absolute left-0 top-0.5 w-5 opacity-80"
        />

        <p className="pl-2 text-justify leading-relaxed tracking-wide">
          Out Gamble hadir sebagai platform edukatif yang membantu pelajar dan
          masyarakat memahami bahaya judi online.  Melalui informasi, tips, dan
          solusi digital yang interaktif, kami berkomitmen membangun generasi
          sadar dan bebas dari kecanduan judi.
        </p>
      </div>

      <button className="text-white font-medium mx-27 my-5 px-6 py-3 rounded-full bg-gradient-to-br from-[#005625] to-[#05B14F]">
        Cari Tips & Saran
      </button>

      <div className="flex  justify-center items-center w-full top-96">
        <img src={oranghome} alt="grid" className="absolute  w-90" />{" "}
      </div>
    </section>
  );
};

export default Home;
