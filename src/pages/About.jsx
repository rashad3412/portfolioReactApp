import React from "react";

function AboutPage() {
  return (
    <div>
      <div className="w-11/12 h-full bg-darkGray border border-stone-800 mt-6 mx-auto rounded">
        <h1 className="font-mono mt-2 pl-1 text-beige text-xs font-bold tracking-widest ">
          Rashad Edwards
        </h1>
        <p className="font-sans mt-4 text-stone-200 text-l tracking-widest font-thin pl-3">
          Delivering Premium Web Designs and Development
        </p>
        <p className="pl-3 text-beige tracking-wide mt-4 font-light">
          Passionate about crafting digital experiences, I blend technical
          expertise with creative flair. From web development to culinary arts,
          I find inspiration in every aspect of life. Explore my portfolio to
          see my latest projects.
        </p>
        <div className="mt-6 pl-3 mb-5">
          <h2 className="text-beige text-sm font-bold tracking-widest mb-4">
            Milestones
          </h2>
          <div className="relative">
            <div className="border-l-2 border-stone-700 pl-4">
              <div className="mb-4">
                <div className="text-beige text-xs font-medium">2023</div>
                <div className="text-stone-300 text-sm mt-1">
                  Graduated from Fullstack Academy
                </div>
              </div>
              <div className="mb-4">
                <div className="text-beige text-xs font-medium">2022</div>
                <div className="text-stone-300 text-sm mt-1">
                  Built my first React.js project
                </div>
              </div>
              <div>
                <div className="text-beige text-xs font-medium">2020</div>
                <div className="text-stone-300 text-sm mt-1">
                  Started learning web development
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 pl-3">
          <h2 className="text-beige text-sm font-bold tracking-widest mb-2">
            Technical Skills
          </h2>
          <div className="mb-2">
            <span className="text-xs text-stone-300">HTML/CSS</span>
            <div className="w-full bg-stone-700 rounded h-2 mt-1">
              <div className="bg-beige h-2 rounded w-4/5 transition-all duration-500"></div>
            </div>
          </div>
          <div className="mb-2">
            <span className="text-xs text-stone-300">JavaScript</span>
            <div className="w-full bg-stone-700 rounded h-2 mt-1">
              <div className="bg-beige h-2 rounded w-3/4 transition-all duration-500"></div>
            </div>
          </div>
          <div className="mb-2">
            <span className="text-xs text-stone-300">React</span>
            <div className="w-full bg-stone-700 rounded h-2 mt-1">
              <div className="bg-beige h-2 rounded w-3/5 transition-all duration-500"></div>
            </div>
          </div>
          <div className="mb-2">
            <span className="text-xs text-stone-300">Tailwind</span>
            <div className="w-full bg-stone-700 rounded h-2 mt-1">
              <div className="bg-beige h-2 rounded w-2/4 transition-all duration-500"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
