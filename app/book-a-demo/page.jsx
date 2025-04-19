"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ExpectDemo from "./expect-demo/page";
import ServicesGive from "./services-give/page";
import KeepUp from "./keep-up/page";
import Image from "next/image";
import { assets } from "@/assets/assets";
import TrustBookOne from "./trust-bookone/page";

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
      setStep2Heading("Start Building Your Hotel’s Success Story!"); // Reset heading for Hotel
    } else if (type === "Villa") {
      setStep2BottomText(
        "Unlock seamless management for your villa with BookOne."
      );
      setStep2Heading("Start Building Your Villa's Success Story!");
    } else if (type === "Resort") {
      setStep2BottomText(
        "Elevate your resort operations with BookOne's comprehensive suite."
      );
      setStep2Heading("Start Building Your Hotel’s Success Story!");
    } else if (type === "Home Stay") {
      setStep2BottomText(
        "Simplify your home stay management and delight your guests with BookOne."
      );
      setStep2Heading("Start Building Your Hotel’s Success Story!");
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

  // const submitForm = async () => {
  //   const { name, email, phone, company } = userInfo;

  //   const message = `Name: ${name}
  // Email: ${email}
  // Phone: ${phone}
  // Company: ${company}
  // Property Type: ${propertyType}
  // Interested In: ${solutionType}
  // Date: ${schedule.date}
  // Time: ${schedule.time}
  // ****this message is sent from BookOnePMS Website.*`;

  //   const payload = {
  //     fromEmail: email,
  //     toEmail: "biswajit.sahoo@credencesoft.in",
  //     replyTo: email,
  //     subject: "Book A Demo Enquiry",
  //     message,
  //   };

  //   try {
  //     setLoading(true);
  //     const response = await fetch(
  //       "https://api.bookonelocal.in/api-bookone/api/website/sendEmailFromWebSite",
  //       {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify(payload),
  //       }
  //     );

  //     const data = await response.json();

  //     if (!response.ok) {
  //       throw new Error(data.message || "Failed to submit the form.");
  //     }

  //     setSubmissionSuccess(true);
  //     setStep(5);
  //   } catch (err) {
  //     console.error("Form submission error:", err);
  //     setError("Something went wrong. Please try again.");
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const propertyOptions = [
    {
      label: "Hotel",
      icon: <Image src={assets.Rectangle} alt="Hotel" width={28} height={28} />,
      activeIcon: (
        <Image src={assets.WhiteHotel} alt="Home Stay" width={28} height={28} />
      ),
    },
    {
      label: "Villa",
      icon: (
        <Image src={assets.Rectangle1} alt="Villa" width={28} height={28} />
      ),
      activeIcon: (
        <Image src={assets.rext2} alt="Home Stay" width={28} height={28} />
      ),
    },
    {
      label: "Resort",
      icon: (
        <Image src={assets.Rectangle2} alt="Resort" width={28} height={28} />
      ),
      activeIcon: (
        <Image src={assets.rext3} alt="Home Stay" width={28} height={28} />
      ),
    },
    {
      label: "Home Stay",
      icon: (
        <Image src={assets.Rectangle3} alt="Home Stay" width={28} height={28} />
      ),
      activeIcon: (
        <Image src={assets.rext5} alt="Home Stay" width={28} height={28} />
      ),
    },
    {
      label: "Others",
      icon: (
        <Image src={assets.Rectangle4} alt="Others" width={28} height={28} />
      ),
      activeIcon: (
        <Image src={assets.rext4} alt="Home Stay" width={28} height={28} />
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
    <div className="w-full sm:max-w-[511px] h-auto  rounded-[40px] bg-hero-gradient   px-6 py-6 sm:py-10 mt-0">
      {children}
    </div>
  );
  const submitForm = async () => {
    const payload = {
      businessType: "Accommodation",
      accountManager: "BookOne Team",
      email: userInfo.email,
      name: userInfo.name,
ownerName:userInfo.company,

      organisationId: 1,
      propertyId: "107",
      managerEmailAddress: "servicemanagement@gmail.com",
      managerFirstName: "Service",                      
      managerLastName: "Management",
      dateCollected: new Date().toISOString().split("T")[0],
      mobile:userInfo.phone,
    };
  
    try {
      setLoading(true);
  
      // Await the fetch
      const response = await fetch(
        "https://api.bookone.io/api-lms/api/v1/businessLead",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );
  
      // Await the JSON response
      const data = await response.json();
      console.log("API response:", data);
  
      if (response.status === 200){
        setStep(5);
        setTimeout(() => {
          if (userInfo.email) {
            const url = new URL("https://calendly.com/shakti-credencesoft/30min");
            url.searchParams.append("email", userInfo.email);
            url.searchParams.append("name", userInfo.name);
  
            console.log("Redirecting to Calendly with:", url.toString());
            window.location.href = url.toString();
          }
        }, 2000);
      }
  
    } catch (err) {
      console.error("Form submission error:", err);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  
  const renderFeatureCards = () => (
    <div className="grid grid-cols-3 gap-4 md:gap-0 mt-6 md:mt-0">
      {[assets.PMSText, assets.ChannelImg, assets.BookingEng].map((icon, index) => (
        <div
          key={index}
          className="bg-white bg-opacity-20 rounded-xl shadow-md p-3 flex flex-col items-center justify-center text-center w-[104px] h-[96px] md:w-[142px] md:h-[119px]"
        >
          <Image src={icon}  width={32} height={32} />
          <span className="text-[10px] md:text-sm text-white font-medium mt-1 text-center">
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
      <div className="bg-[#0D6C80] text-white px-4 py-4 md:py-28">
        <div
          className="mx-auto flex flex-col md:flex-row gap-10 items-start justify-between"
          style={{ maxWidth: "1400px" }}
        >
          <div className="w-full md:w-[476px] flex flex-col gap-8">
            <div className="order-1 md:order-none mt-8 md:mt-20">
              <h1 className="text-white font-bold text-[24px] text-center md:text-left lg:text-left md:text-[48px] leading-tight">
                Get A Personalised <br /> Product Demo
              </h1>
              <p className="hidden md:block text-white font-semibold text-lg md:text-[24px] mt-12 w-[631px]">
                Our suite is designed to offer 360-degree value across your
                entire property, simplifying processes and boosting
                profitability from day one.
              </p>
            </div>
            <div className="hidden md:block">{renderFeatureCards()}</div>
          </div>
          <div className="w-full md:w-[511px] ">
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

                  <div className="grid grid-cols-3 gap-4 md:gap-6 mt-6 max-w-[500px]">
  {propertyOptions.map((item, index) => {
    const isSelected = propertyType === item.label;
    return (
      <div
        key={item.label}
        onClick={() => setPropertyType(item.label)}
        className={`cursor-pointer p-4 border rounded-[10px] flex flex-col items-center justify-center transition-all duration-200 ${
          isSelected
            ? " bg-[#146683] shadow-sm"
            : "border-[#8CCFF0]"
        }`}
        style={{
          gridColumn:
            propertyOptions.length === 5 && index === 4
              ? "2 / span 1"
              : undefined,
        }}
      >
        <div className="mb-1">{isSelected ? item.activeIcon : item.icon}</div>
        <span
  className={`text-[14px] font-medium text-center ${
    isSelected ? "text-white" : "text-[#146683]"
  }`}
>
  {item.label}
</span>
      </div>
    );
  })}
</div>


                  {error && <p className="text-red-500 mt-4">{error}</p>}

                  <div className="mt-8  flex justify-between items-center w-full max-w-[500px]">
                    <div></div>
                    {renderStepDots()}
                    <button
                      onClick={nextStep}
                      className="font-semibold underline text-[#146683]"
                    >
                      Continue
                    </button>
                  </div>

                  <button 
                  onClick={nextStep}
                  className="mt-6 sm:mt-8 w-[274px] h-[72px] flex items-center justify-center gap-4 rounded-[10px] border-[1.5px] border-[#D8A353] bg-[#D8A353]">
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
                  <h2 className="text-[#146683] font-inter text-[24px] font-semibold leading-[130%] mb-6 lg:pr-[80px]">
                    {step === 1
                      ? "Start Building Your br Hotel’s Success Story!"
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
                  {error && <p className="text-red-500">{error}</p>}

                  {/* Navigation Buttons */}
                  <div className="mt-[0.7rem] flex justify-between items-center w-full">
                    <button
                      onClick={prevStep}
                      className="text-[#146683] font-semibold underline"
                    >
                      Go Back
                    </button>
                    {renderStepDots()}
                    <button
                      onClick={nextStep}
                      className="text-[#146683] font-semibold underline"
                    >
                      Continue
                    </button>
                  </div>

                  {/* Bottom Tip Section */}
                  <div className="mt-6 w-full text-center">
                    <div className="flex items-start justify-center">
                      <Image
                        src={assets.Light}
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
                  <h2 className="text-[#146683] font-inter text-[24px] font-semibold leading-[130%] not-italic mb-6 w-full text-left lg:pr-[80px]">
                  {step === 1
                      ? "Start Building Your br Hotel’s Success Story!"
                      : step2Heading}
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
                            className="bg-white rounded"
                              src={assets.PMS}
                              alt={item.label}
                              width={24}
                              height={24}
                            />
                          )}
                          {item.label === "Channel Manager" && (
                            <Image
                              src={assets.PMS2}
                              alt={item.label}
                              width={24}
                              height={24}
                              className="bg-[#146683] "
                            />
                          )}
                          {item.label === "Website & Booking Engine" && (
                            <Image
                              src={assets.PMS3}
                              alt={item.label}
                              width={24}
                              height={24}
className="bg-white rounded"
                            />
                          )}
                          {item.label === "Help Me Choose What's Right" && (
                            <Image
                              src={assets.PMS4}
                              alt={item.label}
                              width={24}
                              height={24}
                              className="bg-white rounded"
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
                      className="text-[#146683] font-semibold underline"
                    >
                      Go Back
                    </button>
                    {renderStepDots()}
                    <button
                      onClick={nextStep}
                      className="text-[#146683] font-semibold underline"
                    >
                      Continue
                    </button>
                  </div>

                  <div className="mt-6 w-full text-center">
                    <div className="flex items-start justify-center">
                      <Image
                        src={assets.Light}
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
                  <h2 className="text-[#146683] font-inter text-[24px] font-semibold leading-[130%] not-italic mb-6 w-full text-left lg:pr-[80px]">
                  {step === 1
                      ? "Start Building Your br Hotel’s Success Story!"
                      : step2Heading}
                  </h2>

                  <div className="grid grid-cols-1 gap-4 mt-2 max-w-[500px] w-full">
                    <button onClick={() => {
            if (!userInfo.email) {
              setError("Please fill in all schedule fields.");
            } else {
              setError("");
              submitForm(); // 👈 HERE is the submission!
            }
          }} className="w-full h-[72px] cursor-pointer p-3 border rounded-[10px] flex items-center transition-all duration-200 border-[#8CCFF0] bg-white">
                      <span className="w-6 h-6 mr-3 flex items-center justify-center">
                        <Image
                          src={assets.PMS7}
                          alt="Book A Demo"
                          width={24}
                          height={24}
                        />
                      </span>
                      <span  className="text-[16px] font-medium text-left text-[#146683]">
                        Book A Demo
                      </span>
                    </button>

                    <button className="w-full h-[72px] cursor-pointer p-3 border rounded-[10px] flex items-center transition-all duration-200 border-[#8CCFF0] bg-white">
                      <span className="w-6 h-6 mr-3 flex items-center justify-center">
                        <Image
                          src={assets.PMS6}
                          alt="Talk To Our Experts"
                          width={24}
                          height={24}
                        />
                      </span>
                      <span className="text-[16px] font-medium text-left text-[#146683]">
                        Talk To Our Experts
                      </span>
                    </button>

                    <button className="w-full h-[72px] cursor-pointer p-3 rounded-[10px] flex items-center transition-all duration-200 bg-[#D8A353]" onClick={nextStep}>
                      <span className="w-6 h-6 mr-3 flex items-center justify-center">
                        <Image
                          src={assets.Laptop}
                          alt="Unlock A Free Trial"
                          width={24}
                          height={24}
                        />
                      </span>
                      <span className="text-[16px] font-bold text-left text-[#171C1E]" >
                        Unlock A Free Trial
                      </span>
                    </button>
                    
                  </div>

                  <div className="mt-8 flex justify-between items-center w-full max-w-[500px]">
                    
                    <button
                      onClick={prevStep}
                      className="text-[#146683] font-semibold underline"
                    >
                      Go Back
                    </button>
                    {renderStepDots()}
                    <div></div>
                  </div>
                </div>
              )}

          {step === 5 &&
              renderFormBox(
                <div className="w-full h-full flex flex-col items-start justify-start mt-5">
                  <h2 className="text-[#146683] text-center font-inter text-[34px] font-semibold leading-[130%] not-italic mb-1 w-full text-left ">
                  Thank You 
                  </h2>
                  <h3 className="text-[#146683] text-center font-inter text-[25px] font-semibold leading-[130%] not-italic mb-6 w-full text-left ">For Choosing BookOne!</h3>
                  <p className="text-[#146683] lg:pr-[60px] lg:pl-[60px] text-center font-inter font-semibold leading-[130%] not-italic mb-6 w-full text-left ">You're now one step closer to simpler, smarter hotel management.</p>

                  <p className="text-[#146683] lg:pr-[60px] lg:pl-[60px] text-center font-inter  leading-[130%] not-italic mb-6 w-full text-left ">Your reference number is <b>#BO-29187</b></p>

                  <p className="text-[#000] lg:pl-[50px] lg:pr-[50px] font-bold font-inter not-italic mb-2 w-full text-left ">What’s next?</p>
                  <div className="flex items-start justify-center lg:pl-[50px] lg:pr-[50px] mb-2">
                      <Image
                        src={assets.thank1}
                        alt="Bulb Icon"
                        width={20}
                        height={20}
                        className="inline-block mr-2"
                      />
                      <p className="text-[#000] text-sm">
                        <span className="font-inter">One of our experts will reach out within 24hrs.</span>
                      </p>
                    </div>
                    <div className="flex items-start justify-center lg:pl-[50px] lg:pr-[50px] mb-2">
                      <Image
                        src={assets.thank2}
                        alt="Bulb Icon"
                        width={20}
                        height={20}
                        className="inline-block mr-2"
                      />
                      <p className="text-[#000] text-sm">
                        <span className="font-inter">You’ll get a demo—tailored to your needs.</span>
                      </p>
                    </div>
                    <div className="flex items-start justify-center lg:pl-[50px] lg:pr-[50px] mb-2">
                      <Image
                        src={assets.thank3}
                        alt="Bulb Icon"
                        width={20}
                        height={20}
                        className="inline-block mr-2"
                      />
                      <p className="text-[#000] text-sm">
                        <span className="font-inter">No commitments. No credit card. No hassle.</span>
                      </p>

                      
                    </div>

                    <p className="text-[#D8A353] text-center font-inter mt-[30px] font-semibold leading-[130%] not-italic mb-1 w-full text-left ">Want to explore plans while you wait? <a href="/pricing" className="underline text-[#146683] cursor-pointer">See Pricing</a></p>

                    
                </div>
              )}
          </div>
        </div>
        <div className="block md:hidden mt-8">{renderFeatureCards()}</div>
      </div>
      <TrustBookOne/>
      <ExpectDemo />
      <ServicesGive />
      <KeepUp />
      <Footer />
    </>
  );
};

export default BookDemo;