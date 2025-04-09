'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import {
  FaHotel,
  FaHome,
  FaBuilding,
  FaUmbrellaBeach,
  FaHouseUser,
} from 'react-icons/fa';

const properties = [
  { name: 'Hotel', icon: FaHotel },
  { name: 'Villa', icon: FaHouseUser },
  { name: 'Resort', icon: FaUmbrellaBeach },
  { name: 'Home Stay', icon: FaHome },
  { name: 'Others', icon: FaBuilding },
];

const solutions = [
  'Property Management System',
  'Channel Manager',
  'Website & Booking Engine',
  'Others',
];

const BookDemo = () => {
  const [step, setStep] = useState(0);
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });
  const [errors, setErrors] = useState({});

  const nextStep = () => {
    if (step === 0 && !selectedProperty) {
      alert('Please select a property type before continuing.');
      return;
    }

    if (step === 1) {
      const { name, email, phone } = formData;
      const newErrors = {};
      if (!name.trim()) newErrors.name = 'Name is required';
      if (!email.trim()) {
        newErrors.email = 'Email is required';
      } else if (!/\S+@\S+\.\S+/.test(email)) {
        newErrors.email = 'Invalid email';
      }
      if (!phone.trim()) {
        newErrors.phone = 'Phone is required';
      } else if (!/^\d{10}$/.test(phone)) {
        newErrors.phone = 'Phone must be 10 digits';
      }

      if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors);
        return;
      }
    }

    if (step < 3) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 0) setStep(step - 1);
  };

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
    setErrors({ ...errors, [field]: '' });
  };

  return (
    <>
      <Navbar />

      <section className="bg-[#0D6C80] text-white py-16 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Left Section */}
          <div>
            <h1 className="text-4xl font-bold leading-tight mb-6">
              Get A Personalised <br /> Product Demo
            </h1>
            <p className="text-lg mb-8">
              Our suite is designed to offer 360-degree value across your entire property,
              simplifying processes and boosting profitability from day one.
            </p>
            <div className="bg-[#5E97A0] rounded-2xl w-28 h-28 flex flex-col items-center justify-center shadow-lg">
              <FaBuilding className="text-white text-3xl mb-1" />
              <span className="text-white text-sm font-medium">PMS</span>
            </div>
          </div>

          {/* Right Card: Slide Container */}
          <div className="relative overflow-hidden w-full h-fit bg-white rounded-3xl shadow-xl">
            <div
              className="flex transition-transform duration-500 ease-in-out w-[300%]"
              style={{ transform: `translateX(-${step * 33.3333}%)` }}
            >
              {/* Step 1: Property Type */}
              <div className="w-full p-6">
                <h2 className="text-[#0D6C80] text-lg font-semibold mb-6">
                  What kind of property do you have?
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
                  {properties.map(({ name, icon: Icon }) => (
                    <button
                      key={name}
                      onClick={() => setSelectedProperty(name)}
                      className={`border rounded-lg p-4 flex flex-col items-center transition ${
                        selectedProperty === name
                          ? 'bg-[#0D6C80] text-white'
                          : 'border-[#0D6C80] hover:bg-[#e6f5f7] text-[#0D6C80]'
                      }`}
                    >
                      <Icon className="text-xl mb-2" />
                      <span className="text-sm font-medium">{name}</span>
                    </button>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex gap-1">
                    {[0, 1, 2, 3].map((i) => (
                      <span
                        key={i}
                        className={`w-2 h-2 rounded-full ${
                          step === i ? 'bg-[#0D6C80]' : 'bg-gray-300'
                        }`}
                      ></span>
                    ))}
                  </div>
                  <button
                    className="text-sm font-semibold text-[#0D6C80] hover:underline"
                    onClick={nextStep}
                  >
                    Next
                  </button>
                </div>
              </div>

              {/* Step 2: Contact Info */}
              <div className="w-full p-6">
                <h2 className="text-[#0D6C80] text-lg font-semibold mb-6">
                  How may we contact you?
                </h2>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm text-[#0D6C80] mb-1">Name</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleChange('name', e.target.value)}
                      className="w-full border border-blue-300 rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-blue-200"
                    />
                    {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                  </div>
                  <div>
                    <label className="block text-sm text-[#0D6C80] mb-1">Email Address</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      className="w-full border border-blue-300 rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-blue-200"
                    />
                    {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                  </div>
                  <div>
                    <label className="block text-sm text-[#0D6C80] mb-1">Phone Number</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleChange('phone', e.target.value)}
                      className="w-full border border-blue-300 rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-blue-200"
                    />
                    {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
                  </div>
                </form>
                <div className="flex justify-between items-center mt-6">
                  <button
                    className="text-sm font-semibold text-[#0D6C80] hover:underline"
                    onClick={prevStep}
                  >
                    Back
                  </button>
                  <div className="flex gap-1">
                    {[0, 1, 2, 3].map((i) => (
                      <span
                        key={i}
                        className={`w-2 h-2 rounded-full ${
                          step === i ? 'bg-[#0D6C80]' : 'bg-gray-300'
                        }`}
                      ></span>
                    ))}
                  </div>
                  <button
                    className="text-sm font-semibold text-[#0D6C80] hover:underline"
                    onClick={nextStep}
                  >
                    Next
                  </button>
                </div>
              </div>

              {/* Step 3: Solutions */}
              <div className="w-full p-6">
                <h2 className="text-[#0D6C80] text-lg font-semibold mb-6">
                  What solution are you interested in?
                </h2>
                <div className="space-y-4">
                  {solutions.map((solution) => (
                    <button
                      key={solution}
                      className="w-full border border-blue-300 rounded-md py-3 px-4 text-[#0D6C80] font-semibold hover:bg-blue-50 transition"
                    >
                      {solution}
                    </button>
                  ))}
                </div>
                <div className="flex justify-between items-center mt-6">
                  <button
                    className="text-sm font-semibold text-[#0D6C80] hover:underline"
                    onClick={prevStep}
                  >
                    Back
                  </button>
                  <div className="flex gap-1">
                    {[0, 1, 2, 3].map((i) => (
                      <span
                        key={i}
                        className={`w-2 h-2 rounded-full ${
                          step === i ? 'bg-[#0D6C80]' : 'bg-gray-300'
                        }`}
                      ></span>
                    ))}
                  </div>
                  <button
                    className="text-sm font-semibold text-[#0D6C80] hover:underline"
                    onClick={nextStep}
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default BookDemo;
