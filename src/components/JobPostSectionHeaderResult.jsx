import React, { useContext } from "react";
import { DataContext, LoadingContext } from "./JobPostsPage";
import { CurrentPageContext } from "./JobPostsPage";
import { SearchQueryContext } from "./JobPostSection";

const JobPostSectionHeaderResult = () => {
  const { lastSearchQuery } = useContext(SearchQueryContext);
  const { currentPage } = useContext(CurrentPageContext);
  const { isLoading } = useContext(LoadingContext);
  const data = useContext(DataContext);

  return (
    <div>
      {isLoading && (
        <h2 id="jobposts-title" className="jobposts-title">
          Søker...
        </h2>
      )}
      {!lastSearchQuery && !isLoading && (
        <h2 id="jobposts-title" className="jobposts-title">
          Viser {data?.result ? data?.result.totalElements : 0} annonser
        </h2>
      )}
      {lastSearchQuery && !isLoading && (
        <h2 id="jobposts-title" className="jobposts-title">
          Søket "{lastSearchQuery}" returnerte{" "}
          {data != null ? data?.result?.totalElements : 0} annonser
        </h2>
      )}
      {!isLoading && (
        <small>
          Du er på side {currentPage + 1} av{" "}
          {data?.result ? data?.result.totalPages : 0}.
        </small>
      )}
      {isLoading && <small>...</small>}
    </div>
  );
};

export default JobPostSectionHeaderResult;
