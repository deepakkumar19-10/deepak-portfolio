import React from 'react';
import { ExternalLink, ArrowRight, Smartphone, Globe, Layers } from 'lucide-react';
import { GithubIcon } from '../common/Icons';

export default function ProjectCard({ project, onSelect }) {
  const isMobile = project.techStack.includes('React Native');
  const isLive = Boolean(project.demoLink && project.demoLink !== '#');

  return (
    <div className="project-card">
      <div className="project-banner" onClick={() => onSelect(project)} style={{ cursor: 'pointer' }}>
        <img
          src={project.image}
          alt={project.title}
          className="project-card-image"
          loading="lazy"
        />
        <div className="project-banner-overlay" />

        {/* Badge Pill */}
        {project.badge && (
          <span
            className={`project-badge-tag ${
              project.badge.includes('FLAGSHIP') || project.badge.includes('LIVE')
                ? 'project-badge-flagship'
                : project.badge.includes('REACT NATIVE')
                ? 'project-badge-native'
                : project.badge.includes('REDUX')
                ? 'project-badge-redux'
                : ''
            }`}
          >
            {isMobile && <Smartphone size={12} style={{ marginRight: '4px' }} />}
            {project.badge}
          </span>
        )}
      </div>

      <div className="project-content">
        {/* Tech Stack Pills */}
        <div className="project-tags-row">
          {project.techStack.slice(0, 4).map((tech, idx) => (
            <span key={idx} className="badge badge-tech">
              {tech}
            </span>
          ))}
          {project.techStack.length > 4 && (
            <span className="badge badge-tech">+{project.techStack.length - 4}</span>
          )}
        </div>

        <h3 className="project-card-title" onClick={() => onSelect(project)} style={{ cursor: 'pointer' }}>
          {project.title}
        </h3>

        <p className="project-card-tagline">
          {project.tagline}
        </p>

        {/* Key Feature Highlights */}
        {project.features && project.features.length > 0 && (
          <ul className="project-features-list">
            {project.features.slice(0, 2).map((feat, fIdx) => (
              <li key={fIdx} className="project-feature-item">
                <span className="project-bullet">•</span>
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Action Buttons Footer */}
        <div className="project-card-footer">
          <button
            type="button"
            onClick={() => onSelect(project)}
            className="btn btn-outline btn-sm"
          >
            <span>Details</span>
            <ArrowRight size={14} />
          </button>

          <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-icon"
              style={{ width: '36px', height: '36px' }}
              title={`View ${project.title} on GitHub`}
              aria-label={`GitHub source code for ${project.title}`}
            >
              <GithubIcon size={16} />
            </a>

            {isLive && (
              <a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-sm"
                title="Visit Live Application Website"
                aria-label={`Visit live website for ${project.title}`}
              >
                <span>Live Site</span>
                <ExternalLink size={13} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
