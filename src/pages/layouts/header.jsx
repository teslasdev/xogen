import React, { useState } from "react";
import { xgLogo } from "../../assets";
import { PrimaryButton } from "../components/button";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="h-[180px] flex justify-center items-center">
      <div className="lg:h-[98.81px] h-[70px] fixed z-50 rounded-[40px] lg:w-[80%] md:w-[95%] w-[90%] bg-[#0B0202]">
        <div className="w-full h-full flex justify-between items-center md:px-8 px-4">
          <Link to={"/"}>
            <img
              src={xgLogo}
              alt=""
              className="lg:w-fit lg:h-fit w-[100px] h-[100px]"
            />
          </Link>

          <ul className="text-white text-[19.69px] hidden gap-4 md:flex">
            <Link to={"/about"}>
              <li className="">About Xogen</li>
            </Link>
            <Link to={"/what-we-do"}>
              <li className="">What we do</li>
            </Link>
            <Link to={"/use-cases"}>
              <li className="">Use Cases</li>
            </Link>
            <Link to={"/contact"}>
              <li className="">Contact us</li>
            </Link>
          </ul>
          <div className="lg:w-[141.92px] w-[120px] hidden md:flex  bg-[#FE0C0B] lg:text-[25px] lg:h-[63.37px] h-[40px] rounded-[5.91px]">
            <PrimaryButton label={"Try Xogen"} />
          </div>

          <div
            className="lg:w-[141.92px] w-[120px] md:hidden flex  bg-[#FE0C0B] lg:text-[25px] lg:h-[63.37px] h-[40px] rounded-[5.91px]"
            onClick={() => setOpen(true)}
          >
            <PrimaryButton label={"MENU"} />
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="h-[100vh] z-[100] fixed bottom-0 w-full bg-black">
          <div className="lg:w-[141.92px] w-[120px] absolute top-5 right-5  bg-[#FE0C0B] lg:text-[25px] lg:h-[63.37px] h-[40px] rounded-[5.91px]" onClick={() => setOpen(false)}>
            <PrimaryButton label={"CLOSE"} />
          </div>
          <ul className="text-white font-[700] flex flex-col w-full h-full justify-center items-center text-[30px] gap-4">
            <Link to={"/about"} onClick={() => setOpen(false)}>
              <li className="">About Xogen</li>
            </Link>
            <Link to={"/what-we-do"} onClick={() => setOpen(false)}>
              <li className="">What we do</li>
            </Link>
            <Link to={"/use-cases"} onClick={() => setOpen(false)}>
              <li className="">Use Cases</li>
            </Link>
            <Link to={"/contact"} onClick={() => setOpen(false)}>
              <li className="">Contact us</li>
            </Link>

            <div className="w-[141.92px] flex bg-[#FE0C0B] lg:text-[25px] text-[19px] mt-6 lg:h-[63.37px] h-[50px] rounded-[5.91px]">
              <PrimaryButton label={"Try Xogen"} />
            </div>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
