import React from 'react';
import { RESUME_DATA } from '../../data/resumeData';
import { RESUME_URL } from '../../data/portfolioData';
import { Printer, FileDown } from 'lucide-react';

export default function ResumeSection() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <section className="section" id="resume">
      <div className="container">
        {/* Section Header */}
        <div className="section-header no-print">
          <span className="section-tag">Resume</span>
          <h2 className="section-title">My Resume</h2>
          <p className="section-desc">
            You can view my resume below, or download and print it as a PDF.
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
              <span>Download PDF</span>
            </a>

            <button type="button" onClick={handlePrint} className="btn btn-outline btn-sm">
              <Printer size={15} />
              <span>Print Resume</span>
            </button>
          </div>
        </div>

        {/* Printable Resume Sheet */}
        <div className="resume-sheet">
          {/* Real Resume Header Matching Original Document */}
          <div className="resume-sheet-header">
            <h1 className="resume-sheet-name">{RESUME_DATA.name}</h1>
            <div className="resume-sheet-contact-line">
              <span>{RESUME_DATA.location}</span>
              <span className="resume-sep">|</span>
              <a href={`tel:${RESUME_DATA.phone}`}>{RESUME_DATA.phone}</a>
              <span className="resume-sep">|</span>
              <a href={`mailto:${RESUME_DATA.email}`}>{RESUME_DATA.email}</a>
            </div>
            <div className="resume-sheet-links-line">
              <a href={`https://${RESUME_DATA.linkedin}`} target="_blank" rel="noopener noreferrer">
                {RESUME_DATA.linkedin}
              </a>
              <span className="resume-sep">|</span>
              <a href={`https://${RESUME_DATA.github}`} target="_blank" rel="noopener noreferrer">
                {RESUME_DATA.github}
              </a>
              <span className="resume-sep">|</span>
              <a href={`https://${RESUME_DATA.website}`} target="_blank" rel="noopener noreferrer">
                {RESUME_DATA.website}
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="resume-block">
            <h2 className="resume-block-title">Professional Summary</h2>
            <p className="resume-summary-text">
              {RESUME_DATA.summary}
            </p>
          </div>

          {/* Technical Skills */}
          <div className="resume-block">
            <h2 className="resume-block-title">Technical Skills</h2>
            <div className="resume-skills-list">
              <div className="resume-skill-row">
                <strong>Languages: </strong>
                <span>{RESUME_DATA.skills.languages.join(', ')}</span>
              </div>
              <div className="resume-skill-row">
                <strong>Frameworks &amp; Libraries: </strong>
                <span>{RESUME_DATA.skills.frameworks.join(', ')}</span>
              </div>
              <div className="resume-skill-row">
                <strong>State Management &amp; Data Fetching: </strong>
                <span>{RESUME_DATA.skills.stateManagement.join(', ')}</span>
              </div>
              <div className="resume-skill-row">
                <strong>Styling &amp; UI Design: </strong>
                <span>{RESUME_DATA.skills.styling.join(', ')}</span>
              </div>
              <div className="resume-skill-row">
                <strong>Developer Tools: </strong>
                <span>{RESUME_DATA.skills.developerTools.join(', ')}</span>
              </div>
            </div>
          </div>

          {/* Professional Experience */}
          <div className="resume-block">
            <h2 className="resume-block-title">Professional Experience</h2>
            {RESUME_DATA.experience.map((exp, idx) => (
              <div key={idx} className="resume-exp-item">
                <div className="resume-item-header">
                  <div>
                    <h3 className="resume-item-title">{exp.role}</h3>
                    <div className="resume-item-company">{exp.company}</div>
                  </div>
                  <div className="resume-item-period">{exp.period}</div>
                </div>
                <ul className="resume-highlights-list">
                  {exp.highlights.map((h, hIdx) => (
                    <li key={hIdx}>– {h}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Projects */}
          <div className="resume-block">
            <h2 className="resume-block-title">Projects</h2>
            {RESUME_DATA.projects.map((proj, idx) => (
              <div key={idx} className="resume-exp-item">
                <div className="resume-item-header">
                  <div>
                    <h3 className="resume-item-title">{proj.title}</h3>
                    <div className="resume-item-tech">{proj.techStack}</div>
                  </div>
                  <div className="resume-item-period" style={{ color: 'var(--primary)', fontWeight: 700 }}>
                    {proj.type}
                  </div>
                </div>
                <ul className="resume-highlights-list">
                  {proj.highlights.map((h, hIdx) => (
                    <li key={hIdx}>– {h}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Education & Certification */}
          <div className="resume-block">
            <h2 className="resume-block-title">Education &amp; Certification</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              {RESUME_DATA.education.map((edu, idx) => (
                <div key={idx} className="resume-item-header">
                  <div>
                    <div style={{ fontWeight: 800, fontSize: '0.98rem' }}>{edu.degree}</div>
                    <div style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>{edu.institution}</div>
                  </div>
                  <div className="resume-item-period">{edu.period}</div>
                </div>
              ))}
              <div style={{ paddingTop: '0.65rem', borderTop: '1px dashed var(--border-color)', marginTop: '0.25rem' }}>
                <div style={{ fontWeight: 700, fontSize: '0.92rem' }}>
                  {RESUME_DATA.certification[0]}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
