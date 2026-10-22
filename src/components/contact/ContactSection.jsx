import React, { useState } from 'react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { Mail, Phone, MapPin, Send, MessageCircle, Copy, Check, Globe, ExternalLink, ArrowRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../common/Icons';

export default function ContactSection({ onShowToast }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [copiedField, setCopiedField] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
    if (onShowToast) onShowToast('Thank you! Your message has been sent to Deepak.');
  };

  const handleCopy = (text, fieldName) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    if (onShowToast) onShowToast(`${fieldName} copied to clipboard!`);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleWhatsAppSend = () => {
    const text = encodeURIComponent(
      `Hi Deepak, I saw your portfolio!\nMy Name: ${formData.name || 'Visitor'}\nMessage: ${formData.message || 'I would like to discuss an opportunity.'}`
    );
    window.open(`https://wa.me/${PERSONAL_INFO.whatsapp}?text=${text}`, '_blank');
  };

  return (
    <section className="section section-alt" id="contact">
      {/* Ambient Glow */}
      <div className="ambient-glow ambient-glow-emerald" style={{ top: '10%', right: '10%', width: '400px', height: '400px' }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="section-header">
          <span className="section-tag">Contact</span>
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-desc">
            Feel free to reach out if you have an open role, a project, or would like to connect.
          </p>
        </div>

        <div className="contact-grid">
          {/* Left Column: Direct Contact Info & Socials */}
          <div>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '1.25rem' }}>
              Direct Channels
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2.5rem' }}>
              {/* Email Card */}
              <div className="card" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1.25rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ width: '42px', height: '42px', borderRadius: '50%', backgroundColor: 'rgba(16, 185, 129, 0.12)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Mail size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 700 }}>Email Address</div>
                    <a href={`mailto:${PERSONAL_INFO.email}`} style={{ fontWeight: 700, fontSize: '0.95rem' }}>
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => handleCopy(PERSONAL_INFO.email, 'Email')}
                  className="btn-icon"
                  style={{ width: '34px', height: '34px' }}
                  title="Copy Email Address"
                >
                  {copiedField === 'Email' ? <Check size={15} color="var(--primary)" /> : <Copy size={15} />}
                </button>
              </div>

              {/* Phone Card */}
              <div className="card" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1.25rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ width: '42px', height: '42px', borderRadius: '50%', backgroundColor: 'rgba(6, 182, 212, 0.12)', color: 'var(--accent-cyan)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Phone size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 700 }}>Phone / WhatsApp</div>
                    <a href={`tel:${PERSONAL_INFO.phone}`} style={{ fontWeight: 700, fontSize: '0.95rem' }}>
                      {PERSONAL_INFO.phone}
                    </a>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => handleCopy(PERSONAL_INFO.phone, 'Phone')}
                  className="btn-icon"
                  style={{ width: '34px', height: '34px' }}
                  title="Copy Phone Number"
                >
                  {copiedField === 'Phone' ? <Check size={15} color="var(--primary)" /> : <Copy size={15} />}
                </button>
              </div>

              {/* Location Card */}
              <div className="card" style={{ display: 'flex', alignItems: 'center', padding: '1.25rem', gap: '1rem' }}>
                <div style={{ width: '42px', height: '42px', borderRadius: '50%', backgroundColor: 'rgba(245, 158, 11, 0.12)', color: 'var(--accent-amber)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <MapPin size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 700 }}>Location</div>
                  <div style={{ fontWeight: 700, fontSize: '0.95rem' }}>{PERSONAL_INFO.location}</div>
                </div>
              </div>

              {/* Live Website Card */}
              <div className="card" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1.25rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ width: '42px', height: '42px', borderRadius: '50%', backgroundColor: 'rgba(99, 102, 241, 0.12)', color: 'var(--accent-indigo)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Globe size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 700 }}>Live Platform</div>
                    <a href={PERSONAL_INFO.liveWebsite} target="_blank" rel="noopener noreferrer" style={{ fontWeight: 700, fontSize: '0.95rem' }}>
                      divyabraj.com
                    </a>
                  </div>
                </div>
                <a
                  href={PERSONAL_INFO.liveWebsite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-icon"
                  style={{ width: '34px', height: '34px' }}
                  title="Open divyabraj.com"
                >
                  <ExternalLink size={15} />
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 style={{ fontSize: '1rem', fontWeight: 800, marginBottom: '0.85rem' }}>
                Developer Profiles
              </h4>
              <div style={{ display: 'flex', gap: '0.75rem' }}>
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline btn-sm"
                  title="GitHub Profile"
                >
                  <GithubIcon size={16} />
                  <span>GitHub Profile</span>
                </a>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline btn-sm"
                  title="LinkedIn Profile"
                >
                  <LinkedinIcon size={16} />
                  <span>LinkedIn Profile</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form & Instant WhatsApp */}
          <div className="card" style={{ padding: '2.25rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 800 }}>Send a Direct Message</h3>
              <button
                type="button"
                onClick={handleWhatsAppSend}
                className="btn btn-primary btn-sm"
                style={{ gap: '0.35rem' }}
                title="Send instant WhatsApp message"
              >
                <MessageCircle size={15} />
                <span>WhatsApp Me</span>
              </button>
            </div>

            {submitted ? (
              <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
                <div style={{ width: '56px', height: '56px', borderRadius: '50%', backgroundColor: 'rgba(16, 185, 129, 0.12)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem auto' }}>
                  <Check size={28} />
                </div>
                <h4 style={{ fontSize: '1.3rem', fontWeight: 800, marginBottom: '0.5rem' }}>Message Received!</h4>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                  Thank you for reaching out. Deepak will get back to you promptly.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="btn btn-outline btn-sm"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label className="form-label" htmlFor="contact-name">Your Full Name *</label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Sarthak Sharma / Recruiter"
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="contact-email">Your Work Email *</label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. hiring@company.com"
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="contact-subject">Subject</label>
                  <input
                    type="text"
                    id="contact-subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Mobile Developer Opportunity / Collaboration"
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="contact-message">Message *</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Share your requirements or interview availability..."
                    className="form-textarea"
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ width: '100%', marginTop: '0.5rem' }}
                >
                  <Send size={16} />
                  <span>Send Message to Deepak</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
