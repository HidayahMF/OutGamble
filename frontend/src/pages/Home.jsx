import React from "react";
import oranghome from "../assets/oranghome.png";
import bulathome from "../assets/bulathome.png";
import bercak3 from "../assets/bercak3.png";
import gridicons from "../assets/gridicons.png";
import bintang5 from "../assets/bintang5.png";
import belakangorang from "../assets/belakangorang.png";

const Home = () => {
  return (
    <section className="bg-white relative py-16 rounded-b-[150px] ">
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

      <div className="flex justify-between items-start px-20 mt-5">
        <div className="relative flex font-regular text-gray-800 leading-relaxed max-w-xl">
          <img
            src={gridicons}
            alt="grid"
            className="absolute right-145 top-0.5 w-5 opacity-80"
          />

          <p className=" pr-40 text-justify">
            Out Gamble hadir sebagai platform edukatif yang membantu pelajar dan
            masyarakat memahami bahaya judi online. Melalui informasi, tips, dan
            solusi digital yang interaktif, kami berkomitmen membangun generasi
            sadar dan bebas dari kecanduan judi.
          </p>
        </div>
        <button className="absolute text-white  font-medium mt-35 px-6 py-3 rounded-full bg-gradient-to-br from-[#005625] to-[#05B14F]">
          Cari Tips & Saran
        </button>

        <div className="flex flex-col items-end mr-5 mt-20 text-right">
          <img src={bintang5} alt="bintang" className="w-40 mb-2" />
          <p className="font-bold text-[40px] leading-none">5+ Tahun</p>
          <p className="font-semibold text-[20px]">
            Pengalaman Edukasi Digital
          </p>
        </div>
      </div>

      <div className="flex justify-center items-center">
        <img
          src={oranghome}
          alt="grid"
          className="absolute top-75 z-10 w-135"
        />
        <img
          src={belakangorang}
          alt=""
          className="absolute w-132 top-100 right-122 "
        />
      </div>

      <div className="flex ml-320 mt-15   w-30">
        <img src={bulathome} alt="" className="" />
      </div>
      <div className="flex justify-center py-10">
        <div className="flex items-center gap-3 px-4 py-3 backdrop-blur-lg bg-black/10 border border-white rounded-full shadow-lg">
          <button className="px-8 py-5 rounded-full font-semibold text-white bg-[#05B14F] hover:scale-105 transition-transform duration-200 shadow-md">
            Mulai Sekarang
          </button>

          <button className="px-8 py-5 rounded-full font-medium text-white border border-white/50 hover:bg-white/10 hover:scale-105 transition-all duration-200">
            Pelajari Lebih Lanjut
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;
