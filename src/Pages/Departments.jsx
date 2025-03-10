import React, { useState } from 'react';
import Navbar from '../Components/Admindashboard/Navbar';
import Sidebar from '../Components/Admindashboard/Sidebar';

const Employees = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isAdding, setIsAdding] = useState(false);
  const [newDepartment, setNewDepartment] = useState({
    name: '',
    description: '',
  });
  
  // State for storing departments
  const [departments, setDepartments] = useState([
    { id: 1, name: 'HR', employees: 2 },
    { id: 2, name: 'IT', employees: 2 },
    { id: 3, name: 'Marketing', employees: 1 },
  ]);

  // Filter departments based on search query
  const filteredDepartments = departments.filter((dept) =>
    dept.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleEdit = (id) => {
    console.log('Edit department with id:', id);
  };

  const handleDelete = (id) => {
    setDepartments(departments.filter((dept) => dept.id !== id));
    console.log('Deleted department with id:', id);
  };

  const handleAddDepartment = () => {
    // Create a new department with a unique id
    const newDept = {
      id: departments.length + 1,
      name: newDepartment.name,
      employees: 0, // Initialize employees to 0 or any value you'd prefer
    };

    // Add the new department to the state
    setDepartments([...departments, newDept]);

    // Reset form and close it
    setNewDepartment({ name: '', description: '' });
    setIsAdding(false);
  };

  return (
    <div>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div className=" w-full p-6">
          <div className="m-7">
            <h2 className="text-xl font-bold text-gray-800 text-center">
              Manage Departments
            </h2>
          </div>

          <div className="border-gray-300 rounded-lg h-14 m-4 px-4 flex items-center justify-between">
            <div className="flex items-center border-2 border-black rounded-md w-auto px-3 py-1 ">
              <input 
                type="text"
                placeholder="Search by department"
                className="outline-none w-full text-s"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <button
              onClick={() => setIsAdding(true)}
              className="bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-teal-700 transition duration-200"
            >
              Add New Department
            </button>
          </div>

          {isAdding && (
  <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
    <div className="bg-white p-6 rounded-lg shadow-lg w-96">
      <h3 className="text-lg font-bold mb-4">Add New Department</h3>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Department Name</label>
        <input
          type="text"
          value={newDepartment.name}
          onChange={(e) =>
            setNewDepartment({ ...newDepartment, name: e.target.value })
          }
          className="w-full border-2 border-gray-300 rounded-md p-2"
          placeholder="Enter department name"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Description</label>
        <textarea
          value={newDepartment.description}
          onChange={(e) =>
            setNewDepartment({ ...newDepartment, description: e.target.value })
          }
          className="w-full border-2 border-gray-300 rounded-md p-2"
          placeholder="Enter department description"
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
          onClick={() => setIsAdding(false)}
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
                {filteredDepartments.map((dept) => (
                  <tr key={dept.id} className="text-center hover:bg-gray-100">
                    <td className="border p-2">{dept.id}</td>
                    <td className="border p-2">{dept.name}</td>
                    <td className="border p-2">{dept.employees}</td>
                    <td className="border p-2">
                      <button
                        onClick={() => handleEdit(dept.id)}
                        className="bg-green-500 text-white px-4 py-1 rounded-md hover:bg-green-600 mr-2"
                      >
                        Edit
                      </button>
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
