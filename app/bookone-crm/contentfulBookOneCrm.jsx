"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { createClient } from "contentful";

const ContentfulContextBookone = createContext();

const client = createClient({
  space: "wzmo4lmp2r9v",
  accessToken: "8byVN6ybNsGaYJ6FUTB0CB4mwuie5fIX-DxWy1GGi6E",
});

export const ContentfulProviderBookone = ({ children }) => {
    const [connectData, setconnectData] = useState(null);

    useEffect(() => {
      async function fetchHeroContent() {
        try {
          const res = await client.getEntries({ content_type: "bookOneCrm" }); // Replace with your actual content type ID
          setconnectData(res.items[0]?.fields);
          console.log("connectData", res.items);
  
        } catch (err) {
          console.error("Contentful fetch error:", err);
        }
      }
  
      fetchHeroContent();
    }, []);


  return (
    <ContentfulContextBookone.Provider value={{ connectData }}>
      {children}
    </ContentfulContextBookone.Provider>
  );
};

export const useContentful = () => useContext(ContentfulContextBookone);
