import React from "react";
import { FaFacebookSquare, FaLinkedin, FaTelegram } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";
import { Link } from "react-scroll"; // Import Link from react-scroll

function Footer() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20">
        <div className="space-y-5">
          {/* Social media icons */}
          <ul className="flex space-x-5 justify-center text-2xl cursor-pointer">
            <li>
              <FaFacebookSquare />
            </li>
            
            <li>
                    <a
                      href="https://www.linkedin.com/in/hiten30"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLinkedin />
                    </a>
                  </li>
            <li>
              <IoLogoYoutube />
            </li>
            <li>
              <FaTelegram />
            </li>
          </ul>

          {/* Navigation links using react-scroll Link */}
          <ul className="flex space-x-5 justify-center text-xl cursor-pointer">
            <li>
              <Link
                to="Home"
                spy={true}
                smooth={true}
                offset={-70} // Adjust offset as needed
                duration={500}
                className="hover:underline"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="About"
                spy={true}
                smooth={true}
                offset={-70} // Adjust offset as needed
                duration={500}
                className="hover:underline"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="Portfolio"
                spy={true}
                smooth={true}
                offset={-70} // Adjust offset as needed
                duration={500}
                className="hover:underline"
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                to="Experience"
                spy={true}
                smooth={true}
                offset={-70} // Adjust offset as needed
                duration={500}
                className="hover:underline"
              >
                Experience
              </Link>
            </li>
          </ul>

          {/* Copyright */}
          <p className="text-center text-sm md:text-base">
            &copy; 2024 Hiten. All rights reserved.
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;
