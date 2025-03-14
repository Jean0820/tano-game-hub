export const formatSortTerm = (sortTerm: string) => {
  return sortTerm
    .split("_") // Split where `_` occurs
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) // Capitalize each word
    .join(" "); // Join words with a space
};
