"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ExpectDemo from "./expect-demo/page";
import ServicesGive from "./services-give/page";
import KeepUp from "./keep-up/page";
import Image from "next/image";
import { assets } from "@/assets/assets";

const BookDemo = () => {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [propertyType, setPropertyType] = useState("");
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
  });
  const [step2Heading, setStep2Heading] = useState(
    "Let's personalize your demo."
  );
  const [step2BottomText, setStep2BottomText] = useState(
    "80% of BookOne hotel partners say they ‘finally feel in control’ of their property operations."
  );

  const [solutionType, setSolutionType] = useState([]);
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSolutionTypeClick = (type) => {
    if (solutionType.includes(type)) {
      setSolutionType(solutionType.filter((item) => item !== type));
    } else {
      setSolutionType([...solutionType, type]);
    }
  };

  const handlePropertyTypeClick = (type) => {
    setPropertyType(type);
    if (type === "Hotel") {
      setStep2BottomText(
        "80% of BookOne hotel partners say they ‘finally feel in control’ of their property operations."
      );
      setStep2Heading("Let's personalize your demo."); // Reset heading for Hotel
    } else if (type === "Villa") {
      setStep2BottomText(
        "Unlock seamless management for your villa with BookOne."
      );
      setStep2Heading("Start Building Your Villa's Success Story!");
    } else if (type === "Resort") {
      setStep2BottomText(
        "Elevate your resort operations with BookOne's comprehensive suite."
      );
      setStep2Heading("Begin Your Resort's Success Journey!");
    } else if (type === "Home Stay") {
      setStep2BottomText(
        "Simplify your home stay management and delight your guests with BookOne."
      );
      setStep2Heading("Craft Your Home Stay's Success Story!");
    } else if (type === "Others") {
      setStep2BottomText(
        "Discover tailored solutions for your unique property with BookOne."
      );
      setStep2Heading("Personalize Your Demo!");
    }
  };

  const nextStep = () => {
    setError("");
    if (step === 1 && !propertyType) {
      setError("Please select a property type.");
      return;
    }
    if (step === 2) {
      if (!userInfo.name) {
        setError("Please enter your full name.");
        return;
      }
      if (!userInfo.phone || !isValidPhone(userInfo.phone)) {
        setError("Please enter a valid 10-digit mobile number.");
        return;
      }
      if (!userInfo.email || !isValidEmail(userInfo.email)) {
        setError("Please enter a valid email address.");
        return;
      }
      if (!userInfo.company) {
        setError("Please enter your hotel name.");
        return;
      }
    }
    if (step === 3 && solutionType.length === 0) {
      setError("Please select at least one solution.");
      return;
    }
    setStep((prev) => prev + 1);
  };

  const prevStep = () => {
    setError("");
    setStep((prev) => prev - 1);
  };

  const isValidEmail = (email) => /\S+@\S+\.\S+/.test(email);
  const isValidPhone = (phone) => /^[6-9]\d{9}$/.test(phone);

  const propertyOptions = [
    {
      label: "Hotel",
      icon: <Image src={assets.Rectangle} alt="Hotel" width={28} height={28} />,
    },
    {
      label: "Villa",
      icon: (
        <Image src={assets.Rectangle1} alt="Villa" width={28} height={28} />
      ),
    },
    {
      label: "Resort",
      icon: (
        <Image src={assets.Rectangle2} alt="Resort" width={28} height={28} />
      ),
    },
    {
      label: "Home Stay",
      icon: (
        <Image src={assets.Rectangle3} alt="Home Stay" width={28} height={28} />
      ),
    },
    {
      label: "Others",
      icon: (
        <Image src={assets.Rectangle4} alt="Others" width={28} height={28} />
      ),
    },
  ];

  const solutionOptions = [
    { label: "Property Management System", icon: assets.Form },
    { label: "Channel Manager", icon: assets.Form1 },
    { label: "Website & Booking Engine", icon: assets.Form2 },
    { label: "Help Me Choose What's Right", icon: assets.QuestionMark },
  ];

  const renderStepDots = () => (
    <div className="flex space-x-2">
      {[1, 2, 3, 4].map((i) => (
        <span
          key={i}
          className={`w-2 h-2 rounded-full ${
            step === i ? "bg-blue-500" : "bg-gray-300"
          }`}
        ></span>
      ))}
    </div>
  );

  const renderFormBox = (children) => (
    <div className="w-full sm:max-w-[511px] h-auto sm:h-[589px] rounded-[40px] bg-gradient-to-b bg-white  px-6 py-6 sm:py-10 mt-0">
      {children}
    </div>
  );

  const renderFeatureCards = () => (
    <div className="grid grid-cols-3 gap-4 md:gap-0 mt-6 md:mt-12">
      {[assets.Form, assets.Form1, assets.Form2].map((icon, index) => (
        <div
          key={index}
          className="rounded-xl opacity-25 bg-white shadow-md p-3 flex flex-col items-center justify-center text-center w-[82px] h-[96px] md:w-[149px] md:h-[119px]"
          style={{
            width: "149px",
            height: "119px",
            flexShrink: 0,
            borderRadius: "20px",
            opacity: 0.25,
            background: "#FFF",
            boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset",
          }}
        >
          <Image src={icon} alt={`form-${index}`} width={32} height={32} />
          <span className="text-[10px] md:text-sm text-[#171C1E] font-medium mt-1 text-center">
            {index === 0
              ? "PMS"
              : index === 1
              ? "Channel Manager"
              : "Website/Booking Engine"}
          </span>
        </div>
      ))}
    </div>
  );

  return (
    <>
      <Navbar />

      <div className="text-white px-4 py-4 md:py-20 w-full min-h-[725px] flex-shrink-0 opacity-80 shadow-[inset_0px_4px_4px_rgba(0,0,0,0.25)] bg-[radial-gradient(113.46%_113.46%_at_50%_14.34%,_#5E5B7D_28.37%,_#146683_63.46%,_#04171D_88.94%)]">
        <div className="mx-auto flex flex-col md:flex-row gap-10 items-start justify-between max-w-[1440px]">
          <div className="w-full md:w-[476px] flex flex-col gap-8">
            <div className="order-1 md:order-none mt-8 md:mt-12">
              <h1 className="text-white font-inter font-bold text-[24px] md:text-[48px] leading-[130%] text-center md:text-left max-w-[476px]">
                Get A Personalised <br className="hidden md:block" /> Product
                Demo
              </h1>
              <p className="hidden md:block text-white font-inter font-semibold text-lg md:text-[24px] leading-[150%] mt-6 md:mt-12 max-w-[607px]">
                Our suite is designed to offer 360-degree value across your
                entire property, simplifying processes and boosting
                profitability from day one.
              </p>
            </div>
            <div className="hidden md:block">{renderFeatureCards()}</div>
          </div>

          <div className="w-full md:w-[511px]">
            {step === 1 &&
              renderFormBox(
                <div className="w-full h-full flex flex-col items-center justify-start">
                  <h2 className="text-[#146683] font-inter text-[24px] font-semibold leading-[130%] not-italic mb-3 w-full text-left">
                    Start Building Your <br />
                    Hotel’s Success Story!
                  </h2>

                  <h1 className="text-[#01677D] font-inter text-[16px] font-bold leading-[120%] w-full text-left mb-4">
                    Select your property type.
                  </h1>

                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mt-2 max-w-[500px] w-full">
                    {propertyOptions.map((item, index) => (
                      <div
                        key={item.label}
                        onClick={() => handlePropertyTypeClick(item.label)}
                        className={`w-full h-[91px] cursor-pointer p-3 border rounded-[10px] flex flex-col items-center justify-center transition-all duration-200
              ${
                propertyType === item.label
                  ? "bg-[#146683] text-white border-[#146683] shadow-sm"
                  : "border-[#8CCFF0] bg-white"
              }
              ${
                propertyOptions.length === 5 && index === 4
                  ? "sm:col-span-2 md:col-span-1"
                  : ""
              }`}
                      >
                        <div className="mb-1">{item.icon}</div>
                        <span
                          className={`text-[14px] font-medium text-center ${
                            propertyType === item.label
                              ? "text-white"
                              : "text-[#146683]"
                          }`}
                        >
                          {item.label}
                        </span>
                      </div>
                    ))}
                  </div>

                  {error && <p className="text-red-500 mt-4">{error}</p>}

                  <div className="mt-8 flex justify-between items-center w-full max-w-[500px]">
                    {renderStepDots()}
                    <button
                      onClick={nextStep}
                      className="text-blue-700 font-semibold underline"
                    >
                      Continue
                    </button>
                  </div>

                  <button className="mt-6 sm:mt-8 w-[274px] h-[72px] flex items-center justify-center gap-4 rounded-[10px] border-[1.5px] border-[#D8A353] bg-[#D8A353]">
                    <span className="w-[40.848px] h-[38.977px] flex items-center justify-center flex-shrink-0">
                      <Image
                        src={assets.Laptop}
                        alt="Unlock Icon"
                        className="w-full h-full object-contain"
                      />
                    </span>
                    <span className="text-[#171C1E] font-inter text-[20px] font-bold leading-[120%]">
                      Unlock A Free Trial
                    </span>
                  </button>
                </div>
              )}

            {step === 2 &&
              renderFormBox(
                <div className="w-full h-full flex flex-col items-start justify-start">
                  <h2 className="text-[#146683] font-inter text-[24px] font-semibold leading-[130%] mb-6">
                    {step === 1
                      ? "Start Building Your Hotel’s Success Story!"
                      : step2Heading}
                  </h2>

                  {/* Full Name */}
                  <div className="mb-4 w-full">
                    <label
                      htmlFor="name"
                      className="block text-[#4A5568] text-sm font-medium mb-1"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={userInfo.name}
                      onChange={handleInputChange}
                      className="w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 text-gray-900 sm:text-sm p-3"
                      placeholder="Full Name"
                    />
                  </div>

                  {/* Mobile Number */}
                  <div className="mb-4 w-full">
                    <label
                      htmlFor="phone"
                      className="block text-[#4A5568] text-sm font-medium mb-1"
                    >
                      Mobile Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={userInfo.phone}
                      onChange={handleInputChange}
                      className="w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 text-gray-900 sm:text-sm p-3"
                      placeholder="Mobile Number"
                    />
                  </div>

                  {/* Email Address */}
                  <div className="mb-4 w-full">
                    <label
                      htmlFor="email"
                      className="block text-[#4A5568] text-sm font-medium mb-1"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={userInfo.email}
                      onChange={handleInputChange}
                      className="w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 text-gray-900 sm:text-sm p-3"
                      placeholder="Email Address"
                    />
                  </div>

                  {/* Hotel Name */}
                  <div className="mb-6 w-full">
                    <label
                      htmlFor="company"
                      className="block text-[#4A5568] text-sm font-medium mb-1"
                    >
                      Hotel Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={userInfo.company}
                      onChange={handleInputChange}
                      className="w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 text-gray-900 sm:text-sm p-3"
                      placeholder="Hotel Name"
                    />
                  </div>

                  {/* Error Message */}
                  {error && <p className="text-red-500 mt-4">{error}</p>}

                  {/* Navigation Buttons */}
                  <div className="mt-6 flex justify-between items-center w-full">
                    <button
                      onClick={prevStep}
                      className="text-gray-600 font-semibold underline"
                    >
                      Go Back
                    </button>
                    {renderStepDots()}
                    <button
                      onClick={nextStep}
                      className="text-blue-700 font-semibold underline"
                    >
                      Continue
                    </button>
                  </div>

                  {/* Bottom Tip Section */}
                  <div className="mt-6 w-full text-center">
                    <div className="flex items-center justify-center">
                      <Image
                        src={assets.Bulb}
                        alt="Bulb Icon"
                        width={20}
                        height={20}
                        className="inline-block mr-2"
                      />
                      <p className="text-[#5A677D] text-sm">
                        <span className="font-semibold">{step2BottomText}</span>
                      </p>
                    </div>
                  </div>
                </div>
              )}

            {step === 3 &&
              renderFormBox(
                <div className="w-full h-full flex flex-col items-start justify-start">
                  <h2 className="text-[#146683] font-inter text-[24px] font-semibold leading-[130%] not-italic mb-6 w-full text-left">
                    Looking to upgrade?
                  </h2>

                  <div className="grid grid-cols-1 gap-4 mt-2 max-w-[500px] w-full">
                    {solutionOptions.map((item) => (
                      <button
                        key={item.label}
                        onClick={() => handleSolutionTypeClick(item.label)}
                        className={`w-full h-[60px] cursor-pointer p-3 border rounded-[10px] flex items-center transition-all duration-200 ${
                          solutionType.includes(item.label)
                            ? "bg-[#146683] text-white border-[#146683] shadow-sm"
                            : "border-[#8CCFF0] bg-white"
                        }`}
                      >
                        <span className="w-6 h-6 mr-3 flex items-center justify-center">
                          {item.label === "Property Management System" && (
                            <Image
                              src={assets.Form}
                              alt={item.label}
                              width={24}
                              height={24}
                            />
                          )}
                          {item.label === "Channel Manager" && (
                            <Image
                              src={assets.Form1}
                              alt={item.label}
                              width={24}
                              height={24}
                            />
                          )}
                          {item.label === "Website & Booking Engine" && (
                            <Image
                              src={assets.Form2}
                              alt={item.label}
                              width={24}
                              height={24}
                            />
                          )}
                          {item.label === "Help Me Choose What's Right" && (
                            <Image
                              src={assets.QuestionMark}
                              alt={item.label}
                              width={24}
                              height={24}
                            />
                          )}
                        </span>
                        <span
                          className={`text-[16px] font-medium text-left ${
                            solutionType.includes(item.label)
                              ? "text-white"
                              : "text-[#146683]"
                          }`}
                        >
                          {item.label}
                        </span>
                      </button>
                    ))}
                  </div>

                  {error && <p className="text-red-500 mt-4">{error}</p>}

                  <div className="mt-8 flex justify-between items-center w-full max-w-[500px]">
                    <button
                      onClick={prevStep}
                      className="text-gray-600 font-semibold underline"
                    >
                      Go Back
                    </button>
                    {renderStepDots()}
                    <button
                      onClick={nextStep}
                      className="text-blue-700 font-semibold underline"
                    >
                      Continue
                    </button>
                  </div>

                  <div className="mt-6 w-full text-center">
                    <div className="flex items-center justify-center">
                      <Image
                        src={assets.Bulb}
                        alt="Bulb Icon"
                        width={20}
                        height={20}
                        className="inline-block mr-2"
                      />
                      <p className="text-[#5A677D] text-sm">
                        <span className="font-semibold">
                          Hotels using 3+ BookOne modules see up to 32% higher
                          revenue and 40% faster staff efficiency.
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              )}

            {step === 4 &&
              renderFormBox(
                <div className="w-full h-full flex flex-col items-start justify-start">
                  <h2 className="text-[#146683] font-inter text-[24px] font-semibold leading-[130%] not-italic mb-6 w-full text-left">
                    Start Building Your Hotel’s Success Story!
                  </h2>

                  <div className="grid grid-cols-1 gap-4 mt-2 max-w-[500px] w-full">
                    <button className="w-full h-[72px] cursor-pointer p-3 border rounded-[10px] flex items-center transition-all duration-200 border-[#8CCFF0] bg-white">
                      <span className="w-6 h-6 mr-3 flex items-center justify-center">
                        <Image
                          src={assets.Calendar}
                          alt="Book A Demo"
                          width={24}
                          height={24}
                        />
                      </span>
                      <span className="text-[16px] font-medium text-left text-[#146683]">
                        Book A Demo
                      </span>
                    </button>

                    <button className="w-full h-[72px] cursor-pointer p-3 border rounded-[10px] flex items-center transition-all duration-200 border-[#8CCFF0] bg-white">
                      <span className="w-6 h-6 mr-3 flex items-center justify-center">
                        <Image
                          src={assets.UserCircle}
                          alt="Talk To Our Experts"
                          width={24}
                          height={24}
                        />
                      </span>
                      <span className="text-[16px] font-medium text-left text-[#146683]">
                        Talk To Our Experts
                      </span>
                    </button>

                    <button className="w-full h-[72px] cursor-pointer p-3 rounded-[10px] flex items-center transition-all duration-200 bg-[#D8A353]">
                      <span className="w-6 h-6 mr-3 flex items-center justify-center">
                        <Image
                          src={assets.Laptop}
                          alt="Unlock A Free Trial"
                          width={24}
                          height={24}
                        />
                      </span>
                      <span className="text-[16px] font-bold text-left text-[#171C1E]">
                        Unlock A Free Trial
                      </span>
                    </button>
                  </div>

                  <div className="mt-8 flex justify-between items-center w-full max-w-[500px]">
                    <button
                      onClick={prevStep}
                      className="text-gray-600 font-semibold underline"
                    >
                      Go Back
                    </button>
                    {renderStepDots()}
                  </div>
                </div>
              )}
          </div>



          
        </div>
        <div className="block md:hidden mt-8">{renderFeatureCards()}</div>
      </div>

      <ExpectDemo />
      <ServicesGive />
      <KeepUp />
      <Footer />
    </>
  );
};

export default BookDemo;
