import React from "react";
import { xgBanner, xgDiscover } from "../assets";
import { PrimaryButton } from "./components/button";

const Home = () => {
  return (
    <div className="max-w-[1440px] mx-auto">
      <div className="w-full flex flex-col min-h-[1000px] justify-center items-center">
        <img src={xgBanner} alt="Banner" className="h-[432px] w-[630px]" />
        <div className="w-[900px] text-center flex flex-col justify-center items-center">
          <h3 className="text-[90px] font-[400] leading-[105.48px]">
            Leading AI Solutions for
          </h3>
          <h2 className="text-[90px] leading-[105.48px] italic bg-gradient-to-r from-[#FE0C0B] to-[#140F18] bg-clip-text text-transparent">
            Exceptional Results
          </h2>

          <p className="font-[400] text-[#120024] text-[24px]">
            Xogen delivers world-class AI services to transform your business.
            From automation to insights, our cutting-edge technology drives
            innovation and growth like never before.
          </p>
          <div className="w-[242.73px] mt-6 bg-[#FE0C0B] text-[25px] h-[74px] rounded-[5.91px]">
            <PrimaryButton label={"Request a Demo now"} />
          </div>
        </div>
      </div>

      {/* Customer */}
      <div className="">
        <h3 className="text-[45px] font-[700]">Our Customers</h3>
        <div className="w-full flex justify-between mt-4 gap-6">
          <div className="w-[176px] h-[50px] bg-[#eee]"></div>
          <div className="w-[176px] h-[50px] bg-[#eee]"></div>
          <div className="w-[176px] h-[50px] bg-[#eee]"></div>
          <div className="w-[176px] h-[50px] bg-[#eee]"></div>
        </div>
      </div>

      {/* Features */}
      <div className="flex justify-between gap-12 flex-wrap py-32">
        <div className="w-[45%]">
          <div className="h-[288px] bg-[#eee] rounded-[10px] w-full"></div>
          <h2 className="text-[50px] font-[700]">AI-Driven Automation</h2>
          <p className="text-[25px]">
            Streamline your workflows with intelligent automation that reduces
            errors and maximizes efficiency, allowing your team to focus on
            high-impact tasks.
          </p>
        </div>
        <div className="w-[45%]">
          <div className="h-[288px] bg-[#eee] rounded-[10px] w-full"></div>
          <h2 className="text-[50px] font-[700]">Advanced Data Analytics</h2>
          <p className="text-[25px]">
            Transform raw data into powerful insights. Xogen's AI analyzes your
            data to uncover trends, forecast outcomes, and guide strategic
            decisions.
          </p>
        </div>

        <div className="w-[45%]">
          <div className="h-[288px] bg-[#eee] rounded-[10px] w-full"></div>
          <h2 className="text-[50px] font-[700]">Custom AI Development</h2>
          <p className="text-[25px]">
            Our tailor-made AI solutions are designed to meet your unique
            business needs, delivering innovation that scales with your growth.
          </p>
        </div>

        <div className="w-[45%]">
          <div className="h-[288px] bg-[#eee] rounded-[10px] w-full"></div>
          <h2 className="text-[50px] font-[700]">AI-Powered Security</h2>
          <p className="text-[25px]">
            Safeguard your business with AI that detects and prevents threats,
            ensuring transparency and protection.
          </p>
        </div>
      </div>

      {/*  */}
      <div className="flex justify-center items-center flex-wrap py-24">
        <div className="h-[262px] bg-[#eee] rounded-[10px] w-full"></div>
        <div className="flex items-center justify-center py-6">
          <h2 className="text-[62px] font-[600] leading-[105.48px]">
            Simplifying
          </h2>
          <h2 className="text-[62px] leading-[105.48px] italic bg-gradient-to-r from-[#FE0C0B] to-[#140F18] bg-clip-text text-transparent">
            Innovation and Growth
          </h2>
        </div>
        <p className="text-[25px] w-[1187px] text-center">
          At Xogen, we believe AI should be accessible, adaptable, and
          affordable. From start-ups to enterprises, our AI solutions help
          businesses innovate faster, reduce operational costs, and create
          better customer experiences. We take the complexity out of AI, so you
          can focus on what matters.
        </p>
      </div>

      <div className="py-24">
        <h3 className="text-[45px] font-[700]">What our clients are saying</h3>
        <div className="w-full flex justify-between mt-4 gap-6">
          <div className="w-[386px]">
            <div className="h-[320px] bg-[#eee] rounded-[10px] w-full"></div>
            <h2 className="text-[40px] font-[700]">
              Xogen transformed our workflow.
            </h2>
            <p className="text-[20px]">
              With Xogen’s automation tools, we’ve saved hours of manual work
              every week. It’s like having an extra team member—except smarter!
            </p>
            <h2 className="text-[16px] font-[900] mt-4">
              Ada E., Product Manager at DigiTech
            </h2>
          </div>
          <div className="w-[386px]">
            <div className="h-[320px] bg-[#eee] rounded-[10px] w-full"></div>
            <h2 className="text-[40px] font-[700]">
              Insightful and user-friendly.
            </h2>
            <p className="text-[20px]">
              The AI analytics provided by Xogen gave us insights we never
              thought possible. Our strategy is now entirely data-driven.
            </p>
            <h2 className="text-[16px] font-[900] mt-4">
              Femi T., Founder of NeoMarkets
            </h2>
          </div>

          <div className="w-[386px]">
            <div className="h-[320px] bg-[#eee] rounded-[10px] w-full"></div>
            <h2 className="text-[40px] font-[700]">
              Tailored AI solutions that work.
            </h2>
            <p className="text-[20px]">
              Xogen helped us design a custom AI system that has revolutionized
              the way we handle customer data. Highly recommended!
            </p>
            <h2 className="text-[16px] font-[900] mt-4">
              Sarah L., CTO of Globetek
            </h2>
          </div>
        </div>
      </div>

      {/* Discovery */}
      <div className="flex p-[24px] justify-between items-center">
        <div className="w-[40%]">
          <div className="flex gap-2">
            <h2 className="text-[50px] font-[600] leading-[105.48px]">
              Discover
            </h2>
            <h2 className="text-[50px] leading-[105.48px] italic bg-gradient-to-r from-[#FE0C0B] to-[#140F18] bg-clip-text text-transparent">
              Real Impact
            </h2>
          </div>
          <p className="text-[25px]">
            Explore detailed use cases and learn how our AI solutions have made
            a difference for our clients. Dive into success stories and get
            inspired!
          </p>

          <div className="w-[242.73px] mt-6 bg-[#FE0C0B] text-[25px] h-[74px] rounded-[5.91px]">
            <PrimaryButton label={"Read our use cases"} />
          </div>
        </div>
        <div>
          <img
            src={xgDiscover}
            alt="Banner"
            className="h-[371.5px] w-[437.3px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
