import React, { useContext } from "react";
import { SearchQueryContext } from "./JobPostSectionHeader";
import { CurrentPageContext, FilterContext } from "./JobPostsPageParent";

const SearchTags = () => {
  const { filter, setFilter } = useContext(FilterContext);
  const { setSearchQuery, setLastSearchQuery } = useContext(SearchQueryContext);
  const { setCurrentPage } = useContext(CurrentPageContext);

  function handleSearchBtnClearClick(key, item) {
    const updatedFilter = { ...filter };

    if (key === "query") {
      setSearchQuery("");
      setLastSearchQuery("");
      setCurrentPage(0);
    }

    if (updatedFilter[key]) {
      updatedFilter[key] = updatedFilter[key].filter((value) => value !== item);
      if (updatedFilter[key].length === 0) {
        delete updatedFilter[key];
      }
    }
    setFilter(updatedFilter);
  }

  return (
    <div className="search-tags">
      <ul>
        {filter &&
          Object.entries(filter).map(([key, list]) => {
            return list.map((item) => (
              <li
                key={`${key}-${item}`}
                onClick={() => handleSearchBtnClearClick(key, item)}
              >
                {key.toLowerCase() === "query" ? `Søk "${item}"` : item}
              </li>
            ));
          })}
      </ul>
    </div>
  );
};

export default SearchTags;
