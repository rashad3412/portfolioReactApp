import React from "react";
import img from "../assets/allBlack.jpg";

function HomePage() {
  return (
    <main className="pt-1 w-full flex flex-col items-center md:flex-row-reverse md:justify-center md:items-start md:gap-6">
      {/* Image Section */}
      <div className="relative w-2/4 mb-2 pt-2 md:w-1/3 md:mb-0 border-4 border-beige bg-black p-2 mt-28">
        <img src={img} alt="blackImage" className="w-full" />
      </div>

      {/* Text Section */}
      <div className="  text-center md:text-left md:w-1/2 md:mt-36">
        <h1 className="text-4xl text-beige font-thin font-sans mb-3 md:text-6xl filter blur-[0.5px]">
          Web Designer & Developer
        </h1>

        {/* // Adds padding
          and a border for small screens, removes the border at 768px
          (md:border-none). */}

        <p className="font-mono w-10/12 p-2  mx-auto mt-3  text-beige leading-6 border border-stone-700 md:border-none md:pt-0 md:w-full md:mt-6 md:font-medium">
          Welcome to my portfolio! I'm Rashad Edwards, a passionate Web
          Developer. With premium design and innovative skills, I’m here to
          bring to life the things we imagine but can't yet see!
        </p>
      </div>
    </main>
  );
}

export default HomePage;
