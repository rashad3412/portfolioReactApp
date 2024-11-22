import React from "react";
import Header from "./components/Header";
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import ProjectPage from "./pages/Projects";
import ContactPage from "./pages/Contact";

function App() {
  return (
    <div className="bg-neutral-900 min-h-screen text-white">
      <Header />
      <main>
        <section id="home">
          <HomePage />
        </section>
        {/* <section id="about">
          <AboutPage />
        </section> */}
        {/* <section id="projects">
          <ProjectPage />
        </section> */}
        {/* <section id="contact">
          <ContactPage />
        </section> */}
      </main>
    </div>
  );
}

export default App;
