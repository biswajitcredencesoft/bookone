"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { createClient } from "contentful";

const ContentfulContextPMS = createContext();

const client = createClient({
  space: "wzmo4lmp2r9v",
  accessToken: "8byVN6ybNsGaYJ6FUTB0CB4mwuie5fIX-DxWy1GGi6E",
});

export const ContentfulProviderPMS = ({ children }) => {
    const [pmsData, setpmsData] = useState(null);

    useEffect(() => {
      async function fetchHeroContent() {
        try {
          const res = await client.getEntries({ content_type: "bookOnePms" }); // Replace with your actual content type ID
          setpmsData(res.items[0]?.fields);
          console.log("bookOnePms", res.items);
  
        } catch (err) {
          console.error("Contentful fetch error:", err);
        }
      }
  
      fetchHeroContent();
    }, []);


  return (
    <ContentfulContextPMS.Provider value={{ pmsData }}>
      {children}
    </ContentfulContextPMS.Provider>
  );
};

export const useContentful = () => useContext(ContentfulContextPMS);
