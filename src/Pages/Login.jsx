import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate(); // React Router navigation function

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5002/login", {
        email,
        password,
      });

      console.log("Login Successful:", response.data);
      alert("Login Successful!");

      // Redirect to Dashboard after login
      navigate("/admin-dashboard");
    } catch (error) {
      console.error("Login Error:", error.response ? error.response.data : error.message);
      
      if (error.response?.data?.message === "User not found") {
        setErrorMessage("User not found. Please register.");
      } else {
        setErrorMessage(error.response?.data?.message || "Login failed! Try again.");
      }
    }
  };

  return (
    <div className="flex flex-col items-center h-screen justify-center bg-gradient-to-b from-teal-600 from-50% to-gray-100 to-50% space-y-6">
      <h2 className="font-Poppins px-0 text-white text-3xl">
        Employee Management System
      </h2>
      <div className="border shadow p-6 w-80 bg-white">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        {errorMessage && (
          <p className="text-red-500 text-sm mb-2">{errorMessage}</p>
        )}
        <form
          className="space-y-4 bg-white p-6 rounded-lg shadow-md max-w-sm mx-auto"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col space-y-1">
            <label htmlFor="email" className="font-medium">
              Email:
            </label>
            <input
              name="email"
              className="border-2 border-gray-300 rounded-md p-2 focus:outline-none focus:border-teal-500"
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center space-x-1">
              <input type="checkbox" className="accent-teal-500" />
              <span>Remember me</span>
            </label>
            <a href="#" className="text-teal-600 hover:underline">
              Forgot Password?
            </a>
          </div>

          <button className="w-full bg-teal-600 text-white font-medium p-2 rounded-md hover:bg-teal-700 transition">
            Login
          </button>
        </form>

        {/* Show Register Link if User Not Found */}
        {errorMessage === "User not found. Please register." && (
          <p className="text-center text-sm text-gray-600 mt-3">
            Don't have an account?{" "}
            <Link to="/register" className="text-teal-600 font-medium hover:underline">
              Register here
            </Link>
          </p>
        )}
      </div>
    </div>
  );
};

export default Login;
