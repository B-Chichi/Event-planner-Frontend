import React from "react";

const devs = [
  { name: "Maureen Nkirote", role: "Database & API Engineer" },
  { name: "Bildad Ereggae", role: "Backend Developer" },
  { name: "Carol Kosgei", role: "UI/UX Designer" },
  { name: "Jeff Mbithi", role: "Full Stack Developer" },
  { name: "Brian Bett", role: "Frontend Developer" },
];

export default function AboutUs() {
  return (
    <section className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-white px-6 py-16">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6">About Us</h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
          At Event Planner, we believe that great moments deserve to be
          beautifully crafted. We're a passionate team of technologists and
          creatives building tools to help communities celebrate, connect, and
          thrive.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {devs.map((dev, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-md text-center p-6"
          >
            <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gray-200 dark:bg-gray-700">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Windows_10_Default_Profile_Picture.svg/2048px-Windows_10_Default_Profile_Picture.svg.png"
                alt="profile picture"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              {dev.name}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {dev.role}
            </p>
          </div>
        ))}
      </div>

      <div className="text-center mt-20 text-sm text-gray-500 dark:text-gray-400">
        Built with care, code, and lots of coffee ☕
      </div>
    </section>
  );
}
