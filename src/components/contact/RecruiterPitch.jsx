import React from 'react';
import Modal from '../common/Modal';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { MessageCircle, Mail, Zap } from 'lucide-react';

export default function RecruiterPitch({ isOpen, onClose }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="⚡ 30-Second Summary">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <div style={{ backgroundColor: 'var(--primary-light)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', padding: '1.25rem' }}>
          <h4 style={{ color: 'var(--primary)', fontSize: '1.05rem', fontWeight: 800, marginBottom: '0.45rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <Zap size={18} />
            <span>Why I Would Be a Great Fit for Your Team</span>
          </h4>
          <p style={{ fontSize: '0.94rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
            I build cross-platform mobile apps with <strong>React Native</strong> and modern web apps with <strong>React.js</strong>. At <strong>CrowdApps Technology</strong>, I integrate REST APIs with Axios and manage state with Redux Toolkit. I also built and launched <strong>DivyaBraj (divyabraj.com)</strong>. With an MCA degree from GLA University, I am ready to join your team immediately.
          </p>
        </div>

        {/* 4 Core Highlights */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
          <div style={{ padding: '0.9rem', backgroundColor: 'var(--bg-subtle)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)' }}>
            <div style={{ fontWeight: 800, fontSize: '0.9rem', marginBottom: '0.2rem', color: 'var(--primary)' }}>
              📱 Mobile Development
            </div>
            <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
              React Native, React Navigation, NativeWind, AsyncStorage
            </div>
          </div>

          <div style={{ padding: '0.9rem', backgroundColor: 'var(--bg-subtle)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)' }}>
            <div style={{ fontWeight: 800, fontSize: '0.9rem', marginBottom: '0.2rem', color: 'var(--accent-cyan)' }}>
              ⚡ State &amp; APIs
            </div>
            <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
              Redux Toolkit, REST APIs with Axios, Offline Storage
            </div>
          </div>

          <div style={{ padding: '0.9rem', backgroundColor: 'var(--bg-subtle)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)' }}>
            <div style={{ fontWeight: 800, fontSize: '0.9rem', marginBottom: '0.2rem', color: 'var(--accent-amber)' }}>
              🌐 Live Website
            </div>
            <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
              divyabraj.com (Braj Tourism Platform)
            </div>
          </div>

          <div style={{ padding: '0.9rem', backgroundColor: 'var(--bg-subtle)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)' }}>
            <div style={{ fontWeight: 800, fontSize: '0.9rem', marginBottom: '0.2rem', color: 'var(--accent-indigo)' }}>
              🎓 Education &amp; Availability
            </div>
            <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
              MCA (GLA University) • Available Immediately
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div style={{ display: 'flex', gap: '0.75rem', borderTop: '1px solid var(--border-color)', paddingTop: '1.25rem', flexWrap: 'wrap' }}>
          <a
            href={`https://wa.me/${PERSONAL_INFO.whatsapp}?text=Hi%20Deepak,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect.`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-sm"
          >
            <MessageCircle size={16} />
            <span>Chat on WhatsApp</span>
          </a>

          <a
            href={`mailto:${PERSONAL_INFO.email}?subject=Job%20Opportunity%20for%20Deepak%20Kumar`}
            className="btn btn-outline btn-sm"
          >
            <Mail size={16} />
            <span>Send Email</span>
          </a>

          <button
            type="button"
            onClick={onClose}
            className="btn btn-secondary btn-sm"
            style={{ marginLeft: 'auto' }}
          >
            Close
          </button>
        </div>
      </div>
    </Modal>
  );
}
