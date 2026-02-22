import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  // Simulate an authentication check (e.g., checking localStorage)
  const isAuthenticated = false;

  return isAuthenticated ? children : <Navigate replace to="/" />;
};

export default ProtectedRoute;
