import axios from "axios";

export const fetchAdvancedUserData = async (username, location, minRepos) => {
  let query = `q=${username}`;
  if (location) query += `+location:${location}`;
  if (minRepos) query += `+repos:>=${minRepos}`;

  const response = await axios.get(
    `https://api.github.com/search/users?${query}`,
  );
  return response.data; // Note: Search API returns an object with an 'items' array
};
