import React, { useContext } from "react";
import { SearchQueryContext } from "./JobPostSectionHeader";
import { CurrentPageContext, FilterContext } from "./JobPostsPageParent";

const JobPostSectionHeaderInput = () => {
  const { filter, setFilter } = useContext(FilterContext);
  const { searchQuery, setSearchQuery, lastSearchQuery, setLastSearchQuery } =
    useContext(SearchQueryContext);
  const { setCurrentPage } = useContext(CurrentPageContext);

  function handleSend() {
    if (searchQuery.length >= 1) {
      setFilter({ ...filter, query: [searchQuery] });
      setLastSearchQuery(searchQuery);
      setCurrentPage(0);
    }
  }

  function handleOnChange(event) {
    const value = event.target.value;
    setSearchQuery(value);
    if (value.length === 0 && lastSearchQuery) {
      setFilter({ ...filter, query: [] });
      setSearchQuery("");
      setLastSearchQuery("");
      setCurrentPage(0);
    }
  }

  return (
    <div className="input-grid">
      <div className="grid-column-1-3">
        <input
          className="input__query"
          tabIndex="1"
          placeholder="Prøv å skrive inn sommerjobb eller kiwi"
          value={searchQuery}
          onChange={(event) => handleOnChange(event)}
          onKeyDown={(e) => (e.key === "Enter" ? handleSend() : "")}
        ></input>
      </div>
      <div>
        <button
          className="button button__larger h-100"
          onClick={() => handleSend()}
        >
          Søk
        </button>
      </div>
    </div>
  );
};

export default JobPostSectionHeaderInput;
