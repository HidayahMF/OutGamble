import React from "react";
import imgcommunityatas from "../assets/imgcommunityatas.png";
import kotakrightleft from "../assets/kotakrightleft.png";
import orang1 from "../assets/orang1.png";
import orang2 from "../assets/orang2.png";
import orang3 from "../assets/orang3.png";
import atascerita from "../assets/atascerita.png";
import "../index.css"; 

const Cerita = () => {
  const words = ["Edukasi", "Lindungi", "Deteksi", "Laporkan", "Sadar", "Bebas"];

  return (
    <section className="bg-black">
        <div className="relative bg-[#2F2F2F] py-16">
      <div className="absolute left-0 top-1/2 w-full -translate-y-1/2 rotate-[-3deg] overflow-hidden bg-white py-1 shadow-md">
        <div
          className="flex animate-scrollX font-extrabold text-black gap-8 items-center whitespace-nowrap"
          style={{ animation: "scrollX 20s linear infinite" }}
        >
        
          {Array(2)
            .fill(words)
            .flat()
            .map((text, index) => (
              <React.Fragment key={index}>
                <h1 className="text-[22px] md:text-[50px]">{text}</h1>
                <img
                  src={imgcommunityatas}
                  alt=""
                  className="w-6 md:w-10"
                />
              </React.Fragment>
            ))}
        </div>
        </div>
      </div>
      <div className="bg-black rounded-full flex justify-center py-2 mx-20 mt-10">
            <div className="">
            <h1 className="text-white"> Cerita dari Para Pejuang <span className="text-[#07AA4D]">Lepas Judi</span> </h1>
            <div className="">
            <p>Butuh keberanian besar untuk mengakui, tekad kuat untuk berubah, dan dukungan dari orang-orang di sekitar. Namun setiap langkah kecil menjauh dari judi adalah kemenangan besar atas diri sendiri.</p>
            </div>
            </div>
      </div>

    
      
    </section>
  );
};

export default Cerita;
