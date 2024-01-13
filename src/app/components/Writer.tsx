import React from 'react'
import Typewriter from "typewriter-effect";
const Writer:any = () => {
  return (
    <Typewriter
      options={{
        strings: [
          "Full Stack Web Developer",
          "ReactJs Developer",
          "NextJs Developer",
          "MERN Stack Developer",
        ],
              autoStart: true,
              devMode: true,
              skipAddStyles: false,
        // pauseFor:'4',
              loop: true,
        delay:140,
              deleteSpeed: 80,
        
      }}
    />
  )
}

export default Writer