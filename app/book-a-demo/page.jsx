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

  const [solutionType, setSolutionType] = useState([]);
  const [error, setError] = useState("");

  const handleToggle = (item) => {
    setSolutionType((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );
  };

  const [schedule, setSchedule] = useState({
    date: "",
    time: "",
    timezone: "",
  });

  // const [error, setError] = useState("");
  const [submissionSuccess, setSubmissionSuccess] = useState(false);

  const nextStep = () => {
    setError("");
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
  // *****this message is sent from BookOnePMS Website.******`;

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
  const submitForm = () => {
    if (schedule.date && schedule.time && schedule.timezone && userInfo.email) {
      const url = new URL("https://calendly.com/shakti-credencesoft/30min");
  
      // Add query parameters for email, name, and other details
      url.searchParams.append("email", userInfo.email);  // Change formData to userInfo
      url.searchParams.append("name", userInfo.name);    // Change formData to userInfo
      url.searchParams.append("date", schedule.date);
      url.searchParams.append("time", schedule.time);
      url.searchParams.append("timezone", schedule.timezone);
  
      // Log the final URL
      console.log("Redirecting to Calendly with:", url.toString());
  
      // Redirect to Calendly with the populated information
      window.location.href = url.toString();
    } else {
      setError("Please fill in all schedule fields.");
    }
  };
  
  

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
    <div className="w-full sm:max-w-[468px] h-auto sm:h-[487px] rounded-[40px] bg-white shadow-inner sm:shadow-[inset_0px_4px_4px_0px_rgba(0,0,0,0.25)] px-6 py-6 sm:py-10 mx-auto mt-0">
      {children}
    </div>
  );

  const renderFeatureCards = () => (
    <div className="grid grid-cols-3 gap-4 md:gap-0 mt-6 md:mt-0">
      {[assets.Form, assets.Form1, assets.Form2].map((icon, index) => (
        <div
          key={index}
          className="bg-white bg-opacity-20 rounded-xl shadow-md p-3 flex flex-col items-center justify-center text-center w-[82px] h-[96px] md:w-[149px] md:h-[119px]"
        >
          <Image src={icon} alt={`form-${index}`} width={32} height={32} />
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

          <div className="w-full md:w-[520px] text-black order-2 md:order-none">
            {step === 1 &&
              renderFormBox(
                <>
                  <h2 className="text-[#146683] text-[20px] font-semibold mb-6">
                    What kind of property do you have?
                  </h2>
                  <div className="grid grid-cols-3 gap-4 md:gap-6 mt-6 max-w-[500px]">
                    {propertyOptions.map((item, index) => (
                      <div
                        key={item.label}
                        onClick={() => setPropertyType(item.label)}
                        className={`cursor-pointer p-4 border rounded-[10px] flex flex-col items-center justify-center transition-all duration-200 ${
                          propertyType === item.label
                            ? "border-blue-600 bg-blue-50 shadow-sm"
                            : "border-[#8CCFF0]"
                        }`}
                        style={{
                          gridColumn:
                            propertyOptions.length === 5 && index === 4
                              ? "2 / span 1"
                              : undefined,
                        }}
                      >
                        <div className="mb-1">{item.icon}</div>
                        <span className="text-[14px] text-[#146683] font-medium text-center">
                          {item.label}
                        </span>
                      </div>
                    ))}
                  </div>
                  {error && <p className="text-red-500 mt-4">{error}</p>}
                  <div className="mt-8 flex justify-between items-center">
                    {renderStepDots()}
                    <button
                      onClick={() => {
                        if (propertyType) nextStep();
                        else setError("Please select a property type.");
                      }}
                      className="text-blue-700 font-semibold"
                    >
                      Next
                    </button>
                  </div>
                </>
              )}

            {step === 2 &&
              renderFormBox(
                <>
                  <h2 className="text-[#146683] text-[20px] font-semibold mb-6">
                    How may we contact you?
                  </h2>
                  <div className="grid gap-4">
                    {["name", "email", "phone", "company"].map((field) => (
                      <div key={field}>
                        <label className="text-[#818181] text-sm mb-1 block capitalize">
                          {field === "company" ? "Hotel Name" : field}
                        </label>
                        <input
                          type={
                            field === "email"
                              ? "email"
                              : field === "phone"
                              ? "tel"
                              : "text"
                          }
                          placeholder={
                            field === "company" ? "Hotel Name" : `Your ${field}`
                          }
                          value={userInfo[field]}
                          onChange={(e) =>
                            setUserInfo({
                              ...userInfo,
                              [field]: e.target.value,
                            })
                          }
                          className="w-full h-[40px] border border-[#8CCFF0] rounded-[10px] px-3 bg-transparent placeholder:text-[#818181] text-sm focus:outline-none focus:border-blue-500"
                        />
                      </div>
                    ))}
                  </div>
                  {error && <p className="text-red-500 mt-0">{error}</p>}
                  <div className="flex justify-between items-center mt-8">
                    <button
                      onClick={prevStep}
                      className="text-gray-500 font-semibold"
                    >
                      Prev
                    </button>
                    <button
                      onClick={() => {
                        const { name, email, phone, company } = userInfo;
                        if (
                          !name.trim() ||
                          !email.trim() ||
                          !phone.trim() ||
                          !company.trim()
                        ) {
                          setError("Please fill in all fields.");
                        } else if (!isValidEmail(email)) {
                          setError("Please enter a valid email address.");
                        } else if (!isValidPhone(phone)) {
                          setError(
                            "Please enter a valid 10-digit phone number."
                          );
                        } else {
                          setError("");
                          nextStep();
                        }
                      }}
                      className="text-blue-700 font-semibold"
                    >
                      Next
                    </button>
                  </div>
                </>
              )}
            {step === 3 &&
              renderFormBox(
                <>
                  <h2 className="text-[#146683] text-[20px] font-semibold mb-6">
                    What solution are you interested in?
                  </h2>
                  <div className="grid gap-3">
                    {[
                      "Property Management System",
                      "Channel Manager",
                      "Website & Booking Engine",
                      "Others",
                    ].map((item) => (
                      <div
                        key={item}
                        onClick={() => handleToggle(item)}
                        className={`cursor-pointer w-full h-[45px] flex items-center justify-center rounded-[10px] border ${
                          solutionType.includes(item)
                            ? "bg-blue-100 border-blue-600 font-semibold"
                            : "border-[#8CCFF0] bg-transparent"
                        } text-[#146683] text-sm transition-all duration-200`}
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                  {error && <p className="text-red-500 mt-4">{error}</p>}
                  <div className="flex justify-between items-center mt-8">
                    <button
                      onClick={prevStep}
                      className="text-gray-500 font-semibold"
                    >
                      Prev
                    </button>
                    <button
                      onClick={() => {
                        if (solutionType.length > 0) nextStep();
                        else setError("Please select at least one solution.");
                      }}
                      className="text-blue-700 font-semibold"
                    >
                      Next
                    </button>
                  </div>
                </>
              )}

{step === 4 &&
  renderFormBox(
    <>
      <h2 className="text-[#146683] text-[20px] font-semibold mb-6">
        Schedule Your Demo
      </h2>
      {/* Inputs for date, time, timezone (you probably already have state for this: `schedule`) */}
      <input
        type="date"
        value={schedule.date}
        onChange={(e) =>
          setSchedule({ ...schedule, date: e.target.value })
        }
        className="w-full mb-3 border px-3 py-2 rounded-md"
      />
      <input
        type="time"
        value={schedule.time}
        onChange={(e) =>
          setSchedule({ ...schedule, time: e.target.value })
        }
        className="w-full mb-3 border px-3 py-2 rounded-md"
      />
      <input
        type="text"
        placeholder="Timezone (e.g., IST)"
        value={schedule.timezone}
        onChange={(e) =>
          setSchedule({ ...schedule, timezone: e.target.value })
        }
        className="w-full mb-3 border px-3 py-2 rounded-md"
      />

      {error && <p className="text-red-500 mt-0">{error}</p>}

      <div className="flex justify-between items-center mt-8">
        <button onClick={prevStep} className="text-gray-500 font-semibold">
          Prev
        </button>
        <button
          onClick={() => {
            if (!schedule.date || !schedule.time || !schedule.timezone) {
              setError("Please fill in all schedule fields.");
            } else {
              setError("");
              submitForm(); // 👈 HERE is the submission!
            }
          }}
          className="text-blue-700 font-semibold"
        >
          Submit
        </button>
      </div>
    </>
  )}


            {step === 5 && submissionSuccess && (
              <div className="w-[418px] h-[487px] flex-shrink-0 rounded-[40px] bg-white shadow-inner px-6 py-6 flex flex-col items-center justify-center text-center">
                {/* <Image src={assets.SuccessIcon} alt="Success" width={80} height={80} className="mb-6" /> */}
                <h2 className="text-[#146683] font-inter text-[32px] font-semibold leading-[150%] mb-4">
                  Thank You! 😊
                </h2>
                <p className="text-[#818181] text-[16px] leading-[140%] font-normal">
                  We’ve received your request and will get back to you soon!
                </p>
              </div>
            )}
            {step === 5 && !submissionSuccess && (
              <div className="w-[468px] h-[487px] flex-shrink-0 rounded-[40px] bg-white shadow-inner px-6 py-6 flex flex-col items-center justify-center text-center">
                <h2 className="text-red-500 font-inter text-[32px] font-semibold leading-[150%] mb-4">
                  Submission Failed
                </h2>
                <p className="text-red-500 text-[16px] leading-[140%] font-normal">
                  {error || "Something went wrong. Please try again later."}
                </p>
                <button
                  onClick={() => setStep(4)}
                  className="mt-6 text-blue-700 font-semibold"
                >
                  Go Back
                </button>
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
