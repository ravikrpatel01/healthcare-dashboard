import React from "react";
import { FaClinicMedical } from "react-icons/fa";

const Navbar = () => {
  return (
    <div id="nav" className="w-full fixed top-0 bg-[#272b32] h-[80px] border-b-[1px] border-emerald-500 text-white flex items-center justify-between px-10">
      <div id="logo" className="w-[75px] h-[75px] rounded-full p-1">
        <img className="w-full h-full" src="/logo-img.png" alt="" />
      </div>
      <div id="dashboard-heading">
        <h2 className="text-3xl flex items-center gap-3 text-emerald-700 font-bold"> <FaClinicMedical color="white" size={28} />HEALTHCARE - DASHBOARD</h2>
      </div>

      <div className="flex items-center gap-2">
        <div id="user-img" className="w-[50px] h-[50px] p-1 bg-gray-800 rounded-full border-2 border-emerald-700 flex items-center justify-center">
          <img
            className="w-full h-full rounded-full"
            src="/updated_photo.jpg"
            alt=""
          />
        </div>

        <div id="user-name">
          <h4 className="text-[1.2rem] font-semibold">Ravi Kumar Patel</h4>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
