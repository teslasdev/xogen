import React from "react";
import { xgBanner3, xgSttream, xgTailored, xgUnclock } from "../assets";

const Whatwedo = () => {
  return (
    <div className="max-w-[1440px] mx-auto">
      <div className="w-full flex flex-col min-h-[700px] justify-center items-center">
        <img src={xgBanner3} alt="Banner" className="h-[103px] w-full" />
        <div className="w-[900px] text-center mt-6 flex flex-col justify-center items-center">
          <h3 className="text-[90px] font-[400] leading-[105.48px]">
            What we do
          </h3>

          <p className="font-[400] text-[#120024] text-[24px]">
            At Xogen, we’re dedicated to transforming the way you do business
            through innovative AI solutions. Our mission is to make advanced
            technology practical and accessible, driving efficiency, enhancing
            decision-making, and unlocking new opportunities for growth.
          </p>
        </div>
      </div>

      <hr />

      {/* Spec */}
      <div className="flex p-[24px] flex-row-reverse items-center justify-between">
        <div className="w-[40%]">
          <div className="flex gap-2">
            <h2 className="text-[25px] font-[600] leading-[105.48px]">
              Streamline Your Operations
            </h2>
          </div>
          <p className="text-[20px]">
            Our AI-driven automation tools handle repetitive tasks, freeing up
            your team to focus on strategic activities. From automating data
            entry to managing workflows, our solutions help you achieve greater
            efficiency and productivity.
          </p>
        </div>
        <div>
          <img src={xgSttream} alt="Banner" className="h-[361PX] w-[506px]" />
        </div>
      </div>

      <div className="flex p-[24px]  items-center justify-between">
        <div className="w-[40%]">
          <div className="flex gap-2">
            <h2 className="text-[25px] font-[600] leading-[105.48px]">
              Unlock Insights and Drive Decisions
            </h2>
          </div>
          <p className="text-[20px]">
            Leverage the power of AI to analyze complex data sets and gain
            actionable insights. Our data analytics solutions provide real-time
            reports, predictive analytics, and deep insights to guide your
            business strategies and decision-making processes.
          </p>
        </div>
        <div>
          <img src={xgUnclock} alt="Banner" className="h-[361PX] w-[506px]" />
        </div>
      </div>

      <div className="flex p-[24px] flex-row-reverse items-center justify-between">
        <div className="w-[40%]">
          <div className="flex gap-2">
            <h2 className="text-[25px] font-[600] leading-[105.48px]">
              Tailored Solutions for Your Unique Needs
            </h2>
          </div>
          <p className="text-[20px]">
            We offer bespoke AI development services to create solutions that
            fit your specific requirements. Whether you need a custom algorithm,
            application, or integration, our team works closely with you to
            develop and deploy technology that aligns with your goals.
          </p>
        </div>
        <div>
          <img src={xgTailored} alt="Banner" className="h-[361PX] w-[506px]" />
        </div>
      </div>
    </div>
  );
};

export default Whatwedo;
