import { useState, useEffect } from "react";
import pic from "../../public/photo.jpg";
import { IoIosMenu, IoMdClose } from "react-icons/io";
import { HiDownload, HiMail, HiPhone } from "react-icons/hi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-scroll";

function Navbar() {
  const [menu, setMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");

  const navItems = [
    { id: 1, text: "Home", icon: "🏠" },
    { id: 2, text: "About", icon: "👨‍💻" },
    { id: 3, text: "Portfolio", icon: "🚀" },
    { id: 4, text: "Experience", icon: "💼" },
    { id: 5, text: "Contact", icon: "📞" },
  ];

  // Handle scroll effect and active section
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);

      // Update active section based on scroll position
      const sections = navItems.map(item => item.text);
      const current = sections.find(section => {
        const element = document.getElementsByName(section)[0];
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function toggleMenu() {
    setMenu(!menu);
  }

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Hiten_Aggarwal_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  function renderNavItems(mobile = false) {
    return navItems.map(function (item) {
      const isActive = activeSection === item.text;
      
      return (
        <li
          className={`relative group ${
            mobile 
              ? "w-full" 
              : "hover:scale-105 duration-300 cursor-pointer"
          }`}
          key={item.id}
        >
          <Link
            to={item.text}
            smooth={true}
            duration={500}
            offset={-70}
            onClick={mobile ? () => setMenu(false) : undefined}
            className={`relative flex items-center gap-2 font-medium transition-all duration-300 ${
              mobile
                ? `w-full px-6 py-4 rounded-xl text-lg ${
                    isActive 
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg" 
                      : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                  }`
                : `px-4 py-2 rounded-full ${
                    isActive
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg transform scale-105"
                      : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                  }`
            }`}
          >
            {mobile && <span className="text-xl">{item.icon}</span>}
            {item.text}
            {!mobile && !isActive && (
              <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 group-hover:w-8"></span>
            )}
          </Link>
        </li>
      );
    });
  }

  return (
    <>
      {/* Main Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl shadow-2xl border-b border-gray-200/20 dark:border-gray-700/20" 
          : "bg-white/60 dark:bg-gray-900/60 backdrop-blur-md"
      }`}>
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
          <div className="flex justify-between items-center h-20">
            {/* Logo Section */}
            <div className="flex items-center space-x-4 group cursor-pointer">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full opacity-60 group-hover:opacity-100 blur-sm transition-opacity duration-300"></div>
                <img
                  src={pic}
                  alt="Hiten Aggarwal"
                  className="relative h-12 w-12 rounded-full border-3 border-white dark:border-gray-800 transition-all duration-300 group-hover:scale-110 shadow-lg"
                />
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white dark:border-gray-900 animate-pulse shadow-sm"></div>
              </div>
              <div className="hidden sm:block">
                <h1 className="font-bold text-xl bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                  Hiten Aggarwal
                </h1>
                <p className="text-sm text-gray-600 dark:text-gray-400 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors duration-300 -mt-1">
                  Full Stack Developer
                </p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:block">
              <ul className="flex space-x-2">
                {renderNavItems()}
              </ul>
            </div>

            {/* Desktop Action Buttons */}
            <div className="hidden lg:flex items-center space-x-3">
              <a
                href="mailto:hiten.aggarwal005@gmail.com"
                className="p-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-all duration-300"
                title="Email me"
              >
                <HiMail className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/hiten30"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-all duration-300"
                title="LinkedIn"
              >
                <FaLinkedin className="w-5 h-5" />
              </a>
              <button 
                onClick={downloadResume}
                className="btn-primary text-sm py-2 px-4 flex items-center gap-2"
              >
                <HiDownload className="w-4 h-4" />
                Resume
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={toggleMenu}
                className={`p-3 rounded-xl transition-all duration-300 ${
                  menu 
                    ? "bg-red-500 text-white shadow-lg rotate-180" 
                    : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700"
                }`}
                aria-label="Toggle menu"
              >
                {menu ? (
                  <IoMdClose className="w-6 h-6" />
                ) : (
                  <IoIosMenu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {menu && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/60 z-40 lg:hidden animate-fadeInUp backdrop-blur-sm"
            onClick={() => setMenu(false)}
          ></div>
          
          {/* Mobile Menu */}
          <div className="fixed top-20 left-4 right-4 z-50 lg:hidden animate-fadeInUp">
            <div className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-200/20 dark:border-gray-700/20 overflow-hidden">
              <div className="p-6">
                {/* Mobile Profile */}
                <div className="flex items-center gap-4 mb-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl">
                  <img
                    src={pic}
                    alt="Hiten Aggarwal"
                    className="h-16 w-16 rounded-full border-3 border-white dark:border-gray-700 shadow-lg"
                  />
                  <div>
                    <h2 className="font-bold text-lg text-gray-900 dark:text-white">Hiten Aggarwal</h2>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Full Stack Developer</p>
                    <div className="flex items-center gap-1 mt-1">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-xs text-green-600 dark:text-green-400">Available for work</span>
                    </div>
                  </div>
                </div>
                
                {/* Mobile Navigation */}
                <ul className="space-y-2 mb-6">
                  {renderNavItems(true)}
                </ul>
                
                {/* Mobile Contact Actions */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <a 
                    href="mailto:hiten.aggarwal005@gmail.com"
                    className="flex items-center justify-center gap-2 p-3 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-colors text-sm font-medium"
                  >
                    <HiMail className="w-4 h-4" />
                    Email
                  </a>
                  <a 
                    href="tel:+919319417534"
                    className="flex items-center justify-center gap-2 p-3 bg-green-500 text-white rounded-xl hover:bg-green-600 transition-colors text-sm font-medium"
                  >
                    <HiPhone className="w-4 h-4" />
                    Call
                  </a>
                </div>

                {/* Mobile Social Links */}
                <div className="flex justify-center gap-4">
                  <a
                    href="https://www.linkedin.com/in/hiten30"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
                  >
                    <FaLinkedin className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-800 text-white rounded-full hover:bg-gray-900 transition-colors"
                  >
                    <FaGithub className="w-5 h-5" />
                  </a>
                  <button 
                    onClick={downloadResume}
                    className="p-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors"
                  >
                    <HiDownload className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Spacer to prevent content from going under fixed navbar */}
      <div className="h-20"></div>
    </>
  );
}

export default Navbar;
