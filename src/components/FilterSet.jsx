import React, { useState } from "react";

const FilterSet = ({ label, checkboxes }) => {
  const [hidden, setHidden] = useState(false);

  return (
    <div>
      <div className="filterset col-2">
        <div>
          <p className="filter-title">{label}</p>
        </div>
        <div
          className="filter-button-container"
          onClick={() => setHidden(!hidden)}
        >
          {!hidden && (
            <button className="button button__secondary">&#9650;</button>
          )}
          {hidden && (
            <button className="button button__secondary">&#9660;</button>
          )}
        </div>
      </div>
      {!hidden && checkboxes}
    </div>
  );
};

export default FilterSet;
