import React from 'react';
import { PERSONAL_INFO, LIVE_WEBSITE_URL, RESUME_URL } from '../../data/portfolioData';
import { ArrowUp, Mail, MessageCircle, Globe, FileDown, Smartphone } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer no-print">
      <div className="container">
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem', marginBottom: '2.5rem' }}>
          <div className="brand-logo" style={{ fontSize: '1.6rem' }}>
            <div className="brand-badge" style={{ width: '42px', height: '42px', fontSize: '1.2rem' }}>
              DK
            </div>
            <span>Deepak Kumar</span>
          </div>

          <p style={{ maxWidth: '580px', color: 'var(--text-muted)', fontSize: '0.96rem', margin: '0 auto', textAlign: 'center', lineHeight: 1.65 }}>
            Mobile &amp; Frontend Developer specializing in <strong>React Native</strong> cross-platform mobile apps and modern <strong>React.js</strong> web applications. Creator of live dual-platform platform{' '}
            <a
              href={LIVE_WEBSITE_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontWeight: 800, color: 'var(--primary)', textDecoration: 'underline' }}
            >
              divyabraj.com
            </a>.
          </p>

          {/* Social & Channel Links */}
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-icon"
              aria-label="GitHub Profile"
              title="GitHub Profile"
            >
              <GithubIcon size={18} />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
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
              className="btn-icon"
              aria-label="Visit Live Website: DivyaBraj"
              title="Visit Live Website: DivyaBraj"
              style={{ color: 'var(--primary)' }}
            >
              <Globe size={18} />
            </a>
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-icon"
              aria-label="Download Resume PDF"
              title="Download Resume PDF"
            >
              <FileDown size={18} />
            </a>
            <a
              href={`https://wa.me/${PERSONAL_INFO.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-icon"
              aria-label="WhatsApp Message"
              title="WhatsApp Message"
            >
              <MessageCircle size={18} />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="btn-icon"
              aria-label="Email Deepak Kumar"
              title="Email Deepak Kumar"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>

        <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', fontSize: '0.88rem', color: 'var(--text-muted)' }}>
          <div>
            &copy; {new Date().getFullYear()} Deepak Kumar • Mobile &amp; Frontend Developer
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="btn btn-secondary btn-sm"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}
            aria-label="Scroll back to top of page"
          >
            <span>Back to Top</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
