import React, { useState } from "react";
import {
  getInitialFilterSetState,
  storeSpecificFilterStateInStorage,
} from "../utils/StateUtil";

const FilterSet = ({ label, children }) => {
  const [hidden, setHidden] = useState(getInitialFilterSetState(label));

  function toggleHidden() {
    const value = !hidden;
    setHidden(value);
    storeSpecificFilterStateInStorage(label, value);
  }

  return (
    <div>
      <div className="filterset col-2">
        <div>
          <p className="filter-title">{label}</p>
        </div>
        <div className="filter-button-container" onClick={() => toggleHidden()}>
          {!hidden && (
            <button className="button button__secondary">&#9650;</button>
          )}
          {hidden && (
            <button className="button button__secondary">&#9660;</button>
          )}
        </div>
      </div>
      {!hidden && children}
    </div>
  );
};

export default FilterSet;
