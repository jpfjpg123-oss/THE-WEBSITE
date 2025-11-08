'use client'
import React, { useState } from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";
import { useAppContext } from "@/context/AppContext";

const LoginSignup = () => {
  const [action, setAction] = useState("Sign Up");
  const { setUserData, router } = useAppContext();

  const handleSubmit = () => {
    // Dummy login / sign-up
    setUserData({
      _id: "user_new_123",
      name: "Test User",
      email: "test@example.com",
      imageUrl: assets.user_icon,
      cartItems: {},
    });
    router.push("/"); // după login redirecționează în Home
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-md p-6">
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold">{action}</h1>
          <div className="w-16 h-1 bg-blue-500 mx-auto mt-2 rounded"></div>
        </div>

        {/* Inputs */}
        <div className="space-y-4">
          {action === "Sign Up" && (
            <div className="flex items-center border rounded px-3 py-2">
              <Image src={assets.user_icon} alt="user" width={20} height={20} />
              <input
                className="ml-2 w-full outline-none"
                type="text"
                placeholder="Name"
              />
            </div>
          )}
          <div className="flex items-center border rounded px-3 py-2">
            <Image src={assets.email_icon} alt="email" width={20} height={20} />
            <input
              className="ml-2 w-full outline-none"
              type="email"
              placeholder="Email Id"
            />
          </div>
          <div className="flex items-center border rounded px-3 py-2">
            <Image src={assets.password_icon} alt="password" width={20} height={20} />
            <input
              className="ml-2 w-full outline-none"
              type="password"
              placeholder="Password"
            />
          </div>
        </div>

        {/* Forgot Password */}
        {action === "Login" && (
          <div className="text-right text-sm text-blue-500 mt-2 cursor-pointer">
            Lost Password? Click Here!
          </div>
        )}

        {/* Toggle Buttons */}
        <div className="flex mt-6 justify-center gap-4">
          <button
            className={`px-4 py-2 rounded ${
              action === "Sign Up" ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
            onClick={() => setAction("Sign Up")}
          >
            Sign Up
          </button>
          <button
            className={`px-4 py-2 rounded ${
              action === "Login" ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
            onClick={() => setAction("Login")}
          >
            Login
          </button>
        </div>

        {/* Submit */}
        <button
          onClick={handleSubmit}
          className="mt-6 w-full bg-orange-600 text-white py-2 px-4 rounded"
        >
          {action}
        </button>
      </div>
    </div>
  );
};

export default LoginSignup;