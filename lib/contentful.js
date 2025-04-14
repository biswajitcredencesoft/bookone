// components/ContentfulContext.js
"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { createClient } from "contentful";

const ContentfulContext = createContext(null);

const client = createClient({
  space: "wzmo4lmp2r9v",
  accessToken: "8byVN6ybNsGaYJ6FUTB0CB4mwuie5fIX-DxWy1GGi6E",
});

export const ContentfulProvider = ({ children }) => {
  const [heroData, setHeroData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await client.getEntries({ content_type: "homePage" });
        setHeroData(res.items[0]?.fields);
        console.log("Contentful loaded:", res.items[0]?.fields);
      } catch (err) {
        console.error("Error fetching Contentful data:", err);
      }
    }

    fetchData();
  }, []);

  return (
    <ContentfulContext.Provider value={{ heroData }}>
      {children}
    </ContentfulContext.Provider>
  );
};

// Custom hook for easier usage
export const useContentful = () => useContext(ContentfulContext);
