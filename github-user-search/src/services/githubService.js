import axios from "axios";

export const fetchAdvancedUserData = async (username, location, minRepos) => {
  let query = `user:${username}`; // Basic username search
  if (location) query += `+location:${location}`;
  if (minRepos) query += `+repos:>=${minRepos}`;

  const response = await axios.get(
    `https://api.github.com/search/users?q=${query}`,
  );
  return response.data; // This returns an array in 'items'
};
