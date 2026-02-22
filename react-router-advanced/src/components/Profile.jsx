import { Link, Routes, Route, Outlet } from "react-router-dom";

const Profile = () => {
  return (
    <div>
      <h1>Profile Page</h1>
      <nav>
        <Link to="details">Details</Link> |<Link to="settings">Settings</Link>
      </nav>

      {/* This is where the nested components will render */}
      <Routes>
        <Route path="details" element={<ProfileDetails />} />
        <Route path="settings" element={<ProfileSettings />} />
      </Routes>
    </div>
  );
};
