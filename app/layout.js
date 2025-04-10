import { Inter } from "next/font/google";
import "./globals.css";
import { AppContextProvider } from "@/context/AppContext";
import { Toaster } from "react-hot-toast";
import ScrollToTopButton from "@/components/ScrollToTopButton";


const inter = Inter({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] });

export const metadata = {
  title: "BookOne",
  description: "Hospitality Suite",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased text-gray-700`}>
        <Toaster />
        <AppContextProvider>
          {children}
          <ScrollToTopButton />
        </AppContextProvider>
      </body>
    </html>
  );
}
