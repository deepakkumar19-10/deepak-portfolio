import React, { useState } from 'react';
import { PROJECTS } from '../../data/portfolioData';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';

const CATEGORIES = ['All', 'Featured / Live', 'MERN Stack', 'Full-Stack', 'Frontend & APIs'];

export default function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeModalProject, setActiveModalProject] = useState(null);

  const filteredProjects = PROJECTS.filter((p) => {
    if (selectedCategory === 'All') return true;
    if (selectedCategory === 'Featured / Live') return p.featured || p.demoLink;
    if (selectedCategory === 'MERN Stack') return p.category === 'MERN Stack';
    if (selectedCategory === 'Full-Stack') return p.category === 'Full-Stack' || p.category === 'MERN Stack';
    if (selectedCategory === 'Frontend & APIs') return p.category === 'Frontend & APIs';
    return true;
  });

  return (
    <section className="section" id="projects">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Featured Work</span>
          <h2 className="section-title">Production &amp; Full-Stack Projects</h2>
          <p className="section-desc">
            Explore real-world software applications built with React.js, Node.js, Express, MongoDB, REST APIs, and SQL.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="projects-filter-bar">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`filter-pill ${selectedCategory === cat ? 'active' : ''}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelect={(p) => setActiveModalProject(p)}
            />
          ))}
        </div>

        {/* Project Case Study Modal */}
        <ProjectModal
          isOpen={!!activeModalProject}
          onClose={() => setActiveModalProject(null)}
          project={activeModalProject}
        />
      </div>
    </section>
  );
}
