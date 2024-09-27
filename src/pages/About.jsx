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
              <br />
              Hi, I'm Keith Godfrey, a passionate and dedicated full-stack developer building robust, scalable applications. With experience across both frontend and backend development, I enjoy creating seamless, user-friendly experiences while ensuring efficient functionality behind the scenes.
              <br />
              <br />
              My journey in development has been shaped by diverse roles, from customer relations at American Airlines to running my own business. Each position has contributed to my ability to collaborate effectively, solve problems creatively, and deliver results. I pride myself on staying up-to-date with the latest industry trends, constantly learning new technologies, and refining my skills.
              <br />
              Some of the technologies I work with include:
              <br /><br />
              <ul>
                <li>Frontend: HTML, CSS, JavaScript (React, Angular, Vue)</li>
                <li>Backend: Node.js, Express, Python (Django, Flask), Java</li>
                <li>Databases: MySQL, MongoDB, PostgreSQL</li>
                <li>Version Control & DevOps: Git</li>
              </ul>
              In every project, I strive to combine clean code with an eye for detail, ensuring that the final product not only works flawlessly but also provides an excellent user experience.

              When I'm not coding, you'll find me exploring new places, staying active, and continuously learning. I look forward to bringing your ideas to life through code and collaborating on innovative projects!
            </p>
          </div>
        </div>
      </section>
    </>
  );

}