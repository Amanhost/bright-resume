import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Create Professional Resumes",
          "Build Stunning CVs in Minutes",
          "Enhance Your Career Profile",
          "Showcase Your Skills & Experience",
          "Customizable Resume Templates",
          "Generate PDF Resumes",
          "Perfect for Job Seekers & Professionals",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
        textColor: "#8b3dff",
      }}
    />
  );
}

export default Type;
