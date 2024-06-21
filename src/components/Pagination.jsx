import React, { useContext } from "react";
import { CurrentPageContext } from "./JobPostsPageParent";
import { DataContext, LoadingContext } from "./JobPosts";

const Pagination = () => {
  const { data } = useContext(DataContext);
  const { loading } = useContext(LoadingContext);
  const { currentPage, setCurrentPage } = useContext(CurrentPageContext);

  function handleNewPage(newPage) {
    setCurrentPage(newPage);
    document.getElementById("jobposts-title").scrollIntoView();
  }

  return (
    <>
      {!loading &&
        data?.result?.numberOfElements > 0 &&
        data?.result?.totalPages > 1 && (
          <div className="pagination mt-3">
            {currentPage > 3 && (
              <div>
                <a onClick={() => handleNewPage(0)}>Første</a>
              </div>
            )}

            {currentPage > 2 && (
              <div>
                <a
                  onClick={() => handleNewPage(currentPage - 1)}
                  className={0 === currentPage ? "disabled" : ""}
                >
                  &laquo;
                </a>
              </div>
            )}

            {[...Array(data?.result?.totalPages).keys()]
              .slice(
                Math.max(0, currentPage - 2),
                Math.min(currentPage + 3, data?.result?.totalPages)
              )
              .map((page, index) => (
                <div
                  className={currentPage === page ? "active" : ""}
                  key={page}
                >
                  <a onClick={() => handleNewPage(page)}>{page + 1}</a>
                </div>
              ))}

            {currentPage < data?.result?.totalPages - 1 && (
              <div>
                <a
                  onClick={() => handleNewPage(currentPage + 1)}
                  className={
                    data?.result?.totalPages === currentPage + 1
                      ? "disabled"
                      : ""
                  }
                >
                  &raquo;
                </a>
              </div>
            )}

            {currentPage < data?.result?.totalPages - 2 && (
              <div>
                <a onClick={() => handleNewPage(data?.result?.totalPages - 1)}>
                  Siste
                </a>
              </div>
            )}
          </div>
        )}
    </>
  );
};

export default Pagination;
