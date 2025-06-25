import React from "react";

export default function Profile() {
    const user = {
      name: "Brian Bett",
      email: "brianbett@gmail.com",
    };
  if (!user) {
    return <p>Loading user info...</p>;
  }

  return (
    <div className="max-w-sm mx-auto mt-10 p-6 bg-white rounded-xl shadow-md text-center">
      <h2 className="text-2xl font-semibold mb-2">Welcome, {user.name}</h2>
      <p className="text-gray-600">{user.email}</p>
    </div>
  );
}
