import React from 'react'
import SIdebar from '../Components/Admindashboard/SIdebar'
import Adminsummary from '../Components/Admindashboard/Adminsummary'
import Navbar from '../Components/Admindashboard/Navbar'

const Admindashboard = () => {
  return (
    <div className='' >
      
        <Navbar/>
        <div className='flex flex-1'>
        <SIdebar/>
        <Adminsummary/>
      
        </div>
    </div>
  )
}

export default Admindashboard

