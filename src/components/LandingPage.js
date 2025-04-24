import React from 'react';
import ProjectsSection from './ProjectsSection';
import './LandingPage.css';
import HeroSection from './HeroSection';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div data-scroll-section>
        <HeroSection />
        <ProjectsSection />
      </div>
    </div>
  );
};

export default LandingPage;