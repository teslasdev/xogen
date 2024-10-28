import React from "react";
import { xgBanner3, xgSttream, xgTailored, xgUnclock } from "../assets";

const Whatwedo = () => {
  return (
    <div className="px-6 lg:px-0 max-w-[1440px] mx-auto">
    <div className="w-full flex flex-col lg:min-h-[700px] justify-center items-center">
      <img src={xgBanner3} alt="Banner" className="lg:h-[103px] w-full" />
        <div className="lg:w-[900px] text-center mt-6 flex flex-col justify-center items-center">
          <h3 className="lg:text-[90px] text-[45px] font-[400] leading-[105.48px]">
            What we do
          </h3>

          <p className="font-[400] text-[#120024] md:text-[24px] lg:text-[20px] py-4">
            At Xogen, we’re dedicated to transforming the way you do business
            through innovative AI solutions. Our mission is to make advanced
            technology practical and accessible, driving efficiency, enhancing
            decision-making, and unlocking new opportunities for growth.
          </p>
        </div>
      </div>

      <hr className="mt-6" />

      {/* Spec */}
      <div className="flex lg:p-[24px] py-12 flex-row-reverse flex-wrap items-center justify-between">
        <div className="w-[100%] lg:w-[40%]">
          <div className="flex gap-2">
            <h2 className="text-[25px] font-[600] lg:leading-[105.48px]">
              Streamline Your Operations
            </h2>
          </div>
          <p className="lg:text-[20px] py-4">
            Our AI-driven automation tools handle repetitive tasks, freeing up
            your team to focus on strategic activities. From automating data
            entry to managing workflows, our solutions help you achieve greater
            efficiency and productivity.
          </p>
        </div>
        <div>
          <img src={xgSttream} alt="Banner" className="lg:h-[361px] lg:w-[506px]" />
        </div>
      </div>

      <div className="flex lg:p-[24px] py-12 flex-wrap items-center justify-between">
        <div className="w-[100%] lg:w-[40%]">
          <div className="flex gap-2">
            <h2 className="text-[25px] font-[600] lg:leading-[105.48px]">
              Unlock Insights and Drive Decisions
            </h2>
          </div>
          <p className="lg:text-[20px] py-4">
            Leverage the power of AI to analyze complex data sets and gain
            actionable insights. Our data analytics solutions provide real-time
            reports, predictive analytics, and deep insights to guide your
            business strategies and decision-making processes.
          </p>
        </div>
        <div>
          <img src={xgUnclock} alt="Banner" className="lg:h-[361px] lg:w-[506px]" />
        </div>
      </div>

      <div className="flex lg:p-[24px] py-12 flex-row-reverse flex-wrap items-center justify-between">
        <div className="w-[100%] lg:w-[40%]">
          <div className="flex gap-2">
            <h2 className="text-[25px] font-[600] lg:leading-[105.48px]">
              Tailored Solutions for Your Unique Needs
            </h2>
          </div>
          <p className="lg:text-[20px] py-4">
            We offer bespoke AI development services to create solutions that
            fit your specific requirements. Whether you need a custom algorithm,
            application, or integration, our team works closely with you to
            develop and deploy technology that aligns with your goals.
          </p>
        </div>
        <div>
          <img src={xgTailored} alt="Banner" className="lg:h-[361px] lg:w-[506px]" />
        </div>
      </div>
    </div>
  );
};

export default Whatwedo;
