"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { createClient } from "contentful";

const ContentfulContextPricing = createContext();

const client = createClient({
  space: "wzmo4lmp2r9v",
  accessToken: "8byVN6ybNsGaYJ6FUTB0CB4mwuie5fIX-DxWy1GGi6E",
});

export const ContentfulProviderpricing = ({ children }) => {
    const [pricingData, setpricingData] = useState(null);

    useEffect(() => {
      async function fetchHeroContent() {
        try {
          const res = await client.getEntries({ content_type: "pricing" }); // Replace with your actual content type ID
          setpricingData(res.items[0]?.fields);
          console.log("pricing", res.items);
  
        } catch (err) {
          console.error("Contentful fetch error:", err);
        }
      }
  
      fetchHeroContent();
    }, []);


  return (
    <ContentfulContextPricing.Provider value={{ pricingData }}>
      {children}
    </ContentfulContextPricing.Provider>
  );
};

export const useContentful = () => useContext(ContentfulContextPricing);
