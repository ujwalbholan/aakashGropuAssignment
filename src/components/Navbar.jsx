import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo(0, 0); // Scroll to top on route change
  }, [location]);

  const navLinks = [
    { name: "Home", to: "/" },
    { name: "About Us", to: "/about" },
    { name: "Our Team", to: "/team" },
    { name: "Contact", to: "/contact" },
    { name: "API Page", to: "/apipage" },
  ];

  return (
    <nav
      className={`fixed w-full top-0 z-50 p-2 bg-white shadow-md text-gray-900 transform transition-all duration-700 ease-in-out ${
        show ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-extrabold tracking-wide text-blue-700">
          <Link to="/" className="hover:opacity-80 transition duration-300">
            AakashLabs
          </Link>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8 text-base font-medium">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.to}
                className={`hover:text-blue-600 border-b-2 border-transparent hover:border-blue-600 transition-all duration-300 pb-1 ${
                  location.pathname === link.to
                    ? "text-blue-600 border-blue-600"
                    : ""
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          className="md:hidden focus:outline-none"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <svg
            className="w-7 h-7 text-blue-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Nav */}
      <div
        className={`md:hidden bg-white shadow-md overflow-hidden transition-max-height duration-300 ${
          menuOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col space-y-4 px-6 py-4 text-base font-medium">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.to}
                className={`inline-block hover:text-blue-600 border-b-2 border-transparent hover:border-blue-600 transition-all duration-300 pb-1 ${
                  location.pathname === link.to
                    ? "text-blue-600 border-blue-600"
                    : ""
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
