import React from "react";
import left_arrowbot from "../assets/left_arrowbot.png";
import logoout from "../assets/logoout.png";

const OutGambleBot = () => {
  return (
    <section className="bg-black flex flex-row">
      <div className="flex flex-row items-center font-semibold text-white text-[20px] gap-5 ml-10">
        <img src={left_arrowbot} alt="" className="w-[10%]" />
        Back
      </div>
      <div className="flex flex-row ">
        <div className="flex justify-center items-center">
          <img
            src={logoout}
            alt=""
            className="w-[70%] justify-center items-center"
          />
        </div>
      </div>
    </section>
  );
};

export default OutGambleBot;
