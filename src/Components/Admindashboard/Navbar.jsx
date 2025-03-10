import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate(); 

    const handleLogout = () => {
  
      navigate('/login'); 
    };
  return (
    <div>
      <div className="h-14 bg-teal-600 flex items-center justify-between px-6 sm:px-6 text-white">
        <h3 className="text-lg font-semibold">Employee MS</h3>
        <div className="flex items-center gap-4">
          <span className="text-md">Welcome, Admin</span>
          <button 
            className="bg-gray-700 px-4 py-2 rounded-md hover:bg-gray-800 transition text-white"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
