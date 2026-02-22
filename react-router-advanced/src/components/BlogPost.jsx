import { useParams } from "react-router-dom";

const BlogPost = () => {
  const { id } = useParams(); // Retrieves the 'id' from the URL
  return (
    <div>
      <h2>Viewing Blog Post ID: {id}</h2>
      {/* Fetch data based on ID here */}
    </div>
  );
};
