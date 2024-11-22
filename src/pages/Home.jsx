import React from "react";
import img from "../assets/allBlack.jpg";

function HomePage() {
  return (
    <main className="pt-1 w-full flex flex-col justify-center items-center">
      <img src={img} alt="blackImage" className="w-2/4 mb-4 pt-20" />
      <h1 className="text-center text-beige font-medium text-2xl w-72 font-mono ">
        Web Designer & Developer
      </h1>
      <p className=" w-3/4 mt-3 p-1 text-center text-beige leading-7 border border-stone-700">
        Welcome to my portfolio! I'm Rashad Edwards, a passionate Web Developer.
        With premium design and innovative skills, I’m here to bring to life the
        things we imagine but can't yet see!
      </p>
    </main>
  );
}

export default HomePage;
