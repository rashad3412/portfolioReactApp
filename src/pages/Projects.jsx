import React from "react";

function ProjectPage() {
  return (
    <div className="min-h-screen bg-darkGray p-6">
      {/* Page Title */}
      <h1 className=" font-mono text-center text-xl font-light  text-stone-200 mt-4 mb-6 racking-widest border-b border-stone-800">
        My Digital Playground
      </h1>

      {/* Project Section */}
      <div className="w-11/12 bg-neutral-900 border border-stone-800 mx-auto p-6 rounded-lg shadow-md">
        {/* Project Title */}
        <h3 className="text-2xl font-light text-beige mb-4">iNibble</h3>

        {/* Project Description */}
        <p className="text-stone-300 text-sm leading-6">
          iNibble is a web application that empowers users to make informed food
          choices by providing insightful data about the nutritional impact of
          various foods. It's designed to help users track and understand how
          their meals affect their overall health.
        </p>

        {/* Action Buttons */}
        <div className="flex justify-start gap-4 mt-6">
          {/* GitHub Link */}
          <a
            href="https://github.com/rashad3412/iNibble"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-beige text-black text-sm font-semibold rounded hover:bg-opacity-90 shadow transition"
          >
            GitHub Repo
          </a>
          {/* Live Site Link */}
          <a
            href="https://inibble.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-beige text-black text-sm font-semibold rounded hover:bg-opacity-90 shadow transition"
          >
            Live Site
          </a>
        </div>
      </div>
      {/* Project Section */}
      <div className="w-11/12 bg-neutral-900 border border-stone-800 mx-auto p-6 rounded-lg shadow-md mt-5">
        {/* Project Title */}
        <h3 className="text-2xl font-light text-beige mb-4">CookEmChef</h3>

        {/* Project Description */}
        <p className="text-stone-300 text-sm leading-6">
          Cook Em Chef is a mobile-first 2D game where players control a chef
          that shoots at falling food items. The game is built entirely using
          vanilla JavaScript, HTML, and CSS, and is playable on both mobile and
          desktop devices with either touch or keyboard controls.
        </p>

        {/* Action Buttons */}
        <div className="flex justify-start gap-4 mt-6">
          {/* GitHub Link */}
          <a
            href="https://github.com/rashad3412/shootEmChef"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-beige text-black text-sm font-semibold rounded hover:bg-opacity-90 shadow transition"
          >
            GitHub Repo
          </a>
          {/* Live Site Link */}
          <a
            href="https://cookemchef.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-beige text-black text-sm font-semibold rounded hover:bg-opacity-90 shadow transition"
          >
            Live Site
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectPage;
