import React from "react";
import Typewriter from "typewriter-effect";

const Type = () => {
    return (
        <Typewriter
          options={{
            strings: [
              "Full-Stack Web Developer",
              "Java & Python Programmer",
              "Microsoft Learn Student Ambassador",
              "Competitive Programmer & Problem Solver",
              "Passionate About AI & Web Technologies"
            ],
            autoStart: true,
            loop: true,
            deleteSpeed: 50,
          }}
        />
      )
}

export default Type;
