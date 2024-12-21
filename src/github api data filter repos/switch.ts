switch (sort) {
  // Created Ascending(artan)
  case "Created Ascending":
    return sortByKeyAscending(filteredRepos, "created_at");

  // Created Descending(azalan)
  case "Created Descending":
    return sortByKeyDescending(filteredRepos, "created_at");

  // Updated Ascending(artan)
  case "Updated Ascending":
    return sortByKeyAscending(filteredRepos, "pushed_at");

  // Updated Descending(azalan)
  case "Updated Descending":
    return sortByKeyDescending(filteredRepos, "pushed_at");

  case "Stars Ascending":
    return sortByKeyAscending(filteredRepos, "stargazers_count");

  // Stars Descending
  default:
    return sortByKeyDescending(filteredRepos, "stargazers_count"); // Default sorting by pushed date (descending)
}
