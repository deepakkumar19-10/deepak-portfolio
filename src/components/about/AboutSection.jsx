import React from 'react';
import { CORE_VALUES, ENGINEERING_CAPABILITIES, LIVE_WEBSITE_URL } from '../../data/portfolioData';
import { Code2, Layers, Database, ExternalLink, CheckCircle2, Award, Briefcase, GraduationCap } from 'lucide-react';

const CAPABILITY_ICONS = {
  frontend: Code2,
  backend: Layers,
  database: Database
};

export default function AboutSection() {
  return (
    <section className="section section-alt" id="about">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">About Deepak</span>
          <h2 className="section-title">Where Full-Stack Engineering Meets Clean Architecture</h2>
          <p className="section-desc">
            Building digital platforms that combine responsive React frontends with robust Express APIs and reliable databases.
          </p>
        </div>

        <div className="about-grid">
          {/* Left Column: Portrait Frame with Quick Facts */}
          <div className="about-visual">
            <div className="about-img-frame">
              <img
                src="/images/deepak-standing.jpg"
                alt="Deepak Kumar — MERN Stack Developer"
                loading="lazy"
              />
            </div>

            {/* Quick Credentials Card */}
            <div className="card" style={{ marginTop: '1.25rem', padding: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div style={{ width: '34px', height: '34px', borderRadius: 'var(--radius-sm)', backgroundColor: 'var(--primary-light)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <GraduationCap size={18} />
                </div>
                <div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 800 }}>MCA (GLA University)</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Master of Computer Applications (2023–2025)</div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div style={{ width: '34px', height: '34px', borderRadius: 'var(--radius-sm)', backgroundColor: 'var(--primary-light)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Briefcase size={18} />
                </div>
                <div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 800 }}>MERN Stack Intern</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>CrowdApps Technology (May 2026 – Present)</div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div style={{ width: '34px', height: '34px', borderRadius: 'var(--radius-sm)', backgroundColor: 'var(--primary-light)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Award size={18} />
                </div>
                <div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 800 }}>Creator: Divya Braj</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Live Production Web Platform (divyabraj.com)</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Bio Narrative & Philosophy */}
          <div className="about-content">
            <h3>Turning complex requirements into seamless, full-stack web applications.</h3>
            
            <p>
              I am a <strong>MERN Stack Developer</strong> based in Mathura, Uttar Pradesh, with an MCA from <strong>GLA University</strong>. I specialize in building complete web applications from initial database schema modeling and REST API design to modular, responsive React.js user interfaces.
            </p>

            <p>
              Currently, I work as a <strong>MERN Stack Intern</strong> at CrowdApps Technology, developing full-stack features, reusable UI components, authentication flows, and database connectivity with MongoDB and Express.js.
            </p>

            <p>
              One of my flagship achievements is architecting and deploying{' '}
              <a
                href={LIVE_WEBSITE_URL}
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontWeight: 800, textDecoration: 'underline', color: 'var(--primary)', display: 'inline-flex', alignItems: 'center', gap: '0.2rem' }}
              >
                <span>Braj Darshan (divyabraj.com)</span>
                <ExternalLink size={13} />
              </a>
              {' '}— a live production cultural and tourism platform covering temples, yatras, panchang, events, and cultural heritage across the Braj region.
            </p>

            {/* Core Values Summary */}
            <div className="values-grid">
              {CORE_VALUES.map((val, idx) => (
                <div key={idx} className="value-item">
                  <h5>
                    <CheckCircle2 size={16} color="var(--primary)" />
                    <span>{val.title}</span>
                  </h5>
                  <p>{val.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 3-Pillar Engineering Capabilities (Inspired by reference site's capability breakdown) */}
        <div style={{ marginTop: '4.5rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span className="section-tag" style={{ backgroundColor: 'var(--bg-card)' }}>What I Bring to the Table</span>
            <h3 style={{ fontSize: '1.85rem', fontWeight: 800, marginTop: '0.5rem' }}>
              Core Engineering Focus &amp; Capabilities
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', maxWidth: '600px', margin: '0.5rem auto 0 auto' }}>
              How I approach building reliable, scalable software across the entire web stack.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.75rem' }}>
            {ENGINEERING_CAPABILITIES.map((cap) => {
              const Icon = CAPABILITY_ICONS[cap.id] || Code2;
              return (
                <div key={cap.id} className="card card-hover" style={{ display: 'flex', flexDirection: 'column' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: 'var(--radius-md)', backgroundColor: 'var(--primary-light)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                    <Icon size={24} />
                  </div>

                  <h4 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '0.35rem' }}>
                    {cap.title}
                  </h4>

                  <div style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '0.85rem' }}>
                    {cap.tagline}
                  </div>

                  <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.5rem', flexGrow: 1 }}>
                    {cap.description}
                  </p>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', borderTop: '1px solid var(--border-color)', paddingTop: '1rem' }}>
                    {cap.badges.map((b, bIdx) => (
                      <span key={bIdx} className="badge badge-tech" style={{ fontSize: '0.75rem' }}>
                        {b}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
