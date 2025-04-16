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
  const [solutionType, setSolutionType] = useState("");
  const [schedule, setSchedule] = useState({
    date: "",
    time: "",
    timezone: "",
  });
  const [error, setError] = useState("");

  const nextStep = () => {
    setError("");
    setStep((prev) => prev + 1);
  };

  const prevStep = () => {
    setError("");
    setStep((prev) => prev - 1);
  };

  const isValidEmail = (email) => /\S+@\S+\.\S+/.test(email);
  const isValidPhone = (phone) => /^[0-9]{10,15}$/.test(phone);

  const submitForm = async () => {
    const { name, email, phone, company } = userInfo;

    const message = `Name: ${name}
Email: ${email}
Phone: ${phone}
Company: ${company}
Property Type: ${propertyType}
Interested In: ${solutionType}
Date: ${schedule.date}
Time: ${schedule.time}
*****this message is sent from BookOnePMS Website.******`;

    const payload = {
      fromEmail: email,
      toEmail: "biswajit.sahoo@credencesoft.in",
      subject: "Book A Demo Enquiry",
      message,
    };

    try {
      setLoading(true);
      const response = await fetch(
        "https://api.bookonelocal.in/api-bookone/api/website/sendEmailFromWebSite",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to submit the form.");
      }

      alert("Demo booked successfully!");
    } catch (err) {
      console.error("Form submission error:", err);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

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
      <div className="bg-[#0D6C80] text-white px-4 py-4 md:py-16">
        <div
          className="mx-auto flex flex-col md:flex-row gap-10 items-start justify-between"
          style={{ maxWidth: "1472px" }}
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

          <div className="w-full md:w-[468px] text-black order-2 md:order-none">
            {step === 1 &&
              renderFormBox(
                <>
                  <h2 className="text-[#146683] text-[20px] font-semibold mb-6">
                    What kind of property do you have?
                  </h2>
                  <div className="grid grid-cols-2 gap-4 md:gap-6 mt-6">
                    {propertyOptions.map((item) => (
                      <div
                        key={item.label}
                        onClick={() => setPropertyType(item.label)}
                        className={`cursor-pointer p-4 border rounded-[10px] flex flex-col items-center justify-center transition-all duration-200 ${
                          propertyType === item.label
                            ? "border-blue-600 bg-blue-50 shadow-sm"
                            : "border-[#8CCFF0]"
                        }`}
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
                          className="w-full h-[32px] border border-[#8CCFF0] rounded-[10px] px-3 bg-transparent placeholder:text-[#818181] text-sm"
                        />
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
                        const { name, email, phone, company } = userInfo;
                        if (!name || !email || !phone || !company) {
                          setError("Please fill all the fields.");
                        } else if (!isValidEmail(email)) {
                          setError("Please enter a valid email.");
                        } else if (!isValidPhone(phone)) {
                          setError("Please enter a valid phone number.");
                        } else {
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
                        onClick={() => setSolutionType(item)}
                        className={`cursor-pointer w-full h-[41px] flex items-center justify-center rounded-[10px] border ${
                          solutionType === item
                            ? "bg-blue-100 border-blue-600 font-semibold"
                            : "border-[#8CCFF0] bg-transparent"
                        } text-[#146683] text-sm`}
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
                        if (solutionType) nextStep();
                        else setError("Please select a solution.");
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
                  <h2 className="text-[#146683] text-[20px] font-semibold mb-4">
                    Would you like to book a demo?
                  </h2>
                  <p className="text-[#146683] text-sm mb-4">
                    Choose a date and time.
                  </p>
                  <div className="flex flex-col gap-4">
                    {["date", "time"].map((type) => (
                      <div key={type}>
                        <label className="text-[#818181] text-sm mb-1 block capitalize">
                          {type}
                        </label>
                        <input
                          type={type}
                          value={schedule[type]}
                          onChange={(e) =>
                            setSchedule({ ...schedule, [type]: e.target.value })
                          }
                          className="w-full h-[32px] border border-[#8CCFF0] rounded-[10px] px-3 bg-transparent placeholder:text-[#818181] text-sm"
                        />
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
                        if (!schedule.date || !schedule.time) {
                          setError("Please select date and time.");
                        } else {
                          setError("");
                          submitForm();
                        }
                      }}
                      className="text-blue-700 font-semibold"
                      disabled={loading}
                    >
                      {loading ? "Submitting..." : "Submit"}
                    </button>
                  </div>
                </>
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
