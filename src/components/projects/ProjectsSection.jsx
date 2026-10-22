import React, { useState } from 'react';
import { PROJECTS } from '../../data/portfolioData';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';

const CATEGORIES = ['All', 'Mobile Apps', 'Live Platform', 'Full Stack'];

export default function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeModalProject, setActiveModalProject] = useState(null);

  const filteredProjects = PROJECTS.filter((p) => {
    if (selectedCategory === 'All') return true;
    if (selectedCategory === 'Mobile Apps') {
      return p.category.includes('Mobile') || p.techStack.includes('React Native');
    }
    if (selectedCategory === 'Live Platform') {
      return p.category.includes('Live') || Boolean(p.demoLink);
    }
    if (selectedCategory === 'Full Stack') {
      return p.category.includes('Full') || p.category.includes('Stack');
    }
    return true;
  });

  return (
    <section className="section" id="projects">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Projects</span>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-desc">
            Real-world mobile apps and web platforms I have built using React Native and React.js.
          </p>
        </div>

        {/* Filter Pills Bar */}
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
          isOpen={Boolean(activeModalProject)}
          onClose={() => setActiveModalProject(null)}
          project={activeModalProject}
        />
      </div>
    </section>
  );
}
