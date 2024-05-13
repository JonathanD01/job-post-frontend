export const getInitialFilter = () => {
  const filterFromSessionStorage = sessionStorage.getItem("filter");
  if (filterFromSessionStorage) {
    return JSON.parse(filterFromSessionStorage);
  } else {
    return new Map();
  }
};

export const getInitialPage = () => {
  const pageFromSessionStorage = sessionStorage.getItem("page");
  if (pageFromSessionStorage) {
    return JSON.parse(pageFromSessionStorage);
  } else {
    return 0;
  }
};

export const getInitialFilterSetState = (label) => {
  const filterSetStateFromSessionStorage = sessionStorage.getItem(
    label + "-hide"
  );
  if (filterSetStateFromSessionStorage) {
    return JSON.parse(filterSetStateFromSessionStorage);
  } else {
    return false;
  }
};

export function updateFilter(filter) {
  sessionStorage.setItem("filter", JSON.stringify(filter));
}

export function updatePage(page) {
  sessionStorage.setItem("page", JSON.stringify(page));
}

export function updateFilterSetState(label, hide) {
  sessionStorage.setItem(label + "-hide", JSON.stringify(hide));
}
