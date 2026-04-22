// src/components/nav.js
import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const goToPage = (path) => {
    navigate(path);
    setIsMenuOpen(false);
  };

  const navItems = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/about" },
    { label: "Product", path: "/product" },
    { label: "Media", path: "/media" },
    { label: "Contact Us", path: "/contact" },
  ];

  const getDesktopItemClassName = (path) => {
    const isActive = location.pathname === path;

    return [
      "text-[15px] font-semibold tracking-wide transition-colors duration-200",
      isActive ? "text-[#1f3b63]" : "text-gray-600 hover:text-[#1f3b63]",
    ].join(" ");
  };

  const getMobileItemClassName = (path) => {
    const isActive = location.pathname === path;

    return [
      "border-b border-gray-100 py-3 text-left text-sm font-semibold tracking-wide last:border-b-0",
      isActive ? "text-[#1f3b63]" : "text-gray-700 hover:text-[#1f3b63]",
    ].join(" ");
  };

  return (
    <nav className="fixed top-0 left-0 z-50 w-full border-b border-gray-200 bg-white shadow-sm">
      <div className="flex h-16 w-full items-center justify-end px-0">
        <button
          type="button"
          onClick={toggleMenu}
          className="mr-4 inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 lg:hidden"
          aria-label="Toggle navigation"
          aria-expanded={isMenuOpen}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        <div className="hidden lg:flex lg:items-center lg:justify-end lg:gap-10 lg:pr-3 xl:pr-4">
          {navItems.map((item) => (
            <button
              key={item.label}
              type="button"
              onClick={() => goToPage(item.path)}
              className={getDesktopItemClassName(item.path)}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {isMenuOpen && (
        <div className="border-t border-gray-200 bg-white lg:hidden">
          <div className="flex flex-col px-4 py-3">
            {navItems.map((item) => (
              <button
                key={item.label}
                type="button"
                onClick={() => goToPage(item.path)}
                className={getMobileItemClassName(item.path)}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Nav;