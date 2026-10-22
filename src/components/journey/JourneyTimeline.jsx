import React from 'react';
import { DEVELOPER_JOURNEY } from '../../data/portfolioData';
import { Lightbulb } from 'lucide-react';

export default function JourneyTimeline() {
  return (
    <section className="section" id="experience">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Career &amp; Progression</span>
          <h2 className="section-title">Professional Experience &amp; Journey</h2>
          <p className="section-desc">
            A verified timeline of my full-stack engineering internships, infrastructure experience, academic achievements, and production deployments.
          </p>
        </div>

        <div className="timeline-container">
          <div className="timeline-track" />

          {DEVELOPER_JOURNEY.map((milestone, idx) => (
            <div key={idx} className="timeline-step">
              <div className="timeline-marker">
                {milestone.step}
              </div>

              <div className="timeline-card">
                <div className="timeline-header">
                  <span className="timeline-year">{milestone.year}</span>
                  <span className="badge badge-tech">{milestone.tech.length} Technologies</span>
                </div>

                <h3 style={{ fontSize: '1.35rem', marginBottom: '0.25rem' }}>
                  {milestone.title}
                </h3>
                <h4 style={{ fontSize: '0.92rem', color: 'var(--text-muted)', fontWeight: 600, marginBottom: '0.85rem' }}>
                  {milestone.subtitle}
                </h4>

                <p style={{ fontSize: '0.95rem', lineHeight: 1.65, marginBottom: '1.25rem' }}>
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
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', padding: '0.85rem 1rem', borderRadius: 'var(--radius-sm)', backgroundColor: 'var(--bg-subtle)', borderLeft: '3px solid var(--primary)', fontSize: '0.88rem' }}>
                  <Lightbulb size={16} color="var(--primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <strong style={{ color: 'var(--text-primary)' }}>Key Takeaway: </strong>
                    <span style={{ color: 'var(--text-secondary)' }}>{milestone.keyTakeaway}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
