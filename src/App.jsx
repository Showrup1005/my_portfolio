import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Research from "./components/Research";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";

function App() {
  return (
    <div className="bg-slate-950 text-white">
      <Navbar />

      <main>
        <Hero />
        <Skills />
        <Projects />
        <Research />
        <Contact />
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;