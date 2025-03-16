import React, { useState, useEffect } from 'react';
import Navbar from '../Components/Admindashboard/Navbar';
import Sidebar from '../Components/Admindashboard/Sidebar';

const Employees = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isAddingDepartment, setIsAddingDepartment] = useState(false);
  const [isAddingEmployee, setIsAddingEmployee] = useState(false);
  const [newDepartment, setNewDepartment] = useState({ name: '', description: '' });
  const [newEmployee, setNewEmployee] = useState({ name: '', departmentId: '' });

  // Load departments from localStorage on component mount
  const [departments, setDepartments] = useState(() => {
    const savedDepartments = JSON.parse(localStorage.getItem('departments'));
    return savedDepartments || [
      { id: 1, name: 'HR', employees: 2 },
      { id: 2, name: 'IT', employees: 2 },
      { id: 3, name: 'Marketing', employees: 1 },
    ];
  });

  // Save departments to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('departments', JSON.stringify(departments));
  }, [departments]);

  // Filter departments based on search query
  const filteredDepartments = departments.filter((dept) =>
    dept.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleDelete = (id) => {
    setDepartments(departments.filter((dept) => dept.id !== id));
  };

  const handleAddDepartment = () => {
    const newDept = {
      id: departments.length + 1,
      name: newDepartment.name,
      employees: 0,
    };
    setDepartments([...departments, newDept]);
    setNewDepartment({ name: '', description: '' });
    setIsAddingDepartment(false);
  };

  const handleAddEmployee = () => {
    const updatedDepartments = departments.map((dept) =>
      dept.id === parseInt(newEmployee.departmentId)
        ? { ...dept, employees: dept.employees + 1 }
        : dept
    );
    setDepartments(updatedDepartments);
    setNewEmployee({ name: '', departmentId: '' });
    setIsAddingEmployee(false);
  };

  return (
    <div>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div className="w-full p-6">
          <div className="m-7">
            <h2 className="text-xl font-bold text-gray-800 text-center">Manage Departments</h2>
          </div>

          <div className="border-gray-300 rounded-lg h-14 m-4 px-4 flex items-center justify-between">
            <div className="flex items-center border-2 border-black rounded-md w-auto px-3 py-1">
              <input
                type="text"
                placeholder="Search by department"
                className="outline-none w-full text-s"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex space-x-3">
              <button
                onClick={() => setIsAddingEmployee(true)}
                className="bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-teal-700 transition duration-200"
              >
                Add Employee
              </button>
              <button
                onClick={() => setIsAddingDepartment(true)}
                className="bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-teal-700 transition duration-200"
              >
                Add Department
              </button>
            </div>
          </div>

          {isAddingDepartment && (
            <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
              <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                <h3 className="text-lg font-bold mb-4">Add New Department</h3>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">Department Name</label>
                  <input
                    type="text"
                    value={newDepartment.name}
                    onChange={(e) => setNewDepartment({ ...newDepartment, name: e.target.value })}
                    className="w-full border-2 border-gray-300 rounded-md p-2"
                    placeholder="Enter department name"
                  />
                </div>
                <div className="flex justify-end">
                  <button
                    onClick={handleAddDepartment}
                    className="bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-teal-700 mr-2"
                  >
                    Submit
                  </button>
                  <button
                    onClick={() => setIsAddingDepartment(false)}
                    className="bg-gray-400 text-white px-4 py-2 rounded-md hover:bg-gray-500"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          )}

          {isAddingEmployee && (
            <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
              <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                <h3 className="text-lg font-bold mb-4">Add New Employee</h3>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">Employee Name</label>
                  <input
                    type="text"
                    value={newEmployee.name}
                    onChange={(e) => setNewEmployee({ ...newEmployee, name: e.target.value })}
                    className="w-full border-2 border-gray-300 rounded-md p-2"
                    placeholder="Enter employee name"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">Department</label>
                  <select
                    value={newEmployee.departmentId}
                    onChange={(e) => setNewEmployee({ ...newEmployee, departmentId: e.target.value })}
                    className="w-full border-2 border-gray-300 rounded-md p-2"
                  >
                    <option value="">Select Department</option>
                    {departments.map((dept) => (
                      <option key={dept.id} value={dept.id}>
                        {dept.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="flex justify-end">
                  <button
                    onClick={handleAddEmployee}
                    className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 mr-2"
                  >
                    Add
                  </button>
                  <button
                    onClick={() => setIsAddingEmployee(false)}
                    className="bg-gray-400 text-white px-4 py-2 rounded-md hover:bg-gray-500"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          )}

          <div className="m-4 p-4 border rounded-lg shadow-lg bg-white">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border p-2">S No</th>
                  <th className="border p-2">Department</th>
                  <th className="border p-2">Employees</th>
                  <th className="border p-2">Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredDepartments.map((dept, index) => (
                  <tr key={dept.id} className="text-center hover:bg-gray-100">
                    <td className="border p-2">{index + 1}</td>
                    <td className="border p-2">{dept.name}</td>
                    <td className="border p-2">{dept.employees}</td>
                    <td className="border p-2">
                      <button
                        onClick={() => handleDelete(dept.id)}
                        className="bg-red-500 text-white px-4 py-1 rounded-md hover:bg-red-600"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Employees;
