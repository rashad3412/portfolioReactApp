import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa"; // React-icons library

function ContactPage() {
  return (
    <div className="bg-darkGray text-white py-4">
      {/* Main Contact Section */}
      <div className="w-11/12 mx-auto  border border-stone-800  p-8 rounded-lg">
        <h1 className="text-3xl font-mono mb-6 text-center tracking-widest text-beige">
          Get in Touch
        </h1>

        {/* Links Section */}
        <div className="flex flex-col items-center space-y-6">
          {/* LinkedIn Link */}
          <a
            href="https://www.linkedin.com/in/rashad-edwards-software-developer/"
            target="_blank"
            rel="noopener noreferrer"
            className=" font-mono flex items-center space-x-3 bg-stone-800 p-3 rounded-full text-lg hover:bg-stone-600 transition border border-beige"
          >
            <FaLinkedin className="text-xl" />
            <span>Connect on LinkedIn</span>
          </a>

          {/* GitHub Link */}
          <a
            href="https://github.com/rashad3412"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono flex items-center space-x-3 bg-stone-800 p-3 rounded-full text-lg hover:bg-stone-600 transition border border-beige"
          >
            <FaGithub className="text-xl" />
            <span>View My GitHub</span>
          </a>
        </div>

        {/* Decorative Divider */}
        <div className="my-10 border-t border-stone-700"></div>

        {/* CTA Section */}
        <div className="text-center">
          <a
            href="/softwareDeveloperRes1.pdf" // Replace with the actual path to your PDF
            target="_blank" // Opens the PDF in a new tab
            rel="noopener noreferrer" // Improves security by preventing access to the `window.opener` object
            className="inline-block px-6 py-2 bg-stone-300 text-black font-medium rounded-lg hover:bg-beige transition"
          >
            View My Resume
          </a>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
