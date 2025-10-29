import React from "react";
import educationimg from "../assets/educationimg.png";
import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";

const EducationSection = () => {
  return (
    <section className="flex flex-col lg:flex-row w-full bg-black text-white items-center justify-center px-10 py-16 gap-10">
      <div className="flex justify-center lg:w-1/2">
        <img src={educationimg} alt="Education" className="w-[90%] max-w-lg" />
      </div>

      <div className="flex flex-col lg:w-1/2 space-y-5">
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
          memberikan solusi nyata untuk mencegahnya. Kami berkomitmen
          menciptakan lingkungan digital yang aman, sehat, dan produktif bagi
          semua kalangan terutama generasi muda.
        </p>
      </div>

      <div className="flex flex-col ">
        <img src={icon1} alt="" className="w-22" />
        <h2> Program Edukasi Digital </h2>
        <p>
          Kami menyediakan berbagai materi edukatif yang interaktif dan mudah
          dipahami mulai dari pengenalan bahaya judi online, cara melindungi
          diri di dunia digital, hingga strategi membangun kebiasaan positif
          dalam menggunakan teknologi.
        </p>
        <img src={icon2} alt="" className="w-22" />
        <h2>Kolaborasi Komunitas & Lembaga</h2>
        <p>
          Out Gamble berkolaborasi dengan komunitas, sekolah, dan lembaga sosial
          untuk membangun gerakan sadar digital melalui pelatihan, seminar, dan
          kampanye online.
        </p>
        <img src={icon3} alt="" className="w-22" />
        <h2>Kemitraan Pemerintah & Organisasi Sosial</h2>
        <p>
          Kami juga bekerja sama dengan instansi pemerintah dan organisasi non
          profit untuk memperluas dampak gerakan anti-judi online.
        </p>
      </div>
    </section>
  );
};

export default EducationSection;
