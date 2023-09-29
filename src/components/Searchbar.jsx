import React, { useState } from "react";
import axios from "axios";

function Searchbar({ setNewsContent }) {
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://hn.algolia.com/api/v1/search?query=${query}`
      );
      setNewsContent(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <form>
      <input
        type="text"
        placeholder="Search Hacker News"
        value={query}
        onChange={handleInputChange}
      />
      <button onClick={handleSearch}>Search</button>
    </form>
  );
}

export default Searchbar;
