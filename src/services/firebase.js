import { initializeApp, getApps } from 'firebase/app';
import { getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore';

// Firebase configuration from environment variables
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || '',
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || '',
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || '',
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || '',
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || '',
  appId: import.meta.env.VITE_FIREBASE_APP_ID || ''
};

let db = null;
let isConfigured = false;

try {
  if (firebaseConfig.apiKey && firebaseConfig.projectId) {
    const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
    db = getFirestore(app);
    isConfigured = true;
  }
} catch (error) {
  console.warn('[Firebase] Initialization skipped or error:', error);
}

/**
 * Save visitor contact inquiry to Firebase Firestore ('inquiries' collection)
 * with graceful fallback to local storage if credentials are not yet configured.
 */
export async function saveLeadToFirestore(leadData) {
  const payload = {
    name: leadData.name || 'Anonymous',
    email: leadData.email || '',
    phone: leadData.phone || leadData.whatsapp || '',
    subject: leadData.subject || 'Portfolio Inquiry',
    message: leadData.message || '',
    pageSource: leadData.pageSource || 'Contact Form',
    status: 'new',
    createdAt: new Date().toISOString()
  };

  if (isConfigured && db) {
    try {
      const docRef = await addDoc(collection(db, 'inquiries'), {
        ...payload,
        timestamp: serverTimestamp()
      });
      console.log('[Firebase] Inquiry saved with ID:', docRef.id);
      return { success: true, id: docRef.id, source: 'firestore' };
    } catch (err) {
      console.error('[Firebase] Firestore save error:', err);
      saveToLocalBackup(payload);
      return { success: true, source: 'local_fallback', error: err.message };
    }
  } else {
    // Offline / Pending Config Fallback
    saveToLocalBackup(payload);
    return { success: true, source: 'local_fallback' };
  }
}

/**
 * Save chat summary or AI conversation lead to Firestore ('ai_chats' collection)
 */
export async function saveAIChatToFirestore(chatData) {
  const payload = {
    visitorName: chatData.name || 'Visitor',
    contact: chatData.contact || '',
    summary: chatData.summary || '',
    messages: chatData.messages || [],
    pageSource: 'AI Assistant Widget',
    status: 'ai_lead',
    createdAt: new Date().toISOString()
  };

  if (isConfigured && db) {
    try {
      const docRef = await addDoc(collection(db, 'ai_chats'), {
        ...payload,
        timestamp: serverTimestamp()
      });
      return { success: true, id: docRef.id, source: 'firestore' };
    } catch (err) {
      console.error('[Firebase] AI chat save error:', err);
      saveToLocalBackup(payload);
      return { success: true, source: 'local_fallback' };
    }
  } else {
    saveToLocalBackup(payload);
    return { success: true, source: 'local_fallback' };
  }
}

function saveToLocalBackup(item) {
  try {
    const list = JSON.parse(localStorage.getItem('deepak_leads_backup') || '[]');
    list.unshift({ ...item, savedAt: new Date().toISOString() });
    localStorage.setItem('deepak_leads_backup', JSON.stringify(list.slice(0, 50)));
  } catch (e) {
    console.warn('[Storage] Backup failed:', e);
  }
}

export { isConfigured };
