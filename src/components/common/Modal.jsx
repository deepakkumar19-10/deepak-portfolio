import React, { useEffect } from 'react';
import { X } from 'lucide-react';

export default function Modal({ isOpen, onClose, title, children }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          onClick={onClose}
          className="modal-close"
          aria-label="Close dialog"
        >
          <X size={18} />
        </button>

        {title && (
          <div style={{ padding: '1.5rem 2rem', borderBottom: '1px solid var(--border-color)' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 800 }}>{title}</h3>
          </div>
        )}

        <div style={{ padding: '2rem' }}>
          {children}
        </div>
      </div>
    </div>
  );
}
