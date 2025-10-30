import React from "react";
import rightarrow from "../assets/rightarrow.png";
import bulatlayanan from "../assets/bulatlayanan.png";
import deteksilayanan from "../assets/deteksilayanan.png";
import deteksiqr from "../assets/deteksiqr.png";
import tandaserulayanan from "../assets/tandaserulayanan.png";

const LayananKami = () => {
  return (
    <section className="relative flex flex-col items-center justify-center w-full py-20 bg-gradient-to-br from-[#005625] to-[#05B14F] overflow-hidden">
    
      <img
        src={bulatlayanan}
        alt="Ornament"
        className="absolute right-0 top-10 w-[120px] opacity-80"
      />

      
      <div className="w-full max-w-[1200px] px-10 flex flex-col gap-6">
        
        <div>
          <a
            href="#"
            className="font-semibold text-white bg-[#05B14F] rounded-full px-5 py-2 text-sm"
          >
            Layanan Kami
          </a>

          <h1 className="text-white text-3xl lg:text-4xl font-bold leading-snug mt-3">
            Perlindungan Digital untuk{" "}
            <br className="hidden md:block" />
            Internet yang Lebih Aman
          </h1>

          <p className="text-white/90 font-regular max-w-3xl mt-3 leading-relaxed text-[15px]">
            Out Gamble menyediakan fitur cerdas untuk membantu masyarakat
            mendeteksi dan melaporkan aktivitas judi online secara cepat, mudah,
            dan aman.
          </p>
        </div>

       
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 ">
          
          <div className="bg-white rounded-xl p-8 flex flex-col gap-4 hover:shadow-2xl transition duration-300">
            <img
              src={tandaserulayanan}
              alt="icon"
              className="w-[100px] h-[100px] "
            />
            <h2 className="text-[#05B14F] font-bold text-2xl ">
              Pelaporan Judi Online
            </h2>
            <p className="text-gray-600 font-semibold text-[14px] leading-relaxed">
              Fitur untuk melaporkan situs, aplikasi, atau akun yang terindikasi
              mengandung judi online secara anonim dan aman.
            </p>
            <div className="flex justify-end mt-3">
              <img src={rightarrow} alt="arrow" className="w-8" />
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 flex flex-col gap-4 hover:shadow-2xl transition duration-300">
            <img
              src={deteksilayanan}
              alt="icon"
              className="w-[100px] h-[100px] "
            />
            <h2 className="text-[#05B14F] font-bold text-2xl ">
              Deteksi Situs Judi
            </h2>
            <p className="text-gray-600 font-semibold  text-[14px]  leading-relaxed">
              Gunakan sistem deteksi otomatis kami untuk memeriksa apakah suatu
              situs berpotensi terkait dengan aktivitas judi online.
            </p>
            <div className="flex justify-end mt-3">
              <img src={rightarrow} alt="arrow" className="w-8" />
            </div>
          </div>

        
          <div className="bg-white rounded-xl p-8 flex flex-col gap-4 hover:shadow-2xl transition duration-300">
            <img
              src={deteksiqr}
              alt="icon"
              className="w-[100px] h-[100px]"
            />
            <h2 className="text-[#05B14F] font-bold text-2xl">
              Deteksi QR Code Judi
            </h2>
            <p className="text-gray-600 font-semibold text-[14px]  leading-relaxed">
              Pindai QR code dari brosur, situs, atau media sosial untuk
              mengetahui apakah mengarah ke situs judi atau konten berisiko.
            </p>
            <div className="flex justify-end ">
              <img src={rightarrow} alt="arrow" className="w-8" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LayananKami;
