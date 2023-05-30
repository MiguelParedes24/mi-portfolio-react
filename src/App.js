import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Skills from "./components/Skills/Skills";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="contenedor-app">
      <Navbar />
      <main className="body-app">
        <Banner />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <br />
      <Footer />
    </div>
  );
}

export default App;
