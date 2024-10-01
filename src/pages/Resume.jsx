import React from 'react';
import '../styles/resume.css';

// importing resume from the public folder
import ResumePage from '../assets/kg-resume.pdf';

export default function Resume() {
    return (
      <div className='resume'>
      <embed src={ResumePage} type="application/pdf" width="100%" height="600px" />
      <a href={ResumePage} download="kg-resume.pdf">Download Resume</a>
      </div>
    );
  }