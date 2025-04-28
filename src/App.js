// App.js
import React from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Experiance from "./components/Experiance";
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";
import { motion } from "framer-motion";
import { CircleIndicator } from "./motion/CircleIndicator";

function App() {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      {/* Background */}
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_20%,rgba(255,105,180,0.3),rgba(255,0,0,0))]" />
      </div>

      {/* Circle Scroll Indicator */}
      <CircleIndicator />

      {/* Main Content */}
      <motion.div className="container mx-auto px-8">
        <NavBar />
        <Hero />
        <About />
        <Experiance />
        <Projects />
        <ContactMe />
      </motion.div>
    </div>
  );
}

export default App;
