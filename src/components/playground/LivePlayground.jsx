import React, { useState } from 'react';
import {
  Globe,
  Smartphone,
  Layers,
  ExternalLink,
  Lock,
  RotateCw,
  Plus,
  Minus,
  CheckCircle2,
  Wifi,
  WifiOff,
  ShieldCheck,
  Send,
  Copy,
  Check,
  Code2,
  Zap
} from 'lucide-react';
import { LIVE_WEBSITE_URL } from '../../data/portfolioData';

const SAMPLE_ROOM_ITEMS = [
  { id: 'sofa', name: '3-Seater Sofa', volume: 45, icon: '🛋️' },
  { id: 'bed', name: 'King Bed & Mattress', volume: 60, icon: '🛏️' },
  { id: 'dining', name: 'Dining Table & Chairs', volume: 35, icon: '🪑' },
  { id: 'box', name: 'Standard Moving Box', volume: 5, icon: '📦' },
  { id: 'fridge', name: 'Double-Door Refrigerator', volume: 30, icon: '❄️' }
];

const API_ENDPOINTS = [
  {
    id: 'temples',
    method: 'GET',
    url: '/api/v1/braj/temple-timings',
    desc: 'Fetch real-time darshan & aarti schedules for Mathura & Vrindavan',
    response: {
      status: 200,
      cached: true,
      data: [
        { temple: 'Shri Krishna Janmabhoomi', city: 'Mathura', morningAarti: '05:30 AM', eveningAarti: '07:00 PM', status: 'Open' },
        { temple: 'Banke Bihari Temple', city: 'Vrindavan', morningAarti: '07:45 AM', eveningAarti: '08:30 PM', status: 'Rajbhog Darshan' },
        { temple: 'Prem Mandir', city: 'Vrindavan', lightShow: '07:30 PM', musicalFountain: 'Active' }
      ]
    }
  },
  {
    id: 'survey',
    method: 'POST',
    url: '/api/v1/survey/calculate-volume',
    desc: 'Post inventory survey and compute cubic feet (ft³) volume',
    response: {
      status: 201,
      savedToAsyncStorage: true,
      totalVolumeFt3: 145,
      roomCount: 4,
      offlineSyncStatus: 'synced_with_cloud'
    }
  },
  {
    id: 'cart',
    method: 'GET',
    url: '/api/v1/grocery/cart-inventory',
    desc: 'Fetch active cart items and stock status via Axios with RTK caching',
    response: {
      status: 200,
      itemsInCart: 3,
      totalAmountINR: 849,
      reRenderReduction: '20% via RTK memoized selectors'
    }
  }
];

