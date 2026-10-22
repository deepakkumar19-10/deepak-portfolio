import React from 'react';
import { PERSONAL_INFO, STATS, GITHUB_URL, LINKEDIN_URL, LIVE_WEBSITE_URL, RESUME_URL } from '../../data/portfolioData';
import { ArrowRight, FileDown, Globe, Zap, Server } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../common/Icons';

export default function HeroSection({ onOpenPitch }) {
  return (
    <section className="hero-section" id="hero">
      <div className="container">
        <div className="hero-grid">
          {/* Left Column: Introduction & CTAs */}
          <div className="hero-content">
            <div className="badge badge-status" style={{ marginBottom: '1.25rem' }}>
              <span className="status-dot" />
              <span>Available for Full-time &amp; Remote Roles</span>
            </div>

            <h1 className="hero-title">
              Building <span className="highlight">Scalable Full-Stack MERN</span> &amp; Database-Driven Web Applications.
            </h1>

            <p className="hero-subtitle">
              Hi, I'm <strong>{PERSONAL_INFO.name}</strong> — a <strong>MERN Stack Developer</strong> based in Mathura, India. I engineer high-performance React.js frontends, scalable Node.js/Express REST APIs, and production-tested database architectures. Creator of live platform <strong>Divya Braj</strong>.
            </p>

            {/* Quick Tech Highlights Badge Row */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem', marginBottom: '1.75rem' }}>
              {['React.js', 'Node.js', 'Express.js', 'MongoDB', 'MySQL', 'REST APIs', 'Tailwind CSS'].map((tech) => (
                <span key={tech} className="badge badge-tech" style={{ padding: '0.3rem 0.7rem', fontSize: '0.78rem' }}>
                  {tech}
                </span>
              ))}
            </div>

            <div className="hero-actions" style={{ flexWrap: 'wrap', gap: '0.85rem' }}>
              <a href="#projects" className="btn btn-primary btn-lg">
                <span>Explore Projects</span>
                <ArrowRight size={18} />
              </a>

              <a
                href={RESUME_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline btn-lg"
                aria-label="Download Deepak Kumar Resume PDF"
              >
                <FileDown size={18} />
                <span>Download Resume</span>
              </a>

              <a
                href={LIVE_WEBSITE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary btn-lg"
                aria-label="Visit Live Production Website: Divya Braj"
                title="Visit Live Production Website: Divya Braj"
                style={{ borderColor: 'var(--primary)', color: 'var(--primary)' }}
              >
                <Globe size={18} />
                <span>Live Platform</span>
              </a>

              <button
                type="button"
                onClick={onOpenPitch}
                className="btn btn-secondary btn-lg"
                title="30-Second Recruiter Pitch"
              >
                <Zap size={18} />
                <span>Quick Pitch</span>
              </button>
            </div>

            {/* Direct Social Links Bar */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginTop: '1.25rem', paddingTop: '1rem', borderTop: '1px solid var(--border-subtle)' }}>
              <span style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Connect:
              </span>
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-icon"
                aria-label="GitHub Profile"
                title="GitHub Profile"
                style={{ width: '38px', height: '38px' }}
              >
                <GithubIcon size={18} />
              </a>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-icon"
                aria-label="LinkedIn Profile"
                title="LinkedIn Profile"
                style={{ width: '38px', height: '38px' }}
              >
                <LinkedinIcon size={18} />
              </a>
              <a
                href={LIVE_WEBSITE_URL}
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--primary)', display: 'inline-flex', alignItems: 'center', gap: '0.35rem', marginLeft: '0.5rem' }}
              >
                <span>divyabraj.com</span>
                <ArrowRight size={14} />
              </a>
            </div>

            {/* Quick Metrics Bar */}
            <div className="hero-stats-row">
              {STATS.map((stat, idx) => (
                <div key={idx} className="stat-item">
                  <h4>{stat.value}</h4>
                  <p>{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Hero Portrait Frame */}
          <div className="hero-visual">
            <div className="portrait-wrapper">
              <img
                src="/images/deepak-hero.jpg"
                alt="Deepak Kumar — MERN Stack Developer"
                className="portrait-img"
              />

              {/* Floating Pill Badges */}
              <div className="floating-badge">
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--primary-light)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Server size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '0.9rem', fontWeight: 800 }}>MERN Stack Specialist</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>React • Node • Express • Mongo • SQL</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
