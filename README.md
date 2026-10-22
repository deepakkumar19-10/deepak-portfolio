# 🚀 Deepak Kumar — Pro Developer Portfolio

An elite, modern, responsive personal portfolio website engineered for **Deepak Kumar**, MERN Stack Developer.

Built with **React 19, Vite, JavaScript (ES6+), and Modular Pure CSS**.

---

## 🌟 What Makes This Portfolio Stand Out

1. **Authentic Visual Identity & Branding**:
   - Clean, professional branding for Deepak Kumar with high-resolution portraits and live availability status.
2. **Live Production Flagship Showcase**:
   - Prominently highlights **Braj Darshan** ([divyabraj.com](https://www.divyabraj.com/)) along with **Task Management Application** and **Grocery Management System**.
3. **Interactive Live Component Playground**:
   - An embedded live React playground where recruiters can customize component parameters and see live React JSX & CSS generated in real time.
4. **Interactive 4-Step Developer Journey**:
   - Academic Foundations (2020-2023) → MCA at GLA University (2023-2025) → Network Engineering (2025-2026) → MERN Stack Development & Live Platforms (2026+).
5. **Recruiter Fast-Track ("30-Second Quick Pitch")**:
   - Quick-pitch modal highlighting MERN stack core competencies, qualifications (MCA), live production work, and immediate availability.
6. **Verified ATS Resume & PDF Download**:
   - Direct download button for `Deepak_Kumar_Resume.pdf` and an ATS-friendly in-browser verified resume sheet with print/PDF capability.
7. **Instant Contact Channels**:
   - Working contact form, 1-click direct WhatsApp chat, and click-to-copy email/phone with toast notifications.
8. **Dual Theme Engine**:
   - Instant smooth switching between **Porcelain Light** and **Deep Obsidian Dark** themes with LocalStorage persistence.

---

## 📁 Project Architecture

```
deepak-portfolio-pro/
├── public/
│   ├── favicon.svg               # Modern DK monogram logo
│   └── images/                   # High-res portraits of Deepak Kumar
│       ├── deepak-hero.jpg
│       ├── deepak-standing.jpg
│       └── deepak-seated.jpg
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   ├── Footer.jsx        # Footer with social links & back-to-top
│   │   │   ├── Icons.jsx         # Custom SVG Brand Icons (GitHub, LinkedIn, WhatsApp)
│   │   │   ├── Modal.jsx         # Accessible modal dialog
│   │   │   ├── Navbar.jsx        # Sticky navbar with reading progress & scrollspy
│   │   │   ├── ThemeToggle.jsx   # Light / Dark theme toggle button
│   │   │   └── Toast.jsx         # Copy-to-clipboard notification alert
│   │   ├── hero/
│   │   │   └── HeroSection.jsx   # Hero section with portrait & quick pitch
│   │   ├── about/
│   │   │   └── AboutSection.jsx  # Bio narrative, core values & standing portrait
│   │   ├── journey/
│   │   │   └── JourneyTimeline.jsx # Interactive 4-step learning timeline
│   │   ├── playground/
│   │   │   └── LivePlayground.jsx# Embedded live interactive React widget
│   │   ├── projects/
│   │   │   ├── ProjectCard.jsx   # Project preview card
│   │   │   ├── ProjectModal.jsx  # Deep-dive case study modal
│   │   │   └── ProjectsSection.jsx # Category filter pills & projects grid
│   │   ├── skills/
│   │   │   └── SkillsMatrix.jsx  # Categorized skill progress meters
│   │   ├── resume/
│   │   │   └── ResumeSection.jsx # Printable ATS resume sheet
│   │   └── contact/
│   │       ├── ContactSection.jsx# Message form + 1-click WhatsApp chat
│   │       └── RecruiterPitch.jsx# 30-second elevator pitch modal
│   ├── data/
│   │   ├── portfolioData.js      # Projects, timeline steps, skills, bio
│   │   └── resumeData.js         # Education, experience, certifications
│   ├── styles/
│   │   ├── base.css              # Reset, typography, animations, print media
│   │   ├── components.css        # Buttons, cards, badges, modals, toast
│   │   ├── sections.css          # Section layouts & responsive breakpoints
│   │   └── variables.css         # Theme tokens & dark mode overrides
│   ├── App.jsx                   # Main layout container & modal handlers
│   ├── index.css                 # Global CSS bundle entry
│   └── main.jsx                  # React 19 application entry point
├── index.html                    # Fonts (Plus Jakarta Sans) & SEO meta
├── package.json
└── vite.config.js
```

---

## 🚀 How to Run Locally

1. Open PowerShell or Command Prompt:
   ```powershell
   cd C:\Users\sunit\OneDrive\Desktop\deepak-portfolio-pro
   ```
2. Start the local development server:
   ```powershell
   npm run dev
   ```
3. Open your browser and navigate to:
   ```
   http://localhost:5173/
   ```

---

## 🛠️ Build for Production

```powershell
npm run build
```
Creates an optimized, minified production bundle in the `dist/` directory in under 500ms!

---

© 2026 Deepak Kumar. Built with React.js & Pure Modular CSS.
