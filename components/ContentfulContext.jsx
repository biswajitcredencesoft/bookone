"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { createClient } from "contentful";

const ContentfulContext = createContext();

const client = createClient({
  space: "wzmo4lmp2r9v",
  accessToken: "8byVN6ybNsGaYJ6FUTB0CB4mwuie5fIX-DxWy1GGi6E",
});

export const ContentfulProvider = ({ children }) => {
  const [heroData, setHeroData] = useState(null);

  useEffect(() => {
    async function fetchContent() {
      try {
        const res = await client.getEntries({ content_type: "homePage" });
        setHeroData(res.items[0]?.fields);
      } catch (err) {
        console.error("Contentful fetch error:", err);
      }
    }

    fetchContent();
  }, []);

  return (
    <ContentfulContext.Provider value={{ heroData }}>
      {children}
    </ContentfulContext.Provider>
  );
};

export const useContentful = () => useContext(ContentfulContext);
