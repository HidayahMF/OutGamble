import React from "react";
import KomunitasOutGamble from "../assets/KomunitasOutGamble.png";
import img1komunitas from "../assets/img1komunitas.png";

const Community = () => {
  return (
    <section className="bg-black  ">
      <div className="flex flex-row">
        <div className="flex flex-col items-center justify-center">
          <img src={KomunitasOutGamble} alt="" className=" w-[30%]" />
          <div>
            <p className="font-regular text-center mt-5 text-[20px]">
              Temukan komunitas yang mendukung kesadaran digital dan membantu
              masyarakat menjauhi bahaya judi <br /> online. Bergabunglah untuk
              belajar, berbagi, dan tumbuh bersama dalam lingkungan positif!
            </p>
          </div>
        </div>
        <div className="flex flex-col">
          <img src={img1komunitas} alt="" />
          <div></div>
        </div>
      </div>
    </section>
  );
};

export default Community;
