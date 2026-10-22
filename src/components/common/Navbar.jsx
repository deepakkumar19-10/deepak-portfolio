import React, { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';
import { Menu, X, FileDown } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { GITHUB_URL, LINKEDIN_URL, RESUME_URL } from '../../data/portfolioData';

const NAV_ITEMS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Lab', href: '#lab' },
  { label: 'Contact', href: '#contact' }
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Reading progress bar
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${(totalScroll / (windowHeight || 1)) * 100}`;
      setScrollProgress(Number(scroll));

      // ScrollSpy active link detection
      const sections = ['about', 'skills', 'experience', 'projects', 'lab', 'contact'];
      const current = sections.find((sec) => {
        const el = document.getElementById(sec);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 220 && rect.bottom >= 150;
        }
        return false;
      });
      if (current) setActiveSection(current);
      else if (totalScroll < 200) setActiveSection('hero');
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Scroll Reading Progress Bar */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: `${scrollProgress}%`,
          height: '3px',
          backgroundColor: 'var(--primary)',
          zIndex: 2001,
          transition: 'width 0.1s ease'
        }}
      />

      <header className="navbar no-print">
        <div className="container nav-container">
          {/* LEFT: Brand Monogram & Name */}
          <a href="#" className="brand-logo" aria-label="Deepak Kumar Portfolio Home">
            <div className="brand-badge">
              DK
            </div>
            <div className="brand-text">
              Deepak <span>Kumar</span>
            </div>
          </a>

          {/* CENTER: Main Navigation Links */}
          <nav className="nav-links" aria-label="Main Navigation">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`nav-link ${activeSection === item.href.substring(1) ? 'active' : ''}`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* RIGHT: GitHub, LinkedIn, ThemeToggle & Visually Strong Resume Button */}
          <div className="nav-actions">
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-icon nav-icon-btn"
              aria-label="GitHub Profile"
              title="GitHub Profile"
            >
              <GithubIcon size={17} />
            </a>

            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-icon nav-icon-btn"
              aria-label="LinkedIn Profile"
              title="LinkedIn Profile"
            >
              <LinkedinIcon size={17} />
            </a>

            <ThemeToggle />

            {/* Standout Primary Action: Resume Button */}
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-sm nav-resume-btn"
              aria-label="Download Deepak Kumar Resume PDF"
            >
              <FileDown size={15} />
              <span>Resume</span>
            </a>

            {/* Mobile Menu Toggle Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="btn-icon mobile-menu-btn"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div
            className="card-glass mobile-nav-drawer"
            style={{
              position: 'absolute',
              top: '100%',
              left: 0,
              right: 0,
              padding: '1.5rem',
              borderBottom: '1px solid var(--border-color)',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              boxShadow: 'var(--shadow-lg)'
            }}
          >
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="mobile-nav-link"
                style={{
                  fontSize: '1.05rem',
                  fontWeight: 700,
                  color: activeSection === item.href.substring(1) ? 'var(--primary)' : 'var(--text-secondary)',
                  padding: '0.6rem 0',
                  borderBottom: '1px solid var(--border-subtle)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}
              >
                <span>{item.label}</span>
                {activeSection === item.href.substring(1) && (
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--primary)' }} />
                )}
              </a>
            ))}

            {/* Mobile Social Links & Direct Resume Download */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '0.5rem' }}>
              <div style={{ display: 'flex', gap: '0.75rem' }}>
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
              </div>

              <a
                href={RESUME_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="btn btn-primary btn-sm"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}
              >
                <FileDown size={15} />
                <span>Resume PDF</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
