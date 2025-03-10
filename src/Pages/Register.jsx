import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function RegisterForm() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5002/register", formData, {
        headers: { "Content-Type": "application/json" },
      });
      console.log("Registration Successful:", response.data);
      alert("Registration successful!");
    } catch (error) {
      console.error("Error:", error.response ? error.response.data : error.message);
      setErrorMessage("Registration failed! Try again.");
    }
  };

  return (
    <div className="flex flex-col items-center h-screen justify-center bg-gradient-to-b from-teal-600 from-50% to-gray-100 to-50% space-y-6">
      <h2 className="font-Poppins px-0 text-white text-3xl">
        Employee Management System
      </h2>
      <div className="border shadow p-6 w-80 bg-white">
        <h2 className="text-2xl font-bold mb-4">Register</h2>
        {errorMessage && (
          <p className="text-red-500 text-sm mb-2">{errorMessage}</p>
        )}
        <form
          className="space-y-4 bg-white p-6 rounded-lg shadow-md max-w-sm mx-auto"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col space-y-1">
            <label htmlFor="username" className="font-medium">
              Username:
            </label>
            <input
              name="username"
              className="border-2 border-gray-300 rounded-md p-2 focus:outline-none focus:border-teal-500"
              type="text"
              placeholder="Enter Username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex flex-col space-y-1">
            <label htmlFor="email" className="font-medium">
              Email:
            </label>
            <input
              name="email"
              className="border-2 border-gray-300 rounded-md p-2 focus:outline-none focus:border-teal-500"
              type="email"
              placeholder="Enter Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex flex-col space-y-1">
            <label htmlFor="password" className="font-medium">
              Password:
            </label>
            <input
              name="password"
              className="border-2 border-gray-300 rounded-md p-2 focus:outline-none focus:border-teal-500"
              type="password"
              placeholder="*******"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button className="w-full bg-teal-600 text-white font-medium p-2 rounded-md hover:bg-teal-700 transition">
            Register
          </button>
        </form>
        <p className="text-center text-sm text-gray-600 mt-3">
          Already have an account?{" "}
          <Link to="/login" className="text-teal-600 font-medium hover:underline">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
}
