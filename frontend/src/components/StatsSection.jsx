import React from "react";

const Statssection = () => {
  return (
    <section className="flex justify-center  bg-black">
      <div className="flex justify-center py-10">
        <div className="flex flex-wrap justify-center gap-16 bg-[#1C1C1C] border border-white text-white rounded-[40px] px-50 py-8 shadow-md max-md:gap-8 max-md:px-8 max-md:py-8">
          <div className="flex flex-col items-center">
            <h2 className="text-[48px] font-bold">
              10.000<span className="text-[#05B14F]">+</span>
            </h2>
            <p className="text-gray-300 text-[16px] mt-1">
              Pengunjung Teredukasi
            </p>
          </div>

          <div className="flex flex-col items-center">
            <h2 className="text-[48px] font-bold">
              5<span className="text-[#05B14F]">+</span>
            </h2>
            <p className="text-gray-300 text-[16px] mt-1">
              Tahun Kampanye Anti Judi
            </p>
          </div>

          <div className="flex flex-col items-center">
            <h2 className="text-[48px] font-bold">
              300<span className="text-[#05B14F]">+</span>
            </h2>
            <p className="text-gray-300 text-[16px] mt-1">
              Artikel & Konten Edukasi
            </p>
          </div>

          <div className="flex flex-col items-center">
            <h2 className="text-[48px] font-bold">
              99<span className="text-[#05B14F]">%</span>
            </h2>
            <p className="text-gray-300 text-[16px] mt-1">
              Tingkat Kepuasan Pengguna
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statssection;
