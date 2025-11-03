import React, { useState } from "react";
import arrow_bottom from "../assets/arrow_bottom.png";

const Pertanyaan = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section className="flex bg-black w-full justify-center lg:py-20 md:py-20 py-15">
      <div className="container flex lg:flex-row md:flex-row flex-col lg:w-250 md:w-full w-full lg:px-0 md:px-5 px-5 justify-between items-center">
        <div
          data-aos="fade-right"
          className="flex flex-col lg:w-110 md:w-80 gap-4"
        >
          <h1 className="font-poppins font-regular text-white bg-[#05B14F] py-2 px-2.5 rounded-[7px] lg:text-[11px] md:text-[11px] text-[10px] w-fit">
            Frequently asked question
          </h1>
          <h1 className="font-poppins font-semibold text-white lg:text-[35px] md:text-[25px] text-[27px] lg:leading-[130%]">
            Pertanyaan yang Sering{" "}
            <span className="text-gradient text-[#05B14F]">Diajukan</span>
          </h1>
          <p className="font-poppins font-regular text-white text-[11px]">
            Masih bingung tentang bahaya judi online? Tenang saja, kami sudah
            merangkum beberapa pertanyaan yang paling sering ditanyakan supaya
            kamu bisa lebih paham dan tahu cara melindungi diri dari pengaruh
            judi online.
          </p>
        </div>

        <div
          data-aos="fade-left"
          className="flex flex-col lg:w-120 md:w-95 w-full gap-6 lg:mt-0 md:mt-0 my-6"
        >
          <div className="flex flex-col bg-[#05B14F] rounded-[17px] px-5 py-4 transition-all duration-300 ease-in-out">
            <div className="flex flex-row w-full justify-between items-center">
              <h1 className="font-poppins font-semibold lg:text-[20px] md:text-[18px]">
                Apa itu Brainwest?
              </h1>
              <img
                src={arrow_bottom}
                onClick={() => toggleFaq(1)}
                className={`lg:w-7 md:w-6 w-8 h-auto object-contain transition-transform duration-300 ease-in-out cursor-pointer ${
                  openFaq === 1 ? "rotate-180" : "rotate-0"
                }`}
                alt=""
              />
            </div>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openFaq === 1 ? "max-h-[500px] mt-4" : "max-h-0"
              }`}
            >
              <p className="font-poppins font-medium text-[12.5px] text-[#404040]">
                Brainwest adalah platform digital berbentuk web yang menyediakan
                edukasi seputar otak, layanan pemindaian tumor otak, serta
                konsultasi dengan dokter spesialis neurologi dan bedah saraf.
              </p>
            </div>
          </div>

          <div className="flex flex-col bg-[#05B14F]  rounded-[17px] px-5 py-4 transition-all duration-300 ease-in-out">
            <div className="flex flex-row w-full justify-between items-center">
              <h1 className="font-poppins font-semibold lg:text-[20px] md:text-[18px] mr-5">
                Apakah data saya aman?
              </h1>
              <img
                src={arrow_bottom}
                onClick={() => toggleFaq(2)}
                className={`lg:w-7 md:w-6 w-8 h-auto object-contain transition-transform duration-300 ease-in-out cursor-pointer ${
                  openFaq === 2 ? "rotate-180" : "rotate-0"
                }`}
                alt=""
              />
            </div>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openFaq === 2 ? "max-h-[500px] mt-4" : "max-h-0"
              }`}
            >
              <p className="font-poppins font-medium text-[12.5px] text-[#404040]">
                Ya, data Anda dijamin aman. Brainwest menerapkan sistem keamanan
                data yang ketat dan mengikuti standar enkripsi untuk menjaga
                privasi serta kerahasiaan informasi pengguna.
              </p>
            </div>
          </div>

          <div className="flex flex-col bg-[#05B14F] rounded-[17px] px-5 py-4 transition-all duration-300 ease-in-out">
            <div className="flex flex-row w-full justify-between items-center">
              <h1 className="font-poppins font-semibold lg:text-[20px] md:text-[18px] mr-5">
                Apakah artikel edukasi di sini bisa dipercaya?
              </h1>
              <img
                src={arrow_bottom}
                onClick={() => toggleFaq(3)}
                className={`lg:w-7 md:w-6 w-8 h-auto object-contain transition-transform duration-300 ease-in-out cursor-pointer ${
                  openFaq === 3 ? "rotate-180" : "rotate-0"
                }`}
                alt=""
              />
            </div>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openFaq === 3 ? "max-h-[500px] mt-4" : "max-h-0"
              }`}
            >
              <p className="font-poppins font-medium text-[12.5px] text-[#404040]">
                Tentu. Artikel edukasi yang tersedia di Brainwest ditulis dan
                ditinjau oleh tenaga medis profesional serta tim ahli di bidang
                neurologi. Kami memastikan bahwa semua informasi bersumber dari
                referensi terpercaya dan diperbarui secara berkala.
              </p>
            </div>
          </div>

          <div className="flex flex-col bg-[#05B14F] rounded-[17px] px-5 py-4 transition-all duration-300 ease-in-out">
            <div className="flex flex-row w-full justify-between items-center">
              <h1 className="font-poppins font-semibold lg:text-[20px] md:text-[18px] mr-5">
                Bisakah saya konsultasi tanpa hasil scan otak?
              </h1>
              <img
                src={arrow_bottom}
                onClick={() => toggleFaq(4)}
                className={`lg:w-7 md:w-6 w-8 h-auto object-contain transition-transform duration-300 ease-in-out cursor-pointer ${
                  openFaq === 4 ? "rotate-180" : "rotate-0"
                }`}
                alt=""
              />
            </div>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openFaq === 4 ? "max-h-[500px] mt-4" : "max-h-0"
              }`}
            >
              <p className="font-poppins font-medium text-[12.5px] text-[#404040]">
                Ya, Anda tetap bisa melakukan konsultasi meskipun belum memiliki
                hasil scan otak. Dokter akan melakukan asesmen awal berdasarkan
                keluhan yang Anda sampaikan dan dapat merekomendasikan tindakan
                lanjutan bila diperlukan.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pertanyaan;
