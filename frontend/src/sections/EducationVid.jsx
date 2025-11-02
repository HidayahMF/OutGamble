import React from "react";
import Video from "../data/Video";

const EducationVid = () => {
  return (
    <section className="flex w-full lg:pt-20 md:pt-20 pt-10 justify-center bg-[#0C0C0C]">
      <div className="container flex flex-col items-center lg:px-0 md:px-5 px-5 gap-3">
        {/* JUDUL */}
        <h1
          data-aos="fade-down"
          className="font-bold text-white lg:text-[40px] md:text-[30px] text-[25px] text-center"
        >
          <span className="text-gradient text-[#07AA4D]">
            Edukasi Judi Online:
          </span>{" "}
          Pahami, Hindari, dan Lawan
        </h1>

        {/* DESKRIPSI */}
        <p
          data-aos="fade-down"
          className="font-poppins font-normal text-white text-center lg:text-[14px] md:text-[13px] text-[12px] max-w-3xl"
        >
          Tonton berbagai video singkat yang akan bantu kamu memahami lebih
          dalam tentang bahaya judi online! Dari dampaknya pada mental, cara
          pencegahan, sampai kisah nyata yang menginspirasi untuk berhenti
          berjudi.
        </p>

        {/* GRID VIDEO */}
        <div
          className="grid grid-cols-3 lg:mt-7 md:mt-5 mt-3 justify-items-center"
          style={{ columnGap: "30px", rowGap: "40px" }}
        >
          {Video.length > 0 ? (
            Video.map((vid) => (
              <a
                data-aos="zoom-in"
                href={vid.link}
                key={vid.id}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer flex flex-col bg-white rounded-[12px] p-4 gap-1.5
        max-w-[340px] w-full
        hover:scale-[1.02] transition-all duration-300"
              >
                <img
                  src={vid.image}
                  className="w-full h-auto object-contain rounded-[8px]"
                  alt={vid.name}
                />

                <h1 className="font-poppins font-semibold lg:text-[20px] md:text-[18px] text-[16px] mt-2 line-clamp-2">
                  {vid.name}
                </h1>

                <p className="font-poppins font-medium text-[#757575] text-[11px] line-clamp-3">
                  {vid.desc}
                </p>

                <div className="flex flex-row mt-3 items-center gap-2">
                  <img
                    src={vid.person}
                    className="w-8.5 h-auto object-contain rounded-full"
                    alt={vid.creator}
                  />
                  <div className="flex flex-col">
                    <h1 className="font-poppins font-semibold text-[12px]">
                      {vid.creator}
                    </h1>
                    <p className="font-poppins font-medium text-[#838383] text-[11px]">
                      {vid.date}
                    </p>
                  </div>
                </div>
              </a>
            ))
          ) : (
            <p className="text-white font-poppins text-sm">
              Belum ada video edukasi.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default EducationVid;
