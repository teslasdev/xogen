import React from "react";
import {
    xgAdvanceSvg,
  xgBanner3,
  xgBulb,
  xgCentric,
  xgCollab,
  xgCustomSvg,
  xgDrivenSvg,
  xgExcel,
  xgInsta,
  xgIntegrity,
  xgRobotSvg,
  xgStory,
} from "../assets";

const About = () => {
  return (
    <div className="px-6 lg:px-0 max-w-[1440px] mx-auto">
      <div className="w-full flex flex-col lg:min-h-[700px] justify-center items-center">
        <img src={xgBanner3} alt="Banner" className="lg:h-[103px] w-full" />
        <div className="lg:w-[900px] text-center mt-6 flex flex-col justify-center items-center">
          <h3 className="lg:text-[90px] text-[45px] font-[400] leading-[105.48px]">
            About Us
          </h3>

          <p className="font-[400] text-[#120024] lg:text-[24px] text-[20px]">
            At Xogen, we’re passionate about creating AI solutions that empower
            businesses to thrive. Our mission is simple: to make AI accessible
            and impactful for companies of all sizes. Through innovation,
            integrity, and a relentless focus on excellence, we’re here to
            transform the way you work, helping you stay ahead in an
            ever-changing world.
          </p>
        </div>
      </div>

      <hr className="mt-6" />

      {/* Spec */}
      <div className="flex flex-wrap lg:p-[24px] justify-between">
        <div className="lg:w-[40%] w-full">
          <div className="flex gap-2">
            <h2 className="text-[50px] font-[600] leading-[105.48px]">Our</h2>
            <h2 className="text-[50px] leading-[105.48px] italic bg-gradient-to-r from-[#FE0C0B] to-[#140F18] bg-clip-text text-transparent">
              Story
            </h2>
          </div>
          <p className="text-[20px]">
            It all began with a vision—to harness the power of AI and make it
            practical for every business, no matter the industry or scale. Xogen
            was founded by a group of forward-thinkers who saw AI as more than a
            technology trend, but as a tool to create real impact. From our
            humble beginnings, we’ve grown into a trusted AI partner, providing
            smart solutions to businesses across the globe.
          </p>
          <p className="text-[20px] mt-6">
            Our journey has been one of innovation, learning, and collaboration.
            Along the way, we’ve hit key milestones—expanding our service
            offerings, refining our technology, and delivering results that
            speak for themselves. As we continue to grow, one thing remains the
            same: our commitment to pushing boundaries and helping our clients
            succeed.
          </p>
        </div>
        <div>
          <img src={xgStory} alt="Banner" className="lg:h-[664px] lg:w-[437.3px]" />
        </div>
      </div>

      <div className="w-full flex py-12 justify-center items-center">
        <div className=" text-center mt-6 flex flex-col justify-center items-center">
          <h3 className="lg:text-[90px] text-[45px] font-[400] leading-[105.48px]">
            Our specialty
          </h3>

          <p className="font-[400] mt-3 text-[#120024] lg:text-[24px] text-[20px]">
            At Xogen, we offer cutting-edge AI services that simplify complexity
            and drive results. From automating repetitive tasks to providing
            deep data insights, our solutions are designed to help businesses
            optimize performance and innovate with confidence.
          </p>
        </div>
      </div>

      <div className="flex justify-between items-center w-full mt-6">
        <div className="text-center flex flex-wrap gap-6 justify-between items-center w-full">
          <div>
            <img src={xgDrivenSvg} alt="Banner" className="h-[103px] w-full" />
            <p className="font-[500] mt-2 text-[20px]">AI-Driven Automation</p>
            <p className="md:w-[252px]">Boost efficiency by automating everyday processes</p>
          </div>

          <div>
            <img src={xgAdvanceSvg} alt="Banner" className="h-[103px] w-full" />
            <p className="font-[500] mt-2 text-[20px]">Data Insights</p>
            <p className="md:w-[252px]">Unlock the power of your data for smarter decisions.</p>
          </div>

          <div>
            <img src={xgCustomSvg} alt="Banner" className="h-[103px] w-full" />
            <p className="font-[500] mt-2 text-[20px]">Custom AI Solutions</p>
            <p className="md:w-[252px]">Tailored AI to meet your unique business needs.</p>
          </div>

          <div>
            <img src={xgRobotSvg} alt="Banner" className="h-[103px] w-full" />
            <p className="font-[500] mt-2 text-[20px]">AI Security</p>
            <p className="md:w-[252px]">Keep your business secure with advanced AI threat detection.</p>
          </div>
        </div>
      </div>

      {/* Team */}
      <div className="lg:py-24 py-12">
        <h3 className="lg:text-[45px] text-[23px] font-[700]">Our Team</h3>
        <div className="w-full flex flex-wrap justify-between mt-4 gap-6">
          <div className="lg:w-[386px]">
            <div className="h-[320px] bg-[#eee] rounded-[10px] w-full"></div>
            <h2 className="lg:text-[40px] text-[20px] lg:mt-0 mt-4 font-[700]">David O. – CEO</h2>
            <p className="text-[20px]">
              David leads Xogen with 15+ years of AI and tech experience. His
              focus on innovation and business strategy drives the company’s
              growth and success.
            </p>
          </div>
          <div className="lg:w-[386px]">
            <div className="h-[320px] bg-[#eee] rounded-[10px] w-full"></div>
            <h2 className="lg:text-[40px] text-[20px] lg:mt-0 mt-4 font-[700]">Amina B. – CTO</h2>
            <p className="text-[20px]">
              Amina oversees Xogen’s AI technology, transforming complex
              challenges into scalable, user-friendly solutions. She’s a leader
              in AI development and data science.
            </p>
          </div>

          <div className="lg:w-[386px]">
            <div className="h-[320px] bg-[#eee] rounded-[10px] w-full"></div>
            <h2 className="lg:text-[40px] text-[20px] lg:mt-0 mt-4 font-[700]">Chike N. – Product Lead</h2>
            <p className="text-[20px]">
              Chike ensures Xogen’s AI products meet business needs. With 10+
              years in product management, he crafts solutions that bring real
              value to clients.
            </p>
          </div>
        </div>
      </div>

      {/* Our values */}
      <div className="w-full flex py-12 justify-center items-center">
        <div className="text-center lg:mt-6 flex flex-col justify-center items-center">
          <h3 className="lg:text-[90px] text-[45px] font-[400] leading-[105.48px]">
            Our Values
          </h3>

          <p className="font-[400] mt-3 text-[#120024] lg:text-[24px] text-[20px]">
            At Xogen, our values are more than just words—they shape every
            decision, interaction, and solution we provide. They reflect who we
            are as a company and guide how we work with our clients and each
            other. From the way we approach challenges to the partnerships we
            build, these core principles ensure that we remain focused on
            delivering innovative, ethical, and client-focused AI solutions that
            create lasting impact.
          </p>
        </div>
      </div>

      {/*  */}

      <div className="flex justify-between items-center w-full mt-6">
        <div className="text-center flex-wrap gap-12 flex justify-between items-center w-full">
          <div>
            <img src={xgBulb} alt="Banner" className="md:h-[103px] h-[70px] w-full" />
            <p className="font-[500] mt-2 text-[20px]">Innovation</p>
          </div>

          <div>
            <img src={xgIntegrity} alt="Banner" className="md:h-[103px] h-[70px]  w-full" />
            <p className="font-[500] mt-2 text-[20px]">Integrity</p>
          </div>

          <div>
            <img src={xgCollab} alt="Banner" className="md:h-[103px] h-[70px]  w-full" />
            <p className="font-[500] mt-2 text-[20px]">Collaboration</p>
          </div>

          <div>
            <img src={xgExcel} alt="Banner" className="md:h-[103px] h-[70px]  w-full" />
            <p className="font-[500] mt-2 text-[20px]">Excellence</p>
          </div>

          <div>
            <img src={xgCentric} alt="Banner" className="md:h-[103px] h-[70px]  w-full" />
            <p className="font-[500] mt-2 text-[20px]">Customer-centric</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
