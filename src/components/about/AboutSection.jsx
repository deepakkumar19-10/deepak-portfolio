import React from 'react';
import { PERSONAL_INFO, CORE_VALUES, LIVE_WEBSITE_URL } from '../../data/portfolioData';
import { Smartphone, Layers, Globe, Server, GraduationCap, Briefcase, Award, CheckCircle2, ExternalLink } from 'lucide-react';

export default function AboutSection() {
  return (
    <section className="section section-alt" id="about">
      {/* Background Ambient Glow */}
      <div className="ambient-glow ambient-glow-indigo" style={{ top: '20%', left: '5%', width: '400px', height: '400px' }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="section-header">
          <span className="section-tag">About</span>
          <h2 className="section-title">About Me</h2>
          <p className="section-desc">
            A quick overview of my background, the tools I use, and what I build.
          </p>
        </div>

        {/* Bio Card with Photo */}
        <div className="about-intro-grid" style={{ marginBottom: '3rem' }}>
          <div className="about-visual">
            <div className="about-img-frame">
              <img
                src="/images/deepak-standing.jpg"
                alt="Deepak Kumar — Mobile & Frontend Developer"
                loading="lazy"
              />
            </div>
          </div>

          <div className="about-bio-card card">
            <div className="badge badge-tech" style={{ alignSelf: 'flex-start', marginBottom: '0.75rem' }}>
              Specialization: React Native &amp; React.js
            </div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.85rem', lineHeight: 1.3 }}>
              Building practical mobile and web applications.
            </h3>
            <p style={{ fontSize: '0.98rem', lineHeight: 1.7, marginBottom: '1rem' }}>
              I am a <strong>Mobile &amp; Frontend Developer</strong> from Mathura, Uttar Pradesh, with an MCA from <strong>GLA University</strong>. I specialize in building cross-platform mobile apps with <strong>React Native</strong> and modern web apps with <strong>React.js</strong>.
            </p>
            <p style={{ fontSize: '0.98rem', lineHeight: 1.7, marginBottom: '1.25rem' }}>
              Currently at <strong>CrowdApps Technology</strong>, I work on mobile features, connect REST APIs with Axios, and use Redux Toolkit for clean state management. I also built and launched{' '}
              <a
                href={LIVE_WEBSITE_URL}
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontWeight: 800, color: 'var(--primary)', textDecoration: 'underline', display: 'inline-flex', alignItems: 'center', gap: '0.2rem' }}
              >
                <span>DivyaBraj (divyabraj.com)</span>
                <ExternalLink size={13} />
              </a>
              , a live tourism platform for the Braj region.
            </p>

            {/* Quick Info Badges */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '0.85rem', marginTop: 'auto', paddingTop: '1.25rem', borderTop: '1px solid var(--border-color)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <GraduationCap size={18} color="var(--primary)" />
                <span style={{ fontSize: '0.85rem', fontWeight: 700 }}>MCA (GLA University)</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <Briefcase size={18} color="var(--accent-cyan)" />
                <span style={{ fontSize: '0.85rem', fontWeight: 700 }}>CrowdApps Technology</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <Award size={18} color="var(--accent-amber)" />
                <span style={{ fontSize: '0.85rem', fontWeight: 700 }}>CCC (Grade A)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bento Grid — Clean & Simple */}
        <div className="bento-grid">
          {/* Bento Box 1: Mobile App Engineering */}
          <div className="bento-card bento-span-2">
            <div className="bento-icon-wrapper" style={{ backgroundColor: 'var(--primary-light)', color: 'var(--primary)' }}>
              <Smartphone size={24} />
            </div>
            <div className="bento-badge">Mobile Apps</div>
            <h3 className="bento-title">Cross-Platform React Native</h3>
            <p className="bento-desc">
              Building smooth apps for Android and iOS using React Native. Experienced in Drawer and Stack navigation, local storage with AsyncStorage, and debugging in Android Studio.
            </p>
            <div className="bento-tags">
              {['React Native', 'React Navigation', 'NativeWind', 'AsyncStorage', 'Android Studio'].map((t) => (
                <span key={t} className="badge badge-tech">{t}</span>
              ))}
            </div>
            <div className="bento-metric-pill">
              <span className="bento-metric-val" style={{ color: 'var(--primary)' }}>React Native</span>
              <span className="bento-metric-lbl">Android &amp; iOS</span>
            </div>
          </div>

          {/* Bento Box 2: Live Platform */}
          <div className="bento-card bento-span-1">
            <div className="bento-icon-wrapper" style={{ backgroundColor: 'rgba(251, 191, 36, 0.12)', color: 'var(--accent-amber)' }}>
              <Globe size={24} />
            </div>
            <div className="bento-badge">Live Platform</div>
            <h3 className="bento-title">DivyaBraj</h3>
            <p className="bento-desc">
              A live dual-platform platform (React Native mobile app and React.js web portal) for tourism across Mathura and Vrindavan.
            </p>
            <a
              href={LIVE_WEBSITE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline btn-sm"
              style={{ marginTop: 'auto', alignSelf: 'flex-start' }}
            >
              <span>Visit divyabraj.com</span>
              <ExternalLink size={13} />
            </a>
            <div className="bento-metric-pill" style={{ marginTop: '1rem' }}>
              <span className="bento-metric-val" style={{ color: 'var(--accent-amber)' }}>divyabraj.com</span>
              <span className="bento-metric-lbl">Live in Production</span>
            </div>
          </div>

          {/* Bento Box 3: Network & IT Experience */}
          <div className="bento-card bento-span-1">
            <div className="bento-icon-wrapper" style={{ backgroundColor: 'rgba(129, 140, 248, 0.12)', color: 'var(--accent-indigo)' }}>
              <Server size={24} />
            </div>
            <div className="bento-badge">IT Background</div>
            <h3 className="bento-title">Hardware &amp; Networks</h3>
            <p className="bento-desc">
              Managed enterprise LAN/Wi-Fi setup, routers, switches, and system configurations for 50+ workstations at S.J.P Global Limited.
            </p>
            <div className="bento-metric-pill" style={{ marginTop: 'auto' }}>
              <span className="bento-metric-val" style={{ color: 'var(--accent-indigo)' }}>50+ Workstations</span>
              <span className="bento-metric-lbl">IT &amp; Hardware</span>
            </div>
          </div>

          {/* Bento Box 4: State Management & APIs */}
          <div className="bento-card bento-span-2">
            <div className="bento-icon-wrapper" style={{ backgroundColor: 'rgba(56, 189, 248, 0.12)', color: 'var(--accent-cyan)' }}>
              <Layers size={24} />
            </div>
            <div className="bento-badge">State &amp; APIs</div>
            <h3 className="bento-title">Redux Toolkit &amp; REST APIs</h3>
            <p className="bento-desc">
              Using Redux Toolkit to organize global state and prevent unnecessary component re-renders. Integrated 15+ REST API endpoints with Axios, handling errors and loading states.
            </p>
            <div className="bento-tags">
              {['Redux Toolkit', 'Axios', 'REST APIs', 'AsyncStorage', 'Tailwind CSS'].map((t) => (
                <span key={t} className="badge badge-tech">{t}</span>
              ))}
            </div>
            <div className="bento-metric-pill">
              <span className="bento-metric-val" style={{ color: 'var(--accent-cyan)' }}>Redux Toolkit</span>
              <span className="bento-metric-lbl">State Management</span>
            </div>
          </div>
        </div>

        {/* Core Principles */}
        <div style={{ marginTop: '3.5rem' }}>
          <h4 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '1.5rem', textAlign: 'center' }}>
            What I Focus On
          </h4>
          <div className="values-grid">
            {CORE_VALUES.map((val, idx) => (
              <div key={idx} className="value-item card">
                <h5>
                  <CheckCircle2 size={18} color="var(--primary)" style={{ flexShrink: 0 }} />
                  <span>{val.title}</span>
                </h5>
                <p>{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
