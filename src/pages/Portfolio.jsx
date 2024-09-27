import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import Hero2 from '../components/Hero2'; 
import '/src/index.css';

const pigskinPachongaProject = {
  title: 'Pigskin Pachonga',
  description: 'Fantasy Football Team Generator',
  image: 'src/assets/pigskin-pachonga.PNG',
  link: '', // Add a link if applicable
};


export default function Portfolio() {
  const projects = [
    {
      title: 'E-commerce Website',
      description: 'Dead Face Clothing',
      image: 'src/assets/deadxface-home.PNG', 
      link: '', 
    },
    {
      title: 'SLC Events',
      description: 'Local Event Search',
      image: 'src/assets/SLC-img.PNG',
      link: 'https://keith-godfrey.github.io/SLC-Events/',
    },
  ]

  return (
    <>
    <Hero2 project={pigskinPachongaProject} />
    <CardGroup>
      {projects.map((project, index) => (
        <a 
          key={index} 
          href={project.link || '#'} 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ textDecoration: 'none', color: 'inherit' }} // Ensures text styling remains consistent
        >
          <Card style={{ margin: '16px' }}>
            <Card.Img variant="top" src={project.image} alt={project.title} />
            <Card.Body>
              <Card.Title>{project.title}</Card.Title>
              <Card.Text>{project.description}</Card.Text>
            </Card.Body>
          </Card>
        </a>
      ))}
    </CardGroup>
    </>
  );
}