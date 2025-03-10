import React from "react";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { HiOutlineBuildingOffice } from "react-icons/hi2";
import { FaMoneyBillWave } from "react-icons/fa6";
import { AiFillCarryOut } from "react-icons/ai";
import { ImFileText2 } from "react-icons/im";
import { ImHourGlass } from "react-icons/im";
import { ImCancelCircle } from "react-icons/im";

const Adminsummary = () => {
  return (
    <div className="w-full p-6">
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-gray-800 text-center">Dashboard Overview</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <SummaryCard title="Total Employees" value="5" icon={<BsFillPersonLinesFill />} color="bg-teal-600" />
        <SummaryCard title="Total Departments" value="3" icon={<HiOutlineBuildingOffice />} color="bg-orange-500" />
        <SummaryCard title="Monthly Pay" value="$2500" icon={<FaMoneyBillWave />} color="bg-green-500" />
      </div>

      <div className="border-2 border-gray-500 h-12 w-64 mx-auto my-12 flex justify-center items-center rounded-lg shadow-md bg-gray-100 cursor-pointer hover:bg-gray-300 transition duration-300 ease-in-out">
        <h3 className="text-lg font-semibold text-gray-700">Leave Details</h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <SummaryCard title="Leave Applied" value="2" icon={<ImFileText2 />} color="bg-teal-600" />
        <SummaryCard title="Leave Approved" value="2" icon={<AiFillCarryOut />} color="bg-green-500" />
        <SummaryCard title="Leave Pending" value="1" icon={<ImHourGlass />} color="bg-yellow-500" />
        <SummaryCard title="Leave Rejected" value="2" icon={<ImCancelCircle />} color="bg-red-500" />
      </div>
    </div>
  );
};

const SummaryCard = ({ title, value, icon, color }) => {
  return (
    <div className="bg-white w-full max-w-sm shadow-lg rounded-xl flex items-center overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-2xl mx-auto">
      <div className={`${color} w-20 h-full flex items-center justify-center`}>
        <div className="text-white text-3xl">{icon}</div>
      </div>
      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-700">{title}</h3>
        <p className="text-2xl font-bold text-gray-900">{value}</p>
      </div>
    </div>
  );
};

export default Adminsummary;
