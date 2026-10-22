import React from 'react';
import Modal from '../common/Modal';
import { ExternalLink, CheckCircle2 } from 'lucide-react';
import { GithubIcon } from '../common/Icons';

export default function ProjectModal({ isOpen, onClose, project }) {
  if (!project) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={project.title}>
      <div>
        {project.image && (
          <div style={{ width: '100%', height: '220px', borderRadius: 'var(--radius-lg)', overflow: 'hidden', marginBottom: '1.25rem', border: '1px solid var(--border-color)' }}>
            <img
              src={project.image}
              alt={project.title}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
        )}

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
          <span className="badge badge-status">{project.category}</span>
          {project.badge && (
            <span className="badge badge-tech">{project.badge}</span>
          )}
        </div>

        <p style={{ fontSize: '1.05rem', lineHeight: 1.7, color: 'var(--text-secondary)', marginBottom: '1.75rem' }}>
          {project.description}
        </p>

        {/* Metrics Row */}
        {project.metrics && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '1rem', padding: '1.25rem', backgroundColor: 'var(--bg-subtle)', borderRadius: 'var(--radius-md)', marginBottom: '1.75rem' }}>
            {project.metrics.map((m, idx) => (
              <div key={idx} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--primary)' }}>
                  {m.value}
                </div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
                  {m.label}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Feature List */}
        <div style={{ marginBottom: '2rem' }}>
          <h4 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <CheckCircle2 size={18} color="var(--primary)" />
            <span>Key Features</span>
          </h4>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
            {(project.features || []).map((feat, idx) => (
              <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                <span style={{ color: 'var(--primary)', fontWeight: 800, marginTop: '2px' }}>•</span>
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack Pills */}
        <div style={{ marginBottom: '2rem' }}>
          <h4 style={{ fontSize: '0.85rem', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 700, marginBottom: '0.65rem' }}>
            Technologies Used
          </h4>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
            {(project.techStack || []).map((t, idx) => (
              <span key={idx} className="badge badge-tech" style={{ padding: '0.35rem 0.75rem', fontSize: '0.82rem' }}>
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Actions Footer */}
        <div style={{ display: 'flex', gap: '1rem', borderTop: '1px solid var(--border-color)', paddingTop: '1.5rem', flexWrap: 'wrap' }}>
          {project.demoLink && project.demoLink !== '#' && (
            <a
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-sm"
              aria-label={`Visit live website for ${project.title}`}
            >
              <ExternalLink size={16} />
              <span>Visit Website</span>
            </a>
          )}

          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline btn-sm"
            aria-label={`View source code on GitHub for ${project.title}`}
          >
            <GithubIcon size={16} />
            <span>View on GitHub</span>
          </a>

          <button
            type="button"
            onClick={onClose}
            className="btn btn-secondary btn-sm"
            style={{ marginLeft: 'auto' }}
          >
            Close
          </button>
        </div>
      </div>
    </Modal>
  );
}
