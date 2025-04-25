'use client';

import { createContext, useContext, useEffect, useState } from "react";
import { createClient } from "contentful";

// Create context
const ContentfulContextBookone = createContext();

// Contentful client setup
const client = createClient({
  space: "wzmo4lmp2r9v",
  accessToken: "8byVN6ybNsGaYJ6FUTB0CB4mwuie5fIX-DxWy1GGi6E",
});

// Provider component
export const ContentfulProviderBookone = ({ children }) => {
  const [crmData, setcrmData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await client.getEntries({ content_type: "bookOneCrm" });
        setcrmData(res.items[0]?.fields);
        console.log("bookOneCrm", res.items);
      } catch (err) {
        console.error("Contentful fetch error:", err);
      }
    }

    fetchData();
  }, []);

  return (
    <ContentfulContextBookone.Provider value={{ crmData }}>
      {children}
    </ContentfulContextBookone.Provider>
  );
};


export const useBookoneContentful = () => useContext(ContentfulContextBookone);
