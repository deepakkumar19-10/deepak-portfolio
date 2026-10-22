import React from 'react';
import Modal from '../common/Modal';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { MessageCircle, Mail } from 'lucide-react';

export default function RecruiterPitch({ isOpen, onClose }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="⚡ 30-Second Recruiter Pitch">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <div style={{ backgroundColor: 'var(--primary-light)', border: '1px solid var(--primary-subtle)', borderRadius: 'var(--radius-md)', padding: '1rem 1.25rem' }}>
          <h4 style={{ color: 'var(--primary-hover)', fontSize: '1.05rem', fontWeight: 800, marginBottom: '0.35rem' }}>
            Why Hire Deepak Kumar for Your Development Team?
          </h4>
          <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
            I build responsive, database-driven web applications using React.js, Node.js, Express.js, MongoDB, and SQL. With live production deployment experience on Divya Braj (divyabraj.com) and formal MCA training from GLA University, I deliver clean code, secure REST APIs, and reliable database architecture.
          </p>
        </div>

        {/* 4 Pillars */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
          <div style={{ padding: '0.85rem', backgroundColor: 'var(--bg-subtle)', borderRadius: 'var(--radius-sm)' }}>
            <div style={{ fontWeight: 700, fontSize: '0.9rem', marginBottom: '0.2rem' }}>🎯 Core Stack</div>
            <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>MERN Stack, REST APIs, MongoDB &amp; MySQL</div>
          </div>

          <div style={{ padding: '0.85rem', backgroundColor: 'var(--bg-subtle)', borderRadius: 'var(--radius-sm)' }}>
            <div style={{ fontWeight: 700, fontSize: '0.9rem', marginBottom: '0.2rem' }}>🎓 Qualifications</div>
            <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>MCA (GLA University) &amp; B.Sc.</div>
          </div>

          <div style={{ padding: '0.85rem', backgroundColor: 'var(--bg-subtle)', borderRadius: 'var(--radius-sm)' }}>
            <div style={{ fontWeight: 700, fontSize: '0.9rem', marginBottom: '0.2rem' }}>🌐 Live Production</div>
            <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>divyabraj.com (Braj Darshan Platform)</div>
          </div>

          <div style={{ padding: '0.85rem', backgroundColor: 'var(--bg-subtle)', borderRadius: 'var(--radius-sm)' }}>
            <div style={{ fontWeight: 700, fontSize: '0.9rem', marginBottom: '0.2rem' }}>⚡ Availability</div>
            <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>Full-Time / Remote / Hybrid</div>
          </div>
        </div>

        {/* Direct Action Buttons */}
        <div style={{ display: 'flex', gap: '0.75rem', borderTop: '1px solid var(--border-color)', paddingTop: '1.25rem', flexWrap: 'wrap' }}>
          <a
            href={`https://wa.me/${PERSONAL_INFO.whatsapp}?text=Hi%20Deepak,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20discuss%20an%20opportunity.`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-sm"
          >
            <MessageCircle size={16} />
            <span>Chat on WhatsApp</span>
          </a>

          <a
            href={`mailto:${PERSONAL_INFO.email}?subject=Frontend%20Developer%20Opportunity`}
            className="btn btn-outline btn-sm"
          >
            <Mail size={16} />
            <span>Send Direct Email</span>
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
