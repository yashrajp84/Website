import React, { useEffect, useRef } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import './App.css'; // Ensure this path is correct
import LandingPage from './components/LandingPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProjectDetails from './components/ProjectDetails';

function App() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      // Add other Locomotive Scroll options here if needed
    });

    // Cleanup function to destroy the scroll instance when the component unmounts
    return () => {
      if (scroll) scroll.destroy();
    };
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <div className="App" ref={scrollRef} data-scroll-container>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/project/:projectId" element={<ProjectDetailsWrapper />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function ProjectDetailsWrapper() {
  // Get projectId from URL params and pass to ProjectDetails
  const { projectId } = require('react-router-dom').useParams();
  return <ProjectDetails projectId={projectId} />;
}

export default App;