import React, { useState, useEffect, useRef } from 'react';
import { Bot, MessageCircle, X, Send, Sparkles, User, ExternalLink, ArrowRight, Loader2, Check, RefreshCw } from 'lucide-react';
import { PERSONAL_INFO, LIVE_WEBSITE_URL } from '../../data/portfolioData';
import { saveAIChatToFirestore } from '../../services/firebase';

const QUICK_PROMPTS = [
  'Tell me about DivyaBraj & MMM App',
  'What is Deepak\'s Tech Stack?',
  'I want to hire Deepak for a role',
  'How soon can Deepak join?'
];

// Fallback intelligent persona response generator
function generatePersonaReply(userQuery) {
  const query = userQuery.toLowerCase();

  // Project queries
  if (query.includes('divyabraj') || query.includes('divyabridge') || query.includes('live') || query.includes('mmm') || query.includes('managemy') || query.includes('project') || query.includes('work')) {
    return (
      `🚀 **Deepak has engineered two flagship production projects:**\n\n` +
      `1. **DivyaBraj (divyabraj.com)**: A live tourism & cultural platform built with React.js & React Native, featuring real-time temple aarti schedules, yatra routes, and panchang calendar.\n` +
      `2. **MMM Mobile Application (ManageMyMoves)**: An offline-first survey mobile app built with React Native, TypeScript, and Redux Toolkit with automated cubic feet (ft³) volume calculations and AsyncStorage caching.\n\n` +
      `Would you like to hire Deepak for a similar web or mobile project, or schedule an interview?`
    );
  }

  // Skills & Tech Stack queries
  if (query.includes('skill') || query.includes('stack') || query.includes('tech') || query.includes('react') || query.includes('native') || query.includes('mern') || query.includes('redux')) {
    return (
      `💻 **Deepak's Core Technical Capabilities:**\n\n` +
      `• **Mobile App Development**: React Native, React Navigation (Drawer/Stack), NativeWind, AsyncStorage, Android Studio.\n` +
      `• **Frontend Web**: React.js, TypeScript, JavaScript (ES6+), Tailwind CSS, Responsive UI Design.\n` +
      `• **State & APIs**: Redux Toolkit (RTK slices & memoized selectors), REST APIs with Axios, offline persistence.\n` +
      `• **Backend Basics**: Node.js, Express.js, Firebase Firestore integration.\n\n` +
      `Are you looking for a Frontend, Mobile App, or Full-Stack developer for your team?`
    );
  }

  // Hiring, Role, or Interview queries
  if (query.includes('hire') || query.includes('role') || query.includes('job') || query.includes('interview') || query.includes('work with') || query.includes('salary') || query.includes('rate') || query.includes('budget') || query.includes('opportunity')) {
    return (
      `🎯 **Awesome! Deepak is available to join immediately.**\n\n` +
      `He is based in Mathura, UP, with an MCA from GLA University, and is open to Full-Time, Contract, or Remote opportunities.\n\n` +
      `Could you please share:\n` +
      `1. Your company/team name?\n` +
      `2. The role or project scope?\n` +
      `3. Your preferred contact email or WhatsApp?\n\n` +
      `I will record this directly for Deepak so he can respond to you immediately!`
    );
  }

  // Availability & Location queries
  if (query.includes('availab') || query.includes('join') || query.includes('start') || query.includes('notice') || query.includes('location') || query.includes('where')) {
    return (
      `⚡ **Immediate Availability!**\n\n` +
      `Deepak has **0 days notice period** and is ready to start immediately. He is based in Mathura, Uttar Pradesh, and is fully equipped for remote work or open to relocation for compelling full-time roles.\n\n` +
      `Would you like to connect directly with him on WhatsApp at **+91-9027687004**?`
    );
  }

  // Contact queries
  if (query.includes('contact') || query.includes('phone') || query.includes('email') || query.includes('whatsapp') || query.includes('reach') || query.includes('call')) {
    return (
      `📞 **You can reach Deepak Kumar directly through:**\n\n` +
      `• **WhatsApp / Phone**: +91-9027687004\n` +
      `• **Email**: deepakkumar19152002@gmail.com\n` +
      `• **GitHub**: github.com/deepakkumar19-10\n` +
      `• **LinkedIn**: linkedin.com/in/deepakkumar-d10\n\n` +
      `Feel free to click the WhatsApp button below to start a direct chat!`
    );
  }

  // Education / Background
  if (query.includes('education') || query.includes('degree') || query.includes('college') || query.includes('gla') || query.includes('mca')) {
    return (
      `🎓 **Educational Background:**\n\n` +
      `• **Master of Computer Applications (MCA)** — GLA University, Mathura (2023 – 2025).\n` +
      `• **Bachelor of Science (B.Sc.)** — Dr. B.R. Ambedkar University (2020 – 2023).\n` +
      `• Certified in Course on Computer Concepts (CCC) with Grade A.\n\n` +
      `Deepak pairs solid computer science fundamentals with hands-on production engineering.`
    );
  }

  // General fallback
  return (
    `Thank you for asking! I am Deepak Kumar's AI Assistant.\n\n` +
    `Deepak is a **Frontend & Mobile App Developer** with expertise in **React Native, React.js, Redux Toolkit, and REST APIs**. He built the live platform **divyabraj.com** and the **MMM Mobile App**.\n\n` +
    `Are you looking to hire for an engineering position, or would you like to discuss a specific project? You can also message Deepak directly on WhatsApp at **+91-9027687004**!`
  );
}

