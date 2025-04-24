import React from 'react';
import './HeroSection.css';
import RotatingText from './RotatingText'; // Import RotatingText
import { BRDFTextureTools } from '@babylonjs/core';

const HeroSection = () => {
  const [time, setTime] = React.useState('');

  React.useEffect(() => {
    const updateTime = () => {
      const options = { 
        timeZone: 'Australia/Melbourne',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: true
      };
      const melbourneTime = new Date().toLocaleTimeString('en-US', options);
      setTime(`${melbourneTime} ADST`); // Combine time and timezone string
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero-section">
      <div className="header">
        <h1 className="name-title">YASHRAJ PATIL</h1>
        <div className="location-wrapper">
        <div className="location">MELBOURNE,AU</div>
        <div className="time">
          {/* Replace static time display with RotatingText */}
          {time && (
            <RotatingText
              texts={[time]} // Pass the dynamic time string as an array
              mainClassName="px-2 sm:px-2 md:px-3 bg-cyan-300 text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
              staggerFrom={"last"}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={2000}
            />
          )}
        </div>
        </div>
      </div>

      <div className="intro">
        <p className="intro-text">
          Hi, I'm Yashraj Patil a passionate UI/UX designer crafting
          digital experiences that bridge the gap between human needs and
          technological possibilities. With a foundation in visual communication,
          I transform complex challenges into intuitive, impactful solutions.
        </p>
      </div>
      <div className="projects">
        <div className="say">SCROLLDOWN TO <br />EXPLORE MORE</div>
        <div className="project-details">
          <div className="project-name">
            <div>CONTINUE CARE</div>
            <div>NGV FOR KIDS</div>
            <div>LET IT BEE</div>
            <div>DATA DISASTER</div>
            <div>EMCARE</div>
            <div>ARINTRA</div>
          </div>
          <div className="project-type">
            <div>SERVICE DESIGN</div>
            <div>SERVICE DESIGN</div>
            <div>SPATIAL DESIGN</div>
            <div>EXHIBITION DESIGN</div>
            <div>UX DESIGN</div>
            <div>UI/UX DESIGN</div>
          </div>
        </div>
        </div>
        <nav className="nav-links">
          <a href="https://www.linkedin.com/in/yashraj-patil84/" target="_blank" rel="noopener noreferrer" className="nav-link">LINKEDIN</a>
          <a href="mailto:yashrajp84@gmail.com" className="nav-link">EMAIL</a>
          <div className='group-2'>
          <a href="#connect" className="nav-link">DRIBBLE</a>
          <a href="/resume.pdf" download className="nav-link download-resume">DOWNLOAD RESUME</a>
          </div>
        </nav>
    </section>
  );
};

export default HeroSection;