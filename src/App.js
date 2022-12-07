import React from "react";
import { Route, Routes } from "react-router-dom";

// import aos
import Aos from "aos";
import "aos/dist/aos.css";

// import components
import Hero from "./components/Hero";
import Cards from "./components/Cards";
import About from "./components/About";
import Features from "./components/Features";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";

const App = () => {
  //aos init
  Aos.init({
    duration: 1800,
    offset: 100,
  });
  return (
    <div className="overflow-hidden">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Cards />
              <About />
              <Features />
              <Contact />
              <Footer />
            </>
          }
        />
        <Route
          path="/gallery"
          element={
            <>
              <Gallery />
              <Footer />
            </>
          }
        />
      </Routes>
      <div className="h-[100px]"></div>;
    </div>
  );
};

export default App;
