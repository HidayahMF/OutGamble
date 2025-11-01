import React from "react";
import atasmenghindari from "../assets/atasmenghindari.png";
import sampingmenghindari from "../assets/sampingmenghindari.png";

const Menghindari = () => {
  return (
    <section className="bg-black text-white py-16 px-8 flex flex-col items-center">
      <div className="text-center max-w-3xl mb-10">
        <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
          Tiga Langkah Sederhana untuk{" "}
          <span className="text-[#05B14F]">Menghindari Judi Online</span>
        </h1>
        <p className="text-gray-300 mt-4 text-lg">
          Mulailah perubahan kecil hari ini. Dengan langkah yang tepat, kamu
          bisa terbebas dari kebiasaan judi dan menjalani hidup yang lebih
          tenang serta produktif.
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-12 max-w-6xl">
        <div className="relative flex flex-col items-center w-full md:w-[45%]">
          <img
            src={atasmenghindari}
            alt="People discussion"
            className="rounded-3xl mr-30 mt-10 w-[82%] 
             border-[#05B14F]"
          />
        </div>

        <div className="flex flex-col gap-8 w-full md:w-[50%]">
          <div className="flex items-start ">
            <div className="flex flex-col items-center">
              <img
                src={sampingmenghindari}
                alt="Stop button"
                className="absolute w-[6%] justify-center border-[#05B14F]"
              />
            </div>
            <div className="">
              <h3 className="text-xl font-bold ml-26.5  text-[#05B14F]">
                Langkah 1: Kenali Pemicu
              </h3>
              <p className="text-gray-300 ml-26.5 mt-2">
                Sadari kapan dan kenapa kamu tergoda berjudi. Setelah tahu
                penyebabnya, isi waktu luangmu dengan hal yang lebih bermanfaat
                seperti olahraga, membaca, atau ngobrol dengan teman.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-6">
            <div className="flex flex-col  items-center">
              <div className="h-full w-0.5 bg-[#05B14F] my-2"></div>
            </div>
            <div>
              <h3 className="text-xl ml-20 font-bold text-[#05B14F]">
                Langkah 2: Batasi Akses
              </h3>
              <p className="text-gray-300 ml-20 mt-2">
                Batasi akses ke situs atau aplikasi yang berisiko. Gunakan
                pengingat waktu atau blocker agar kamu tetap fokus pada hal
                positif.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-6">
            <div className="flex flex-col items-center"></div>
            <div>
              <h3 className="text-xl font-bold ml-20 text-[#05B14F]">
                Langkah 3: Cari Dukungan
              </h3>
              <p className="text-gray-300 mt-2 ml-20">
                Kalau mulai merasa kesulitan, mintalah bantuan dari orang
                terdekat atau komunitas pendukung. Dukungan kecil bisa jadi
                kekuatan besar untuk memulai hidup baru.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menghindari;
