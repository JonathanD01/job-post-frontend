import React, { createContext, useState } from "react";
import Pagination from "./Pagination";
import JobPostList from "./JobPostList";
import JobPostSectionHeader from "./JobPostSectionHeader";

export const SearchQueryContext = createContext(null);

const JobPostSection = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [lastSearchQuery, setLastSearchQuery] = useState("");

  const jobPostsToDisplay = 12;

  return (
    <div>
      <SearchQueryContext.Provider
        value={{
          searchQuery,
          setSearchQuery,
          lastSearchQuery,
          setLastSearchQuery,
        }}
      >
        <JobPostSectionHeader />
      </SearchQueryContext.Provider>

      <JobPostList displayAmount={jobPostsToDisplay} />

      <Pagination />
    </div>
  );
};

export default JobPostSection;
