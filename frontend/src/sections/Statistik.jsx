import React, { useState, useEffect } from "react";
import StatistikChart from "../components/StatistikChart";
import AOS from "aos";
import "aos/dist/aos.css";

import circle_man from "../assets/circle_man.png";
import circle_woman from "../assets/circle_woman.png";
import circle_child from "../assets/circle_child.png";

const Statistik = () => {
  const [selectedYear, setSelectedYear] = useState("2024");

  const dataByYear = {
    2020: [
      { name: "Januari", pria: 20, wanita: 15, anak: 5 },
      { name: "Februari", pria: 18, wanita: 12, anak: 4 },
      { name: "Maret", pria: 22, wanita: 17, anak: 6 },
    ],
    2021: [
      { name: "Januari", pria: 25, wanita: 20, anak: 7 },
      { name: "Februari", pria: 28, wanita: 18, anak: 5 },
      { name: "Maret", pria: 30, wanita: 22, anak: 8 },
    ],
    2022: [
      { name: "Januari", pria: 24, wanita: 18, anak: 6 },
      { name: "Februari", pria: 26, wanita: 19, anak: 7 },
      { name: "Maret", pria: 28, wanita: 21, anak: 8 },
    ],
    2023: [
      { name: "Januari", pria: 30, wanita: 25, anak: 9 },
      { name: "Februari", pria: 32, wanita: 27, anak: 10 },
      { name: "Maret", pria: 31, wanita: 26, anak: 9 },
    ],
    2024: [
      { name: "Januari", pria: 33, wanita: 28, anak: 10 },
      { name: "Februari", pria: 35, wanita: 30, anak: 12 },
      { name: "Maret", pria: 36, wanita: 31, anak: 13 },
    ],
  };

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="bg-black flex w-full lg:pt-20 md:pt-20 pt-15 justify-center">
      <div className="container flex flex-col lg:w-250 md:w-full w-full lg:px-0 md:px-5 px-5 lg:items-center md:items-start gap-3">
        <h1
          data-aos="fade-down"
          className="font-poppins font-bold text-white lg:text-[40px] md:text-[30px] text-[25px]"
        >
          Insight Kasus{" "}
          <span className="text-gradient text-[#07AA4D]">Judi Online</span>{" "}
          Tahunan
        </h1>
        <p
          data-aos="fade-down"
          className="font-poppins font-normal text-white lg:text-center lg:text-[14px] md:text-[14px] text-[12px] lg:w-205 md:w-170"
        >
          Dengan mengumpulkan data tahunan, kita dapat melihat tren peningkatan
          atau penurunan kasus keterlibatan judi online dari tahun ke tahun.
          Informasi ini penting untuk membantu pihak berwenang, lembaga
          pendidikan, dan masyarakat dalam menentukan strategi pencegahan,
          edukasi digital, serta rehabilitasi bagi korban kecanduan.
        </p>

        <div
          data-aos="fade-up"
          className="flex flex-col w-full px-5 py-6 bg-[#006034] rounded-[12.5px] mt-5"
        >
          <div className="flex lg:flex-row md:flex-row flex-col justify-between">
            <div className="flex flex-col gap-2">
              <h1 className="font-poppins font-semibold text-white lg:text-[25px] md:text-[25px] text-[20px]">
                Data <span className="text-gradient">Statistik</span> pertahun
              </h1>

              <div className="flex flex-row items-center gap-3.5">
                <h1 className="font-poppins font-semibold text-white lg:text-[13px] md:text-[13px] text-[12px]">
                  Kategori:
                </h1>

                <div className="flex flex-row gap-1.5 items-center">
                  <img src={circle_man} className="w-2.5 h-auto" alt="pria" />
                  <p className="font-poppins font-medium text-white text-[11px]">
                    Pria
                  </p>
                </div>

                <div className="flex flex-row gap-1.5 items-center">
                  <img
                    src={circle_woman}
                    className="w-2.5 h-auto"
                    alt="wanita"
                  />
                  <p className="font-poppins font-medium text-white text-[11px]">
                    Wanita
                  </p>
                </div>

                <div className="flex flex-row gap-1.5 items-center">
                  <img src={circle_child} className="w-2.5 h-auto" alt="anak" />
                  <p className="font-poppins font-medium text-white text-[11px]">
                    Anak-anak
                  </p>
                </div>
              </div>
            </div>

            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              className="font-poppins font-semibold lg:text-[13px] md:text-[13px] text-[12px] text-black bg-white rounded-[7px] outline-none py-2 px-3 w-20 h-10 lg:mt-0 md:mt-0 mt-4"
            >
              <option value="2020">2020</option>
              <option value="2021">2021</option>
              <option value="2022">2022</option>
              <option value="2023">2023</option>
              <option value="2024">2024</option>
            </select>
          </div>

          <StatistikChart data-aos="fade-up" data={dataByYear[selectedYear]} />
        </div>
      </div>
    </section>
  );
};

export default Statistik;
