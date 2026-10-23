import React from 'react';
import { Rocket, Smartphone, Cpu, Zap, ArrowRight, MessageCircle, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';

const VALUE_PILLARS = [
  {
    icon: Rocket,
    color: 'var(--primary)',
    bg: 'rgba(45, 212, 191, 0.12)',
    badge: 'Proven Live Track Record',
    title: 'Production-Ready Delivery',
    subtitle: 'From Figma spec to live production deployment',
    description: 'I do not just build toy demos — I deliver production platforms used by real people. Proven track record with live platforms like DivyaBraj (divyabraj.com) and the MMM Mobile Application. I write resilient code that gracefully handles network drops, edge cases, and diverse Android & iOS devices.',
    highlights: ['Live at divyabraj.com', 'Offline-First survey architectures', 'Real-world bug resolution']
  },
  {
    icon: Smartphone,
    color: 'var(--accent-cyan)',
    bg: 'rgba(56, 189, 248, 0.12)',
    badge: 'Dual Expertise',
    title: 'End-to-End Frontend & Mobile Mastery',
    subtitle: 'One developer for both Web & Cross-Platform Mobile',
    description: 'Hiring me eliminates the barrier between your web and mobile teams. I build fluid 60fps mobile applications using React Native, React Navigation, and NativeWind, while simultaneously engineering pixel-perfect, accessible web platforms using React.js, TypeScript, and modern CSS systems.',
    highlights: ['React Native (Android & iOS)', 'Modern React.js web apps', 'NativeWind & Tailwind CSS']
  },
  {
    icon: Cpu,
    color: 'var(--accent-amber)',
    bg: 'rgba(251, 191, 36, 0.12)',
    badge: 'High Performance',
    title: 'Scalable & Clean Architecture',
    subtitle: 'Clean code built for team maintainability',
    description: 'I design state management with Redux Toolkit modular slices to minimize unnecessary re-renders (achieving up to 20% UI performance boosts). I structure REST API workflows using Axios interceptors, centralized error handling, and robust AsyncStorage caching for instant app startup.',
    highlights: ['Redux Toolkit state slices', 'Axios interceptor pipelines', 'AsyncStorage offline persistence']
  },
  {
    icon: Zap,
    color: 'var(--accent-indigo)',
    bg: 'rgba(129, 140, 248, 0.12)',
    badge: 'Immediate Availability',
    title: 'Fast Communication & Complete Ownership',
    subtitle: 'Proactive problem solver ready for Day 1 impact',
    description: 'Available to join immediately. With a formal MCA foundation from GLA University, I communicate proactively, take total ownership of assigned sprint features, debug quickly in Android Studio and browser DevTools, and adapt swiftly to your existing engineering practices.',
    highlights: ['Available to join immediately', 'Fast sprint turnaround', 'Clear asynchronous communication']
  }
];

export default function WhyHireMeSection() {
  const whatsappUrl = `https://wa.me/${PERSONAL_INFO.whatsapp}?text=${encodeURIComponent(
    'Hi Deepak, I saw your "Why Hire Me" section on your portfolio and would like to discuss an opportunity!'
  )}`;

  return (
    <section className="section section-alt" id="why-hire-me">
      {/* Ambient background glows */}
      <div className="ambient-glow ambient-glow-cyan" style={{ top: '15%', left: '8%', width: '380px', height: '380px' }} />
      <div className="ambient-glow ambient-glow-emerald" style={{ bottom: '10%', right: '8%', width: '420px', height: '420px' }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">
            <Sparkles size={14} />
            <span>Why Hire Me</span>
          </span>
          <h2 className="section-title">
            Driving Immediate Value for <span className="gradient-text">Your Engineering Team</span>
          </h2>
          <p className="section-desc">
            Full-stack mindset with deep Frontend and Mobile specialization. I take ideas from concept to production-ready software with speed, reliability, and clean code.
          </p>
        </div>

        {/* Core Value Proposition Banner */}
        <div className="hire-me-proposition-card">
          <div className="hire-me-prop-content">
            <div className="badge badge-tech" style={{ alignSelf: 'flex-start', marginBottom: '0.75rem', color: 'var(--primary)', borderColor: 'var(--primary-subtle)' }}>
              Core Value Proposition
            </div>
            <h3 className="hire-me-prop-title">
              Turn Your Product Vision into Live, High-Performance Software
            </h3>
            <p className="hire-me-prop-desc">
              Whether you need to build a cross-platform mobile app from scratch in <strong>React Native</strong>, ship a responsive web platform with <strong>React.js</strong>, or integrate scalable <strong>REST APIs and Redux state architecture</strong> — I deliver production-ready results without the hand-holding.
            </p>
          </div>
          <div className="hire-me-prop-badges">
            <div className="hire-me-stat-chip">
              <span className="hire-me-stat-num">0 to 1</span>
              <span className="hire-me-stat-txt">Full Lifecycle Execution</span>
            </div>
            <div className="hire-me-stat-chip">
              <span className="hire-me-stat-num">Day 1</span>
              <span className="hire-me-stat-txt">Immediate Availability</span>
            </div>
          </div>
        </div>

        {/* 4 Value Pillars Grid */}
        <div className="why-hire-grid">
          {VALUE_PILLARS.map((pillar, idx) => {
            const IconComponent = pillar.icon;
            return (
              <div key={idx} className="why-hire-card">
                <div className="why-hire-header">
                  <div className="why-hire-icon" style={{ backgroundColor: pillar.bg, color: pillar.color }}>
                    <IconComponent size={24} />
                  </div>
                  <span className="why-hire-badge" style={{ color: pillar.color, borderColor: pillar.color }}>
                    {pillar.badge}
                  </span>
                </div>

                <h3 className="why-hire-card-title">{pillar.title}</h3>
                <h4 className="why-hire-card-sub">{pillar.subtitle}</h4>
                <p className="why-hire-card-desc">{pillar.description}</p>

                <div className="why-hire-highlights">
                  {pillar.highlights.map((item, hIdx) => (
                    <div key={hIdx} className="why-hire-hl-item">
                      <CheckCircle2 size={14} color={pillar.color} style={{ flexShrink: 0 }} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Direct Action Call to Action Banner */}
        <div className="hire-me-cta-banner">
          <div className="hire-me-cta-text">
            <h4>Ready to discuss a role or high-impact project?</h4>
            <p>I am available to join immediately for full-time roles, contracts, or high-growth tech teams.</p>
          </div>
          <div className="hire-me-cta-actions">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-lg"
              style={{ gap: '0.5rem' }}
            >
              <MessageCircle size={18} />
              <span>Connect on WhatsApp</span>
            </a>
            <a
              href="#contact"
              className="btn btn-outline btn-lg"
              style={{ gap: '0.5rem' }}
            >
              <span>Drop Inquiry / Email</span>
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
