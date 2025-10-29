import React from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="bg-black flex rounded-full justify-center mt-4 mx-30 py-2.5 ">
      <div>
        <ul className="hidden md:flex space-x-25 font-regular text-gray-300">
          <li className=" my-5 text-[20px]  hover:text-[#05B14F] cursor-pointer">
            Tentang Kami
          </li>
          <li className="my-5 text-[20px]  hover:text-[#05B14F] cursor-pointer">
            Layanan Kami
          </li>
          <img
            src={logo}
            alt="OutGamble Logo"
            className="w-50 my-2.5  h-full"
          />
          <li className="my-5 text-[20px]  hover:text-[#05B14F] cursor-pointer">
            Testimonial
          </li>
          <li className="my-5 text-[20px]  hover:text-[#05B14F] cursor-pointer">
            Komunitas Kami
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
