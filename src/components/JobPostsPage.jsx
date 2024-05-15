import React, { createContext } from "react";
import { useEffect, useState } from "react";
import JobPostSection from "./JobPostSection";
import { FilterSets } from "./FilterSets";
import {
  getInitialFilter,
  getInitialPage,
  updateFilter,
  updatePage,
} from "../utils/StateUtil";
import { getAllJobPosts } from "../services/JobPostService";
import { handleError } from "../utils/ErrorUtil";
import { Helmet } from "react-helmet";

export const DataContext = createContext(null);
export const FilterContext = createContext(null);
export const LoadingContext = createContext(null);
export const CurrentPageContext = createContext(null);

const JobPostsPage = () => {
  const [data, setData] = useState();
  const [currentPage, setCurrentPage] = useState(getInitialPage);
  const [isLoading, setIsLoading] = useState(false);
  const [filter, setFilter] = useState(getInitialFilter);

  useEffect(() => {
    let ignore = false;
    setIsLoading(true);

    const fetchData = async () => {
      try {
        const result = await getAllJobPosts(currentPage, 12, filter);
        if (!ignore && result) {
          setData(result.data);

          // Update application state
          updateFilter(filter);
          updatePage(currentPage);
        }
      } catch (error) {
        handleError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();

    return () => {
      ignore = true;
    };
  }, [currentPage, filter]);

  return (
    <>
      <Helmet>
        <title>{`Søk Jobb - ${
          data?.result?.totalElements ? data.result.totalElements : 0
        } annonser`}</title>
      </Helmet>
      <div className="main-container">
        <FilterContext.Provider
          value={{
            filter,
            setFilter,
          }}
        >
          <div className="left-side">
            <FilterSets />
          </div>
          <div className="right-side">
            <DataContext.Provider value={data}>
              <LoadingContext.Provider
                value={{
                  isLoading,
                  setIsLoading,
                }}
              >
                <CurrentPageContext.Provider
                  value={{
                    currentPage,
                    setCurrentPage,
                  }}
                >
                  <JobPostSection />
                </CurrentPageContext.Provider>
              </LoadingContext.Provider>
            </DataContext.Provider>
          </div>
        </FilterContext.Provider>
      </div>
    </>
  );
};

export default JobPostsPage;
