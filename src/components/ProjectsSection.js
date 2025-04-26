import React, { useEffect } from 'react';
import './ProjectsSection.css';
import { Link } from 'react-router-dom';
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

const ProjectsSection = () => {
  const [projects, setProjects] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    const fetchProjects = async () => {
      setLoading(true);
      setError(null);
      const { data, error } = await supabase
        .from("Project_database")
        .select("id, name, image, category");
      if (error) {
        setError(error.message);
      } else {
        setProjects(data || []);
      }
      setLoading(false);
    };
    fetchProjects();
  }, []);

  if (loading) return <section className="projects-section">Loading...</section>;
  if (error) return <section className="projects-section">Error: {error}</section>;

  return (
    <section className="projects-section">
      <div className="image-container">
        <img src="https://ynmpuwsryqdnjxhesexm.supabase.co/storage/v1/object/public/brand-assets//Varlicircular1920px.png" alt="Brand Asset" className="rotating-image" />
      </div>
      {projects.map((project) => (
        <div key={project.id} className="project-card">
          <img src={project.image} alt={project.name} className="project-image" />
          <div className="project-actions-wrapper">
            <div className="project-name-scroll">{project.name}</div>
            <Link to={`/project/${project.id}`} className="open-case-study">Open Case Study</Link>
            <div className="project-tag">{project.category}</div>
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