import React, { useState } from 'react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { Mail, Phone, MapPin, Send, MessageCircle, Copy, Check, Globe, ExternalLink, ArrowRight, Loader2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../common/Icons';

export default function ContactSection({ onShowToast }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submittedVia, setSubmittedVia] = useState('both');
  const [copiedField, setCopiedField] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCopy = (text, fieldName) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    if (onShowToast) onShowToast(`${fieldName} copied to clipboard!`);
    setTimeout(() => setCopiedField(null), 2000);
  };

  // Helper to format WhatsApp message
  const getWhatsAppUrl = () => {
    const text = encodeURIComponent(
      `*New Portfolio Message for Deepak Kumar*\n\n` +
      `👤 *Name:* ${formData.name || 'Visitor'}\n` +
      `📧 *Email:* ${formData.email || 'Not provided'}\n` +
      (formData.subject ? `📌 *Subject:* ${formData.subject}\n` : '') +
      `💬 *Message:*\n${formData.message || 'Hi Deepak, I saw your portfolio and would like to connect.'}`
    );
    return `https://wa.me/${PERSONAL_INFO.whatsapp}?text=${text}`;
  };

  // Send via WhatsApp
  const handleSendWhatsAppOnly = (e) => {
    if (e) e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      if (onShowToast) onShowToast('Please fill in Name, Email and Message first.');
      return;
    }
    window.open(getWhatsAppUrl(), '_blank');
    setSubmittedVia('whatsapp');
    setSubmitted(true);
    if (onShowToast) onShowToast('Opening WhatsApp to send your message to Deepak...');
  };

  // Send via Email (FormSubmit AJAX + mailto fallback)
  const handleSendEmailOnly = async (e) => {
    if (e) e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      if (onShowToast) onShowToast('Please fill in Name, Email and Message first.');
      return;
    }

    setIsSubmitting(true);
    try {
      await fetch(`https://formsubmit.co/ajax/${PERSONAL_INFO.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject || `New Portfolio Message from ${formData.name}`,
          message: formData.message,
          _subject: `New Portfolio Message: ${formData.subject || formData.name}`,
          _template: 'table'
        })
      });
    } catch (err) {
      console.error('Email API dispatch error:', err);
    } finally {
      setIsSubmitting(false);
      setSubmittedVia('email');
      setSubmitted(true);
      if (onShowToast) onShowToast(`Message sent to ${PERSONAL_INFO.email}!`);
    }
  };

  // Combined Submit: Sends to Email in background AND opens WhatsApp
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      if (onShowToast) onShowToast('Please fill in Name, Email and Message.');
      return;
    }

    setIsSubmitting(true);

    // 1. Send to Email in background via FormSubmit
    try {
      await fetch(`https://formsubmit.co/ajax/${PERSONAL_INFO.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject || `New Portfolio Message from ${formData.name}`,
          message: formData.message,
          _subject: `Portfolio Message from ${formData.name} (${formData.email})`,
          _template: 'table'
        })
      });
    } catch (err) {
      console.error('Email dispatch error:', err);
    }

    // 2. Open WhatsApp in new tab so Deepak gets instant notification
    window.open(getWhatsAppUrl(), '_blank');

    setIsSubmitting(false);
    setSubmittedVia('both');
    setSubmitted(true);
    if (onShowToast) onShowToast('Message sent to Deepak via WhatsApp & Email!');
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

          {/* Right Column: Contact Form & Instant Delivery */}
          <div className="card" style={{ padding: '2.25rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem', flexWrap: 'wrap', gap: '0.75rem' }}>
              <div>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 800 }}>Send a Direct Message</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
                  Your message goes straight to Deepak's WhatsApp &amp; Email
                </p>
              </div>
              <button
                type="button"
                onClick={handleSendWhatsAppOnly}
                className="btn btn-primary btn-sm"
                style={{ gap: '0.35rem' }}
                title="Send instant WhatsApp message to +91-9027687004"
              >
                <MessageCircle size={15} />
                <span>WhatsApp (+91-9027687004)</span>
              </button>
            </div>

            {submitted ? (
              <div style={{ textAlign: 'center', padding: '2.5rem 1rem' }}>
                <div style={{ width: '60px', height: '60px', borderRadius: '50%', backgroundColor: 'rgba(16, 185, 129, 0.15)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem auto' }}>
                  <Check size={32} />
                </div>
                <h4 style={{ fontSize: '1.35rem', fontWeight: 800, marginBottom: '0.5rem' }}>Message Dispatched!</h4>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: 1.6, maxWidth: '440px', margin: '0 auto 1.5rem auto' }}>
                  Your message was routed directly to Deepak Kumar on{' '}
                  <strong style={{ color: 'var(--primary)' }}>WhatsApp (+91-9027687004)</strong> and{' '}
                  <strong style={{ color: 'var(--accent-cyan)' }}>Email (deepakkumar19152002@gmail.com)</strong>.
                </p>
                <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-sm"
                  >
                    <MessageCircle size={15} />
                    <span>Open WhatsApp Chat</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="btn btn-outline btn-sm"
                  >
                    Send Another Message
                  </button>
                </div>
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
                    placeholder="e.g. Rahul Sharma / Recruiter"
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
                    placeholder="e.g. recruiter@company.com"
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

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '1.25rem' }}>
                  {/* Primary Send Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn btn-primary btn-lg"
                    style={{ width: '100%', gap: '0.6rem' }}
                    title="Send message to Deepak via WhatsApp & Email"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 size={18} className="spin" />
                        <span>Dispatching Message...</span>
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        <span>Send Message to Deepak</span>
                      </>
                    )}
                  </button>

                  {/* Instant Channel Options */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '0.75rem' }}>
                    <button
                      type="button"
                      onClick={handleSendWhatsAppOnly}
                      className="btn btn-secondary btn-sm"
                      style={{ color: 'var(--primary)', borderColor: 'var(--primary-subtle)', gap: '0.45rem', justifyContent: 'center' }}
                      title="Send directly to Deepak's WhatsApp (+91-9027687004)"
                    >
                      <MessageCircle size={16} />
                      <span>Send via WhatsApp</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleSendEmailOnly}
                      className="btn btn-secondary btn-sm"
                      style={{ color: 'var(--accent-cyan)', borderColor: 'rgba(56, 189, 248, 0.3)', gap: '0.45rem', justifyContent: 'center' }}
                      title="Send directly to Deepak's Email (deepakkumar19152002@gmail.com)"
                    >
                      <Mail size={16} />
                      <span>Send via Email</span>
                    </button>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
