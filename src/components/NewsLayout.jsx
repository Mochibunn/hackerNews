import { useEffect, useState } from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import Entry from "./Entry";
import loading from "../images/loading.gif";
import Pagination from "./Pagination";
import "../styles/newsStyles.css";
// import "../styles/searchResultsStyles.css";

function NewsLayout({ query, setQuery }) {
  const [entries, setEntries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    setIsLoading(false);
  }, [entries]);

  return (
    <center>
      <div className='home-container'>
        <Navigation />
        <div className='entrylist-container'>
          {isLoading === true && <img src={loading} alt='loading'></img>}
          {entries.length > 1 &&
            entries.map((entry) => (
              <Entry
                key={entry.objectID}
                entry={entry}
                setIsLoading={setIsLoading}
              />
            ))}
        </div>
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPages={totalPages}
        />
        <Footer
          query={query}
          setQuery={setQuery}
          entries={entries}
          setEntries={setEntries}
          setIsLoading={setIsLoading}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          setTotalPages={setTotalPages}
        />
      </div>
    </center>
  );
}

export default NewsLayout;