import React from "react";
import left_arrowbot from "../assets/left_arrowbot.png";
import logoout from "../assets/logoout.png";
import { Link } from "react-router-dom";
import ikon1chatbot from "../assets/ikon1chatbot.png";
import ikon2chatbot from "../assets/ikon2chatbot.png";
import ikon3chatbot from "../assets/ikon3chatbot.png";
import mic from "../assets/mic.png";
import send from "../assets/send.png";
import depaninput from "../assets/depaninput.png";

const OutGambleBot = () => {
  return (
    <main className="bg-black min-h-screen text-white flex flex-col">
      <header className="flex items-center gap-3 text-lg font-semibold px-6 py-5">
        <img src={left_arrowbot} alt="back" className="w-5 cursor-pointer" />
        <span>
          <Link to="/">Back</Link>
        </span>
      </header>

      <div className="flex justify-center items-center mt-5">
        <img src={logoout} alt="OutGamble Logo" className="w-24 h-24" />
      </div>

      <div className="ml-70 mt-6 px-5">
        <h1 className="text-[40px] font-semibold">
          Hai, Teman <span className="text-green-500">OutGamble</span>
        </h1>
        <h2 className="text-[35px] font-semibold mt-2">
          Ada yang bisa aku bantu hari ini?
        </h2>
        <p className="text-gray-300 text-sm mt-3">
          Pilih salah satu pertanyaan di bawah atau langsung tulis pertanyaanmu
          untuk mulai ngobrol bareng OutGamble.
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center gap-5 mt-8 px-6">
        <div className=" bg-linear-to-br from-[#005625] to-[#05B14F] rounded-xl  p-5 md:w-[20%] flex flex-col  ">
          <img src={ikon1chatbot} alt="icon" className="w-8 mb-3" />
          <p className="text-semibold">
            Bantu bikin rutinitas biar nggak ketrigger buka situs aneh lagi.
          </p>
        </div>

        <div className=" bg-linear-to-br from-[#005625] to-[#05B14F] rounded-xl p-5 w-full md:w-[20%] flex flex-col  ">
          <img src={ikon2chatbot} alt="icon" className="w-8 mb-3" />
          <p className="text-semibold">
            Aturin jadwal harian biar nggak gatel ngeklik deposit.
          </p>
        </div>

        <div className="bg-linear-to-br from-[#005625] to-[#05B14F] rounded-xl p-5 w-full md:w-[20%] flex flex-col  ">
          <img src={ikon3chatbot} alt="icon" className="w-8 mb-3" />
          <p className="text-semibold">
            Kasih saran kegiatan seru biar aku lupa sama jackpot palsu.
          </p>
        </div>
      </div>

      <div className="mt-auto px-6 py-6 flex justify-center">
        <div className="bg-white w-full md:w-[63%] rounded-2xl flex items-center justify-between px-3 py-2">
          <img src={depaninput} alt="" className="w-14   cursor-pointer" />
          <input
            type="text"
            placeholder="Tulis pertanyaan anda di sini..."
            className="flex-1 outline-none text-black text-sm placeholder-gray-500"
          />
          <div className="flex items-center gap-3">
            <img src={mic} alt="mic" className="w-9 cursor-pointer" />
            <img src={send} alt="send" className="w-12 cursor-pointer" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default OutGambleBot;
