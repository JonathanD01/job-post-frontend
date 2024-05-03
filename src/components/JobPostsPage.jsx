import React, { createContext } from "react";
import { useEffect, useState } from "react";
import JobPostSection from "./JobPostSection";
import { FilterSets } from "./FilterSets";
import { initialFilter, updateFilter } from "../utils/FilterUtil";
import { getAllJobPosts } from "../services/JobPostService";
import { handleError } from "../utils/ErrorUtil";

export const DataContext = createContext(null);
export const FilterContext = createContext(null);
export const LoadingContext = createContext(null);
export const CurrentPageContext = createContext(null);

const JobPostsPage = () => {
  const [data, setData] = useState();
  const [currentPage, setCurrentPage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [filter, setFilter] = useState(initialFilter);

  useEffect(() => {
    let ignore = false;
    setIsLoading(true);

    const fetchData = async () => {
      try {
        const result = await getAllJobPosts(currentPage, 12, filter);
        if (!ignore && result) {
          setData(result.data);
          updateFilter(filter);
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
  );
};

export default JobPostsPage;
