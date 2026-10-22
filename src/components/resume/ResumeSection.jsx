import React from 'react';
import { RESUME_DATA } from '../../data/resumeData';
import { RESUME_URL } from '../../data/portfolioData';
import { Printer, FileDown, Mail, Phone, MapPin, Globe, GraduationCap, Briefcase, Award, FolderGit2 } from 'lucide-react';
import { LinkedinIcon } from '../common/Icons';

export default function ResumeSection() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <section className="section" id="resume">
      <div className="container">
        <div className="section-header no-print">
          <span className="section-tag">Curriculum Vitae</span>
          <h2 className="section-title">Verified Resume &amp; Credentials</h2>
          <p className="section-desc">
            An ATS-optimized, verified breakdown of my MERN stack experience, projects, education, and technical competencies.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', marginTop: '1.5rem', flexWrap: 'wrap' }}>
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-sm"
              aria-label="Download Deepak Kumar Resume PDF"
            >
              <FileDown size={15} />
              <span>Download Resume PDF</span>
            </a>

            <button type="button" onClick={handlePrint} className="btn btn-outline btn-sm">
              <Printer size={15} />
              <span>Print / Save as PDF</span>
            </button>
          </div>
        </div>

        {/* Printable Sheet */}
        <div className="resume-sheet">
          {/* Resume Header */}
          <div className="resume-header">
            <div>
              <h1 style={{ fontSize: '2.2rem', fontWeight: 900, color: 'var(--text-primary)', marginBottom: '0.2rem' }}>
                {RESUME_DATA.name}
              </h1>
              <div style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '0.75rem' }}>
                {RESUME_DATA.role}
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                  <MapPin size={14} color="var(--primary)" />
                  {RESUME_DATA.location}
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                  <Mail size={14} color="var(--primary)" />
                  <a href={`mailto:${RESUME_DATA.email}`}>{RESUME_DATA.email}</a>
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                  <Phone size={14} color="var(--primary)" />
                  {RESUME_DATA.phone}
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                  <LinkedinIcon size={14} color="var(--primary)" />
                  <a href={`https://${RESUME_DATA.linkedin}`} target="_blank" rel="noopener noreferrer">
                    {RESUME_DATA.linkedin}
                  </a>
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                  <Globe size={14} color="var(--primary)" />
                  <a href={`https://${RESUME_DATA.website}`} target="_blank" rel="noopener noreferrer">
                    {RESUME_DATA.website}
                  </a>
                </span>
              </div>
            </div>
          </div>

          {/* Professional Summary */}
          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ fontSize: '1.05rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--primary)', marginBottom: '0.6rem', fontWeight: 800 }}>
              Professional Summary
            </h3>
            <p style={{ fontSize: '0.95rem', lineHeight: 1.7, color: 'var(--text-secondary)' }}>
              {RESUME_DATA.summary}
            </p>
          </div>

          {/* Technical Skills */}
          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ fontSize: '1.05rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--primary)', marginBottom: '0.85rem', fontWeight: 800 }}>
              Technical Skills
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '0.75rem', fontSize: '0.9rem' }}>
              <div>
                <strong>Languages:</strong> {RESUME_DATA.skills.languages?.join(', ')}
              </div>
              <div>
                <strong>Frontend:</strong> {RESUME_DATA.skills.frontend?.join(', ')}
              </div>
              <div>
                <strong>Backend:</strong> {RESUME_DATA.skills.backend?.join(', ')}
              </div>
              <div>
                <strong>Databases:</strong> {RESUME_DATA.skills.databases?.join(', ')}
              </div>
              <div>
                <strong>Tools:</strong> {RESUME_DATA.skills.tools?.join(', ')}
              </div>
              {RESUME_DATA.skills.additional && (
                <div>
                  <strong>Additional:</strong> {RESUME_DATA.skills.additional?.join(', ')}
                </div>
              )}
            </div>
          </div>

          {/* Work Experience */}
          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ fontSize: '1.05rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--primary)', marginBottom: '1.25rem', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <Briefcase size={16} />
              <span>Professional Experience</span>
            </h3>

            {RESUME_DATA.experience.map((exp, idx) => (
              <div key={idx} style={{ marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap' }}>
                  <h4 style={{ fontSize: '1rem', fontWeight: 800 }}>{exp.role}</h4>
                  <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)', fontWeight: 600 }}>{exp.period}</span>
                </div>
                <div style={{ fontSize: '0.85rem', color: 'var(--primary)', fontWeight: 600, marginBottom: '0.6rem' }}>
                  {exp.company} • {exp.location}
                </div>
                <ul style={{ paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                  {exp.highlights.map((hl, hIdx) => (
                    <li key={hIdx} style={{ listStyleType: 'disc' }}>{hl}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Projects */}
          {RESUME_DATA.projects && (
            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ fontSize: '1.05rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--primary)', marginBottom: '1.25rem', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <FolderGit2 size={16} />
                <span>Featured Projects</span>
              </h3>

              {RESUME_DATA.projects.map((proj, idx) => (
                <div key={idx} style={{ marginBottom: '1.25rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap' }}>
                    <h4 style={{ fontSize: '0.98rem', fontWeight: 800 }}>{proj.title}</h4>
                    {proj.period && (
                      <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)', fontWeight: 600 }}>{proj.period}</span>
                    )}
                  </div>
                  <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '0.4rem' }}>
                    <strong>Tech Stack:</strong> {proj.techStack}
                  </div>
                  <ul style={{ paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.35rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                    {proj.highlights.map((hl, hIdx) => (
                      <li key={hIdx} style={{ listStyleType: 'disc' }}>{hl}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}

          {/* Education */}
          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ fontSize: '1.05rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--primary)', marginBottom: '1rem', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <GraduationCap size={16} />
              <span>Education</span>
            </h3>

            {RESUME_DATA.education.map((edu, idx) => (
              <div key={idx} style={{ marginBottom: '1rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap' }}>
                  <h4 style={{ fontSize: '0.95rem', fontWeight: 800 }}>{edu.degree}</h4>
                  <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)', fontWeight: 600 }}>{edu.period}</span>
                </div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                  {edu.institution}
                </div>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div>
            <h3 style={{ fontSize: '1.05rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--primary)', marginBottom: '0.75rem', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <Award size={16} />
              <span>Certification</span>
            </h3>
            <ul style={{ paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.35rem', fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
              {RESUME_DATA.certifications.map((cert, idx) => (
                <li key={idx} style={{ listStyleType: 'disc' }}>{cert}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
