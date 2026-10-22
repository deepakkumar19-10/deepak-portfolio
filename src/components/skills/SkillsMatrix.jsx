import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '../../data/portfolioData';
import { Smartphone, Layers, Code2, Wrench, Search, CheckCircle2 } from 'lucide-react';

const ICON_MAP = {
  Smartphone,
  Layers,
  Code2,
  Wrench
};

export default function SkillsMatrix() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...SKILL_CATEGORIES.map((c) => c.category)];

  const filteredCategories = SKILL_CATEGORIES.map((cat) => {
    if (selectedCategory !== 'All' && cat.category !== selectedCategory) {
      return null;
    }
    const filteredSkills = cat.skills.filter((s) =>
      s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.experience.toLowerCase().includes(searchQuery.toLowerCase())
    );
    if (filteredSkills.length === 0) return null;
    return { ...cat, skills: filteredSkills };
  }).filter(Boolean);

  return (
    <section className="section" id="skills">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Skills</span>
          <h2 className="section-title">Technical Skills</h2>
          <p className="section-desc">
            Technologies and tools I work with daily.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="skills-filter-container">
          <div className="skills-category-tabs">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`filter-pill ${selectedCategory === cat ? 'active' : ''}`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="skills-search-box">
            <Search size={16} color="var(--text-muted)" />
            <input
              type="text"
              placeholder="Search skill (e.g. React Native, Redux, Axios)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="skills-search-input"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 700 }}
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="skills-grid">
          {filteredCategories.map((cat, idx) => {
            const Icon = ICON_MAP[cat.icon] || Code2;

            return (
              <div key={idx} className="skill-category-card card">
                <div className="skill-category-header">
                  <div className="skill-category-icon">
                    <Icon size={20} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.2rem', fontWeight: 800 }}>{cat.category}</h3>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                      {cat.skills.length} Competencies
                    </div>
                  </div>
                </div>

                <div className="skill-items-list">
                  {cat.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="skill-item">
                      <div className="skill-info">
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-exp">{skill.experience}</span>
                      </div>
                      <div className="skill-bar-bg">
                        <div
                          className="skill-bar-fill"
                          style={{
                            width: `${skill.level}%`,
                            background:
                              cat.icon === 'Smartphone'
                                ? 'linear-gradient(90deg, #10b981 0%, #06b6d4 100%)'
                                : cat.icon === 'Layers'
                                ? 'linear-gradient(90deg, #06b6d4 0%, #6366f1 100%)'
                                : cat.icon === 'Code2'
                                ? 'linear-gradient(90deg, #f59e0b 0%, #ef4444 100%)'
                                : 'linear-gradient(90deg, #8b5cf6 0%, #ec4899 100%)'
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {filteredCategories.length === 0 && (
          <div style={{ textAlign: 'center', padding: '3rem', color: 'var(--text-muted)' }}>
            <p>No skills match "{searchQuery}". Try searching for React Native, Redux, TypeScript, or Axios.</p>
          </div>
        )}
      </div>
    </section>
  );
}
