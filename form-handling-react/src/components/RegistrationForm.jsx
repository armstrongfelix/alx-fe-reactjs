import React, { useState } from "react";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    // Updating state on every keystroke
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Final Form Data:", formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-4 max-w-md mx-auto border rounded-lg shadow-sm"
    >
      <h2 className="text-xl font-bold mb-4">Staff Registration</h2>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Username</label>
        <input
          type="text"
          name="username"
          // This creates the "Control": state -> input value
          value={formData.username}
          onChange={handleChange}
          className="border p-2 w-full rounded focus:ring-2 focus:ring-blue-500 outline-none"
          placeholder="Enter username"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Email</label>
        <input
          type="email"
          name="email"
          // This creates the "Control": state -> input value
          value={formData.email}
          onChange={handleChange}
          className="border p-2 w-full rounded focus:ring-2 focus:ring-blue-500 outline-none"
          placeholder="staff@nis.gov.ng"
        />
      </div>

      <div className="mb-6">
        <label className="block text-sm font-medium mb-1">Password</label>
        <input
          type="password"
          name="password"
          // This creates the "Control": state -> input value
          value={formData.password}
          onChange={handleChange}
          className="border p-2 w-full rounded focus:ring-2 focus:ring-blue-500 outline-none"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-700 text-white py-2 rounded hover:bg-blue-800 transition"
      >
        Register Staff
      </button>
    </form>
  );
};

export default RegistrationForm;
