// Import Components
import Navbar from "./components/common/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import MySkills from "./sections/MySkills";
import Project from "./sections/Project";
import Contact from "./sections/Contact";
import Footer from "./components/common/Footer";

function App() {
  return (
    <main className="py-20 px-6 lg:px-40 overflow-hidden lg:bg-red-500 xl:bg-color-light">
      <Navbar />
      <Hero />
      <About />
      <MySkills />
      <Project />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
