/*
 HomePage jsx file 
Highlights what the purpose of page
*/


import React from "react";
import img from "../assets/allBlack.jpg";

function HomePage() {
  return (
    <main className="pt-1 w-full flex flex-col items-center md:flex-row-reverse md:justify-center md:items-start md:gap-6 bg-darkGray md:pb-9">
      {/* Image Section */}
      <div className="relative w-2/4 mb-2 pt-2 md:w-1/3 md:mb-0 border-4 border-beige bg-black p-2 mt-28 shadow-md shadow-slate-600">
        <img src={img} alt="blackImage" className="w-full" />
      </div>

      {/* Text Section */}
      <div className="  text-center md:text-left md:w-1/2 md:mt-36">
        <h1 className="text-4xl text-stone-200 font-thin font-sans mb-3 md:text-6xl filter blur-[0.5px]">
          Web Designer & Developer
        </h1>

        {/* // Adds padding
          and a border for small screens, removes the border at 768px
          (md:border-none). */}

        <p className="font-sans text-2xl w-10/12 p-2  mx-auto mt-3  text-beige leading-9 border border-stone-700 font-extralight tracking-widest rounded mb-6 md:border-none md:pt-0 md:w-full md:mt-6 md:font-medium">
          "Imagination, design, and innovation brought to life."
        </p>
      </div>
    </main>
  );
}

export default HomePage;
