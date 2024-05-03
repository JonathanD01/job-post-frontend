import { useContext, useEffect, useState } from "react";
import { FilterContext } from "./JobPostsPage";

const Checkbox = ({ category, label }) => {
  const { filter, setFilter } = useContext(FilterContext);
  const [checked, setChecked] = useState(false);

  const categoryUpdates = {
    stilling: "position",
    fylke: "municipality",
    sektor: "sector",
    frist: "deadline",
    // Add more mappings here as needed
  };

  function isChecked() {
    return (
      filter[getProperCategoryName()] &&
      filter[getProperCategoryName()].includes(label)
    );
  }

  // Function to get the proper category name based on mapping
  function getProperCategoryName() {
    const properCategory =
      categoryUpdates[category.toLowerCase()] || category.toLowerCase();
    return properCategory.toLowerCase();
  }

  function isFilterPresent() {
    const properCategory = getProperCategoryName(category);
    return filter[properCategory] && filter[properCategory].includes(label);
  }

  // Function to toggle filter selection
  const updateChecked = () => {
    const properCategory = getProperCategoryName(category);
    const updatedFilter = { ...filter };

    // if value is single then remove previous only allowing 1 value
    const singleValueKeys = ["query", "position", "sector", "deadline"];

    if (!updatedFilter[properCategory]) {
      updatedFilter[properCategory] = [];
    }

    if (isFilterPresent()) {
      if (singleValueKeys.includes(properCategory)) {
        delete updatedFilter[properCategory];
      } else {
        updatedFilter[properCategory] = updatedFilter[properCategory].filter(
          (item) => item !== label
        );
      }
    } else {
      if (singleValueKeys.includes(properCategory)) {
        updatedFilter[properCategory] = [label];
      } else {
        updatedFilter[properCategory].push(label);
      }
    }
    setFilter(updatedFilter);
  };

  return (
    <div className="checkbox-wrapper">
      <label>
        <input
          type="checkbox"
          checked={isChecked()}
          onChange={() => updateChecked()}
        />
        <span>{label}</span>
      </label>
    </div>
  );
};
export default Checkbox;
