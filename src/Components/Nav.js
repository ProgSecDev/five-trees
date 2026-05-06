// src/components/nav.js
import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import SairaCondensedBold from "../font/SairaCondensed-Bold.ttf";

const style = document.createElement("style");
style.textContent = `
  @font-face {
    font-family: 'SairaCondensed';
    src: url('${SairaCondensedBold}') format('truetype');
    font-weight: 900;
    font-style: normal;
    font-display: swap;
  }

  /* ── DESKTOP: full-width green bar ── */
  .nav-root {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 50;
    width: 100%;
    background: #5d7128;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 18px 48px 18px 32px;
    box-sizing: border-box;
    box-shadow: 0 2px 8px rgba(0,0,0,0.15);
  }

  .nav-links {
    display: flex;
    align-items: center;
    gap: 46px;
  }

  .nav-link {
    background: none;
    border: none;
    cursor: pointer;
    color: #ffffff;
    font-size: 22px;
    font-weight: 900;
    line-height: 1;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    font-family: 'SairaCondensed', sans-serif;
    padding: 0;
    transition: color 0.15s ease;
    white-space: nowrap;
  }

  .nav-link:hover {
    color: #c7d86b;
  }

  .nav-link--active {
    color: #c7d86b;
  }

  /* ── MOBILE: hamburger only ── */
  .nav-mobile-toggle {
    display: none;
    background: none;
    border: none;
    cursor: pointer;
    padding: 4px;
    margin-left: auto;
  }

  .nav-mobile-toggle svg {
    width: 28px;
    height: 28px;
    color: #ffffff;
    display: block;
  }

  .nav-mobile-dropdown {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: #5d7128;
    display: flex;
    flex-direction: column;
    padding: 8px 0 16px;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
    border-top: 1px solid rgba(255,255,255,0.15);
  }

  .nav-mobile-link {
    background: none;
    border: none;
    cursor: pointer;
    color: #ffffff;
    font-size: 20px;
    font-weight: 900;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    font-family: 'SairaCondensed', sans-serif;
    text-align: left;
    padding: 14px 32px;
    transition: background 0.15s ease;
    width: 100%;
  }

  .nav-mobile-link:hover {
    background: rgba(255, 255, 255, 0.1);
  }

  .nav-mobile-link--active {
    color: #c7d86b;
  }

  @media (max-width: 992px) {
    .nav-root {
      padding: 14px 20px;
      position: fixed;
    }

    .nav-links {
      display: none;
    }

    .nav-mobile-toggle {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;

if (!document.head.querySelector("#nav-styles")) {
  style.id = "nav-styles";
  document.head.appendChild(style);
}

const navItems = [
  { label: "HOME",       path: "/" },
  { label: "ABOUT US",   path: "/about" },
  { label: "PRODUCTS",   path: "/product" },
  { label: "MEDIA",      path: "/media" },
  { label: "CONTACT US", path: "/contact" },
];

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate  = useNavigate();
  const location  = useLocation();

  const goToPage = (path) => {
    navigate(path);
    setIsMenuOpen(false);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="nav-root" aria-label="Main navigation">

      {/* Desktop links */}
      <div className="nav-links">
        {navItems.map((item) => (
          <button
            key={item.path}
            type="button"
            onClick={() => goToPage(item.path)}
            className={`nav-link${isActive(item.path) ? " nav-link--active" : ""}`}
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* Mobile hamburger */}
      <button
        type="button"
        className="nav-mobile-toggle"
        onClick={() => setIsMenuOpen((p) => !p)}
        aria-label="Toggle navigation"
        aria-expanded={isMenuOpen}
      >
        <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          {isMenuOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Mobile dropdown */}
      {isMenuOpen && (
        <div className="nav-mobile-dropdown">
          {navItems.map((item) => (
            <button
              key={item.path}
              type="button"
              onClick={() => goToPage(item.path)}
              className={`nav-mobile-link${isActive(item.path) ? " nav-mobile-link--active" : ""}`}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}

    </nav>
  );
}

export default Nav;