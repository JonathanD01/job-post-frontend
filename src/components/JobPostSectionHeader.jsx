import React from "react";
import SearchTags from "./SearchTags";
import JobPostSectionHeaderResult from "./JobPostSectionHeaderResult";
import JobPostSectionHeaderInput from "./JobPostSectionHeaderInput";

const JobPostSectionHeader = () => {
  return (
    <div>
      <JobPostSectionHeaderResult />
      <SearchTags />
      <JobPostSectionHeaderInput />
    </div>
  );
};

export default JobPostSectionHeader;
