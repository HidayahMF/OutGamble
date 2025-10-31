import React from "react";
import atasmenghindari from "../assets/atasmenghindari.png";
import sampingmenghindari from "../assets/sampingmenghindari.png";

const Menghindari = () => {
  return (
    <section className="flex bg-black flex-col">
      <div className="flex justify-center ">
        <h1 className="font-semibold text-[50px] justify-center items-center text-white">
          Tiga Langkah Sederhana untuk
          <span className="text-[#05B14F] ">Menghindari Judi Online</span>
        </h1>
        <p className="text-white">
          Mulailah perubahan kecil hari ini. Dengan langkah yang tepat, kamu
          bisa terbebas dari kebiasaan judi dan menjalani hidup yang lebih
          tenang serta produktif.
        </p>
      </div>
      <div className="">
        <img src={atasmenghindari} alt="" className="w-[40%] ml-20" />
      </div>
      <div className="">
        <img src={sampingmenghindari} alt="" className="w-[7%]" />
      </div>
    </section>
  );
};

export default Menghindari;
