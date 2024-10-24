import React from "react";
import { PrimaryButton } from "../components/button";
import { xgArrow, xgFace, xgInsta, xgLink, xgLogo2 } from "../../assets/index";

const Footer = () => {
  return (
    <div className="max-w-[1440px] mx-auto">
      <div className="py-32 px-12">
        <div className="border relative border-[#D5D5D5] h-[500px] rounded-[14px] flex flex-col justify-center items-center">
          <p className="text-[25px] w-[765px] text-center">
            Get the latest in AI trends, tips, and updates straight to your
            inbox. Don’t miss out—join the Xogen community today!
          </p>

          <div className="w-[683px] h-[77px] flex mt-6">
            <div className="w-[491px] h-full border-[0.35px] border-[#00000050] rounded-l-[5.91px]">
              <input
                type="text"
                className="border-none outline-none h-full w-full px-4 text-[25px] bg-transparent"
                placeholder="Enter your email to subscribe"
              />
            </div>
            <div className="w-[192px] bg-[#FE0C0B] text-[25px] h-full rounded-r-[5.91px]">
              <PrimaryButton label={"Subscribe"} />
            </div>
          </div>

    
        </div>
      </div>

      <div>
        <div className="flex justify-between">
          <div className="w-[430px]">
            <img src={xgLogo2} alt="" className="h-[119.34px]" />
            <div className="px-4 text-[20px] font-[700] space-y-2">
              <li>45 Kensington High Street</li>
              <li>London</li>
              <li>W8 5EB</li>
              <li>United Kingdom</li>
            </div>

            <div className="flex gap-4 mt-6 px-4">
              <div>
                <img src={xgLink} alt="" className="h-[59px] w-[67px]" />
              </div>
              <div>
                <img src={xgInsta} alt="" className="h-[59px] w-[67px]" />
              </div>
              <div>
                <img src={xgFace} alt="" className="h-[59px] w-[67px]" />
              </div>
            </div>
          </div>

          <div className="mt-4">
            <span className="flex gap-3 items-center">
              <h2 className="text-[25px] font-[700]">Overview </h2>
              <img src={xgArrow} alt="" className="w-[24px] h-[34px]" />
            </span>
            <div className="text-[20px] space-y-4 font-[700] mt-4">
              <li>About Xogen</li>
              <li>What we do</li>
              <li>Use Cases</li>
              <li>Contact us</li>
            </div>
          </div>

          <div className="mt-4">
            <span className="flex gap-3 items-center">
              <h2 className="text-[25px] font-[700]">Documentation </h2>
              <img src={xgArrow} alt="" className="w-[24px] h-[34px]" />
            </span>
            <div className="text-[20px] space-y-4 font-[700] mt-4">
              <li>Privacy</li>
              <li>Cookies</li>
              <li>Terms & Conditions</li>
              <li>Legal Center</li>
            </div>
          </div>
        </div>
      </div>

      <div className="border border-t-[#000000] py-6 pb-12 mt-12 text-center">
        <p className="text-[20px]">
          © Copyright 2024 | Company registration No. 1234567
        </p>
      </div>
    </div>
  );
};

export default Footer;
