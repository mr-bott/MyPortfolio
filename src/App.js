
import './App.css';
import React from "react"
import Header from "./components/Header/index"
import Home from "./components/Home/index"
import About from "./components/About"
import Skills from "./components/Skills"
import Services from "./components/Services"
import Projects from './components/Projects';
import Qualification from './components/Qualification'
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollUp from './components/ScrollUp';
function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Services />
        <Projects/>
        <Qualification />
        <Contact/>
        <Footer/>
        <ScrollUp/>
      </main>
    </>
  );
}

export default App;
