import React, { useState } from 'react';

// Common Components
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import Toast from './components/common/Toast';

// Sections
import HeroSection from './components/hero/HeroSection';
import AboutSection from './components/about/AboutSection';
import JourneyTimeline from './components/journey/JourneyTimeline';
import ProjectsSection from './components/projects/ProjectsSection';
import SkillsMatrix from './components/skills/SkillsMatrix';
import ContactSection from './components/contact/ContactSection';
import RecruiterPitch from './components/contact/RecruiterPitch';

export default function App() {
  const [pitchOpen, setPitchOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  const triggerToast = (msg) => {
    setToastMessage(msg);
  };

  return (
    <div className="portfolio-app">
      {/* Sticky Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero Section */}
        <HeroSection onOpenPitch={() => setPitchOpen(true)} />

        {/* 2. About Deepak */}
        <AboutSection />

        {/* 3. Skills & Framework Mastery Matrix */}
        <SkillsMatrix />

        {/* 4. Experience & Education Timeline */}
        <JourneyTimeline />

        {/* 5. Featured Projects Showcase */}
        <ProjectsSection />

        {/* 6. Contact & Developer Profiles */}
        <ContactSection onShowToast={triggerToast} />
      </main>

      {/* Recruiter Elevator Pitch Modal */}
      <RecruiterPitch isOpen={pitchOpen} onClose={() => setPitchOpen(false)} />

      {/* Toast Notification Alert */}
      <Toast message={toastMessage} onClose={() => setToastMessage(null)} />

      {/* Modern Footer */}
      <Footer />
    </div>
  );
}
