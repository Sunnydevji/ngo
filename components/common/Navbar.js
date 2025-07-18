'use client'
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaArrowRight, FaBars } from "react-icons/fa6";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Shop", href: "/shop" },
  { name: "Contact", href: "/contact" },
  { name: "Donations", href: "/donations" },
];

export default function Navbar() {
  const [hovered, setHovered] = useState(false);
  const [joinHovered, setJoinHovered] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-500 ${
        hovered ? "bg-green-800/90" : "bg-white/90"
      } shadow-lg border-b border-gray-200`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-8 py-3 md:py-4">
        {/* Logo & Title */}
        <div className="flex items-center gap-3 md:gap-4">
          <Image src="/logo.png" alt="Erina Logo" width={40} height={40} className="rounded-full border border-gray-300" />
          <span className={`font-extrabold text-xl md:text-2xl tracking-tight uppercase ${hovered ? "text-white" : "text-gray-900"} transition-colors`}>
            Enira
          </span>
        </div>
        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 md:gap-10">
          {navLinks.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`font-medium text-base md:text-lg px-2 md:px-3 py-1 rounded transition-colors duration-200 ${
                hovered
                  ? "text-white hover:text-yellow-400"
                  : "text-gray-900 hover:text-blue-600"
              }`}
            >
              {item.name}
            </Link>
          ))}
          {/* JOIN US Button */}
          <div className="relative flex items-center">
            <Link href="/auth">
            <button
              className={`group flex items-center gap-2 overflow-hidden rounded-full px-5 md:px-7 py-2 font-bold border-2 border-yellow-400 bg-yellow-400/10 text-yellow-500 shadow-md transition-all duration-300
                ${joinHovered ? "bg-yellow-400 text-white border-yellow-400" : ""}
              `}
              onMouseEnter={() => setJoinHovered(true)}
              onMouseLeave={() => setJoinHovered(false)}
            >
              <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                JOIN US
              </span>
              <span
                className={`relative z-10 transition-transform duration-500 ${
                  joinHovered ? "-translate-x-2 opacity-100" : "translate-x-6 opacity-0"
                }`}
              >
                <FaArrowRight size={18} />
              </span>
              <span
                className={`absolute left-0 top-0 h-full w-full rounded-full transition-all duration-500 ease-in-out
                  ${joinHovered ? "bg-yellow-400 opacity-80" : "opacity-0"}
                `}
                aria-hidden="true"
              />
            </button>
            </Link>
          </div>
        </div>
        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex items-center justify-center p-2 rounded text-yellow-500 border z-50 border-yellow-400"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Open navigation"
        >
          <FaBars size={22} />
        </button>
      </div>
      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 left-0 w-full bg-white/95 shadow-lg border-b border-gray-200 transition-all duration-300 z-40 ${
          mobileOpen ? "max-h-screen py-6" : "max-h-0 overflow-hidden py-0"
        }`}
        style={{ transitionProperty: "max-height, padding" }}
      >
        <div className="flex flex-col items-center gap-6">
          {navLinks.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="font-medium text-lg px-4 py-2 rounded text-gray-900 hover:text-blue-600 transition-colors duration-200 w-full text-center"
              onClick={() => setMobileOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <button
            className={`group flex items-center gap-2 overflow-hidden rounded-full px-7 py-2 font-bold border-2 border-yellow-400 bg-yellow-400/10 text-yellow-500 shadow-md transition-all duration-300
              ${joinHovered ? "bg-yellow-400 text-white border-yellow-400" : ""}
            `}
            onMouseEnter={() => setJoinHovered(true)}
            onMouseLeave={() => setJoinHovered(false)}
            onClick={() => setMobileOpen(false)}
          >
            <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
              JOIN US
            </span>
            <span
              className={`relative z-10 transition-transform duration-500 ${
                joinHovered ? "-translate-x-2 opacity-100" : "translate-x-6 opacity-0"
              }`}
            >
              <FaArrowRight size={18} />
            </span>
            <span
              className={`absolute left-0 top-0 h-full w-full rounded-full transition-all duration-500 ease-in-out
                ${joinHovered ? "bg-yellow-400 opacity-80" : "opacity-0"}
              `}
              aria-hidden="true"
            />
          </button>
        </div>
      </div>
    </nav>
  );
}