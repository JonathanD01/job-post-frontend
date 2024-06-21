import React, { createContext, useState } from "react";
import SearchTags from "./SearchTags";
import JobPostSectionHeaderResult from "./JobPostSectionHeaderResult";
import JobPostSectionHeaderInput from "./JobPostSectionHeaderInput";

export const SearchQueryContext = createContext(null);

const JobPostSectionHeader = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [lastSearchQuery, setLastSearchQuery] = useState("");

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
        <JobPostSectionHeaderResult />
        <SearchTags />
        <JobPostSectionHeaderInput />
      </SearchQueryContext.Provider>
    </div>
  );
};

export default JobPostSectionHeader;
