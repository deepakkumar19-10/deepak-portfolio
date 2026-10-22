import React, { useEffect } from 'react';
import { CheckCircle2 } from 'lucide-react';

export default function Toast({ message, onClose, duration = 3000 }) {
  useEffect(() => {
    if (!message) return;
    const timer = setTimeout(() => {
      onClose();
    }, duration);
    return () => clearTimeout(timer);
  }, [message, duration, onClose]);

  if (!message) return null;

  return (
    <div className="toast-container">
      <div className="toast-message">
        <CheckCircle2 size={18} color="var(--primary)" />
        <span>{message}</span>
      </div>
    </div>
  );
}
