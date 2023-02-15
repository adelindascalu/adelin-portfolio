import { Outlet, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import ContactForm from "./components/Contact/ContactForm";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import ProjectsSection from "./components/ProjectsSection/Projects";
import TechStack from "./components/TechStack/TechStack";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <TechStack />
      <ProjectsSection />
      <ContactForm />
      <Footer />
    </>
  );
}

export default App;
