   import React from 'react';
   import '../styles/hero2.css';

   function Hero2({ project }) {
     return (
       <div className="hero2-container" style={{ backgroundColor: '#ffb510' }}>
         {/* <h1>{project.title}</h1>
         <p>{project.description}</p> */}
         <img 
          //  src={project.image} 
          //  alt={project.title} 
          //  style={{ justifyContent: "flex-end", width: '350px', height: '350px', borderRadius: '50%', margin: '0' }}
         />
         {project.link && (
           <a href={project.link} target="_blank" rel="noopener noreferrer">
             Visit Project
           </a>
         )}
       </div>
     );
   }

   export default Hero2;