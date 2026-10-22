import React from 'react';
import { PERSONAL_INFO, STATS, GITHUB_URL, LINKEDIN_URL, LIVE_WEBSITE_URL, RESUME_URL } from '../../data/portfolioData';
import { ArrowRight, FileDown, Globe, Zap } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../common/Icons';

export default function HeroSection({ onOpenPitch }) {
  return (
    <section className="hero-section" id="hero">
      {/* Background Ambient Glows */}
      <div className="ambient-glow ambient-glow-emerald" style={{ top: '-100px', left: '15%', width: '450px', height: '450px' }} />
      <div className="ambient-glow ambient-glow-cyan" style={{ top: '100px', right: '10%', width: '400px', height: '400px' }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="hero-grid">
          {/* Left Column: Introduction & Actions */}
          <div className="hero-content">
            {/* Status Pill */}
            <div className="badge badge-status" style={{ marginBottom: '0.75rem' }}>
              <span className="status-dot" />
              <span>Available to Join Immediately • Mathura, UP</span>
            </div>

            {/* Simple, Punchy Headline */}
            <h1 className="hero-title">
              Building Clean &amp; Fast <span className="gradient-text">Mobile &amp; Web Apps</span>
            </h1>

            {/* Clear, Natural Subtitle */}
            <p className="hero-subtitle">
              Hi, I'm <strong>{PERSONAL_INFO.name}</strong>, a <strong>Mobile &amp; Frontend Developer</strong>. I build cross-platform mobile apps with <strong>React Native</strong> and modern web apps with <strong>React.js</strong>. Experienced in Redux Toolkit, REST APIs with Axios, and offline storage with AsyncStorage. Creator of <strong>divyabraj.com</strong>.
            </p>

            {/* Tech Stack Pills */}
            <div className="hero-tech-pills">
              {['React Native', 'React.js', 'TypeScript', 'Redux Toolkit', 'AsyncStorage', 'NativeWind', 'Tailwind CSS', 'Axios', 'Android Studio'].map((tech) => (
                <span key={tech} className="badge badge-tech">
                  {tech}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="hero-actions">
              <a href="#projects" className="btn btn-primary btn-lg">
                <span>View Projects</span>
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
                aria-label="Visit Live Website: DivyaBraj"
                title="Visit Live Website: DivyaBraj"
              >
                <Globe size={18} />
                <span>Live Website</span>
              </a>

              <button
                type="button"
                onClick={onOpenPitch}
                className="btn btn-secondary btn-lg"
                title="30-Second Summary"
              >
                <Zap size={18} color="var(--primary)" />
                <span>Quick Summary</span>
              </button>
            </div>

            {/* Social Links */}
            <div className="hero-socials-bar">
              <span className="hero-socials-label">Connect:</span>
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-icon"
                aria-label="GitHub Profile"
                title="GitHub Profile"
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
              >
                <LinkedinIcon size={18} />
              </a>
              <a
                href={LIVE_WEBSITE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-live-link"
              >
                <span>divyabraj.com</span>
                <ArrowRight size={14} />
              </a>
            </div>

            {/* Clean KPI Metrics Row */}
            <div className="hero-stats-row">
              {STATS.map((stat, idx) => (
                <div key={idx} className="stat-item">
                  <div className="stat-top-row">
                    <span className="stat-badge">{stat.badge}</span>
                  </div>
                  <h4 className="stat-value">{stat.value}</h4>
                  <p className="stat-label">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Clean Portrait Card */}
          <div className="hero-visual">
            <div className="portrait-wrapper">
              <img
                src="/images/deepak-hero.jpg"
                alt="Deepak Kumar — Mobile & Frontend Developer"
                className="portrait-img"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
