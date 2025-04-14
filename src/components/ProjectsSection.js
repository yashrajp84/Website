import React from 'react';
import './ProjectsSection.css';

const ProjectsSection = () => {
  return (
    <section className="projects-section">
      <div className="image-container">
        <img
          src="https://ynmpuwsryqdnjxhesexm.supabase.co/storage/v1/object/public/brand-assets//Varlicircular1920px.png"
          alt="Design Pattern"
          className="rotating-image"
        />
      </div>
      <div className="project-card">
        <img src="https://images.unsplash.com/photo-1742995917580-becb015f088d?q=80&w=2240&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Project 1" className="project-image" />
        <div className="project-actions-wrapper">
        <div className="project-name">CONTINUE CARE</div>
        <div className="open-case-study">Open Case Study</div>
        <div className="project-tag">SERVICE DESIGN</div>
        </div>
      </div>
      <div className="project-card">
        <img src="https://plus.unsplash.com/premium_photo-1674065305877-cb9e914a1993?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHx8" alt="Project 2" className="project-image" />
        <div className="project-actions-wrapper">
        <div className="project-name">Project 2</div>
        <div className="open-case-study">Open Case Study</div>
        <div className="project-tag">Tag 2</div>
        </div>
      </div>
      <div className="project-card">
        <img src="https://images.unsplash.com/photo-1739911013984-8b3bf696a182?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Project 3" className="project-image" />
        <div className="project-actions-wrapper">
        <div className="project-name">Project 3</div>
        <div className="open-case-study">Open Case Study</div>
        <div className="project-tag">Tag 3</div>
        </div>
      </div>
      <div className="project-card">
        <img src="https://images.unsplash.com/photo-1741144806007-2a6dd505230a?q=80&w=2800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Project 4" className="project-image" />
        <div className="project-actions-wrapper">
        <div className="project-name">Project 4</div>
        <div className="open-case-study">Open Case Study</div>
        <div className="project-tag">Tag 4</div>
        </div>
      </div>
      <div className="project-card">
        <img src="https://images.unsplash.com/photo-1743260671521-603dce521b6a?q=80&w=3088&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Project" className="project-image" />
        <div className="project-actions-wrapper">
          <div className="project-name">UI/UX DESIGN</div>
          <div className="open-case-study">OPEN CASE STUDY</div>
          <div className="project-tag">CONTINUE CARE</div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;