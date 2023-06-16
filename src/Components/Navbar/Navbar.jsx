import { useState } from "react";
import { NavLink } from "react-router-dom";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from "react-icons/fi";

function Navbar() {
  const [nav, setNav] = useState(true);
  const handleNav = () => setNav(!nav);

  const [arrow, setArrow] = useState([]);
  const handleArrow = () => setArrow(!arrow);

  const activeLink = "text-[#ef7f1a]";
  const normalLink = "";

  return (
    <div className="fixed z-[100] w-screen mx-auto h-16 bg-white">
      <nav className="max-w-[1440px] flex items-center justify-between px-2 text-sm h-full">
        <NavLink>
          <h1>Fourcore</h1>
        </NavLink>
        <div className="hidden md:flex justify-evenly gap-6">
          <NavLink to="/">
            <p
              className="text-gray-600 hover:text-[18px] hover:text-orange-500
            font-semibold text-base no-underline link link-underline
            link-underline-black h-full"
            >
              Home
            </p>
          </NavLink>
          <NavLink className="text-gray-600 hover:text-[18px] hover:text-orange-500 font-semibold text-base no-underline link link-underline link-underline-black h-full">
            <p>Contact</p>
          </NavLink>
          <NavLink className="text-gray-600 hover:text-[18px] hover:text-orange-500 font-semibold text-base no-underline link link-underline link-underline-black h-full">
            <p>Success Story</p>
          </NavLink>
          <NavLink className="text-gray-600 hover:text-[18px] hover:text-orange-500 font-semibold text-base no-underline link link-underline link-underline-black h-full">
            <p>Career</p>
          </NavLink>
        </div>
        <div className="hidden md:flex">
          <button type="" className=" h-10">
            <NavLink className="bg-orange-500 text-base font-semibold text-white rounded-lg p-3">
              Contact Us
            </NavLink>
          </button>
        </div>
        <div onClick={handleNav} className="block h-full md:hidden">
          {!nav ? (
            <button className="text-white bg-[#ef7f1a] h-full text-center font-semibold text-base my-auto px-3 ">
              <p className="">CLOSE</p>
            </button>
          ) : (
            <button className="text-white bg-[#ef7f1a] h-full text-center font-semibold text-base my-auto px-3 ">
              <p className="">MENU</p>
            </button>
          )}
        </div>
      </nav>
      <div
        className={
          !nav
            ? "fixed left-0 top-[63px] w-screen h-screen bg-white z-10 transition-all ease-in-out duration-500 px-4"
            : "fixed top-[-100vh] transition-all ease-in-out duration-500 -z-30 h-full w-screen"
        }
      >
        <div className="mt-[40px] lg:mt-0 lg:w-[921px] xl:w-[1200px] lg:mx-auto mx-4 sm:mx-8 text-black transform transition-transform duration-500">
          <div className=" mb-[35px] text-[25px] font-semibold hover:text-[#ef7f1a]">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              Home
            </NavLink>
          </div>
          <div className=" mb-[5px] text-[25px] font-semibold">
            <div onClick={handleArrow} className="collapse ">
              <input type="checkbox" />
              <div
                to=""
                className="collapse-title p-0 flex hover:text-[#ef7f1a]"
              >
                <p className="company">Company</p>
                <span className="p-2 font-bold">
                  {!arrow ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
                </span>
              </div>
              <div className="collapse-content flex flex-col ">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? activeLink : normalLink
                  }
                  to="/about-us"
                >
                  <p className="mb-2 hover:text-[#ef7f1a]">About Us</p>
                </NavLink>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? activeLink : normalLink
                  }
                  to="/leadership-team"
                >
                  <p className="mb-2 hover:text-[#ef7f1a]">Leadership Team</p>
                </NavLink>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? activeLink : normalLink
                  }
                  to="/cert-and-comp"
                >
                  <p className="mb-2 hover:text-[#ef7f1a]">
                    Certificate & Compliance
                  </p>
                </NavLink>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? activeLink : normalLink
                  }
                  to="/affiliates"
                >
                  <p className="mb-2 hover:text-[#ef7f1a]">Our Affiliates</p>
                </NavLink>
              </div>
            </div>
          </div>
          <div className=" mb-[35px] text-[25px] font-semibold hover:text-[#ef7f1a]">
            <NavLink
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
              to="/success-stories"
            >
              Success Stories
            </NavLink>
          </div>
          <div className=" mb-[35px] text-[25px] font-semibold hover:text-[#ef7f1a]">
            <NavLink
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
              to="/careers"
            >
              Career
            </NavLink>
          </div>
          <button className="bg-[#ef7f1a] w-[180px] mx-auto h-12 rounded mb-[35px]">
            Contact Us
          </button>
          <div className="flex justify-between md:w-[40%] ">
            <FiFacebook className="mr-5" />
            <FiTwitter className="mx-5" />
            <FiInstagram className="mx-5" />
            <FiLinkedin className="mx-5" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
