export const initialFilter = () => {
  const filterFromSessionStorage = sessionStorage.getItem("filter");
  if (filterFromSessionStorage) {
    return JSON.parse(filterFromSessionStorage);
  } else {
    return new Map();
  }
};

export function updateFilter(filter) {
  sessionStorage.setItem("filter", JSON.stringify(filter));
}
