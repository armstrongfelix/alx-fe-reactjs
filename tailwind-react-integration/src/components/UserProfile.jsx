import React from "react";

function UserProfile() {
  return (
    <div className="user-profile bg-gray-100 mx-auto my-10 rounded-lg p-4 md:p-8 max-w-xs md:max-w-sm shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out cursor-default">
      <img
        src="https://via.placeholder.com/150"
        alt="User"
        className="rounded-full mx-auto w-24 h-24 md:w-36 md:h-36 
                   /* Image Scale effect */
                   transition-transform duration-300 ease-in-out hover:scale-110"
      />

      {/* Heading with color shift on hover */}
      <h1
        className="text-blue-800 my-4 font-bold text-lg md:text-xl 
                     transition-colors duration-300 hover:text-blue-500"
      >
        John Doe
      </h1>

      <p className="text-gray-600 text-sm md:text-base">
        Developer at Example Co. Loves to write code and explore new
        technologies.
      </p>
    </div>
  );
}

export default UserProfile;
