import React, { useEffect } from 'react';
import './ProjectsSection.css';
import { Link } from 'react-router-dom';

const ProjectsSection = () => {
  const projectImages = [
    "https://images.unsplash.com/photo-1742995917580-becb015f088d?q=80&w=2240&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1674065305877-cb9e914a1993?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHx8",
    "https://images.unsplash.com/photo-1739911013984-8b3bf696a182?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1741144806007-2a6dd505230a?q=80&w=2800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1743260671521-603dce521b6a?q=80&w=3088&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  ];

  return (
    <section className="projects-section">
      <div className="image-container">
        <img src="https://ynmpuwsryqdnjxhesexm.supabase.co/storage/v1/object/public/brand-assets//Varlicircular1920px.png" alt="Brand Asset" className="rotating-image" />
      </div>
      {projectImages.map((image, index) => (
        <div key={index} className="project-card">
          <img src={image} alt={`Project ${index + 1}`} className="project-image" />
          <div className="project-actions-wrapper">
            <div className="project-name-scroll">Project {index + 1}</div>
            <Link to={`/project/${index + 1}`} className="open-case-study">Open Case Study</Link>
            <div className="project-tag">Tag {index + 1}</div>
          </div>
        </div>
      ))}
      <div className='notes'>
          Designed and Developed by Yashraj Patil
          </div>
    </section>
  );
};


export default ProjectsSection;