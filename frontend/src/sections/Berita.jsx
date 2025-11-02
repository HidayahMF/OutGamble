import React from "react";
import gambarkiriberita from "../assets/gambarkiriberita.png";
import gambarberita1 from "../assets/gambarberita1.png";
import gambarberita2 from "../assets/gambarberita2.png";
import gambarberita3 from "../assets/gambarberita3.png";

const Berita = () => {
  return (
    <section className="flex w-full bg-black lg:pt-20 md:pt-20 pt-15 justify-center">
      <div className="container flex flex-col lg:w-250 md:w-full w-full lg:px-0 md:px-5 px-5 gap-5">
        <h1
          data-aos="fade-down"
          className="font-poppins font-semibold text-white lg:text-[35px] md:text-[30px] text-[23px] w-fit"
        >
          Topik Terkini{" "}
          <span className="text-gradient text-[#07AA4D] "> Judi Online</span>
        </h1>
        <div className="flex lg:flex-row md:flex-row flex-col w-full justify-between">
          <a
            href="https://www.eatingwell.com/best-fruit-to-lower-dementia-risk-11777712?utm_source=chatgpt.com"
            data-aos="fade-right"
            className="flex flex-col lg:w-115 md:w-85 w-full gap-1 cursor-pointer"
          >
            <img
              src={gambarkiriberita}
              className="w-full h-auto object-contain"
              alt=""
            />
            <p className="font-poppins font-medium text-white lg:text-[14px] md:text-[13px] text-[13px] mt-2">
              Senin 5 Januari, 2025
            </p>
            <h1 className="font-poppins font-semibold text-[#07AA4D]  lg:text-[23px] md:text-[20px] text-[20px] line-clamp-2">
              Kominfo Blokir 1,9 Juta Konten Judi Online Sejak Juli 2023–22 Mei
              2024
            </h1>
            <p className="font-poppins font-normal text-white lg:text-[15px] md:text-[14px] text-[14px] line-clamp-2">
              Kementerian Komunikasi dan Informatika (Kominfo) menyebut telah
              memblokir 1.918.520 konten judi online...
            </p>
          </a>
          <div
            data-aos="fade-left"
            className="flex flex-col justify-between lg:gap-0 md:gap-0 gap-5 lg:mt-0 md:mt-0 mt-5"
          >
            <a
              href="https://timesofindia.indiatimes.com/life-style/health-fitness/health-news/3-effective-science-backed-ways-to-keep-the-brain-healthy/articleshow/122836896.cms?utm_source=chatgpt.com"
              className="flex flex-row items-center gap-5 cursor-pointer"
            >
              <img
                src={gambarberita1}
                className="lg:w-40 md:w-35 w-25 lg:h-35 md:h-30 h-25 object-cover rounded-[12.5px]"
                alt=""
              />
              <div className="flex flex-col lg:w-80 md:w-50 w-full lg:gap-0 md:gap-1 gap-1">
                <p className="font-poppins font-medium text-white lg:text-[14px] md:text-[13px] text-[12px]">
                  Kamis 3 Desember, 2025
                </p>
                <h1 className="font-poppins font-semibold text-[#07AA4D]  lg:text-[23px] md:text-[16px] text-[14px] line-clamp-2">
                  Tingkat Candu Judi Online Seperti Zat Adiktif
                </h1>
                <p className="font-poppins font-normal text-white lg:text-[15px] md:text-[13px] text-[11px] line-clamp-2">
                  Kementerian Kesehatan Republik Indonesia (Kemenkes)
                  menyatakan...
                </p>
              </div>
            </a>
            <a
              href="https://www.womanandhome.com/health-wellbeing/covid-19-brain-age-study/?utm_source=chatgpt.com"
              className="flex flex-row items-center gap-5 cursor-pointer"
            >
              <img
                src={gambarberita2}
                className="lg:w-40 md:w-35 w-25 lg:h-35 md:h-30 h-25 object-cover rounded-[12.5px]"
                alt=""
              />
              <div className="flex flex-col lg:w-80 md:w-50 w-full lg:gap-0 md:gap-1 gap-1">
                <p className="font-poppins font-medium text-white lg:text-[14px] md:text-[13px] text-[12px]">
                  Selasa 5 Februari, 2025
                </p>
                <h1 className="font-poppins font-semibold text-[#07AA4D]  lg:text-[23px] md:text-[16px] text-[14px] line-clamp-2">
                  Kerugian Akibat Judi Online Bisa Capai Rp 1.000T
                </h1>
                <p className="font-poppins font-normal text-white lg:text-[15px] md:text-[13px] text-[11px] line-clamp-2">
                  Laporan dari Kementerian Komunikasi dan Informatika menyebut
                  bahwa kerugian...
                </p>
              </div>
            </a>
            <a
              href="https://timesofindia.indiatimes.com/life-style/health-fitness/health-news/stress-and-brain-tumors-separating-fact-from-fiction/articleshow/121706760.cms?utm_source=chatgpt.com"
              className="flex flex-row items-center gap-5 cursor-pointer"
            >
              <img
                src={gambarberita3}
                className="lg:w-40 md:w-35 w-25 lg:h-35 md:h-30 h-25 object-cover rounded-[12.5px]"
                alt=""
              />
              <div className="flex flex-col lg:w-80 md:w-50 w-full lg:gap-0 md:gap-1 gap-1">
                <p className="font-poppins font-medium text-white lg:text-[14px] md:text-[13px] text-[12px]">
                  Jumat 15 Maret, 2025
                </p>
                <h1 className="font-poppins font-semibold text-[#07AA4D]  lg:text-[23px] md:text-[16px] text-[14px] line-clamp-2">
                  komdigi Kembali Tutup Situs dan Akun Judi
                </h1>
                <p className="font-poppins font-normal text-white lg:text-[15px] md:text-[13px] text-[11px] line-clamp-2">
                  Kementerian Komunikasi dan Digital (Kemkomdigi) menutup situs
                  dan akun...
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Berita;
