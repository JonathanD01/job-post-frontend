import React, { useContext } from "react";
import { FilterContext } from "./JobPostsPage";
import { SearchQueryContext } from "./JobPostSection";

const SearchTags = () => {
  const { filter, setFilter } = useContext(FilterContext);
  const { setSearchQuery, setLastSearchQuery } = useContext(SearchQueryContext);

  function handleTagClick(key, item) {
    const updatedFilter = { ...filter };

    if (key === "query") {
      setSearchQuery("");
      setLastSearchQuery("");
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
                onClick={() => handleTagClick(key, item)}
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
