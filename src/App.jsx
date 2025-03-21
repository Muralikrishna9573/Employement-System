import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from './Pages/Login';
import Admindashboard from './Pages/Admindashboard';
import Register from './Pages/Register';
import Sidebar from './Components/Admindashboard/Sidebar';
import Employess from './Pages/Employess';
import Departments from './Pages/Departments';
import Leaves from './Pages/Leaves';
import Salary from './Pages/Salary';

const App = () => {
  return (
    <BrowserRouter>
 
      <Routes>
        <Route path="/" element={<Navigate to="/admin-dashboard" />} />
        <Route path='/login' element={<Login/>}/>
    
       <Route path="/register" element={<Register />} />
       <Route path="/admin-dashboard" element={<Admindashboard />} />
       <Route path="/employees" element={<Employess/>}/>
       <Route path="/departments" element={<Departments/>}/>
       <Route path="/leaves" element={<Leaves/>}/>
       <Route path='/salary' element={<Salary/>}/>
       <Route path='*' element={<h1>Page Not Found</h1>}/>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
