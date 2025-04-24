import React, { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import "./ProjectsSection.css";

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

const ProjectDetails = ({ projectId }) => {
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProject = async () => {
      setLoading(true);
      setError(null);
      const { data, error } = await supabase
        .from("projects")
        .select("*")
        .eq("id", projectId)
        .single();
      if (error) {
        setError(error.message);
      } else {
        setProject(data);
      }
      setLoading(false);
    };
    if (projectId) fetchProject();
  }, [projectId]);

  if (loading) return <div className="project-card">Loading...</div>;
  if (error) return <div className="project-card">Error: {error}</div>;
  if (!project) return <div className="project-card">Project not found.</div>;

  return (
    <div className="project-card">
      <img
        src={project.image_url}
        alt={project.name}
        className="project-image"
        style={{ borderRadius: "16px" }}
      />
      <div className="project-actions-wrapper">
        <span className="project-name-scroll">{project.name}</span>
        <span className="project-tag">{project.tag}</span>
      </div>
      <div className="notes">{project.description}</div>
      {project.case_study_url && (
        <a
          href={project.case_study_url}
          className="open-case-study"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open Case Study
        </a>
      )}
    </div>
  );
};

export default ProjectDetails;