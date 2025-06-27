import React, { useEffect, useState } from "react";

export default function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const User = localStorage.getItem("user");
    if (User) {
      setUser(JSON.parse(User));
    }
  }, []);

  if (!user) {
    return (
      <p className="text-center mt-12 text-gray-800 dark:text-gray-200">
        Loading user info...
      </p>
    );
  }

  return (
    <div className="max-w-sm mx-auto mt-12 p-6 bg-white dark:bg-gray-800 text-gray-800 dark:text-white rounded-xl shadow-md text-center">
      <h2 className="text-2xl font-bold mb-2 text-indigo-600 dark:text-indigo-400">
        Hello, {user.name}
      </h2>
      <p className="text-gray-600 dark:text-gray-300 text-sm">{user.email}</p>
    </div>
  );
}
