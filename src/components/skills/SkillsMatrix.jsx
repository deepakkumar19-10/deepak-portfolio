import React from 'react';
import { SKILL_CATEGORIES } from '../../data/portfolioData';
import { Code2, Layers, Database, Wrench, Palette } from 'lucide-react';

const ICON_MAP = {
  Code2,
  Layers,
  Database,
  Wrench,
  Palette
};

export default function SkillsMatrix() {
  return (
    <section className="section section-alt" id="skills">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Technical Competencies</span>
          <h2 className="section-title">Skills &amp; Framework Mastery</h2>
          <p className="section-desc">
            A breakdown of my technical proficiencies, architectures, and development toolchains.
          </p>
        </div>

        <div className="skills-grid">
          {SKILL_CATEGORIES.map((cat, idx) => {
            const Icon = ICON_MAP[cat.icon] || Code2;

            return (
              <div key={idx} className="skill-category-card">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.75rem' }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: 'var(--radius-sm)', backgroundColor: 'var(--primary-light)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Icon size={18} />
                  </div>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 800 }}>{cat.category}</h3>
                </div>

                <div>
                  {cat.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="skill-item">
                      <div className="skill-info">
                        <span>{skill.name}</span>
                        <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>{skill.experience}</span>
                      </div>
                      <div className="skill-bar-bg">
                        <div className="skill-bar-fill" style={{ width: `${skill.level}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
