import React from 'react';
import HeroSection from './HeroSection';
import ProjectsSection from './ProjectsSection';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <HeroSection />
      <ProjectsSection />
    </div>
  );
};

export default LandingPage;