import React, { useState } from "react";
import { xgBanner3 } from "../assets";

const Contact = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqItems = [
    {
      title: "What Services Does Xogen Offer?",
      content: `Xogen provides a range of AI solutions including AI-driven automation, data analytics, custom AI development, and AI security. Our services are designed to help businesses optimize operations, make data-driven decisions, and enhance customer experiences.`,
    },
    {
      title: "How Can AI Benefit My Business?",
      content:
        "AI can help your business by automating processes, providing data insights, and improving customer service, ultimately leading to cost reductions and increased efficiency.",
    },
    {
      title: "Is Xogen's AI Technology Customizable?",
      content:
        "Yes, Xogen’s AI technology can be tailored to meet the specific needs of your business, ensuring that you get the most out of your investment.",
    },
    {
      title: "What Kind Of Support Does Xogen Offer?",
      content:
        "We offer 24/7 support for all our AI solutions, with dedicated account managers and technical teams to ensure smooth integration and operation.",
    },
    {
      title: "How Can I Get Started With Xogen?",
      content:
        "You can get started by contacting our team for a free consultation, where we'll assess your needs and propose the best AI solutions for your business.",
    },
  ];
  return (
    <div className="px-6 lg:px-0 max-w-[1440px] mx-auto">
    <div className="w-full flex flex-col lg:min-h-[300px] justify-center items-center">
      <img src={xgBanner3} alt="Banner" className="lg:h-[103px] w-full" />
      <div className="lg:w-[950px] text-center mt-6 flex flex-col justify-center items-center">
        <h3 className="lg:text-[95px] text-[45px] text-[#f22b0a] font-[500]  leading-[105.48px]">
          Contact Us
        </h3>

        <p className="font-[400] text-[#120024] lg:text-[20px] mt-4">
            We’re here to help you explore the power of AI and how it can
            transform your business. Whether you have questions about our
            solutions, need assistance, or want to discuss how we can tailor our
            services to your needs, our team is ready to assist.
          </p>
        </div>
      </div>

      <hr className="mt-6" />

      <div className="py-12 flex flex-col gap-12 justify-center items-center">
        <div className="md:w-[80%] w-[95%]">
          <div>
            <p className="text-[20px] pb-2 font-[500]">Name</p>
          </div>
          <div className="flex items-center gap-4 justify-between">
            <div className="w-[491px] lg:h-[81px] h-[61px] border-[0.35px] border-[#00000050] rounded-[5.91px]">
              <input
                type="text"
                className="border-none outline-none h-full w-full px-4 text-[18px] bg-transparent"
                placeholder="First Name"
              />
            </div>
            <div className="w-[491px] lg:h-[81px] h-[61px] border-[0.35px] border-[#00000050] rounded-[5.91px]">
              <input
                type="text"
                className="border-none outline-none h-full w-full px-4 text-[18px] bg-transparent"
                placeholder="Last Name"
              />
            </div>
          </div>
        </div>

        <div className="md:w-[80%] w-[95%]">
          <div>
            <p className="text-[20px] pb-2 font-[500]">Email Address</p>
          </div>
          <div className="flex items-center justify-between">
            <div className="w-full lg:h-[81px] h-[61px] border-[0.35px] border-[#00000050] rounded-[5.91px]">
              <input
                type="text"
                className="border-none outline-none h-full w-full px-4 text-[18px] bg-transparent"
                placeholder="First Name"
              />
            </div>
          </div>
        </div>

        <div className="md:w-[80%] w-[95%]">
          <div>
            <p className="text-[20px] pb-2 font-[500]">
              How can Xogen help you?
            </p>
          </div>
          <div className="flex items-center justify-between">
            <div className="w-full lg:h-[81px] h-[61px] flex items-center border-[0.35px] pr-4 border-[#00000050] rounded-[5.91px]">
              <select className="w-full h-full text-[20px] px-4 border-none outline-none bg-transparent">
                <option>Service enquiry</option>
              </select>
            </div>
          </div>
        </div>

        <div className="md:w-[80%] w-[95%]">
          <div>
            <p className="text-[20px] pb-2 font-[500]">Comment</p>
          </div>
          <div className="flex items-center justify-between">
            <div className="w-full h-[150px] border-[0.35px] border-[#00000050] rounded-[5.91px]">
              <textarea
                type="text"
                className="border-none outline-none h-full w-full p-4 text-[18px] bg-transparent"
                placeholder="First Name"
              ></textarea>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-4 py-12">
        {faqItems.map((item, index) => (
          <div key={index} className="border-b border-gray-300">
            <button
              onClick={() => handleToggle(index)}
              className="w-full lg:text-[30px] text-[20px] font-[600] flex justify-between items-center py-4 text-left text-lg  text-gray-800 focus:outline-none"
            >
              <h2>{item.title}</h2>
              <span className="text-xl border md:h-[50px] md:w-[50px] w-[25px] h-[25px] flex justify-center items-center rounded-full">
                {activeIndex === index ? "-" : "+"}
              </span>
            </button>
            {activeIndex === index && (
              <div className="lg:px-4 px-2 pb-4 lg:text-[20px] text-gray-600">
                <p>{item.content}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;
