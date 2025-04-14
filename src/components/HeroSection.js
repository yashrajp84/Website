import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="header">
        <h1 className="name-title">YASHRAJ PATIL</h1>
        <nav className="nav-links">
          <a href="https://www.linkedin.com/in/yashraj-patil84/" target="_blank" rel="noopener noreferrer" className="nav-link">LINKEDIN</a>
          <a href="mailto:yashrajp84@gmail.com" className="nav-link">EMAIL</a>
          <a href="#connect" className="nav-link">DRIBBLE</a>
          <a href="/resume.pdf" download className="nav-link download-resume">DOWNLOAD RESUME</a>
        </nav>
      </div>

      <div className="intro">
        <p className="intro-text">
          Hi, I'm <em>Yashraj Patil</em> a passionate UI/UX designer crafting
          digital experiences that bridge the gap between human needs and
          technological possibilities. With a foundation in visual communication,
          I transform complex challenges into intuitive, impactful solutions.
        </p>
      </div>

      <div className="design-journey">
        <div className="row-wrapper">
          <div className="role">Web Designer</div>
          <div className="year-company-wrapper">
            <div className="year">2021</div>
            <div className="company">KraftySocio</div>
          </div>
        </div>
        <div className="row-wrapper">
          <div className="role">UI/UX Designer</div>
          <div className="year-company-wrapper">
            <div className="year">2022</div>
            <div className="company">Arintra</div>
          </div>
        </div>
        <div className="row-wrapper">
          <div className="role">Web Designer (Volunteer)</div>
          <div className="year-company-wrapper">
            <div className="year">2024</div>
            <div className="company">SSI</div>
          </div>
        </div>
        <div className="row-wrapper">
          <div className="role">Community Engagement Assistant</div>
          <div className="year-company-wrapper">
            <div className="year">2025</div>
            <div className="company">NRCH</div>
          </div>
        </div>
    </div>
    </section>
  );
};

export default HeroSection;