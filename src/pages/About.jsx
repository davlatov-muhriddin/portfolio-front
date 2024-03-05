import React from "react";
import Skills from "../components/Skills";

function About() {
  return (
    <section className="about">
      <h2>Hi i am Davlatov Muhriddin</h2>
      <p>
        I am from Uzbekistan region Bukhara district Peshku. I am a mern stack
        developer. I was born in 2005 in Peshku district. I studied up to the
        9th grade in the specialized public school No. 9 in this district. I
        studied the 10th and 11th grades in vocational school No. 1 in this
        district. I started learning programming from YouTube, then I studied
        front-end for 6 months at the ProUnity training center in Bukhara. I
        learned back-end programming from Samar Badriddinov's sammi.ac platform
      </p>
      <button>View Resume</button>

      <Skills />
    </section>
  );
}

export default About;
