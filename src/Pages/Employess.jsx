import React, { useState, useEffect } from "react";
import Sidebar from "../Components/Admindashboard/Sidebar";
import Navbar from "../Components/Admindashboard/Navbar";
import Murali from "../assets/Murali.jpg";

const Employess = () => {
  const [data, setData] = useState([]);
  const [searchName, setSearchName] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [employeeForm, setEmployeeForm] = useState({ name: "", dob: "", department: "" });

  // Load employees from local storage on mount
  useEffect(() => {
    const storedEmployees = JSON.parse(localStorage.getItem("employees"));
    if (storedEmployees) {
      setData(storedEmployees);
    } else {
      setData([
        { id: 1, image: Murali, name: "John Doe", dob: "1990-01-01", department: "IT" },
        { id: 2, image: Murali, name: "Jane Smith", dob: "1995-05-15", department: "HR" },
        { id: 3, image: Murali, name: "Alice Brown", dob: "1992-09-23", department: "Marketing" },
      ]);
    }
  }, []);

  // Handle input change
  const handleChange = (e) => {
    setEmployeeForm({ ...employeeForm, [e.target.name]: e.target.value });
  };

  // Open Add/Edit Modal
  const openModal = (employee = null) => {
    setIsModalOpen(true);
    if (employee) {
      setIsEditMode(true);
      setSelectedEmployee(employee);
      setEmployeeForm(employee); // Pre-fill the form with existing employee data
    } else {
      setIsEditMode(false);
      setEmployeeForm({ name: "", dob: "", department: "" });
    }
  };

  // Add or Update Employee
  const saveEmployee = (e) => {
    e.preventDefault();
    let updatedData;
    if (isEditMode) {
      updatedData = data.map((emp) => (emp.id === selectedEmployee.id ? { ...emp, ...employeeForm } : emp));
    } else {
      const newEntry = { id: data.length + 1, image: Murali, ...employeeForm };
      updatedData = [...data, newEntry];
    }

    setData(updatedData);
    localStorage.setItem("employees", JSON.stringify(updatedData));
    setIsModalOpen(false);
  };

  // Filter employees by name
  const filteredEmployees = searchName
    ? data.filter((emp) => emp.name.toLowerCase().includes(searchName.toLowerCase()))
    : data;

  return (
    <div>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div className="w-full">
          <div className="m-7">
            <h3 className="text-xl font-bold text-center text-gray-800">Manage Employees</h3>
          </div>
          <div className="border-gray-300 flex items-center justify-between p-3 rounded-md w-full">
            <div className="border-2 border-black rounded-md h-10 px-2 flex items-center w-64">
              <input
                type="text"
                placeholder="Search by Name"
                value={searchName}
                onChange={(e) => setSearchName(e.target.value)}
                className="w-full outline-none text-sm"
              />
            </div>
            <button 
              onClick={() => openModal()} 
              className="bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-teal-700 transition duration-200"
            >
              Add New Employee
            </button>
          </div>

          {/* Table */}
          <div className="p-4">
            <table className="min-w-full border border-gray-300">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border p-2">S.No</th>
                  <th className="border p-2">Image</th>
                  <th className="border p-2">Name</th>
                  <th className="border p-2">DOB</th>
                  <th className="border p-2">Department</th>
                  <th className="border p-2">Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredEmployees.map((item, index) => (
                  <tr key={item.id} className="text-center">
                    <td className="border p-2">{index + 1}</td>
                    <td className="border p-2 flex justify-center items-center">
                      <img src={item.image} className="w-10 h-10 rounded-full" />
                    </td>
                    <td className="border p-2">{item.name}</td>
                    <td className="border p-2">{item.dob}</td>
                    <td className="border p-2">{item.department}</td>
                    <td className="border p-2">
                      <button 
                        className="bg-blue-500 text-white px-3 py-1 rounded mr-2"
                        onClick={() => openModal(item)}
                      >
                        Edit
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Modal for Adding/Editing Employee */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-bold mb-4">{isEditMode ? "Edit Employee" : "Add New Employee"}</h2>
            <form onSubmit={saveEmployee} className="flex flex-col gap-3">
              <input 
                type="text" 
                name="name" 
                value={employeeForm.name} 
                onChange={handleChange} 
                placeholder="Name" 
                className="border p-2 rounded w-full"
                required 
              />
              <input 
                type="date" 
                name="dob" 
                value={employeeForm.dob} 
                onChange={handleChange} 
                className="border p-2 rounded w-full"
                required 
              />
              <input 
                type="text" 
                name="department" 
                value={employeeForm.department} 
                onChange={handleChange} 
                placeholder="Department" 
                className="border p-2 rounded w-full"
                required 
              />
              <div className="flex justify-between mt-4">
                <button 
                  type="button" 
                  onClick={() => setIsModalOpen(false)} 
                  className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                >
                  Cancel
                </button>
                <button 
                  type="submit" 
                  className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                >
                  {isEditMode ? "Update" : "Add Employee"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Employess;
