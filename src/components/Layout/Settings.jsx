import { useEffect, useState } from "react";

export default function Settings() {
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState("en");

  // Load theme from localStorage
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") setDarkMode(true);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const handleDeleteAccount = () => {
    const confirmed = window.confirm(
      "Are you sure you want to delete your account? This cannot be undone."
    );
    if (confirmed) {
      // Add actual deletion logic here
      console.log("Account deleted");
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6 rounded-lg shadow bg-white dark:bg-gray-900 dark:text-white space-y-6">
      <h2 className="text-2xl font-bold">Settings</h2>

      {/* Theme Switcher */}
      <div className="flex justify-between items-center">
        <span>Dark Mode</span>
        <input
          type="checkbox"
          checked={darkMode}
          onChange={() => setDarkMode(!darkMode)}
          className="w-5 h-5"
        />
      </div>

      {/* Language Selector */}
      <div className="flex flex-col">
        <label className="mb-1 font-medium">Language</label>
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="border rounded p-2 dark:bg-gray-800"
        >
          <option value="en">English</option>
          <option value="sw">Swahili</option>
          <option value="fr">French</option>
        </select>
      </div>

      {/* Delete Account */}
      <div>
        <button
          onClick={handleDeleteAccount}
          className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
        >
          Delete Account
        </button>
      </div>
      <div className="pt-4 border-t">
        <button
          onClick={() => {
            alert("Changes saved successfully!");
          }}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
}
