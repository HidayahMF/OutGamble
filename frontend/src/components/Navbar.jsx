import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Menu, X } from "lucide-react"; 
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black flex rounded-full justify-center mt-4 mx-10 py-2.5 relative z-50">
    
      <div className="hidden md:block">
        <ul className="flex space-x-16 font-regular text-gray-300 items-center">
          <li className="my-5 text-[20px] hover:text-[#05B14F] cursor-pointer">
            Tentang Kami
          </li>
          <li className="my-5 text-[20px] hover:text-[#05B14F] cursor-pointer">
            Layanan Kami
          </li>
          <img
            src={logo}
            alt="OutGamble Logo"
            className="w-[190px] my-2.5 h-full"
          />
          <li className="my-5 text-[20px] hover:text-[#05B14F] cursor-pointer">
            Testimonial
          </li>
          <li className="my-5 text-[20px] hover:text-[#05B14F] cursor-pointer">
            Komunitas Kami
          </li>
        </ul>
      </div>

    
      <div className="md:hidden flex justify-between items-center w-full px-6">
      
        <img src={logo} alt="OutGamble Logo" className="w-[220px] h-[60px]" />

        {isOpen ? (
          <X
            size={30}
            className="text-[#05B14F] cursor-pointer"
            onClick={() => setIsOpen(false)}
          />
        ) : (
          <Menu
            size={30}
            className="text-[#05B14F] cursor-pointer"
            onClick={() => setIsOpen(true)}
          />
        )}
      </div>

      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-black rounded-2xl mt-2 py-5 flex flex-col items-center space-y-4 text-gray-300 font-medium md:hidden shadow-lg animate-fadeIn">
          <p className="hover:text-[#05B14F] cursor-pointer">Tentang Kami</p>
          <p className="hover:text-[#05B14F] cursor-pointer">Layanan Kami</p>
          <p className="hover:text-[#05B14F] cursor-pointer">Testimonial</p>
          <p className="hover:text-[#05B14F] cursor-pointer">Komunitas Kami</p>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
