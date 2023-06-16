import React from "react";
import { Link } from "react-router-dom";
import { BiRightArrowCircle } from "react-icons/bi";

function Hero() {
  return (
    <div className="mt-11 ">
      <div className="h-[90vh] w-full relative  bg-cover bg-center bg-[url('/src/assets/images/herobg.jpg')]">
        <div
          className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed "
          style={{
            backgroundColor: " rgba(0, 0, 0, 0.6)",
          }}
        >
          <div className=" h-[90vh] flex flex-col items-start justify-center px-10 ">
            <p className="w-full text-[30px] lg:text-[40px] font-bold lg:w-[60%] text-white mb-8">
              Advancing good governance using innovative ideas and technology.
            </p>
            <p className="w-full lg:w-[40%] text-white text-[18px] mb-8">
              Bringing government closer to the people through transformational
              digital innovation.
            </p>
            <button type="" className="h-16 ">
              <Link className="text-white bg-orange-500 p-4 text-lg rounded flex items-center justify-between ">
                <p>Learn More</p>
                <span className="ml-2">
                  <BiRightArrowCircle />
                </span>
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
