import React, { useState, useEffect } from "react";
import axios from "axios";
import HackNav from './components/HackNav'
import HackContent from './components/HackContent'


export default function App() {
  const [newsContent, setNewsContent] = useState(null); // Initialize newsContent to null
  const apiUrl = "https://hn.algolia.com/api/v1/search?query=react";

  useEffect(() => {
    axios
      .get(apiUrl)
      .then((response) => {
        setNewsContent(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      <HackNav setNewsContent={setNewsContent} /> {/* Pass setNewsContent */}
      <HackContent newsContent={newsContent} /> {/* Pass newsContent */}
    </div>
  );
}gi



