import React from "react";
import { Link } from "react-router-dom";
import chatbot from "../assets/chatbot.png";

const Chatbot = () => {
  return (
    <section className="bg-black text-white flex flex-col md:flex-row items-center justify-center py-16 px-8 md:px-20 gap-10">
      <div className="relative flex justify-center items-center w-full md:w-[45%]">
        <img
          src={chatbot}
          alt="OG-Bot"
          className="flex mr-30 w-[250px] md:w-[470px]"
        />
      </div>

      <div className="flex flex-col w-full md:w-[50%] text-left">
        <h1 className="font-bold text-[32px] md:text-[46px] leading-tight mb-4">
          <span className="text-[#05B14F]">Anti-Gambling</span> Assistant
        </h1>

        <p className="text-[16px] md:text-[20px] text-gray-200 leading-relaxed mb-8">
          OG-Bot adalah chatbot cerdas yang siap menemanimu kapan saja untuk
          memahami dan melawan bahaya judi online. Cukup dengan ngobrol seperti
          biasa, Masbro akan memberikan informasi, saran, dan edukasi seputar
          cara menghindari kecanduan judi digital dengan cara yang ringan dan
          mudah dipahami. Cocok banget buat kamu yang ingin belajar dengan
          santai tapi tetap bermanfaat.
        </p>

        <Link
          to="/OutGambleBot"
          className="bg-gradient-to-br from-[#005625] to-[#05B14F] text-white font-semibold px-8 py-4 rounded-full text-[18px] w-fit hover:scale-105 transition-transform duration-300"
        >
          Chat Sekarang
        </Link>
      </div>
    </section>
  );
};

export default Chatbot;
