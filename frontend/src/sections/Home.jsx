import React from "react";
import oranghome from "../assets/oranghome.png";
import bulathome from "../assets/bulathome.png";
import bercak3 from "../assets/bercak3.png";
import gridicons from "../assets/gridicons.png";
import bintang5 from "../assets/bintang5.png";
import belakangorang from "../assets/belakangorang.png";

const Home = () => {
  return (
    <section className="bg-white relative py-8 md:py-16 rounded-b-[50px] md:rounded-b-[150px] overflow-hidden">
      <img 
        src={bulathome} 
        alt="grid" 
        className="absolute w-12 md:w-20 ml-8 md:ml-18 top-4 md:top-auto" 
      />

      <div className="flex justify-center py-4 md:py-8 px-4 md:px-0 text-3xl md:text-[60px] font-bold text-center relative">
        <p className="text-black">
          Memberdayakan Generasi <br /> Cerdas untuk{" "}
          <span className="text-[#05B14F] relative inline-block">
            Menjauhi Judi Online
            <img
              src={bercak3}
              alt="decor"
              className="absolute -right-8 md:-right-18 top-1 md:top-3.5 w-8 md:w-15"
            />
          </span>
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-start px-4 md:px-20 mt-5 gap-8 md:gap-0">
        <div className="relative flex font-regular text-gray-800 leading-relaxed max-w-full md:max-w-xl">
          <img
            src={gridicons}
            alt="grid"
            className="absolute -right-4 md:right-145 top-0.5 w-4 md:w-5 opacity-80"
          />

          <p className="pr-0 md:pr-40 text-justify text-sm md:text-base">
            Out Gamble hadir sebagai platform edukatif yang membantu pelajar dan
            masyarakat memahami bahaya judi online. Melalui informasi, tips, dan
            solusi digital yang interaktif, kami berkomitmen membangun generasi
            sadar dan bebas dari kecanduan judi.
          </p>
        </div>

        <button className="relative md:absolute text-white font-medium mt-0 md:mt-35 px-6 py-3 rounded-full bg-linear-to-br from-[#005625] to-[#05B14F] text-sm md:text-base">
          Cari Tips & Saran
        </button>

        <div className="flex flex-col items-center md:items-end mr-0 md:mr-5 mt-8 md:mt-20 text-center md:text-right">
          <img src={bintang5} alt="bintang" className="w-28 md:w-40 mb-2" />
          <p className="font-bold text-2xl md:text-[40px] leading-none">5+ Tahun</p>
          <p className="font-semibold text-base md:text-[20px]">
            Pengalaman Edukasi Digital
          </p>
        </div>
      </div>

      <div className="flex justify-center items-center mt-8 md:mt-0 relative">
        <img
          src={oranghome}
          alt="grid"
          className="absolute z-10 w-120 mt-60 "
        />
        <img
          src={belakangorang}
          alt=""
          className="absolute mt-95 w-120 z-1"
        />
      </div>

      <div className="flex justify-end mr-40 mt-10 ">
        <img src={bulathome} alt="" className=" w-30 " />
      </div>

      <div className="flex justify-center py-6 md:py-10">
        <div className="z-20 flex flex-col sm:flex-row items-center gap-3 px-4 py-3 backdrop-blur-lg bg-black/10 border border-white rounded-full shadow-lg">
          <button className="px-6 md:px-8 py-4 md:py-5 rounded-full font-semibold text-white bg-[#05B14F] hover:scale-105 transition-transform duration-200 shadow-md text-sm md:text-base">
            Mulai Sekarang
          </button>

          <button className="px-6 md:px-8 py-4 md:py-5 rounded-full font-medium text-white border border-white/50 hover:bg-white/10 hover:scale-105 transition-all duration-200 text-sm md:text-base">
            Pelajari Lebih Lanjut
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;