import React, { useContext } from "react";
import { CurrentPageContext } from "./JobPostsPageParent";
import { SearchQueryContext } from "./JobPostSectionHeader";
import { DataContext, LoadingContext } from "./JobPosts";

const JobPostSectionHeaderResult = () => {
  const { lastSearchQuery } = useContext(SearchQueryContext);
  const { currentPage } = useContext(CurrentPageContext);
  const { loading } = useContext(LoadingContext);
  const { data } = useContext(DataContext);

  return (
    <div>
      {loading && (
        <h2 id="jobposts-title" className="jobposts-title">
          Søker...
        </h2>
      )}
      {!lastSearchQuery && !loading && (
        <h2 id="jobposts-title" className="jobposts-title">
          Viser {data?.result ? data?.result.totalElements : 0} annonser
        </h2>
      )}
      {lastSearchQuery && !loading && (
        <h2 id="jobposts-title" className="jobposts-title">
          Søket "{lastSearchQuery}" returnerte{" "}
          {data != null ? data?.result?.totalElements : 0} annonser
        </h2>
      )}
      {!loading && (
        <small>
          Du er på side {currentPage + 1} av{" "}
          {data?.result ? data?.result.totalPages : 0}.
        </small>
      )}
    </div>
  );
};

export default JobPostSectionHeaderResult;
