import React, { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import "./ProjectDetails.css";

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
        .from("Project_database")
        .select("*")
        .eq("id", projectId);
      if (error) {
        setError(error.message);
      } else if (data && data.length === 1) {
        setProject(data[0]);
      } else if (data && data.length === 0) {
        setError("Project not found.");
      } else if (data && data.length > 1) {
        setError("Multiple projects found with the same ID. Please check your database.");
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
        src={project.image}
        alt={project.name}
        className="project-image"
        style={{ borderRadius: "16px" }}
      />
      <div className="project-actions-wrapper">
        <span className="project-name-scroll">{project.name}</span>
        <span className="project-tag">{project.category}</span>
      </div>
      <div className="notes">{project.herolmage}</div>
    </div>
  );
};

export default ProjectDetails;