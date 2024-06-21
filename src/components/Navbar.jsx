import { useCallback, useState } from "react";
import pic from "../../public/photo.jpg";
import { IoIosMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-scroll";

function Navbar() {
  const [menu, setMenu] = useState(false);

  const navItems = [
    { id: 1, text: "Home" },
    { id: 2, text: "About" },
    { id: 3, text: "Portfolio" },
    { id: 4, text: "Experience" },
    { id: 5, text: "Contact us" },
  ];

  function toggleMenu() {
    setMenu(!menu);
  }

  function renderNavItems() {
    return navItems.map(function (item) {
      return (
        <li
          className="hover:scale-105 duration-200 cursor-pointer my-2"
          key={item.id}
        >
          <Link
            to={item.text}
            smooth={true}
            duration={500}
            offset={-70}
          >
            {item.text}
          </Link>
        </li>
      );
    });
  }

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 shadow-md fixed top-0 left-0 right-0 z-50 bg-white ">
        <div className="flex justify-between items-center h-16">
          <div className="flex space-x-2">
            <img
              src={pic}
              alt="Profile"
              className="h-12 w-12 rounded-full"
            ></img>
            <h1 className="font-semibold text-xl cursor-pointer">
              Hiten
              <p className="text-sm">Web Developer</p>
            </h1>
          </div>
          <div>
            <ul className="hidden md:flex space-x-8">{renderNavItems()}</ul>
            <div onClick={toggleMenu} className="md:hidden">
              {menu ? <IoMdClose size={27} /> : <IoIosMenu size={27} />}
            </div>
          </div>
        </div>
      </div>
      {menu && (
        <div className="md:hidden flex flex-col items-center justify-center h-screen text-center text-xl">
          <ul className="space-y-5 text-size">{renderNavItems()}</ul>
        </div>
      )}
    </>
  );
}

export default Navbar;