export default function AIAssistantWidget({ onShowToast }) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'bot',
      text: `👋 Hi! I'm Deepak's AI Copilot. Deepak is a Frontend & Mobile App Developer specializing in React Native and React.js (Creator of divyabraj.com & MMM App).\n\nHow can I help you today? Feel free to ask about his skills, live projects, or hiring availability!`,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSendMessage = async (textToSend) => {
    const text = (textToSend || inputValue).trim();
    if (!text || isLoading) return;

    const userMsg = {
      id: Date.now(),
      sender: 'user',
      text,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue('');
    setIsLoading(true);

    try {
      let botReply = '';

      // Check if Gemini API key is configured in .env
      const geminiApiKey = import.meta.env.VITE_GEMINI_API_KEY;
      if (geminiApiKey) {
        try {
          const res = await fetch(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${geminiApiKey}`,
            {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                system_instruction: {
                  parts: [
                    {
                      text: `You are Deepak Kumar's AI Copilot and Executive Assistant representing him on his portfolio (https://deepak-portfolio-dk.vercel.app/).
Deepak is a Mobile & Frontend Developer from Mathura, UP, with an MCA from GLA University.
Deepak specializes in React Native (cross-platform iOS & Android), React.js, TypeScript, Redux Toolkit, AsyncStorage, and REST APIs with Axios.
His flagship live project is DivyaBraj (live at divyabraj.com), a pilgrimage & tourism platform.
His flagship mobile app is MMM Mobile Application (ManageMyMoves), an offline-first survey app with dynamic volume (ft³) calculations.
Deepak is available to join immediately.
Always be professional, polite, articulate, and enthusiastic. Answer questions about Deepak's skills and projects, ask for the visitor's hiring requirements and contact info, and invite them to connect with Deepak directly on WhatsApp at +91-9027687004 or deepakkumar19152002@gmail.com.`
                    }
                  ]
                },
                contents: [
                  {
                    role: 'user',
                    parts: [{ text }]
                  }
                ]
              })
            }
          );
          const data = await res.json();
          if (data?.candidates?.[0]?.content?.parts?.[0]?.text) {
            botReply = data.candidates[0].content.parts[0].text;
          }
        } catch (apiErr) {
          console.warn('[AI Assistant] Live Gemini call failed, using smart persona fallback:', apiErr);
        }
      }

      // If no API key or API call failed, use intelligent persona engine
      if (!botReply) {
        // Small realistic typing delay
        await new Promise((resolve) => setTimeout(resolve, 600));
        botReply = generatePersonaReply(text);
      }

      const botMsg = {
        id: Date.now() + 1,
        sender: 'bot',
        text: botReply,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages((prev) => {
        const nextList = [...prev, botMsg];
        // Background sync conversation to Firebase Firestore
        saveAIChatToFirestore({
          name: 'Portfolio Visitor',
          summary: `User asked: "${text.substring(0, 80)}"`,
          messages: nextList.slice(-6)
        }).catch((e) => console.warn('[Firebase Sync]', e));
        return nextList;
      });
    } catch (err) {
      console.error('[AI Assistant Error]:', err);
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          sender: 'bot',
          text: `I apologize, I encountered a brief glitch. You can message Deepak directly on WhatsApp at +91-9027687004 or email him at deepakkumar19152002@gmail.com!`,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const directWhatsAppUrl = `https://wa.me/${PERSONAL_INFO.whatsapp}?text=${encodeURIComponent(
    'Hi Deepak, I was chatting with your portfolio AI Copilot and would like to connect directly!'
  )}`;

  return (
    <>
      {/* Floating Widget Trigger Button */}
      {!isOpen && (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="ai-widget-trigger"
          aria-label="Open AI Assistant Chat"
          title="Chat with Deepak's AI Copilot"
        >
          <span className="ai-trigger-pulse" />
          <div className="ai-trigger-icon-wrap">
            <Bot size={22} />
          </div>
          <span className="ai-trigger-label">Deepak's AI Copilot</span>
          <span className="ai-online-status" />
        </button>
      )}

      {/* Floating Chat Modal */}
      {isOpen && (
        <div className="ai-chat-window">
          {/* Header */}
          <div className="ai-chat-header">
            <div className="ai-chat-profile">
              <div className="ai-avatar-wrap">
                <img src="/images/deepak-hero.jpg" alt="Deepak Kumar" className="ai-avatar-img" />
                <span className="ai-avatar-online-dot" />
              </div>
              <div className="ai-profile-info">
                <div className="ai-profile-name">
                  <span>Deepak's AI Copilot</span>
                  <Sparkles size={13} color="var(--primary)" />
                </div>
                <div className="ai-profile-sub">Always Online • Replies instantly</div>
              </div>
            </div>

            <div className="ai-header-actions">
              <a
                href={directWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-icon"
                style={{ width: '30px', height: '30px', color: '#10b981' }}
                title="Switch to WhatsApp Chat"
              >
                <MessageCircle size={15} />
              </a>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="btn-icon"
                style={{ width: '30px', height: '30px' }}
                aria-label="Close chat"
              >
                <X size={16} />
              </button>
            </div>
          </div>

          {/* Messages Body */}
          <div className="ai-chat-body">
            {messages.map((m) => (
              <div key={m.id} className={`ai-message-row ${m.sender === 'user' ? 'ai-row-user' : 'ai-row-bot'}`}>
                {m.sender === 'bot' && (
                  <div className="ai-bot-avatar-badge">
                    <Bot size={14} />
                  </div>
                )}
                <div className={`ai-message-bubble ${m.sender === 'user' ? 'ai-bubble-user' : 'ai-bubble-bot'}`}>
                  <div className="ai-bubble-text" style={{ whiteSpace: 'pre-wrap' }}>
                    {m.text}
                  </div>
                  <span className="ai-bubble-time">{m.time}</span>
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="ai-message-row ai-row-bot">
                <div className="ai-bot-avatar-badge">
                  <Bot size={14} />
                </div>
                <div className="ai-message-bubble ai-bubble-bot ai-typing-bubble">
                  <div className="ai-typing-dots">
                    <span />
                    <span />
                    <span />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Prompts Bar */}
          <div className="ai-quick-prompts-bar">
            {QUICK_PROMPTS.map((prompt, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => handleSendMessage(prompt)}
                disabled={isLoading}
                className="ai-quick-pill"
              >
                {prompt}
              </button>
            ))}
          </div>

          {/* Input Footer */}
          <form
            className="ai-chat-input-bar"
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
          >
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask about projects, skills, or hiring..."
              className="ai-chat-input"
              disabled={isLoading}
            />
            <button
              type="submit"
              disabled={!inputValue.trim() || isLoading}
              className="ai-send-btn"
              aria-label="Send query"
            >
              {isLoading ? <Loader2 size={16} className="spin" /> : <Send size={16} />}
            </button>
          </form>

          {/* WhatsApp Direct Takeover Strip */}
          <div className="ai-takeover-strip">
            <span>Want to speak with Deepak directly?</span>
            <a
              href={directWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="ai-takeover-link"
            >
              <span>WhatsApp Connect</span>
              <ArrowRight size={12} />
            </a>
          </div>
        </div>
      )}
    </>
  );
}
