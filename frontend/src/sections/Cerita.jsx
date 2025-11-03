import React, { useState } from "react";
import imgcommunityatas from "../assets/imgcommunityatas.png";
import rightcerita from "../assets/rightcerita.png";
import leftcerita from "../assets/leftcerita.png";
import atascerita from "../assets/atascerita.png";
import "../index.css";
import { words, people } from "../data/CeritaData";

const Cerita = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="bg-white flex flex-col overflow-hidden">
      <div className="relative bg-[#2F2F2F] py-16 flex flex-col">
        <div className="absolute left-0 top-1/2 w-full -translate-y-1/2 -rotate-3 overflow-hidden bg-white py-1 shadow-md">
          <div
            className="flex animate-scrollX font-extrabold text-black gap-8 items-center whitespace-nowrap"
            style={{ animation: "scrollX 20s linear infinite" }}
          >
            {Array(2)
              .fill(words)
              .flat()
              .map((text, index) => (
                <React.Fragment key={index}>
                  <h1 className="text-[22px] md:text-[50px]">{text}</h1>
                  <img src={imgcommunityatas} alt="" className="w-6 md:w-10" />
                </React.Fragment>
              ))}
          </div>
        </div>
      </div>

      <div className="relative flex flex-col items-center justify-center text-center pt-24 pb-44">
        <img
          src={atascerita}
          alt="Background bulat"
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[105%] max-w-[1700px] z-0"
        />

        <div className="relative z-10 text-white max-w-3xl px-8 mt-10">
          <h1 className="text-[32px] md:text-[40px] font-bold mb-4">
            Cerita dari Para Pejuang{" "}
            <span className="text-[#07AA4D]">Lepas Judi</span>
          </h1>
          <p className="text-[15px] md:text-[16px] text-gray-300 leading-relaxed">
            Butuh keberanian besar untuk mengakui, tekad kuat untuk berubah, dan
            dukungan dari orang-orang di sekitar. Namun setiap langkah kecil
            menjauh dari judi adalah kemenangan besar atas diri sendiri.
          </p>
        </div>

        <div className="relative z-20 flex justify-center items-end gap-25 mt-32">
          {people.map((person, i) => (
            <div
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`w-[90px] h-[90px] md:w-[110px] md:h-[110px] rounded-full overflow-hidden border-4 ${
                activeIndex === i ? "border-[#07AA4D]" : "border-transparent"
              } hover:border-[#07AA4D] transition-all duration-300 shadow-lg cursor-pointer transform ${
                i === 0 || i === 6
                  ? "translate-y-2"
                  : i === 1 || i === 5
                  ? "translate-y-20"
                  : i === 2 || i === 4
                  ? "translate-y-35"
                  : "translate-y-40"
              } ${activeIndex === i ? "scale-125" : "scale-100"}`}
            >
              <img
                src={person.img}
                alt={`orang${i}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center bg-white py-8 ">
        <div className="relative flex flex-col items-center justify-center bg-white rounded-xl px-8 md:px-16 py-12 shadow-md border border-gray-300 max-w-5xl w-full mx-4">
          <img
            src={leftcerita}
            alt="left"
            className="absolute -left-10 top-1/2 -translate-y-1/2 bg-[#07AA4D] hover:bg-green-600 text-white w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center shadow-md transition cursor-pointer"
          />

          <img
            src={rightcerita}
            alt="right"
            className="absolute -right-10 top-1/2 -translate-y-1/2 bg-[#07AA4D] hover:bg-green-600 text-white w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center shadow-md transition cursor-pointer"
          />

          <h1 className="text-[24px] md:text-[28px] font-bold text-[#07AA4D] mb-1">
            {people[activeIndex].nama}
          </h1>
          <h2 className="text-[18px] md:text-[20px] font-semibold text-gray-400 mb-4">
            {people[activeIndex].kota}
          </h2>

          <p className="text-gray-700 font-medium text-center leading-relaxed max-w-3xl">
            {people[activeIndex].cerita}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Cerita;
