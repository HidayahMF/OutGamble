import React from "react";
import communityimg1 from "../assets/communityimg1.png";
import imgcommunityatas from "../assets/imgcommunityatas.png";
import gariscommunity from "../assets/gariscommunity.png";
import communityimg2 from "../assets/communityimg2.png";
import komunitasicon from "../assets/komunitasicon.png";
import rightarrow from "../assets/rightarrow.png";

const CommunitySection = () => {
  return (
    <section className="bg-black py-16 w-full">
      <div className="relative overflow-hidden bg-black py-4">
        <div
          className="flex animate-scrollX font-bold text-white gap-8 justify-center items-center whitespace-nowrap"
          style={{ animation: "scrollX 20s linear infinite" }}
        >
          <h1 className="text-[22px] md:text-[50px]">Edukasi</h1>
          <img src={imgcommunityatas} alt="" className="w-10 md:w-12" />
          <h1 className="text-[22px] md:text-[50px]">Lindungi</h1>
          <img src={imgcommunityatas} alt="" className="w-10 md:w-12" />
          <h1 className="text-[22px] md:text-[50px]">Deteksi</h1>
          <img src={imgcommunityatas} alt="" className="w-10 md:w-12" />
          <h1 className="text-[22px] md:text-[50px]">Laporkan</h1>
          <img src={imgcommunityatas} alt="" className="w-10 md:w-12" />
          <h1 className="text-[22px] md:text-[50px]">Sadar</h1>
          <img src={imgcommunityatas} alt="" className="w-10 md:w-12" />
          <h1 className="text-[22px] md:text-[50px]">Bebas</h1>

          <h1 className="text-[22px] md:text-[50px]">Edukasi</h1>
          <img src={imgcommunityatas} alt="" className="w-10 md:w-12" />
          <h1 className="text-[22px] md:text-[50px]">Lindungi</h1>
          <img src={imgcommunityatas} alt="" className="w-10 md:w-12" />
          <h1 className="text-[22px] md:text-[50px]">Deteksi</h1>
          <img src={imgcommunityatas} alt="" className="w-10 md:w-12" />
          <h1 className="text-[22px] md:text-[50px]">Laporkan</h1>
          <img src={imgcommunityatas} alt="" className="w-10 md:w-12" />
          <h1 className="text-[22px] md:text-[50px]">Sadar</h1>
          <img src={imgcommunityatas} alt="" className="w-10 md:w-12" />
          <h1 className="text-[22px] md:text-[50px]">Bebas</h1>
        </div>
      </div>

      <div className="flex justify-center">
        <img src={gariscommunity} alt="" className="w-[93%]" />
      </div>

     <div className="flex flex-col md:flex-row justify-between items-start ml-10 mt-15 gap-6 md:gap-12">
  
  <div className="md:w-[50%]">
    <h1 className="text-white font-bold text-[28px] md:text-[36px] leading-tight">
      Mengubah Kesadaran <br /> Menjadi{" "}
      <span className="text-[#07AA4D]">Gerakan Nyata</span>
    </h1>
  </div>

  <div className="md:w-[50%]">
    <p className="text-white text-[15px] md:text-[16px] leading-relaxed">
      Kami percaya bahwa kesadaran digital adalah kunci untuk masa depan
      yang lebih baik. Melalui Out Gamble, kami hadir sebagai platform edukasi
      yang membantu masyarakat memahami bahaya judi online dan memberikan solusi
      nyata untuk mencegahnya.
    </p>
  </div>
</div>


      
       <div className="flex justify-center">
  <img
    src={communityimg1}
    alt="Platform Edukasi Digital Aman"
    className="rounded-[15px] w-[80%] md:w-[95%] mt-10 object-cover"
  />
</div>

     

     
      <div className="flex flex-col lg:flex-row justify-between   mt-20 gap-10">
        
        <div className="w-full lg:w-[50%] ">
          <img
            src={communityimg2}
            alt="Komunitas Anti Judi"
            className=""
          />
        </div>

       
        <div className="w-full lg:w-[45%] flex flex-col justify-center">
          <div className="flex items-center gap-2 mb-5 bg-[#05B14F] px-5 py-2 rounded-2xl w-fit">
            <img src={komunitasicon} alt="" className="w-5 h-5" />
            <p className="text-white  font-medium text-[14px]">Komunitas</p>
          </div>
          <h1 className="text-white font-bold text-[28px] md:text-[40px] leading-tight">
            Bergabung di Komunitas{" "}
            <span className="text-[#05B14F]">Edukasi Anti Judi</span>
          </h1>
          <p className="text-white text-[17px] mt-3">
            Temukan ruang aman untuk saling berbagi pengalaman, berdiskusi, dan
            belajar bersama mengenai bahaya judi online. Di komunitas ini, kamu
            bisa bertemu dengan  orang-orang yang memiliki semangat yang sama
            untuk menciptakan perubahan positif.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-6">
            <a
              href="#"
              className="bg-linear-to-br text-[20px] from-[#005625] to-[#05B14F] text-white font-semibold px-6 py-3 rounded-full hover:scale-105 transition-transform"
            >
              Gabung Sekarang
            </a>
            <a
              href="#"
              className="text-[#07AA4D] font-semibold flex items-center gap-2 hover:underline text-[20px]"
            >
              Lihat Komunitas <img src={rightarrow} alt="" className="w-7 " />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
