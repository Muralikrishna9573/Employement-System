import React from 'react';
import { NavLink } from 'react-router-dom';
import { MdSpaceDashboard, MdDensitySmall } from "react-icons/md";
import { CgCalendarDates } from "react-icons/cg";
import { FaMoneyCheckAlt } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { IoPersonSharp } from "react-icons/io5";


const Sidebar = () => {
  return (
<div className="h-screen bg-gray-100 md:w-72 w-20 flex flex-col items-center md:items-start md:border-r-2 md:border-r-teal-600 rounded-2xl p-2 md:p-4 gap-4 bg-white">
<NavLink to="/admin-dashboard" className="flex items-center gap-3 p-2 hover:bg-teal-600 rounded-md w-full">
        <MdSpaceDashboard size={24}  />
        <span className="text-lg font-medium hidden md:block">Dashboard</span>
      </NavLink>
      <NavLink to="/employees" className="flex items-center gap-3 p-2 hover:bg-teal-600 rounded-md w-full">
        <IoPersonSharp size={24} />
        <span className="text-lg font-medium hidden md:block">Employees</span>
      </NavLink>
      <NavLink to="/departments" className="flex items-center gap-3 p-2 hover:bg-teal-600 rounded-md w-full">
        <MdDensitySmall size={24} />
        <span className="text-lg font-medium hidden md:block">Departments</span>
      </NavLink>
      <NavLink to="/leaves" className="flex items-center gap-3 p-2 hover:bg-teal-600 rounded-md w-full">
        <CgCalendarDates size={24} />
        <span className="text-lg font-medium hidden md:block">Leaves</span>
      </NavLink>
      <NavLink to="/salary" className="flex items-center gap-3 p-2 hover:bg-teal-600 rounded-md w-full">
        <FaMoneyCheckAlt size={24} />
        <span className="text-lg font-medium hidden md:block">Salary</span>
      </NavLink>
      <NavLink to="/settings" className="flex items-center gap-3 p-2 hover:bg-teal-600 rounded-md w-full">
        <IoMdSettings size={24} />
        <span className="text-lg font-medium hidden md:block">Settings</span>
      </NavLink>
    </div>
  );
};

export default Sidebar;
