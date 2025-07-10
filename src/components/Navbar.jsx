import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Close mobile menu on link click
  const handleLinkClick = () => setMenuOpen(false);

  return (
    <nav
      className={`fixed w-full top-0 z-50 p-2 bg-white shadow-md text-gray-900 transform transition-all duration-700 ease-in-out ${
        show ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-extrabold tracking-wide text-blue-700">
          <Link
            to="/"
            className="hover:opacity-80 transition duration-300"
            onClick={handleLinkClick}
          >
            AakashLabs
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-base font-medium">
          {[
            { name: "Home", href: "#home" },
            { name: "About Us", href: "#about" },
            { name: "Our Team", href: "#team" },
            { name: "Contact", href: "#contact" },
          ].map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="hover:text-blue-600 border-b-2 border-transparent hover:border-blue-600 transition-all duration-300 pb-1"
                onClick={handleLinkClick}
              >
                {item.name}
              </a>
            </li>
          ))}
          <li>
            <Link
              to="/api-page"
              className="hover:text-blue-600 border-b-2 border-transparent hover:border-blue-600 transition-all duration-300 pb-1"
              onClick={handleLinkClick}
            >
              API Page
            </Link>
          </li>
        </ul>

        {/* Mobile Hamburger Button */}
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
              // X icon when open
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              // Hamburger icon when closed
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

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white shadow-md overflow-hidden transition-max-height duration-300 ${
          menuOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col space-y-4 px-6 py-4 text-base font-medium">
          {[
            { name: "Home", href: "#home" },
            { name: "About Us", href: "#about" },
            { name: "Our Team", href: "#team" },
            { name: "Contact", href: "#contact" },
          ].map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="inline-block hover:text-blue-600 border-b-2 border-transparent hover:border-blue-600 transition-all duration-300 pb-1"
                onClick={handleLinkClick}
              >
                {item.name}
              </a>
            </li>
          ))}
          <li>
            <Link
              to="/api-page"
              className="inline-block hover:text-blue-600 border-b-2 border-transparent hover:border-blue-600 transition-all duration-300 pb-1"
              onClick={handleLinkClick}
            >
              API Page
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
