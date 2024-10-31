import React from "react";
import {
  xgAi,
  xgAnalystics,
  xgAuto,
  xgBanner,
  xgCustomer1,
  xgCustomer2,
  xgCustomer3,
  xgDiscover,
  xgSecurity,
} from "../assets";
import { PrimaryButton } from "./components/button";

const Home = () => {
  return (
    <div className="px-6 lg:px-0 md:max-w-[1440px] mx-auto">
      <div className="w-full flex flex-col lg:min-h-[1000px] justify-center items-center">
        <img
          src={xgBanner}
          alt="Banner"
          className="lg:h-[332px] rounded-[10px] lg:w-[630px]"
        />
        <div className="lg:w-[900px] text-center flex flex-col justify-center items-center">
          <h3 className="lg:text-[90px] md:text-[60px] text-[25px] font-[400] lg:leading-[105.48px]">
            Leading AI Solutions for
          </h3>
          <h2 className="lg:mt-0 mt-4 lg:text-[90px] md:text-[60px] text-[25px] lg:leading-[105.48px] italic bg-gradient-to-r from-[#FE0C0B] to-[#140F18] bg-clip-text text-transparent">
            Exceptional Results
          </h2>

          <p className="font-[400] text-[#120024] lg:text-[24px] text-[14px]">
            Xogen delivers world-class AI services to transform your business.
            From automation to insights, our cutting-edge technology drives
            innovation and growth like never before.
          </p>
          <div className="w-[242.73px] mt-6 bg-[#FE0C0B] lg:lg:text-[25px] lg:h-[74px] h-[60px] rounded-[5.91px]">
            <PrimaryButton label={"Request a Demo now"} />
          </div>
        </div>
      </div>

      {/* Customer */}
      <div className="md:pt-0 pt-6">
        <h3 className="lg:text-[45px] text-[20px] text-center md:text-start font-[700]">
          Our Customers
        </h3>
        <div className="w-full flex flex-wrap justify-between mt-4 gap-6">
          <div className="md:w-[176px] w-[130px] h-[50px] bg-[#eee]"></div>
          <div className="md:w-[176px] w-[130px] h-[50px] bg-[#eee]"></div>
          <div className="md:w-[176px] w-[130px] h-[50px] bg-[#eee]"></div>
          <div className="md:w-[176px] w-[130px] h-[50px] bg-[#eee]"></div>
        </div>
      </div>

      {/* Features */}
      <div className="flex justify-between gap-12 flex-wrap py-32">
        <div className="md:w-[45%] w-full">
          <div className="lg:h-[288px] h-[180px] bg-[#eee] rounded-[10px] w-full">
            <img
              src={xgAuto}
              alt="Banner"
              className="w-full h-full rounded-[10px]"
            />
          </div>
          <h2 className="lg:mt-0 mt-4 lg:text-[50px] text-[25px] font-[700]">
            AI-Driven Automation
          </h2>
          <p className="lg:lg:text-[25px]">
            Streamline your workflows with intelligent automation that reduces
            errors and maximizes efficiency, allowing your team to focus on
            high-impact tasks.
          </p>
        </div>
        <div className="md:w-[45%] w-full">
          <div className="lg:h-[288px] h-[180px] bg-[#eee] rounded-[10px] w-full">
            <img
              src={xgAnalystics}
              alt="Banner"
              className="w-full h-full rounded-[10px]"
            />
          </div>
          <h2 className="lg:mt-0 mt-4 lg:text-[50px] text-[25px] font-[700]">
            Advanced Data Analytics
          </h2>
          <p className="lg:text-[25px]">
            Transform raw data into powerful insights. Xogen's AI analyzes your
            data to uncover trends, forecast outcomes, and guide strategic
            decisions.
          </p>
        </div>

        <div className="md:w-[45%] w-full">
          <div className="lg:h-[288px] h-[180px] bg-[#eee] rounded-[10px] w-full">
            <img
              src={xgAi}
              alt="Banner"
              className="w-full h-full rounded-[10px]"
            />
          </div>
          <h2 className="lg:mt-0 mt-4 lg:text-[50px] text-[25px] font-[700]">
            Custom AI Development
          </h2>
          <p className="lg:text-[25px]">
            Our tailor-made AI solutions are designed to meet your unique
            business needs, delivering innovation that scales with your growth.
          </p>
        </div>

        <div className="md:w-[45%] w-full">
          <div className="lg:h-[288px] h-[180px] bg-[#eee] rounded-[10px] w-full">
            <img
              src={xgSecurity}
              alt="Banner"
              className="w-full h-full rounded-[10px]"
            />
          </div>
          <h2 className="lg:mt-0 mt-4 lg:text-[50px] text-[25px] font-[700]">
            AI-Powered Security
          </h2>
          <p className="lg:text-[25px]">
            Safeguard your business with AI that detects and prevents threats,
            ensuring transparency and protection.
          </p>
        </div>
      </div>

      {/*  */}
      <div className="flex justify-center items-center flex-wrap py-24">
        <div className="h-[362px] bg-[#eee] rounded-[10px] w-full">
          <img
            src={xgBanner}
            alt="Banner"
            className="w-full h-full rounded-[10px] object-cover object-top"
          />
        </div>
        <div className="flex items-center flex-wrap justify-center gap-2 py-6">
          <h2 className="lg:mt-0 mt-4 lg:text-[62px] text-[31px] font-[600] lg:leading-[105.48px]">
            Simplifying
          </h2>
          <h2 className="lg:mt-0 mt-4 lg:text-[62px] text-[31px] lg:leading-[105.48px] italic bg-gradient-to-r from-[#FE0C0B] to-[#140F18] bg-clip-text text-transparent">
            Innovation and Growth
          </h2>
        </div>
        <p className="lg:text-[25px] w-[1187px] text-center">
          At Xogen, we believe AI should be accessible, adaptable, and
          affordable. From start-ups to enterprises, our AI solutions help
          businesses innovate faster, reduce operational costs, and create
          better customer experiences. We take the complexity out of AI, so you
          can focus on what matters.
        </p>
      </div>

      <div className="py-24">
        <h3 className="text-[45px] font-[700]">What our clients are saying</h3>
        <div className="w-full flex justify-between mt-4 flex-wrap gap-6">
          <div className="lg:w-[386px]">
            <div className="h-[320px] bg-[#eee] rounded-[10px] w-full">
              <img
                src={xgCustomer1}
                alt="Banner"
                className="w-full h-full rounded-[10px]"
              />
            </div>
            <h2 className="lg:mt-0 mt-4 lg:text-[40px] text-[20px] font-[700]">
              Xogen transformed our workflow.
            </h2>
            <p className="lg:text-[20px]">
              With Xogen’s automation tools, we’ve saved hours of manual work
              every week. It’s like having an extra team member—except smarter!
            </p>
            <h2 className="lg:mt-0 mt-4 text-[16px] font-[900]">
              Ada E., Product Manager at DigiTech
            </h2>
          </div>
          <div className="lg:w-[386px]">
            <div className="h-[320px] bg-[#eee] rounded-[10px] w-full">
              <img
                src={xgCustomer2}
                alt="Banner"
                className="w-full h-full rounded-[10px]"
              />
            </div>
            <h2 className="lg:mt-0 mt-4 lg:text-[40px] text-[20px] font-[700]">
              Insightful and user-friendly.
            </h2>
            <p className="lg:text-[20px]">
              The AI analytics provided by Xogen gave us insights we never
              thought possible. Our strategy is now entirely data-driven.
            </p>
            <h2 className="lg:mt-0 mt-4 text-[16px] font-[900]">
              Femi T., Founder of NeoMarkets
            </h2>
          </div>

          <div className="lg:w-[386px]">
            <div className="h-[320px] bg-[#eee] rounded-[10px] w-full">
              <img
                src={xgCustomer3}
                alt="Banner"
                className="w-full h-full rounded-[10px]"
              />
            </div>
            <h2 className="lg:mt-0 mt-4 lg:text-[40px] text-[20px] font-[700]">
              Tailored AI solutions that work.
            </h2>
            <p className="lg:text-[20px]">
              Xogen helped us design a custom AI system that has revolutionized
              the way we handle customer data. Highly recommended!
            </p>
            <h2 className="lg:mt-0 mt-4 text-[16px] font-[900]">
              Sarah L., CTO of Globetek
            </h2>
          </div>
        </div>
      </div>

      {/* Discovery */}
      <div className="flex flex-wrap  lg:p-[24px] justify-between items-center">
        <div className="lg:w-[40%]">
          <div className="flex flex-wrap gap-2">
            <h2 className="lg:mt-0 md:text-[50px] text-[30px] font-[600] lg:leading-[105.48px]">
              Discover
            </h2>
            <h2 className="lg:mt-0 md:text-[50px] text-[30px] lg:leading-[105.48px] italic bg-gradient-to-r from-[#FE0C0B] to-[#140F18] bg-clip-text text-transparent">
              Real Impact
            </h2>
          </div>
          <p className="lg:text-[25px]">
            Explore detailed use cases and learn how our AI solutions have made
            a difference for our clients. Dive into success stories and get
            inspired!
          </p>

          <div className="w-[242.73px] mt-6 bg-[#FE0C0B] lg:text-[25px] text-[20px] h-[74px] rounded-[5.91px]">
            <PrimaryButton label={"Read our use cases"} />
          </div>
        </div>
        <div className="lg:flex hidden justify-center items-center">
          <img
            src={xgDiscover}
            alt="Banner"
            className="lg:h-[371.5px] w-full md:h-[400px] lg:mt-0 mt-6 lg:w-[437.3px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
