import React from "react";
import gambarkiriberita from "../assets/gambarkiriberita.png";
import gambarberita1 from "../assets/gambarberita1.png";
import gambarberita2 from "../assets/gambarberita2.png";
import gambarberita3 from "../assets/gambarberita3.png";

const Berita = () => {
  return (
    <section className="bg-black">
      <div className="flex flex-row">
        <div className="flex flex-col">
          <h1 className="font-bold ml-20 text-[30px] text-white">
            Topik Terkini tentang{" "}
            <span className="text-[#07AA4D]"> Judi Online </span>
          </h1>
          <img src={gambarkiriberita} alt="" className="w-[45%] ml-20 mt-6" />
          <p className="text-white ml-20 mt-3">Senin 5 Januari, 2025</p>
          <h1 className="text-[#07AA4D] ml-20 text-[25px] font-semibold">
            Kominfo Blokir 1,9 Juta Konten Judi <br /> Online Sejak Juli 2023–22
            Mei 2024
          </h1>
          <p className="text-white text-[15px] ml-20 font-regular mt-3">
            Kementerian Komunikasi dan Informatika (Kominfo) <br /> menyebut
            telah memblokir 1.918.520 konten judi online...
          </p>
        </div>
        <div className="flex flex-col gap-10">
          <div className="flex gap-10 items-center ">
            <img src={gambarberita1} alt="" className="w-[30%]" />
            <div className="flex flex-col text-white">
              <p className="text-[15px]">Kamis 3 Desember, 2025</p>
              <h1 className="text-[#07AA4D] font-bold">
                Tingkat Candu Judi Online Seperti Zat Adiktif
              </h1>
              <p>
                Kementerian Kesehatan Republik Indonesia (Kemenkes)
                menyatakan...
              </p>
            </div>
          </div>
          <div className="flex gap-10 items-center ">
            <img src={gambarberita2} alt="" className="w-[30%]" />
            <div className="flex flex-col text-white">
              <p className="text-[15px]">Kamis 3 Desember, 2025</p>
              <h1 className="text-[#07AA4D] font-bold">
                Tingkat Candu Judi Online Seperti Zat Adiktif
              </h1>
              <p>
                Kementerian Kesehatan Republik Indonesia (Kemenkes)
                menyatakan...
              </p>
            </div>
          </div>
          <div className="flex gap-10 items-center ">
            <img src={gambarberita3} alt="" className="w-[30%]" />
            <div className="flex flex-col text-white">
              <p className="text-[15px]">Kamis 3 Desember, 2025</p>
              <h1 className="text-[#07AA4D] font-bold">
                Tingkat Candu Judi Online Seperti Zat Adiktif
              </h1>
              <p>
                Kementerian Kesehatan Republik Indonesia (Kemenkes)
                menyatakan...
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Berita;
