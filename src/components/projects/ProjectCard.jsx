import React from 'react';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { GithubIcon } from '../common/Icons';

export default function ProjectCard({ project, onSelect }) {
  return (
    <div className="project-card">
      <div className="project-banner">
        <img
          src={project.image}
          alt={project.title}
          className="project-card-image"
          loading="lazy"
        />
        {project.badge && (
          <span
            className={`project-badge-tag ${
              project.badge.includes('FLAGSHIP')
                ? 'project-badge-flagship'
                : project.badge.includes('REDUX')
                ? 'project-badge-redux'
                : project.badge.includes('COMMERCE')
                ? 'project-badge-commerce'
                : project.badge.includes('MYSQL')
                ? 'project-badge-mysql'
                : ''
            }`}
          >
            {project.badge}
          </span>
        )}
      </div>

      <div className="project-content">
        <div className="project-tags-row">
          {project.techStack.slice(0, 3).map((tech, idx) => (
            <span key={idx} className="badge badge-tech">
              {tech}
            </span>
          ))}
          {project.techStack.length > 3 && (
            <span className="badge badge-tech">+{project.techStack.length - 3}</span>
          )}
        </div>

        <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '0.45rem', lineHeight: 1.3 }}>
          {project.title}
        </h3>

        <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.55, marginBottom: '1rem' }}>
          {project.tagline}
        </p>

        {/* Recruiter-friendly Key Feature Highlights */}
        {project.features && project.features.length > 0 && (
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', marginBottom: '1.25rem', padding: 0 }}>
            {project.features.slice(0, 2).map((feat, fIdx) => (
              <li key={fIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.45rem', fontSize: '0.82rem', color: 'var(--text-muted)', lineHeight: 1.45 }}>
                <span style={{ color: 'var(--primary)', fontWeight: 800, lineHeight: 1.2 }}>•</span>
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Action Buttons Footer */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--border-color)', paddingTop: '1.25rem', marginTop: 'auto' }}>
          <button
            type="button"
            onClick={() => onSelect(project)}
            className="btn btn-outline btn-sm"
            style={{ fontWeight: 700 }}
          >
            <span>Case Study</span>
            <ArrowRight size={14} />
          </button>

          <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-icon"
              style={{ width: '34px', height: '34px' }}
              title="GitHub Repository"
              aria-label={`GitHub source code for ${project.title}`}
            >
              <GithubIcon size={15} />
            </a>

            {project.demoLink && project.demoLink !== '#' && (
              <a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-sm"
                style={{ padding: '0.35rem 0.75rem', fontSize: '0.8rem', gap: '0.35rem' }}
                title="Visit Live Application Website"
                aria-label={`Visit live website for ${project.title}`}
              >
                <span>Live Demo</span>
                <ExternalLink size={13} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
