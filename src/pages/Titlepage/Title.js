import React from 'react';
import "./title.css";
import { motion } from "framer-motion";


const Title = () => {
  return (
    <div className='titleIntro' id='title'>
      <div className='grid'>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
            delay: 1,
            ease: [0, 0.71, 0.2, 1.01]
          }}
          className='introName'>Hello ...
          I am <h1>Pratiksha Surwade</h1>
          {/* <br></br>          <br></br> */}

          <b>B.Tech | M.Tech</b>
          <br></br>

          <strong>Full Stack Developer</strong>
        </motion.div>
        <div>

        </div>
      </div>
    </div>
  )
}

export default Title

/**
 * 
 * 
        <div className='projectImages'>
          <div className='projectImageGrid1'></div>
          <div className='projectImageGrid2'></div>
          <div className='projectImageGrid3'><span className='projectImageGrid3Item'></span><img src="./Apple iPhone 11.png"></img></div>

        </div> 
       Titldcksjdncksdnckjnsdkcnskdncksdckjnsdkcjnskd<br></br>e
        Titldcksjdncksdnckjnsdkcnskdncksdckjnsdkcjnskd<br></br>eTitldcksjdncksdnckjnsdkcnskdncksdckjnsdkcjnskd<br></br>eTitldcksjdncksdnckjnsdkcnskdncksdckjnsdkcjnskd<br></br>eTitldcksjdncksdnckjnsdkcnskdncksdckjnsdkcjnskd<br></br>e

        Titldcksjdncksdnckjnsdkcnskdncksdckjnsdkcjnskd<br></br>e
        Titldcksjdncksdnckjnsdkcnskdncksdckjnsdkcjnskd<br></br>eTitldcksjdncksdnckjnsdkcnskdncksdckjnsdkcjnskd<br></br>e
        Titldcksjdncksdnckjnsdkcnskdncksdckjnsdkcjnskd<br></br>e
        Titldcksjdncksdnckjnsdkcnskdncksdckjnsdkcjnskd<br></br>e
        Titldcksjdncksdnckjnsdkcnskdncksdckjnsdkcjnskd<br></br>e
        Titldcksjdncksdnckjnsdkcnskdncksdckjnsdkcjnskd<br></br>e
        Titldcksjdncksdnckjnsdkcnskdncksdckjnsdkcjnskd<br></br>e
        Titldcksjdncksdnckjnsdkcnskdncksdckjnsdkcjnskd<br></br>e
        Titldcksjdncksdnckjnsdkcnskdncksdckjnsdkcjnskd<br></br>e
        Titldcksjdncksdnckjnsdkcnskdncksdckjnsdkcjnskd<br></br>e
        Titldcksjdncksdnckjnsdkcnskdncksdckjnsdkcjnskd<br></br>e

        Titldcksjdncksdnckjnsdkcnskdncksdckjnsdkcjnskd<br></br>eTitldcksjdncksdnckjnsdkcnskdncksdckjnsdkcjnskd<br></br>e
        Titldcksjdncksdnckjnsdkcnskdncksdckjnsdkcjnskd<br></br>e
        Titldcksjdncksdnckjnsdkcnskdncksdckjnsdkcjnskd<br></br>e
        Titldcksjdncksdnckjnsdkcnskdncksdckjnsdkcjnskd<br></br>e
        Titldcksjdncksdnckjnsdkcnskdncksdckjnsdkcjnskd<br></br>e
        Titldcksjdncksdnckjnsdkcnskdncksdckjnsdkcjnskd<br></br>e
        Titldcksjdncksdnckjnsdkcnskdncksdckjnsdkcjnskd<br></br>e
        Titldcksjdncksdnckjnsdkcnskdncksdckjnsdkcjnskd<br></br>e
        Titldcksjdncksdnckjnsdkcnskdncksdckjnsdkcjnskd<br></br>e

        Titldcksjdncksdnckjnsdkcnskdncksdckjnsdkcjnskd<br></br>e
        Titldcksjdncksdnckjnsdkcnskdncksdckjnsdkcjnskd<br></br>e
        Titldcksjdncksdnckjnsdkcnskdncksdckjnsdkcjnskd<br></br>e
        Titldcksjdncksdnckjnsdkcnskdncksdckjnsdkcjnskd<br></br>e
        Titldcksjdncksdnckjnsdkcnskdncksdckjnsdkcjnskd<br></br>e
        Titldcksjdncksdnckjnsdkcnskdncksdckjnsdkcjnskd<br></br>e
        Titldcksjdncksdnckjnsdkcnskdncksdckjnsdkcjnskd<br></br>e
        Titldcksjdncksdnckjnsdkcnskdncksdckjnsdkcjnskd<br></br>e
        Titldcksjdncksdnckjnsdkcnskdncksdckjnsdkcjnskd<br></br>e
        Titldcksjdncksdnckjnsdkcnskdncksdckjnsdkcjnskd<br></br>e
        Titldcksjdncksdnckjnsdkcnskdncksdckjnsdkcjnskd<br></br>e
        Titldcksjdncksdnckjnsdkcnskdncksdckjnsdkcjnskd<br></br>e
        Titldcksjdncksdnckjnsdkcnskdncksdckjnsdkcjnskd<br></br>e

        Titldcksjdncksdnckjnsdkcnskdncksdckjnsdkcjnskd<br></br>e
        Titldcksjdncksdnckjnsdkcnskdncksdckjnsdkcjnskd<br></br>e
        Titldcksjdncksdnckjnsdkcnskdncksdckjnsdkcjnskd<br></br>e
        Titldcksjdncksdnckjnsdkcnskdncksdckjnsdkcjnskd<br></br>e
        Titldcksjdncksdnckjnsdkcnskdncksdckjnsdkcjnskd<br></br>e
        Titldcksjdncksdnckjnsdkcnskdncksdckjnsdkcjnskd<br></br>e
        Titldcksjdncksdnckjnsdkcnskdncksdckjnsdkcjnskd<br></br>e
        Titldcksjdncksdnckjnsdkcnskdncksdckjnsdkcjnskd<br></br>e
        Titldcksjdncksdnckjnsdkcnskdncksdckjnsdkcjnskd<br></br>e
        Titldcksjdncksdnckjnsdkcnskdncksdckjnsdkcjnskd<br></br>e
        Titldcksjdncksdnckjnsdkcnskdncksdckjnsdkcjnskd<br></br>e
        Titldcksjdncksdnckjnsdkcnskdncksdckjnsdkcjnskd<br></br>e
        Titldcksjdncksdnckjnsdkcnskdncksdckjnsdkcjnskd<br></br>e
        Titldcksjdncksdnckjnsdkcnskdncksdckjnsdkcjnskd<br></br>e

        Titldcksjdncksdnckjnsdkcnskdncksdckjnsdkcjnskd<br></br>e
        Titldcksjdncksdnckjnsdkcnskdncksdckjnsdkcjnskd<br></br>e
        Titldcksjdncksdnckjnsdkcnskdncksdckjnsdkcjnskd<br></br>e

        Titldcksjdncksdnckjnsdkcnskdncksdckjnsdkcjnskd<br></br>e

        Titldcksjdncksdnckjnsdkcnskdncksdckjnsdkcjnskd<br></br>e
        Titldcksjdncksdnckjnsdkcnskdncksdckjnsdkcjnskd<br></br>e
        Titldcksjdncksdnckjnsdkcnskdncksdckjnsdkcjnskd<br></br>e
        Titldcksjdncksdnckjnsdkcnskdncksdckjnsdkcjnskd<br></br>e

 */