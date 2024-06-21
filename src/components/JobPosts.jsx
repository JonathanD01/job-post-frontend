import React, { createContext, useContext, useState } from "react";
import { useEffect } from "react";
import { storeFilterInStorage, storePageInStorage } from "../utils/StateUtil";
import { getAllJobPosts } from "../services/JobPostService";
import { handleError } from "../utils/ErrorUtil";
import { CurrentPageContext, FilterContext } from "./JobPostsPageParent";
import Pagination from "./Pagination";
import JobPostList from "./JobPostList";
import JobPostSectionHeader from "./JobPostSectionHeader";

export const LoadingContext = createContext(null);
export const DataContext = createContext(null);

const JobPosts = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const { currentPage } = useContext(CurrentPageContext);
  const { filter } = useContext(FilterContext);

  const jobPostSize = 12;

  useEffect(() => {
    setLoading(true);

    const fetchData = async () => {
      try {
        const result = await getAllJobPosts(currentPage, jobPostSize, filter);
        if (result) {
          setData(result.data);

          // Update application state
          storeFilterInStorage(filter);
          storePageInStorage(currentPage);
        }
      } catch (error) {
        handleError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [currentPage, filter]);

  return (
    <>
      <DataContext.Provider
        value={{
          data,
          setData,
        }}
      >
        <LoadingContext.Provider
          value={{
            loading,
            setLoading,
          }}
        >
          <JobPostSectionHeader />
          <JobPostList displayAmount={jobPostSize} />
          <Pagination />
        </LoadingContext.Provider>
      </DataContext.Provider>
    </>
  );
};

export default JobPosts;
