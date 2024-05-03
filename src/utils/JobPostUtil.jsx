export function getValueFromDescriptionMap(jobPost, descriptionKeys) {
  if (jobPost == null) {
    console.error("Jobpost cannot be null");
    return null;
  }

  if (
    jobPost.description_map == null ||
    typeof jobPost.description_map !== "object"
  ) {
    return null;
  }

  const map = new Map(Object.entries(jobPost.description_map));

  for (let i = 0; i < descriptionKeys.length; i++) {
    if (map.has(descriptionKeys[i])) {
      return map.get(descriptionKeys[i]);
    }
  }
  return null;
}
