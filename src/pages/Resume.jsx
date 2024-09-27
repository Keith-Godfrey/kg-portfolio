
import React from 'react';

export default function Resume() {
  return (
    <div className="resume-container">
      <h2>Resume</h2>
      
      {/* Work Experience */}
      <section className="work-experience">
        <h3>Work Experience</h3>
        <div className="job">
          <h4>Job Title</h4>
          <p>Company Name, Location</p>
          <p>Duration</p>
          <ul>
            <li>Responsibility or achievement 1</li>
            <li>Responsibility or achievement 2</li>
          </ul>
        </div>
        {/* Add more job entries as needed */}
      </section>

      {/* Education */}
      <section className="education">
        <h3>Education</h3>
        <div className="school">
          <h4>Degree</h4>
          <p>School Name, Location</p>
          <p>Year of Graduation</p>
        </div>
        {/* Add more education entries as needed */}
      </section>

      {/* Skills */}
      <section className="skills">
        <h3>Skills</h3>
        <ul>
          <li>Skill 1</li>
          <li>Skill 2</li>
          <li>Skill 3</li>
          {/* Add more skills as needed */}
        </ul>
      </section>

      {/* Projects */}
      <section className="projects">
        <h3>Projects</h3>
        <div className="project">
          <h4>Project Title</h4>
          <p>Description of the project and your role in it.</p>
          <a href="project-link" target="_blank" rel="noopener noreferrer">View Project</a>
        </div>
        {/* Add more project entries as needed */}
      </section>
    </div>
  );
}