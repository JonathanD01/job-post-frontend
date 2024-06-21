import axios from "axios";
import { handleError } from "../utils/ErrorUtil";

const API_URL =
  process.env.NODE_ENV === "production"
    ? "/api/v1/jobposts"
    : "http://localhost:8080/api/v1/jobposts";

export async function getJobPosts(page = 0, size = 12, filter = null) {
  const filterQuery = buildFilterQuery(filter);
  var url = `${API_URL}?page=${page}&size=${size}`;
  url = filterQuery != null ? url + filterQuery : url;
  return await axios.get(url);
}

export async function getAllJobPosts(page = 0, size = 12, filter) {
  if (page < 0) {
    return;
  }

  try {
    return await getJobPosts(page, size, filter);
  } catch (error) {
    handleError(error);
  }
}

export async function getJobPostFromId(jobPostId) {
  if (jobPostId == null) {
    console.error("jobPostId cannot be null");
    return null;
  }
  return await axios.get(`${API_URL}/${jobPostId}`);
}

function buildFilterQuery(filter) {
  if (
    !filter ||
    (typeof filter === "object" && Object.keys(filter).length === 0)
  ) {
    return ""; // Return an empty string if filter is null, undefined, or an empty object
  }

  let filters = [];
  if (typeof filter === "object") {
    // Handle filter as a plain JavaScript object
    Object.entries(filter).forEach(([filterKey, filterValues]) => {
      if (filterValues.length > 0) {
        const encodedFilterValues = filterValues
          .map((value) => encodeURIComponent(value.toLowerCase()))
          .join(",");
        const start = `${filterKey.toLowerCase()}=${encodedFilterValues}`;
        filters.push(start);
      }
    });
  }

  console.log(filters);
  return filters.length > 0 ? "&" + filters.join("&") : ""; // Only return query string if filters are present
}
