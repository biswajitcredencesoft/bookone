'use client'

import { FaHotel, FaMoneyCheckAlt, FaUtensils, FaUsersCog, FaUserTie, FaBook } from "react-icons/fa";

const BuildToDO = () => {
    const items = [
        { icon: <FaHotel className="text-orange-500 text-xl" />, title: "Front Office & Housekeeping", position: "left" },
        { icon: <FaMoneyCheckAlt className="text-orange-500 text-xl" />, title: "Finance & Billing", position: "right" },
        { icon: <FaUserTie className="text-orange-500 text-xl" />, title: "HRMs & Payroll Management", position: "left" },
        { icon: <FaUtensils className="text-orange-500 text-xl" />, title: "Food & Beverages", position: "right" },
        { icon: <FaBook className="text-orange-500 text-xl" />, title: "Booking Management", position: "left" },
        { icon: <FaUsersCog className="text-orange-500 text-xl" />, title: "Customer Relationship Management", position: "right" },
    ];

    return (
        <div className="bg-[#146683] w-full py-16 px-4 sm:px-8 md:px-12 lg:pl-16 lg:pr-[13rem] text-white">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-y-8 gap-x-20 items-center">
                {/* Left Section */}
                <div>
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 leading-tight font-Inter">
                        Built to Do It All.<br />Designed to Keep It Simple.
                    </h2>
                    <p className="text-base md:text-lg font-medium leading-relaxed text-white">
                        BookOne combines smart<br className="block md:hidden" />
                        features with real hotel needs—<br />
                        for less stress and more success.
                    </p>
                </div>

                {/* Right Section */}
                <div className="flex flex-col space-y-4 ">
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className={`flex ${item.position === "right" ? "justify-end" : "justify-start"}`}
                        >
                            <div className="bg-white text-[#146683] flex items-center gap-4 py-3 px-5 rounded-full shadow-md min-w-[260px] max-w-[360px] w-full">
                                <div className="bg-[#FFF2E5] p-3 rounded-full flex items-center justify-center">
                                    {item.icon}
                                </div>
                                <p className="text-sm md:text-base font-semibold whitespace-nowrap">
                                    {item.title}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BuildToDO;
