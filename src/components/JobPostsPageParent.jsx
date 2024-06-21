import React, { createContext } from "react";
import { useState } from "react";
import { FilterSets } from "./FilterSets";
import { getInitialFilter, getInitialPage } from "../utils/StateUtil";
import { Helmet } from "react-helmet";
import JobPosts from "./JobPosts";

export const CurrentPageContext = createContext(null);
export const FilterContext = createContext(null);

const JobPostsPageParent = () => {
  const [currentPage, setCurrentPage] = useState(getInitialPage);
  const [filter, setFilter] = useState(getInitialFilter);

  return (
    <>
      <Helmet>
        <title>{`Søk Jobb`}</title>
      </Helmet>

      <CurrentPageContext.Provider
        value={{
          currentPage,
          setCurrentPage,
        }}
      >
        <FilterContext.Provider
          value={{
            filter,
            setFilter,
          }}
        >
          <div className="main-container">
            <div className="left-side">
              <FilterSets />
            </div>

            <div className="right-side">
              <JobPosts />
            </div>
          </div>
        </FilterContext.Provider>
      </CurrentPageContext.Provider>
    </>
  );
};

export default JobPostsPageParent;
