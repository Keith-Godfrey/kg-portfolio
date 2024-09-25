import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';

export default function Portfolio() {
  const projects = [
    {
      title: 'E-commerce Website',
      description: 'Dead Face Clothing',
      image: 'https://via.placeholder.com/150', // Replace with your image URL
      link: '', // Add a link if applicable
    },
    {
      title: 'SLC Events',
      description: 'Events',
      image: 'src/assets/SLC-img.PNG',
      link: 'https://keith-godfrey.github.io/SLC-Events/',
    },
    {
      title: 'Project 3',
      description: 'Description for project 3',
      image: 'https://via.placeholder.com/150', // Replace with your image URL
      link: '', // Add a link if applicable
    },
  ];

  return (
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
  );
}