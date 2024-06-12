import './App.css';
import Contact from './pages/Contacts/Contact';
import Educationpage from './pages/Education/Educationpage';
import Navbar from './pages/Navbar/Navbar.js';
import  Title  from './pages/Titlepage/Title.js';
import Projects from './pages/projects/Projects';
import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";


function App() {
  const { scrollYProgress } = useScroll();



  return (
    <div className="App">
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
      <Navbar />
      <Title />
      <Projects />
      <Educationpage />
      <Contact />
    </div>
  );
}

export default App;
