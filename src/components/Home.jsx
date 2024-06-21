import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";
import { FaTelegram } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { RiReactjsFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { ReactTyped } from "react-typed";
import pic from "../../public/photo.jpg";

function Home() {
  return (
    <>
      <div
        name="Home"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
      >
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 md:mt-24 mt-12 space-y-2 order-2 md:order-1">
            <span>Welcome to My World</span>
            <div className="flex space-x-1 text-2xl md:text-4xl">
              <h1>Hello, I'm a </h1>
              <ReactTyped
                className="text-red-700 font-bold"
                strings={["Developer", "Coder", "Programmer"]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              />
            </div>
            <br />

            <p className="text-sm md:text-base text-justify">
              A web developer is a skilled professional responsible for
              designing, coding, and maintaining websites and web applications.
              They play a critical role in the digital world, transforming
              complex ideas into user-friendly web solutions that can be
              accessed through various devices, including desktops, tablets, and
              smartphones.
            </p>

            <br />
            <div className="flex flex-col md:flex-row justify-between space-y-6 md:space-y-0 items-center">
              <div className="space-y-2">
                <p className="">Available On</p>
                <ul className="flex space-x-5 text-2xl cursor-pointer">
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
              </div>

              <div className="space-y-2">
                <p className="text-center">Currently Working On </p>
                <ul className="flex space-x-5 text-2xl cursor-pointer">
                  <li>
                    <DiMongodb />
                  </li>
                  <li>
                    <SiExpress />
                  </li>
                  <li>
                    <RiReactjsFill />
                  </li>
                  <li>
                    <FaNodeJs />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 md:ml-64 md:mt-16 mt-8 order-1 flex justify-center items-center">
            <img
              src={pic}
              className="rounded-full  w-[250px] h-[250px] md:w-[400px] md:h-[400px] border-4 border-red-700 shadow-lg p-2"
              alt="Profile"
            />
          </div>
        </div>
      </div>
      <hr className=" border-t-4" />
    </>
  );
}

export default Home;
