import React from 'react';
import Hero1 from "../components/Hero1";
import '/src/index.css';

export default function About() {
  return (
    <>
      <Hero1 />
      <section>
        <div className='about-container'>
          <div className='about-item'>
            <h2>About Me</h2>
            <p>
              My journey in software development began when starting the edX bootcamp through Arizona State University,
              where I discovered my love for creating solutions that will help businesses.
              <br />
              Outside of school, you can find me outdoors finding roads less traveled with my Suzuki. I believe in working hard
              and always keep learning. Then enjoy the views from those roads less traveled.
            </p>
          </div>
        </div>
      </section>
    </>
  );

}