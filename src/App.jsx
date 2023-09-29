import { useState, useEffect } from "react";
import axios from "axios";
import HackNav from './components/HackNav'
import HackContent from './components/HackContent'


export default function App() {
  const [newsContent, setNewsContent] = useState(null); // Initialize newsContent to null
  const [query, setQuery] = useState('react'); //react will be the default search
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
      <HackNav setQuery={setQuery} /> 
      <p>Current Search Query: {query}</p>
      <HackContent newsContent={newsContent} /> 
    </div>
  );
}



