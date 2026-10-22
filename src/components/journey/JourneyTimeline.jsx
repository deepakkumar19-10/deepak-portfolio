import React from 'react';
import { DEVELOPER_JOURNEY } from '../../data/portfolioData';
import { Lightbulb, Briefcase, GraduationCap, Server, Smartphone, Award } from 'lucide-react';

const STEP_ICONS = {
  '01': GraduationCap,
  '02': Smartphone,
  '03': Server,
  '04': Briefcase
};

export default function JourneyTimeline() {
  return (
    <section className="section section-alt" id="experience">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Experience</span>
          <h2 className="section-title">Work Experience &amp; Education</h2>
          <p className="section-desc">
            My work experience, internship roles, and academic background.
          </p>
        </div>

        <div className="timeline-container">
          <div className="timeline-track" />

          {DEVELOPER_JOURNEY.map((milestone, idx) => {
            const Icon = STEP_ICONS[milestone.step] || Briefcase;

            return (
              <div key={idx} className="timeline-step">
                {/* Glowing Marker */}
                <div className="timeline-marker">
                  <Icon size={18} />
                </div>

                {/* Timeline Card */}
                <div className="timeline-card card">
                  <div className="timeline-header">
                    <span className="timeline-year">{milestone.year}</span>
                    <span className="badge badge-tech">{milestone.tech.length} Technologies</span>
                  </div>

                  <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '0.25rem' }}>
                    {milestone.title}
                  </h3>
                  <h4 style={{ fontSize: '0.95rem', color: 'var(--text-muted)', fontWeight: 600, marginBottom: '0.85rem' }}>
                    {milestone.subtitle}
                  </h4>

                  <p style={{ fontSize: '0.96rem', lineHeight: 1.65, marginBottom: '1.25rem' }}>
                    {milestone.description}
                  </p>

                  {/* Tech Pills */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.25rem' }}>
                    {milestone.tech.map((t, tIdx) => (
                      <span key={tIdx} className="badge badge-tech">
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Key Takeaway Box */}
                  <div className="timeline-takeaway-box">
                    <Lightbulb size={18} color="var(--primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <div>
                      <strong style={{ color: 'var(--text-primary)' }}>Key Takeaway: </strong>
                      <span style={{ color: 'var(--text-secondary)' }}>{milestone.keyTakeaway}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
