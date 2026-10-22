import React, { useState } from 'react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { Mail, Phone, MapPin, Send, MessageCircle, Copy, Check, Globe, ExternalLink } from 'lucide-react';
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
      `Hi Deepak, I saw your portfolio!\nMy Name: ${formData.name || 'Visitor'}\nMessage: ${formData.message || 'I would like to connect.'}`
    );
    window.open(`https://wa.me/${PERSONAL_INFO.whatsapp}?text=${text}`, '_blank');
  };

  return (
    <section className="section section-alt" id="contact">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Let's Connect</span>
          <h2 className="section-title">Start a Conversation</h2>
          <p className="section-desc">
            Whether you have an open MERN stack role, a project inquiry, or want to discuss full-stack engineering — I'd love to hear from you.
          </p>
        </div>

        <div className="contact-grid">
          {/* Left Column: Direct Contact Info & Socials */}
          <div>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '1.25rem' }}>
              Direct Channels
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2.5rem' }}>
              {/* Email Card */}
              <div className="card" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1.25rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ width: '42px', height: '42px', borderRadius: '50%', backgroundColor: 'var(--primary-light)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
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
                  style={{ width: '36px', height: '36px' }}
                  title="Copy email"
                  aria-label="Copy email address"
                >
                  {copiedField === 'Email' ? <Check size={16} color="var(--primary)" /> : <Copy size={16} />}
                </button>
              </div>

              {/* Phone / WhatsApp Card */}
              <div className="card" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1.25rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ width: '42px', height: '42px', borderRadius: '50%', backgroundColor: '#f0fdf4', color: '#16a34a', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Phone size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 700 }}>Phone / WhatsApp</div>
                    <div style={{ fontWeight: 700, fontSize: '0.95rem' }}>
                      {PERSONAL_INFO.phone}
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => handleCopy(PERSONAL_INFO.phone, 'Phone')}
                  className="btn-icon"
                  style={{ width: '36px', height: '36px' }}
                  title="Copy phone number"
                  aria-label="Copy phone number"
                >
                  {copiedField === 'Phone' ? <Check size={16} color="var(--primary)" /> : <Copy size={16} />}
                </button>
              </div>

              {/* Live Production Website Card */}
              <div className="card" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1.25rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ width: '42px', height: '42px', borderRadius: '50%', backgroundColor: 'var(--primary-light)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Globe size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 700 }}>Live Production Website</div>
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
                  style={{ width: '36px', height: '36px', color: 'var(--primary)' }}
                  title="Open Live Website: Divya Braj"
                  aria-label="Open Live Website: Divya Braj"
                >
                  <ExternalLink size={16} />
                </a>
              </div>

              {/* Developer Profiles Card */}
              <div className="card" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1.25rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ width: '42px', height: '42px', borderRadius: '50%', backgroundColor: 'var(--bg-subtle)', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <GithubIcon size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 700 }}>Developer Profiles</div>
                    <div style={{ display: 'flex', gap: '1rem', marginTop: '0.2rem' }}>
                      <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" style={{ fontWeight: 700, fontSize: '0.92rem' }}>
                        GitHub
                      </a>
                      <span style={{ color: 'var(--text-muted)' }}>•</span>
                      <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" style={{ fontWeight: 700, fontSize: '0.92rem' }}>
                        LinkedIn
                      </a>
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '0.4rem' }}>
                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-icon"
                    style={{ width: '36px', height: '36px' }}
                    title="GitHub Profile"
                    aria-label="GitHub Profile"
                  >
                    <GithubIcon size={16} />
                  </a>
                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-icon"
                    style={{ width: '36px', height: '36px' }}
                    title="LinkedIn Profile"
                    aria-label="LinkedIn Profile"
                  >
                    <LinkedinIcon size={16} />
                  </a>
                </div>
              </div>

              {/* Location Card */}
              <div className="card" style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1.25rem' }}>
                <div style={{ width: '42px', height: '42px', borderRadius: '50%', backgroundColor: '#eff6ff', color: '#2563eb', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <MapPin size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 700 }}>Location</div>
                  <div style={{ fontWeight: 700, fontSize: '0.95rem' }}>
                    {PERSONAL_INFO.location}
                  </div>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp CTA */}
            <a
              href={`https://wa.me/${PERSONAL_INFO.whatsapp}?text=Hi%20Deepak,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect!`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{ width: '100%', justifyContent: 'center', padding: '0.85rem' }}
            >
              <MessageCircle size={18} />
              <span>Message Instantly on WhatsApp</span>
            </a>
          </div>

          {/* Right Column: Contact Form */}
          <div className="card" style={{ padding: '2.5rem' }}>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '1.5rem' }}>
              Send a Direct Message
            </h3>

            {submitted ? (
              <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
                <div style={{ width: '64px', height: '64px', borderRadius: '50%', backgroundColor: 'var(--primary-light)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem auto' }}>
                  <Check size={32} />
                </div>
                <h4 style={{ fontSize: '1.3rem', fontWeight: 800, marginBottom: '0.5rem' }}>Message Delivered!</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '1.5rem' }}>
                  Thank you for reaching out. Deepak will get back to you within 24 hours.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', subject: '', message: '' });
                  }}
                  className="btn btn-secondary btn-sm"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.25rem' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                    <label style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-primary)' }}>Your Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. Priya Sharma"
                      value={formData.name}
                      onChange={handleChange}
                      style={{
                        padding: '0.7rem 0.95rem',
                        borderRadius: 'var(--radius-md)',
                        border: '1.5px solid var(--border-color)',
                        background: 'var(--bg-body)',
                        color: 'var(--text-primary)',
                        fontFamily: 'inherit',
                        fontSize: '0.92rem'
                      }}
                    />
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                    <label style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-primary)' }}>Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="priya@company.com"
                      value={formData.email}
                      onChange={handleChange}
                      style={{
                        padding: '0.7rem 0.95rem',
                        borderRadius: 'var(--radius-md)',
                        border: '1.5px solid var(--border-color)',
                        background: 'var(--bg-body)',
                        color: 'var(--text-primary)',
                        fontFamily: 'inherit',
                        fontSize: '0.92rem'
                      }}
                    />
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem', marginBottom: '1.25rem' }}>
                  <label style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-primary)' }}>Subject</label>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Job Opportunity / Project Inquiry"
                    value={formData.subject}
                    onChange={handleChange}
                    style={{
                      padding: '0.7rem 0.95rem',
                      borderRadius: 'var(--radius-md)',
                      border: '1.5px solid var(--border-color)',
                      background: 'var(--bg-body)',
                      color: 'var(--text-primary)',
                      fontFamily: 'inherit',
                      fontSize: '0.92rem'
                    }}
                  />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem', marginBottom: '1.75rem' }}>
                  <label style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-primary)' }}>Your Message *</label>
                  <textarea
                    name="message"
                    required
                    rows="5"
                    placeholder="Describe your project, role requirements, or question..."
                    value={formData.message}
                    onChange={handleChange}
                    style={{
                      padding: '0.7rem 0.95rem',
                      borderRadius: 'var(--radius-md)',
                      border: '1.5px solid var(--border-color)',
                      background: 'var(--bg-body)',
                      color: 'var(--text-primary)',
                      fontFamily: 'inherit',
                      fontSize: '0.92rem',
                      resize: 'vertical'
                    }}
                  />
                </div>

                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                  <button type="submit" className="btn btn-primary btn-lg" style={{ flex: 1 }}>
                    <Send size={18} />
                    <span>Send Message</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleWhatsAppSend}
                    className="btn btn-secondary btn-lg"
                    title="Send content directly via WhatsApp"
                  >
                    <MessageCircle size={18} color="#16a34a" />
                    <span>WhatsApp</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
