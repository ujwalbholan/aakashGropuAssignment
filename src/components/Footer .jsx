
const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Section */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-blue-700">AakashLabs</h3>
          <p className="text-sm">
            Building modern digital solutions with a focus on quality and
            scalability. Empower your business with technology crafted for you.
          </p>
        </div>

        {/* Quick Links */}
        <div >
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-3 text-sm">
            <li>
              <a
                href="#home"
                className="hover:text-blue-600 transition-colors duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="hover:text-blue-600 transition-colors duration-300"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#team"
                className="hover:text-blue-600 transition-colors duration-300"
              >
                Our Team
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-blue-600 transition-colors duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
          <div className="flex space-x-6 text-blue-700">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-900 transition-colors duration-300"
              aria-label="Facebook"
            >
              {/* Use your preferred icon library or simple text here */}
              Facebook
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-900 transition-colors duration-300"
              aria-label="LinkedIn"
            >
              LinkedIn
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-900 transition-colors duration-300"
              aria-label="Twitter"
            >
              Twitter
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-300 mt-10 py-4 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} AakashLabs. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;