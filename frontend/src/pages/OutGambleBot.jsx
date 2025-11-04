import React from "react";
import left_arrowbot from "../assets/left_arrowbot.png";
import logoout from "../assets/logoout.png";
import { Link } from "react-router-dom";
// import ikon1 from "../assets/icon1.png";
// import ikon2 from "../assets/icon2.png";
// import ikon3 from "../assets/icon3.png";

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

      <div className="text-center mt-6 px-5">
        <h1 className="text-2xl font-bold">
          Hai, Teman <span className="text-green-500">OutGamble</span>
        </h1>
        <h2 className="text-xl font-semibold mt-2">
          Ada yang bisa aku bantu hari ini?
        </h2>
        <p className="text-gray-300 text-sm mt-3">
          Pilih salah satu pertanyaan di bawah atau langsung tulis pertanyaanmu
          untuk mulai ngobrol bareng OutGamble.
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center gap-5 mt-8 px-6">
        <div className="bg-gradient-to-b from-green-500 to-green-700 rounded-xl p-5 w-full md:w-1/4 flex flex-col items-center text-center">
          {/* <img src={ikon1} alt="icon" className="w-8 mb-3" /> */}
          <p className="text-sm">
            Bantu bikin rutinitas biar nggak ketrigger buka situs aneh lagi.
          </p>
        </div>

        <div className="bg-gradient-to-b from-green-500 to-green-700 rounded-xl p-5 w-full md:w-1/4 flex flex-col items-center text-center">
          {/* <img src={ikon2} alt="icon" className="w-8 mb-3" /> */}
          <p className="text-sm">
            Aturin jadwal harian biar nggak gatel ngeklik deposit.
          </p>
        </div>

        <div className="bg-gradient-to-b from-green-500 to-green-700 rounded-xl p-5 w-full md:w-1/4 flex flex-col items-center text-center">
          {/* <img src={ikon3} alt="icon" className="w-8 mb-3" /> */}
          <p className="text-sm">
            Kasih saran kegiatan seru biar aku lupa sama jackpot palsu.
          </p>
        </div>
      </div>

      <div className="mt-auto px-6 py-6 flex justify-center">
        <div className="bg-white w-full md:w-3/4 rounded-full flex items-center justify-between px-5 py-3">
          <input
            type="text"
            placeholder="Tulis pertanyaan anda di sini..."
            className="flex-1 outline-none text-black text-sm placeholder-gray-500"
          />
          <div className="flex items-center gap-3">
            {/* <img src={micIcon} alt="mic" className="w-5 cursor-pointer" /> */}
            {/* <img src={sendIcon} alt="send" className="w-5 cursor-pointer" /> */}
            <button className="bg-green-600 p-2 rounded-full hover:bg-green-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default OutGambleBot;
