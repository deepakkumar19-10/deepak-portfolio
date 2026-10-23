import React, { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';
import { Menu, X, FileDown, Smartphone, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { GITHUB_URL, LINKEDIN_URL, RESUME_URL } from '../../data/portfolioData';

const NAV_ITEMS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Why Hire Me', href: '#why-hire-me' },
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
      const sections = ['about', 'skills', 'experience', 'projects', 'why-hire-me', 'contact'];
      const current = sections.find((sec) => {
        const el = document.getElementById(sec);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 240 && rect.bottom >= 140;
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
          background: 'var(--accent-gradient)',
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

          {/* RIGHT: Actions */}
          <div className="nav-actions">
            {/* Glowing Hire Me CTA */}
            <a
              href="#why-hire-me"
              className="btn btn-hire-me btn-sm nav-hire-btn"
              title="Why Hire Deepak Kumar"
            >
              <Sparkles size={14} />
              <span>Hire Me</span>
            </a>

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

            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-sm nav-resume-btn"
              aria-label="Download Deepak Kumar Resume PDF"
            >
              <FileDown size={14} />
              <span>Resume</span>
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="btn-icon mobile-menu-btn"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="mobile-drawer">
            <div className="mobile-nav-links">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`mobile-nav-link ${activeSection === item.href.substring(1) ? 'active' : ''}`}
                >
                  {item.label}
                </a>
              ))}
              <div style={{ paddingTop: '1rem', borderTop: '1px solid var(--border-color)', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <a
                  href="#why-hire-me"
                  onClick={() => setMobileMenuOpen(false)}
                  className="btn btn-hire-me btn-sm"
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  <Sparkles size={15} />
                  <span>Why Hire Me</span>
                </a>
                <a
                  href={RESUME_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-sm"
                  style={{ width: '100%' }}
                >
                  <FileDown size={15} />
                  <span>Download Resume PDF</span>
                </a>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <a
                    href={GITHUB_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary btn-sm"
                    style={{ flex: 1 }}
                  >
                    <GithubIcon size={15} />
                    <span>GitHub</span>
                  </a>
                  <a
                    href={LINKEDIN_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary btn-sm"
                    style={{ flex: 1 }}
                  >
                    <LinkedinIcon size={15} />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
