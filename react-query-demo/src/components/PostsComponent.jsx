import React from "react";
import { useQuery } from "react-query";

// Function to fetch posts from JSONPlaceholder
const fetchPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

const PostsComponent = () => {
  // useQuery hook handles loading, error, and data automatically
  const { data, error, isLoading, isError, refetch, isFetching } = useQuery(
    "posts", // Unique key for caching
    fetchPosts,
    {
      staleTime: 60000, // Data stays "fresh" for 1 minute
      cacheTime: 300000, // Data stays in cache for 5 minutes
    },
  );

  if (isLoading)
    return <div className="p-4 text-blue-600">Loading posts...</div>;

  if (isError)
    return <div className="p-4 text-red-600">Error: {error.message}</div>;

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">JSONPlaceholder Posts</h1>

        {/* Step 3: Manual Refetch Button */}
        <button
          onClick={() => refetch()}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
        >
          {isFetching ? "Refreshing..." : "Refetch Data"}
        </button>
      </div>

      <div className="grid gap-4">
        {data.slice(0, 10).map((post) => (
          <div key={post.id} className="p-4 border rounded shadow-sm bg-white">
            <h2 className="font-semibold capitalize text-lg">{post.title}</h2>
            <p className="text-gray-600 mt-2">{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostsComponent;
