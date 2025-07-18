"use client"
import React, { useState } from "react";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 via-yellow-100 to-white">
      <div className="w-full mt-24 mb-7 max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden">
        {/* Header Tabs */}
        <div className="flex justify-center items-center border-b border-gray-100 bg-gray-50">
          <button
            className={`flex-1 py-4 text-lg font-bold transition ${
              isLogin
                ? "text-green-700 border-b-4 border-green-600 bg-white"
                : "text-gray-400 hover:text-green-700"
            }`}
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>
          <button
            className={`flex-1 py-4 text-lg font-bold transition ${
              !isLogin
                ? "text-yellow-600 border-b-4 border-yellow-500 bg-white"
                : "text-gray-400 hover:text-yellow-600"
            }`}
            onClick={() => setIsLogin(false)}
          >
            Register
          </button>
        </div>
        {/* Slide Forms */}
        <div className="relative w-full" style={{ minHeight: "540px" }}>
          {/* Login Form */}
          <div
            className={`absolute top-0 left-0 w-full transition-all duration-500 ${
              isLogin ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
            }`}
          >
            <form className="flex flex-col gap-6 p-8">
              <h2 className="text-2xl font-extrabold text-green-700 mb-2 text-center">Welcome Back!</h2>
              <p className="text-center text-gray-500 mb-4">Sign in to your account</p>
              <input
                type="email"
                placeholder="Email Address"
                className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400 bg-gray-50 font-medium"
              />
              <input
                type="password"
                placeholder="Password"
                className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400 bg-gray-50 font-medium"
              />
              <button className="mt-2 px-6 py-3 rounded-xl bg-gradient-to-r from-green-600 to-yellow-500 hover:from-yellow-500 hover:to-green-600 text-white font-bold text-lg shadow-lg transition duration-200">
                Login
              </button>
              <div className="text-center text-gray-600 mt-4">
                <span>Don't have an account? </span>
                <button
                  className="text-yellow-500 font-semibold hover:underline"
                  type="button"
                  onClick={() => setIsLogin(false)}
                >
                  Register
                </button>
              </div>
            </form>
          </div>
          {/* Register Form */}
          <div
            className={`absolute top-0 left-0 w-full transition-all duration-500 ${
              !isLogin ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
            }`}
          >
            <form className="flex flex-col gap-6 p-8">
              <h2 className="text-2xl font-extrabold text-yellow-600 mb-2 text-center">Create an Account</h2>
              <p className="text-center text-gray-500 mb-4">Join us for an amazing experience</p>
              <input
                type="text"
                placeholder="Full Name"
                className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-gray-50 font-medium"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-gray-50 font-medium"
              />
              <input
                type="password"
                placeholder="Password"
                className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-gray-50 font-medium"
              />
              <button className="mt-2 px-6 py-3 rounded-xl bg-gradient-to-r from-yellow-500 to-green-600 hover:from-green-600 hover:to-yellow-500 text-white font-bold text-lg shadow-lg transition duration-200">
                Register
              </button>
              <div className="text-center text-gray-600 mt-4">
                <span>Already have an account? </span>
                <button
                  className="text-green-600 font-semibold hover:underline"
                  type="button"
                  onClick={() => setIsLogin(true)}
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}