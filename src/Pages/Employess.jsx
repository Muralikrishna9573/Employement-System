import React from 'react'
import Sidebar from '../Components/Admindashboard/Sidebar'
import Navbar from '../Components/Admindashboard/Navbar'

const Employess = () => {
  return (
    <div>
      <Navbar/>
      <div className='flex'>
        <Sidebar/>
        <div className='w-full '>
          <div className='m-7'>
            <h3 className='text-xl font-bold text-center text-gray-800'>Mange Employees</h3>
            
          </div>
          <div className=" border-gray-300 flex items-center justify-between p-3 rounded-md w-full">
 
            <div className="border-2 border-black rounded-md h-10 px-2 flex items-center w-64">
            <input 
            type="text" 
            placeholder="Search by ID"
            className="w-full outline-none text-sm"
           />
           </div>
           <button className="bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-teal-700 transition duration-200">
           Add New Employee
           </button>
          </div>

          
        </div>
      </div>
      
    </div>
  )
}

export default Employess
