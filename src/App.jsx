import CursorFluidCanvas from "./components/CursorFluidCanvas";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Education from "./components/Education";
import Proficiencies from "./components/Proficiencies";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <CursorFluidCanvas />
      <Navbar />
      <div className="relative z-20 bg-black text-white font-funky pt-16">
        <section id="hero">
          <Hero />
        </section>

        <section id="education">
          <Education />
        </section>

        <section id="proficiencies">
          <Proficiencies />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="experience">
          <Experience />
        </section>

        <Footer />
      </div>
    </>
  );
}

export default App;