export default function LivePlayground({ onShowToast }) {
  const [activeTab, setActiveTab] = useState('divyabraj-live'); // 'divyabraj-live', 'managemy-moves', 'redux-api-lab'
  const [iframeKey, setIframeKey] = useState(1);
  const [copied, setCopied] = useState(false);

  // ManageMyMoves Simulator State
  const [selectedRoom, setSelectedRoom] = useState('Living Room');
  const [inventoryCounts, setInventoryCounts] = useState({
    sofa: 1,
    bed: 0,
    dining: 1,
    box: 4,
    fridge: 0
  });
  const [isOffline, setIsOffline] = useState(false);
  const [lastDispatchedAction, setLastDispatchedAction] = useState('survey/addItem');

  // Redux & REST API Lab State
  const [selectedEndpoint, setSelectedEndpoint] = useState(API_ENDPOINTS[0]);
  const [apiLoading, setApiLoading] = useState(false);
  const [apiResponseTime, setApiResponseTime] = useState(38);
  const [apiOutput, setApiOutput] = useState(API_ENDPOINTS[0].response);

  // ManageMyMoves calculations
  const calculateTotalVolume = () => {
    return SAMPLE_ROOM_ITEMS.reduce((sum, item) => {
      const count = inventoryCounts[item.id] || 0;
      return sum + count * item.volume;
    }, 0);
  };

  const handleUpdateItem = (itemId, delta) => {
    setInventoryCounts((prev) => {
      const current = prev[itemId] || 0;
      const next = Math.max(0, current + delta);
      return { ...prev, [itemId]: next };
    });
    setLastDispatchedAction(delta > 0 ? `survey/addItem(${itemId})` : `survey/removeItem(${itemId})`);
    if (onShowToast) {
      onShowToast(
        delta > 0
          ? `Added item to ${selectedRoom} (Saved to AsyncStorage)`
          : `Removed item from ${selectedRoom}`
      );
    }
  };

  const handleTriggerApi = () => {
    setApiLoading(true);
    const mockLatency = Math.floor(Math.random() * 25) + 28;
    setApiResponseTime(mockLatency);

    setTimeout(() => {
      setApiOutput(selectedEndpoint.response);
      setApiLoading(false);
      if (onShowToast) {
        onShowToast(`Axios: ${selectedEndpoint.method} ${selectedEndpoint.url} completed in ${mockLatency}ms (Status: 200 OK)`);
      }
    }, 350);
  };

  const totalVolume = calculateTotalVolume();

  const handleReloadIframe = () => {
    setIframeKey((prev) => prev + 1);
    if (onShowToast) onShowToast('Refreshing live divyabraj.com frame...');
  };

  const getCodeSnippet = () => {
    if (activeTab === 'divyabraj-live') {
      return `// DivyaBraj (divyabraj.com) — Architecture Overview
// Live Dual-Platform Platform (React Native Mobile + React.js Web)
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';

export const BrajDarshanPortal = () => {
  const [temples, setTemples] = useState([]);
  const [currentYatraRoute, setCurrentYatraRoute] = useState('Mathura-Vrindavan-Govardhan');

  useEffect(() => {
    // Axios REST API integration for temple timings & cultural data
    const fetchTempleSchedules = async () => {
      const res = await axios.get('https://api.divyabraj.com/v1/temples');
      setTemples(res.data);
    };
    fetchTempleSchedules();
  }, []);

  return (
    <div className="braj-platform-container">
      {/* Live production platform at https://www.divyabraj.com/ */}
    </div>
  );
};`;
    }

    if (activeTab === 'managemy-moves') {
      return `// ManageMyMoves — Offline-First Survey Slice (Redux Toolkit)
import { createSlice } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const surveySlice = createSlice({
  name: 'survey',
  initialState: {
    currentRoom: '${selectedRoom}',
    items: ${JSON.stringify(inventoryCounts)},
    totalVolumeFt3: ${totalVolume},
    isOffline: ${isOffline}
  },
  reducers: {
    addItem: (state, action) => {
      const id = action.payload;
      state.items[id] = (state.items[id] || 0) + 1;
      // Auto-save offline state to AsyncStorage
      AsyncStorage.setItem('@survey_state', JSON.stringify(state));
    },
    removeItem: (state, action) => {
      const id = action.payload;
      if (state.items[id] > 0) state.items[id] -= 1;
      AsyncStorage.setItem('@survey_state', JSON.stringify(state));
    }
  }
});`;
    }

    return `// CrowdApps Tech — Axios REST API Interceptor & Redux Store
// Cuts redundant re-renders by 20% in Agile sprints
import axios from 'axios';
import { configureStore, createSlice } from '@reduxjs/toolkit';

const apiClient = axios.create({
  baseURL: 'https://api.crowdapps.dev/v1',
  timeout: 5000,
  headers: { 'Content-Type': 'application/json' }
});

// Structured error-handling, data caching, and loading states
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API Error:', error.response?.data || error.message);
    return Promise.reject(error);
  }
);`;
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(getCodeSnippet());
    setCopied(true);
    if (onShowToast) onShowToast('Code snippet copied to clipboard!');
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="section section-alt" id="lab">
      {/* Background Ambient Glow */}
      <div className="ambient-glow ambient-glow-cyan" style={{ bottom: '10%', right: '5%', width: '450px', height: '450px' }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="section-header">
          <span className="section-tag">Interactive Demo</span>
          <h2 className="section-title">Live App &amp; Code Lab</h2>
          <p className="section-desc">
            Explore live interactive previews of my production website <strong>divyabraj.com</strong>, mobile survey simulator, and API lab.
          </p>
        </div>

        {/* Tab Controls Bar */}
        <div className="lab-tabs-bar">
          <button
            type="button"
            onClick={() => setActiveTab('divyabraj-live')}
            className={`filter-pill ${activeTab === 'divyabraj-live' ? 'active' : ''}`}
          >
            <Globe size={16} />
            <span>DivyaBraj Live Website</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('managemy-moves')}
            className={`filter-pill ${activeTab === 'managemy-moves' ? 'active' : ''}`}
          >
            <Smartphone size={16} />
            <span>ManageMyMoves Mobile App</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('redux-api-lab')}
            className={`filter-pill ${activeTab === 'redux-api-lab' ? 'active' : ''}`}
          >
            <Zap size={16} />
            <span>Redux &amp; REST API Lab</span>
          </button>
        </div>

        {/* TAB 1: DIVYABRAJ LIVE WEBSITE EMBED */}
        {activeTab === 'divyabraj-live' && (
          <div className="lab-grid-full">
            <div className="browser-window-frame">
              {/* Browser Header Bar */}
              <div className="browser-window-header">
                <div className="browser-window-dots">
                  <span className="browser-dot browser-dot-red" />
                  <span className="browser-dot browser-dot-yellow" />
                  <span className="browser-dot browser-dot-green" />
                </div>

                <div className="browser-url-bar">
                  <Lock size={12} className="url-lock" color="var(--primary)" />
                  <span>https://www.divyabraj.com/</span>
                </div>

                <div className="browser-actions">
                  <button
                    type="button"
                    onClick={handleReloadIframe}
                    className="btn btn-outline btn-sm"
                    title="Reload Web Page"
                    style={{ padding: '0.35rem 0.65rem' }}
                  >
                    <RotateCw size={13} />
                    <span>Reload</span>
                  </button>

                  <a
                    href={LIVE_WEBSITE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-sm"
                    title="Open divyabraj.com in New Tab"
                    style={{ padding: '0.35rem 0.85rem' }}
                  >
                    <span>Open Live Site</span>
                    <ExternalLink size={13} />
                  </a>
                </div>
              </div>

              {/* Live Iframe */}
              <div className="browser-iframe-container">
                <iframe
                  key={iframeKey}
                  src="https://www.divyabraj.com/"
                  title="DivyaBraj Live Tourism Website"
                  className="browser-iframe"
                  loading="lazy"
                  sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                />
              </div>

              {/* Bottom Info Strip */}
              <div className="browser-info-bar">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
                  <span className="badge badge-status">
                    <span className="status-dot" /> Live Production Platform
                  </span>
                  <span style={{ fontSize: '0.86rem', color: 'var(--text-secondary)' }}>
                    Tourism &amp; Cultural Guide for Mathura, Vrindavan, Govardhan &amp; Barsana
                  </span>
                </div>

                <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                  <span className="badge badge-tech">React.js</span>
                  <span className="badge badge-tech">React Native</span>
                  <span className="badge badge-tech">Tailwind CSS</span>
                  <span className="badge badge-tech">REST APIs</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: MANAGEMYMOVES REACT NATIVE MOBILE APP */}
        {activeTab === 'managemy-moves' && (
          <div className="lab-grid">
            {/* Left: Mobile Phone Device Frame */}
            <div className="mobile-frame-container">
              <div className="mobile-phone-device">
                <div className="phone-notch">
                  <div className="notch-speaker" />
                  <div className="notch-camera" />
                </div>

                {/* Phone Status Bar */}
                <div className="phone-status-bar">
                  <span>09:41</span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <button
                      type="button"
                      onClick={() => setIsOffline(!isOffline)}
                      title={isOffline ? "Click to toggle Online" : "Click to test Offline Mode"}
                      style={{ display: 'flex', alignItems: 'center', gap: '0.2rem', cursor: 'pointer', background: 'transparent', border: 'none' }}
                    >
                      {isOffline ? (
                        <span style={{ fontSize: '0.7rem', color: '#f59e0b', display: 'flex', alignItems: 'center', gap: '2px' }}>
                          <WifiOff size={12} /> Offline
                        </span>
                      ) : (
                        <span style={{ fontSize: '0.7rem', color: '#10b981', display: 'flex', alignItems: 'center', gap: '2px' }}>
                          <Wifi size={12} /> 5G
                        </span>
                      )}
                    </button>
                    <span style={{ fontSize: '0.75rem', fontWeight: 700 }}>100%</span>
                  </div>
                </div>

                {/* Phone Content Screen */}
                <div className="phone-screen-content">
                  <div className="phone-app-view">
                    <div className="phone-app-header">
                      <div>
                        <div style={{ fontSize: '0.72rem', textTransform: 'uppercase', color: 'var(--primary)', fontWeight: 800 }}>
                          ManageMyMoves (MMM)
                        </div>
                        <h4 style={{ fontSize: '1.05rem', fontWeight: 800 }}>Room Inventory Survey</h4>
                      </div>
                      <div className="phone-volume-badge">
                        <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>Total Volume</span>
                        <strong>{totalVolume} ft³</strong>
                      </div>
                    </div>

                    {/* Room Selector */}
                    <div className="phone-room-selector">
                      {['Living Room', 'Master Bed', 'Kitchen', 'Office'].map((room) => (
                        <button
                          key={room}
                          type="button"
                          onClick={() => setSelectedRoom(room)}
                          className={`phone-room-pill ${selectedRoom === room ? 'active' : ''}`}
                        >
                          {room}
                        </button>
                      ))}
                    </div>

                    {/* Inventory Items List */}
                    <div className="phone-items-list">
                      {SAMPLE_ROOM_ITEMS.map((item) => {
                        const count = inventoryCounts[item.id] || 0;
                        return (
                          <div key={item.id} className="phone-item-row">
                            <span style={{ fontSize: '1.25rem' }}>{item.icon}</span>
                            <div style={{ flex: 1 }}>
                              <div style={{ fontSize: '0.85rem', fontWeight: 700 }}>{item.name}</div>
                              <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                                {item.volume} ft³ per unit
                              </div>
                            </div>
                            <div className="phone-stepper">
                              <button
                                type="button"
                                onClick={() => handleUpdateItem(item.id, -1)}
                                className="phone-stepper-btn"
                                disabled={count === 0}
                              >
                                <Minus size={12} />
                              </button>
                              <span style={{ fontSize: '0.85rem', fontWeight: 800, minWidth: '18px', textAlign: 'center' }}>
                                {count}
                              </span>
                              <button
                                type="button"
                                onClick={() => handleUpdateItem(item.id, 1)}
                                className="phone-stepper-btn"
                              >
                                <Plus size={12} />
                              </button>
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    {/* Storage Status Footer */}
                    <div className="phone-storage-status">
                      <ShieldCheck size={14} color="#10b981" />
                      <span>AsyncStorage: {isOffline ? 'Offline Local Storage' : 'Cloud Sync Active (100% Data Integrity)'}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Code & Highlights */}
            <div className="lab-code-column card">
              <div className="lab-code-header">
                <div>
                  <h4 style={{ fontSize: '1.15rem', fontWeight: 800, marginBottom: '0.25rem' }}>
                    React Native Architecture
                  </h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                    Redux Toolkit slice + AsyncStorage offline-first data sync
                  </p>
                </div>

                <button
                  type="button"
                  onClick={handleCopyCode}
                  className="btn btn-outline btn-sm"
                  title="Copy code to clipboard"
                >
                  {copied ? <Check size={14} color="var(--primary)" /> : <Copy size={14} />}
                  <span>{copied ? 'Copied' : 'Copy Slice'}</span>
                </button>
              </div>

              <div className="code-viewer-container">
                <pre className="code-viewer-block">{getCodeSnippet()}</pre>
              </div>

              <div className="lab-features-highlight">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.84rem' }}>
                  <CheckCircle2 size={16} color="var(--primary)" />
                  <span>Drawer &amp; Stack Navigation</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.84rem' }}>
                  <CheckCircle2 size={16} color="var(--primary)" />
                  <span>Automated ft³ volume calculation</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.84rem' }}>
                  <CheckCircle2 size={16} color="var(--primary)" />
                  <span>AsyncStorage local persistence</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: REDUX & REST API LAB */}
        {activeTab === 'redux-api-lab' && (
          <div className="lab-grid">
            {/* Left Column: Interactive API Request Simulator */}
            <div className="card" style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column' }}>
              <div style={{ marginBottom: '1.25rem' }}>
                <div style={{ fontSize: '0.72rem', textTransform: 'uppercase', color: 'var(--primary)', fontWeight: 800, letterSpacing: '0.05em' }}>
                  CrowdApps Experience Simulator
                </div>
                <h4 style={{ fontSize: '1.15rem', fontWeight: 800, marginTop: '0.2rem' }}>
                  15+ REST APIs &amp; Redux Toolkit
                </h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.35rem' }}>
                  Select an endpoint and simulate an asynchronous Axios call with structured state caching.
                </p>
              </div>

              {/* Endpoint Selection Pills */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', marginBottom: '1.5rem' }}>
                {API_ENDPOINTS.map((ep) => (
                  <button
                    key={ep.id}
                    type="button"
                    onClick={() => {
                      setSelectedEndpoint(ep);
                      setApiOutput(ep.response);
                    }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '0.75rem 1rem',
                      borderRadius: 'var(--radius-md)',
                      background: selectedEndpoint.id === ep.id ? 'var(--primary-light)' : 'var(--bg-subtle)',
                      border: `1px solid ${selectedEndpoint.id === ep.id ? 'var(--primary)' : 'var(--border-color)'}`,
                      cursor: 'pointer',
                      textAlign: 'left',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <span
                          style={{
                            fontSize: '0.7rem',
                            fontWeight: 800,
                            padding: '0.15rem 0.4rem',
                            borderRadius: '4px',
                            background: ep.method === 'GET' ? '#0284c7' : '#059669',
                            color: '#ffffff'
                          }}
                        >
                          {ep.method}
                        </span>
                        <span style={{ fontSize: '0.84rem', fontWeight: 700, fontFamily: 'var(--font-code)' }}>
                          {ep.url}
                        </span>
                      </div>
                      <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
                        {ep.desc}
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              {/* Trigger Button */}
              <button
                type="button"
                onClick={handleTriggerApi}
                disabled={apiLoading}
                className="btn btn-primary btn-sm"
                style={{ width: '100%', gap: '0.5rem', marginBottom: '1.5rem' }}
              >
                <Send size={14} />
                <span>{apiLoading ? 'Fetching via Axios...' : 'Send Axios Request'}</span>
              </button>

              {/* Live Response Card */}
              <div style={{ background: 'var(--code-bg)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', padding: '1rem', flex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.65rem', borderBottom: '1px solid rgba(255, 255, 255, 0.08)', paddingBottom: '0.45rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.78rem', color: '#10b981', fontWeight: 800 }}>
                    <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10b981', display: 'inline-block' }} />
                    HTTP 200 OK
                  </div>
                  <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)', fontFamily: 'var(--font-code)' }}>
                    Latency: {apiResponseTime}ms
                  </div>
                </div>

                <pre style={{ fontFamily: 'var(--font-code)', fontSize: '0.74rem', color: '#a7f3d0', maxHeight: '180px', overflowY: 'auto', margin: 0 }}>
                  {JSON.stringify(apiOutput, null, 2)}
                </pre>
              </div>
            </div>

            {/* Right Column: Code Explanation & Performance Metrics */}
            <div className="lab-code-column card">
              <div className="lab-code-header">
                <div>
                  <h4 style={{ fontSize: '1.15rem', fontWeight: 800, marginBottom: '0.25rem' }}>
                    Axios Client &amp; Redux State
                  </h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                    Centralized API interceptor &amp; normalized Redux store
                  </p>
                </div>

                <button
                  type="button"
                  onClick={handleCopyCode}
                  className="btn btn-outline btn-sm"
                  title="Copy code to clipboard"
                >
                  {copied ? <Check size={14} color="var(--primary)" /> : <Copy size={14} />}
                  <span>{copied ? 'Copied' : 'Copy Setup'}</span>
                </button>
              </div>

              <div className="code-viewer-container">
                <pre className="code-viewer-block">{getCodeSnippet()}</pre>
              </div>

              <div className="lab-features-highlight">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.84rem' }}>
                  <Zap size={16} color="var(--primary)" />
                  <span>20% redundant re-renders cut with RTK</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.84rem' }}>
                  <ShieldCheck size={16} color="var(--primary)" />
                  <span>15+ REST API endpoints integrated</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.84rem' }}>
                  <CheckCircle2 size={16} color="var(--primary)" />
                  <span>Automatic request error-handling &amp; retry</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
