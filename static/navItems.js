import {
  FaHome,
  FaNetworkWired,
  FaStore,
  FaChartLine,
  FaBookOpen,
  FaLaptopCode,
} from "react-icons/fa";
import Image from "next/image";
import { assets } from "@/assets/assets";

export const productItems = [
  {
    href: "/bookone-pms",
    icon: <Image src={assets.Mask7} alt="Mask7" className="w-6 h-6" />,
    name: "BookOne PMS",
    desc: "BookOne PMS automates operations, reduces errors, and ensures seamless management.",
  },
  {
    href: "/bookone-connect",
    icon: <Image src={assets.Mask6} alt="Mask6" className="w-6 h-6" />,
    name: "BookOne Connect",
    desc: "BookOne Connect syncs inventory across OTAs, reducing overbookings and improving guest satisfaction.",
  },
  {
    href: "/bookone-pos",
    icon: <Image src={assets.Mask5} alt="Mask5" className="w-6 h-6" />,
    name: "BookOne POS",
    desc: "BookOne POS syncs orders, tracks inventory, and speeds up billing.",
  },
  {
    href: "/bookone-loyality",
    icon: <Image src={assets.Mask4} alt="Mask4" className="w-6 h-6" />,
    name: "BookOne Loyalty",
    desc: "Boost direct bookings with automation, personalized offers, and seamless communication.",
  },
  {
    href: "/bookone-crm",
    icon: <Image src={assets.Mask3} alt="Mask3" className="w-6 h-6" />,
    name: "BookOne CRM",
    desc: "BookOne CRM centralizes guest data to boost loyalty and personalized engagement.",
  },
  {
    href: "/bookone-bookmax",
    icon: <Image src={assets.Mask2} alt="Mask2" className="w-6 h-6" />,
    name: "BookOne BookMax",
    desc: "BookOne BookMax drives direct bookings with integrated payments and Google Hotel Ads.",
  },
  {
    href: "/bookone-varo",
    icon: <Image src={assets.Mask1} alt="Mask1" className="w-6 h-6" />,
    name: "BookOne VARO (Revenue Management)",
    desc: "Vacant Room Optimizer maximizes revenue with real-time, demand-based pricing.",
  },
];

export const serviceItems = [
  {
    href: "/digital-marketing",
    icon: <Image src={assets.Mask16} alt="Mask16" className="w-6 h-6" />,
    name: "Digital Marketing",
    desc: "Boost your hotel's online presence with expert SEO, social media, ads, and content strategies.",
  },
  {
    href: "/online-repution-management",
    icon: <Image src={assets.Mask15} alt="Mask15" className="w-6 h-6" />,
    name: "Online Reputation Management",
    desc: "Maintain guest trust and boost visibility with proactive monitoring and response management.",
  },
  {
    href: "/google-business-listing",
    icon: <Image src={assets.Mask14} alt="Mask14" className="w-6 h-6" />,
    name: "Google Business Listing",
    desc: "Optimize your Google Business Profile to attract more direct bookings and local guests.",
  },
  {
    href: "/ota-setup",
    icon: <Image src={assets.Mask13} alt="Mask13" className="w-6 h-6" />,
    name: "OTA Setup",
    desc: "Seamless OTA setup with optimized profiles and strategic pricing to maximize bookings.",
  },
];

export const resourceItems = [
  {
    href: "/our-story",
    icon: <Image src={assets.Mask11} alt="Mask11" className="w-6 h-6" />,
    name: "Our Story",
    desc: "We innovate to be hospitality’s most trusted tech partner.",
  },
  {
    href: "/faq",
    icon: <Image src={assets.Mask12} alt="Mask12" className="w-6 h-6" />,
    name: "FAQ’s",
    desc: "Find answers to common questions about our solutions.",
  },
  {
    href: "/partners",
    icon: <Image src={assets.Mask10} alt="Mask10" className="w-6 h-6" />,
    name: "Partners",
    desc: "Discover how partnering with us benefits your business!",
  },
  {
    href: "/blogs",
    icon: <Image src={assets.Mask9} alt="Mask9" className="w-6 h-6" />,
    name: "Blogs",
    desc: "Insights and trends to elevate your hotel’s success.",
  },
];

export const contactItems = [
  {
    href: "/add-listing",
    icon: <Image src={assets.Mask19} alt="Mask19" className="w-6 h-6" />,
    name: "Add Listing",
    desc: "Reliable support to keep your hotel running smoothly.",
  },
  {
    href: "/custom-support",
    icon: <Image src={assets.Mask18} alt="Mask18" className="w-6 h-6" />,
    name: "Customer Support",
    desc: "Get expert guidance to find the right solutions for your hotel.",
  },
  {
    href: "/sales-enquiry",
    icon: <Image src={assets.Mask17} alt="Mask17" className="w-6 h-6" />,
    name: "Sales Enquiry",
    desc: "Get Listed & Transform Your Hotel!",
  },
];
