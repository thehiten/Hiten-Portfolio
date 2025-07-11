import React, { useState } from "react";
import { 
  FaHeart, 
  FaLinkedin, 
  FaGithub, 
  FaEnvelope, 
  FaPhone, 
  FaArrowUp, 
  FaDownload,
  FaMapMarkerAlt,
  FaCode
} from "react-icons/fa";
import pic from "../../public/photo.jpg";

function Footer() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "#Home" },
    { name: "About", href: "#About" },
    { name: "Portfolio", href: "#Portfolio" },
    { name: "Experience", href: "#Experience" },
    { name: "Contact", href: "#Contact" }
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/hiten30",
      icon: <FaLinkedin />,
      color: "hover:text-blue-500"
    },
    {
      name: "GitHub",
      href: "https://github.com/hiten30",
      icon: <FaGithub />,
      color: "hover:text-gray-400"
    },
    {
      name: "Email",
      href: "mailto:hiten.aggarwal005@gmail.com",
      icon: <FaEnvelope />,
      color: "hover:text-purple-500"
    }
  ];

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail("");
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Hiten_Aggarwal_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <footer className="relative bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 shadow-lg">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/10 via-purple-50/5 to-white dark:from-blue-900/5 dark:via-purple-900/5 dark:to-gray-900"></div>
      
      {/* Main Footer Content */}
      <div className="relative">
        {/* Top Section */}
        <div className="border-b border-gray-200 dark:border-gray-800">
          <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 py-12">
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 items-center">
              
              {/* Brand Section */}
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full opacity-60 blur-sm"></div>
                    <img
                      src={pic}
                      alt="Hiten Aggarwal"
                      className="relative h-16 w-16 rounded-full border-3 border-white dark:border-gray-800 shadow-lg"
                    />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      Hiten Aggarwal
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400">
                      Full-Stack Developer
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400 max-w-md">
                  Passionate about creating innovative web solutions using modern technologies and best practices.
                </p>
              </div>

              {/* Quick Links */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Quick Links
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  {quickLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 py-1"
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>

              {/* Newsletter */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Stay Updated
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Get notified about my latest projects
                </p>
                <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-300"
                    required
                  />
                  <button
                    type="submit"
                    disabled={isSubscribed}
                    className={`w-full px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                      isSubscribed 
                        ? 'bg-green-500 text-white' 
                        : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white transform hover:scale-105'
                    }`}
                  >
                    {isSubscribed ? '✓ Subscribed!' : 'Subscribe'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Contact & Social Section */}
        <div className="border-b border-gray-200 dark:border-gray-800">
          <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 py-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              
              {/* Contact Info */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Get In Touch
                </h3>
                <div className="space-y-3">
                  <a 
                    href="mailto:hiten.aggarwal005@gmail.com"
                    className="flex items-center gap-3 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group"
                  >
                    <FaEnvelope className="text-blue-500 group-hover:scale-110 transition-transform" />
                    <span>hiten.aggarwal005@gmail.com</span>
                  </a>
                  <a 
                    href="tel:+919319417534"
                    className="flex items-center gap-3 text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors group"
                  >
                    <FaPhone className="text-green-500 group-hover:scale-110 transition-transform" />
                    <span>+91 9319417534</span>
                  </a>
                  <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                    <FaMapMarkerAlt className="text-purple-500" />
                    <span>Delhi, India</span>
                  </div>
                </div>
              </div>

              {/* Social Links & Actions */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Connect With Me
                  </h3>
                  <button
                    onClick={scrollToTop}
                    className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:scale-110 transition-all duration-300 shadow-lg"
                    aria-label="Scroll to top"
                  >
                    <FaArrowUp />
                  </button>
                </div>
                
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target={social.href.startsWith('http') ? '_blank' : '_self'}
                      rel={social.href.startsWith('http') ? 'noopener noreferrer' : ''}
                      className={`w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-400 ${social.color} transition-all duration-300 hover:scale-110 hover:shadow-lg`}
                      aria-label={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>

                <button
                  onClick={downloadResume}
                  className="w-full md:w-auto px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl font-medium transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 shadow-lg"
                >
                  <FaDownload />
                  Download Resume
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
              <span>© {currentYear} Made with</span>
              <FaHeart className="text-red-500 animate-pulse" />
              <span>by Hiten Aggarwal</span>
            </div>
            
            <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-500">
              <FaCode className="text-blue-500" />
              <span>Built with React & Tailwind CSS</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
