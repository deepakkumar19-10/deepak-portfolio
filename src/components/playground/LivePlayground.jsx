import React, { useState } from 'react';
import { Copy, Check, Sparkles, CheckCircle2, AlertCircle, RefreshCw } from 'lucide-react';

export default function LivePlayground({ onShowToast }) {
  const [activeTab, setActiveTab] = useState('buttons'); // 'buttons', 'form', 'card'
  const [copied, setCopied] = useState(false);

  // Button Demo State
  const [buttonVariant, setButtonVariant] = useState('primary'); // 'primary', 'secondary', 'ghost', 'danger'
  const [buttonLoading, setButtonLoading] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [clickCount, setClickCount] = useState(0);

  // Form Demo State
  const [formData, setFormData] = useState({
    name: 'Deepak Kumar',
    email: 'deepak@example.com',
    password: 'SecurePassword123'
  });

  // Card Demo State
  const [cardBadge, setCardBadge] = useState('MERN Stack');
  const [cardQuantity, setCardQuantity] = useState(1);
  const [cardRating, setCardRating] = useState(5);

  // Validation logic
  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);
  const isPasswordStrong = formData.password.length >= 8 && /[A-Z]/.test(formData.password) && /[0-9]/.test(formData.password);

  // Generate code snippet based on active tab
  const getGeneratedCode = () => {
    if (activeTab === 'buttons') {
      return `/* Reusable Action Button Component */
<button
  type="button"
  disabled={${buttonDisabled} || ${buttonLoading}}
  className="btn btn-${buttonVariant} ${buttonLoading ? 'is-loading' : ''}"
  onClick={() => setClickCount(c => c + 1)}
>
  {${buttonLoading} ? <Spinner size={16} /> : <span>Click Me ({clickCount})</span>}
</button>`;
    }

    if (activeTab === 'form') {
      return `/* Live Validated Input Field */
<div className="input-group">
  <label>Email Address</label>
  <input
    type="email"
    value="${formData.email}"
    className="${isEmailValid ? 'border-success' : 'border-error'}"
    onChange={(e) => validateAndSetEmail(e.target.value)}
  />
  ${isEmailValid ? '<span className="text-success">✓ Valid Email</span>' : '<span className="text-error">✗ Invalid Email Format</span>'}
</div>`;
    }

    return `/* Reusable Product / Service Card */
<div className="product-card">
  <span className="badge badge-tech">${cardBadge}</span>
  <h4>Full-Stack Architecture</h4>
  <p>Interactive quantity: ${cardQuantity} (Total: $${cardQuantity * 49})</p>
  <div className="rating">Rating: ${cardRating} / 5 ★</div>
</div>`;
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(getGeneratedCode());
    setCopied(true);
    if (onShowToast) onShowToast('Component code copied to clipboard!');
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="section section-alt" id="lab">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Developer Showcase</span>
          <h2 className="section-title">Interactive Component Lab</h2>
          <p className="section-desc">
            Hands-on proof of modern React component engineering: test interactive states, live form validations, and dynamic UI systems.
          </p>
        </div>

        <div className="playground-wrapper">
          {/* Mac-style Window Header */}
          <div className="playground-header">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
              <div className="window-dots">
                <span className="window-dot dot-red" />
                <span className="window-dot dot-yellow" />
                <span className="window-dot dot-green" />
              </div>

              {/* Lab Mode Tabs */}
              <div style={{ display: 'flex', gap: '0.35rem', backgroundColor: 'var(--bg-card)', padding: '0.25rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)' }}>
                {[
                  { id: 'buttons', label: '1. Button System' },
                  { id: 'form', label: '2. Form Validation' },
                  { id: 'card', label: '3. Dynamic Card' }
                ].map((t) => (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => setActiveTab(t.id)}
                    style={{
                      padding: '0.35rem 0.85rem',
                      borderRadius: 'var(--radius-sm)',
                      fontSize: '0.8rem',
                      fontWeight: activeTab === t.id ? 800 : 600,
                      backgroundColor: activeTab === t.id ? 'var(--primary)' : 'transparent',
                      color: activeTab === t.id ? '#ffffff' : 'var(--text-secondary)',
                      transition: 'all 0.15s ease'
                    }}
                  >
                    {t.label}
                  </button>
                ))}
              </div>
            </div>

            <button
              type="button"
              onClick={handleCopyCode}
              className="btn btn-outline btn-sm"
              style={{ fontSize: '0.82rem', gap: '0.35rem' }}
              aria-label="Copy React Snippet"
            >
              {copied ? <Check size={14} color="var(--primary)" /> : <Copy size={14} />}
              <span>{copied ? 'Copied Snippet!' : 'Copy Code'}</span>
            </button>
          </div>

          <div className="playground-grid">
            {/* Left Column: Interactive Parameters Panel */}
            <div className="playground-controls">
              {/* TAB 1: Button System Controls */}
              {activeTab === 'buttons' && (
                <>
                  <div>
                    <h4 style={{ fontSize: '1rem', fontWeight: 800, marginBottom: '0.35rem' }}>
                      Button Variants
                    </h4>
                    <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '0.85rem' }}>
                      Select state and style tokens to observe reactive component behavior.
                    </p>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
                      {['primary', 'secondary', 'outline', 'danger'].map((v) => (
                        <button
                          key={v}
                          type="button"
                          onClick={() => setButtonVariant(v)}
                          className={`btn btn-sm ${buttonVariant === v ? 'btn-primary' : 'btn-secondary'}`}
                          style={{ textTransform: 'capitalize', fontSize: '0.8rem' }}
                        >
                          {v}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                    <h4 style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                      Modifier States
                    </h4>
                    <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', cursor: 'pointer' }}>
                      <input
                        type="checkbox"
                        checked={buttonLoading}
                        onChange={(e) => setButtonLoading(e.target.checked)}
                      />
                      <span>Simulate Async Loading State</span>
                    </label>

                    <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', cursor: 'pointer' }}>
                      <input
                        type="checkbox"
                        checked={buttonDisabled}
                        onChange={(e) => setButtonDisabled(e.target.checked)}
                      />
                      <span>Disable Element (`disabled=true`)</span>
                    </label>
                  </div>

                  <div style={{ padding: '0.85rem', backgroundColor: 'var(--bg-subtle)', borderRadius: 'var(--radius-sm)', fontSize: '0.82rem' }}>
                    <strong>Interactive Click State: </strong>
                    <span style={{ color: 'var(--primary)', fontWeight: 800 }}>{clickCount} total clicks</span>
                    <button
                      type="button"
                      onClick={() => setClickCount(0)}
                      style={{ display: 'block', marginTop: '0.35rem', color: 'var(--text-muted)', textDecoration: 'underline', cursor: 'pointer' }}
                    >
                      Reset counter
                    </button>
                  </div>
                </>
              )}

              {/* TAB 2: Form Validation Controls */}
              {activeTab === 'form' && (
                <>
                  <div>
                    <h4 style={{ fontSize: '1rem', fontWeight: 800, marginBottom: '0.35rem' }}>
                      Live Validation Inputs
                    </h4>
                    <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '0.85rem' }}>
                      Type into fields to observe real-time regex &amp; state checks.
                    </p>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                    <label style={{ fontSize: '0.82rem', fontWeight: 700 }}>Full Name</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={{ padding: '0.55rem 0.85rem', borderRadius: 'var(--radius-sm)', border: '1.5px solid var(--border-color)', background: 'var(--bg-card)', color: 'var(--text-primary)', fontSize: '0.88rem' }}
                    />
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                    <label style={{ fontSize: '0.82rem', fontWeight: 700 }}>Email Address</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={{
                        padding: '0.55rem 0.85rem',
                        borderRadius: 'var(--radius-sm)',
                        border: `1.5px solid ${isEmailValid ? '#10b981' : '#f43f5e'}`,
                        background: 'var(--bg-card)',
                        color: 'var(--text-primary)',
                        fontSize: '0.88rem'
                      }}
                    />
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                    <label style={{ fontSize: '0.82rem', fontWeight: 700 }}>Password (min 8 chars, 1 number, 1 uppercase)</label>
                    <input
                      type="text"
                      value={formData.password}
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                      style={{
                        padding: '0.55rem 0.85rem',
                        borderRadius: 'var(--radius-sm)',
                        border: `1.5px solid ${isPasswordStrong ? '#10b981' : '#f59e0b'}`,
                        background: 'var(--bg-card)',
                        color: 'var(--text-primary)',
                        fontSize: '0.88rem'
                      }}
                    />
                  </div>
                </>
              )}

              {/* TAB 3: Dynamic Card Controls */}
              {activeTab === 'card' && (
                <>
                  <div>
                    <h4 style={{ fontSize: '1rem', fontWeight: 800, marginBottom: '0.35rem' }}>
                      Card Props &amp; State
                    </h4>
                    <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '0.85rem' }}>
                      Tweak props to dynamically re-render the card layout.
                    </p>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                    <label style={{ fontSize: '0.82rem', fontWeight: 700 }}>Badge Label</label>
                    <div style={{ display: 'flex', gap: '0.4rem' }}>
                      {['MERN Stack', 'Production', 'Verified'].map((b) => (
                        <button
                          key={b}
                          type="button"
                          onClick={() => setCardBadge(b)}
                          className={`btn btn-sm ${cardBadge === b ? 'btn-primary' : 'btn-secondary'}`}
                          style={{ fontSize: '0.78rem' }}
                        >
                          {b}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.82rem', fontWeight: 700 }}>
                      <span>Rating Stars</span>
                      <span style={{ color: 'var(--accent)' }}>{'★'.repeat(cardRating)} ({cardRating}/5)</span>
                    </div>
                    <input
                      type="range"
                      min="1"
                      max="5"
                      value={cardRating}
                      onChange={(e) => setCardRating(Number(e.target.value))}
                      style={{ accentColor: 'var(--primary)', cursor: 'pointer' }}
                    />
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.75rem', backgroundColor: 'var(--bg-subtle)', borderRadius: 'var(--radius-sm)' }}>
                    <span style={{ fontSize: '0.85rem', fontWeight: 700 }}>Module Quantity</span>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                      <button
                        type="button"
                        onClick={() => setCardQuantity(Math.max(1, cardQuantity - 1))}
                        className="btn btn-secondary btn-sm"
                        style={{ width: '28px', height: '28px', padding: 0, justifyContent: 'center' }}
                      >
                        -
                      </button>
                      <span style={{ fontWeight: 800, fontSize: '0.95rem' }}>{cardQuantity}</span>
                      <button
                        type="button"
                        onClick={() => setCardQuantity(cardQuantity + 1)}
                        className="btn btn-secondary btn-sm"
                        style={{ width: '28px', height: '28px', padding: 0, justifyContent: 'center' }}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Right Column: Live Interactive Preview */}
            <div className="playground-preview">
              {/* TAB 1: Button Live Preview */}
              {activeTab === 'buttons' && (
                <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem', width: '100%', maxWidth: '360px' }}>
                  <div className="card" style={{ padding: '2.5rem', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.25rem' }}>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      Rendered Button
                    </span>

                    <button
                      type="button"
                      disabled={buttonDisabled || buttonLoading}
                      onClick={() => setClickCount(c => c + 1)}
                      className={`btn btn-${buttonVariant} btn-lg`}
                      style={{
                        minWidth: '180px',
                        justifyContent: 'center',
                        opacity: buttonDisabled ? 0.45 : 1,
                        cursor: buttonDisabled ? 'not-allowed' : 'pointer'
                      }}
                    >
                      {buttonLoading ? (
                        <>
                          <RefreshCw size={18} className="spin-animation" />
                          <span>Processing...</span>
                        </>
                      ) : (
                        <>
                          <Sparkles size={18} />
                          <span>Interactive Action ({clickCount})</span>
                        </>
                      )}
                    </button>

                    <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                      {buttonDisabled ? 'State: Disabled' : buttonLoading ? 'State: Loading' : `Variant: btn-${buttonVariant}`}
                    </span>
                  </div>
                </div>
              )}

              {/* TAB 2: Form Live Preview */}
              {activeTab === 'form' && (
                <div className="card" style={{ padding: '2rem', width: '100%', maxWidth: '380px' }}>
                  <h4 style={{ fontSize: '1.15rem', fontWeight: 800, marginBottom: '1.25rem' }}>
                    Form State Validation
                  </h4>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.65rem 0.85rem', borderRadius: 'var(--radius-sm)', backgroundColor: 'var(--bg-subtle)' }}>
                      <span style={{ fontSize: '0.85rem', fontWeight: 600 }}>User: {formData.name || 'Anonymous'}</span>
                      <CheckCircle2 size={16} color="#10b981" />
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.65rem 0.85rem', borderRadius: 'var(--radius-sm)', backgroundColor: isEmailValid ? '#ecfdf5' : '#fff1f2', border: `1px solid ${isEmailValid ? '#a7f3d0' : '#fecdd3'}` }}>
                      <span style={{ fontSize: '0.82rem', fontWeight: 700, color: isEmailValid ? '#059669' : '#e11d48' }}>
                        {isEmailValid ? 'Email Pattern Valid' : 'Email Pattern Invalid'}
                      </span>
                      {isEmailValid ? <CheckCircle2 size={16} color="#059669" /> : <AlertCircle size={16} color="#e11d48" />}
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.65rem 0.85rem', borderRadius: 'var(--radius-sm)', backgroundColor: isPasswordStrong ? '#ecfdf5' : '#fffbeb', border: `1px solid ${isPasswordStrong ? '#a7f3d0' : '#fde68a'}` }}>
                      <span style={{ fontSize: '0.82rem', fontWeight: 700, color: isPasswordStrong ? '#059669' : '#d97706' }}>
                        {isPasswordStrong ? 'Password Strength: Strong' : 'Password: Weak/Moderate'}
                      </span>
                      {isPasswordStrong ? <CheckCircle2 size={16} color="#059669" /> : <AlertCircle size={16} color="#d97706" />}
                    </div>

                    <button
                      type="button"
                      disabled={!isEmailValid || !isPasswordStrong}
                      className="btn btn-primary"
                      style={{ width: '100%', justifyContent: 'center', marginTop: '0.5rem', opacity: (!isEmailValid || !isPasswordStrong) ? 0.5 : 1 }}
                    >
                      {(!isEmailValid || !isPasswordStrong) ? 'Correct Validation Errors' : 'Submit Validated Payload'}
                    </button>
                  </div>
                </div>
              )}

              {/* TAB 3: Card Live Preview */}
              {activeTab === 'card' && (
                <div className="card" style={{ padding: '2rem', width: '100%', maxWidth: '380px', border: '2px solid var(--primary)', boxShadow: 'var(--shadow-glow)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                    <span className="badge badge-tech" style={{ backgroundColor: 'var(--primary-light)', color: 'var(--primary)', fontWeight: 800 }}>
                      {cardBadge}
                    </span>
                    <span style={{ color: 'var(--accent)', fontSize: '0.9rem', fontWeight: 800 }}>
                      {'★'.repeat(cardRating)}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.3rem', fontWeight: 800, marginBottom: '0.4rem' }}>
                    Production MERN Module
                  </h3>

                  <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: '1.25rem' }}>
                    Modular component rendering dynamic props, reactive rating states, and calculated pricing.
                  </p>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--border-color)', paddingTop: '1rem' }}>
                    <div>
                      <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 700 }}>Computed Cost</div>
                      <div style={{ fontSize: '1.25rem', fontWeight: 900, color: 'var(--primary)' }}>${cardQuantity * 49}</div>
                    </div>

                    <button type="button" className="btn btn-primary btn-sm">
                      Deploy Module
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
