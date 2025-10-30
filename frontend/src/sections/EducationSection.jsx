import React from "react";
import educationimg from "../assets/educationimg.png";
import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";

const EducationSection = () => {
  return (
    <section className="flex flex-col lg:flex-row w-full bg-black text-white items-center justify-between px-10 py-16 gap-10">
     
      <div className="flex-1 flex justify-center">
        <img
          src={educationimg}
          alt="Education"
          className="rounded-3xl w-[90%] max-w-[500px] object-cover"
        />
      </div>

      <div className="flex-1 flex flex-col space-y-6">
        <a
          href="#"
          className="font-semibold text-black bg-[#07AA4D] rounded-2xl px-5 py-2 w-fit"
        >
          Tentang Kami
        </a>

        <h1 className="text-3xl lg:text-4xl font-bold leading-snug">
          Edukasi Digital untuk Generasi{" "}
          <span className="text-[#07AA4D]">Bebas Judi Online</span>
        </h1>

        <p className="text-gray-300 leading-relaxed">
          Kami percaya bahwa kesadaran digital adalah kunci untuk masa depan
          yang lebih baik. Melalui Out Gamble, kami hadir sebagai platform
          edukasi yang membantu masyarakat memahami bahaya judi online dan
          memberikan solusi nyata untuk mencegahnya. Kami berkomitmen menciptakan
          lingkungan digital yang aman, sehat, dan produktif bagi semua kalangan
          terutama generasi muda.
        </p>

        <div className="flex flex-col space-y-5 mt-5">
          <div className="flex items-start gap-4">
            <img src={icon1} alt="Program Edukasi" className="w-18 h-18" />
            <div> 
              <h2 className="font-semibold text-lg text-[#07AA4D]">
                Program Edukasi Digital
              </h2>
              <p className="text-gray-300 text-sm leading-relaxed">
                Kami menyediakan berbagai materi edukatif yang interaktif dan
                mudah dipahami mulai dari pengenalan bahaya judi online, cara
                melindungi diri di dunia digital, hingga strategi membangun
                kebiasaan positif dalam menggunakan teknologi.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <img src={icon2} alt="Kolaborasi" className="w-18 h-18" />
            <div>
              <h2 className="font-semibold text-lg text-[#07AA4D]">
                Kolaborasi Komunitas & Lembaga
              </h2>
              <p className="text-gray-300 text-sm leading-relaxed">
                Out Gamble berkolaborasi dengan komunitas, sekolah, dan lembaga
                sosial untuk membangun gerakan sadar digital melalui pelatihan,
                seminar, dan kampanye online.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <img src={icon3} alt="Kemitraan" className="w-18 h-18" />
            <div>
              <h2 className="font-semibold text-lg text-[#07AA4D]">
                Kemitraan Pemerintah & Organisasi Sosial
              </h2>
              <p className="text-gray-300 text-sm leading-relaxed">
                Kami juga bekerja sama dengan instansi pemerintah dan organisasi
                non profit untuk memperluas dampak gerakan anti-judi online.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
