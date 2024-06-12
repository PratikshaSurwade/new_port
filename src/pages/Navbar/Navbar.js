import React from 'react';
import { useEffect, useState } from "react";
import "./navbar.css";
import { Link } from 'react-scroll';
import { motion } from "framer-motion";


const Navbar = () => {

  const [headerShadow, setHeaderShadow] = useState(false)


  const headerVariants = {
    hidden: {
      opacity: 0,
      y: -20,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 140,
      },
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        delay: 1.5,
      },
    },
  };
  
    useEffect(() => {
      function handleScroll() {
        if (window.scrollY > 0) {
          setHeaderShadow("rgb(8, 8, 8) 0px 4px 6px -1px")
        } else {
          setHeaderShadow("none");
        }
      }
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
    
  return (
    <motion.div
    variants={headerVariants}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.25 }}
    style={{boxShadow: headerShadow}}
   className='navBar'>
        <div className='left'>
            Pratiksha
        </div>
        <div className='right'>
            <Link to="title" spy={true} smooth={true} className='navbarItems'>Home</Link>
            <Link to="projects" spy={true} smooth={true} className='navbarItems'>Projects</Link>
            <Link to="education" spy={true} smooth={true} className='navbarItems'>Education</Link>
            <Link to="contact" spy={true} smooth={true} className='navbarItems'>Contact</Link>
        </div>
    </motion.div>
  )
}

export default Navbar