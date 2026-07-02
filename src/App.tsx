import { useMemo, useState } from 'react';
import { caseFiles } from './data/cases';
import type { Locale } from './types';
import en from './locales/en';
import ru from './locales/ru';
import CaseCard from './components/CaseCard';
import HeroVisual from './components/HeroVisual';
import LanguageSwitcher from './components/LanguageSwitcher';

const translations = { en, ru } as const;

function App() {
  const [locale, setLocale] = useState<Locale>('ru');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const t = translations[locale];

  const categoryMeta: Record<string, { en: string; ru: string }> = {
    performance: { en: 'Performance', ru: 'Производительность' },
    migrations: { en: 'Migrations', ru: 'Миграции' },
    'ci-cd': { en: 'CI/CD', ru: 'CI/CD' },
    architecture: { en: 'Architecture', ru: 'Архитектура' },
    'design-systems': { en: 'Design Systems', ru: 'Дизайн-системы' },
    'realtime-systems': { en: 'Realtime Systems', ru: 'Realtime Systems' },
  };

  const categoryOptions = [
    'all',
    ...Array.from(
      new Set(
        caseFiles.flatMap((item) => item.categoryTags ?? [item.categoryKey]),
      ),
    ),
  ];

  const filteredCases = useMemo(() => {
    if (selectedCategory === 'all') {
      return caseFiles;
    }
    return caseFiles.filter((item) => {
      const tags = item.categoryTags ?? [item.categoryKey];
      return tags.includes(selectedCategory);
    });
  }, [selectedCategory]);

  return (
    <div className="page-shell">
      <header className="topbar">
        <div>
          <div className="brand">{t.brandTitle}</div>
        </div>
        <LanguageSwitcher locale={locale} onChange={setLocale} />
      </header>

      <main>
        <section className="hero-panel">
          <div className="hero-copy">
            <h1>
              <span>{t.heroTitle}</span>
              <span className="hero-subtitle">{t.heroSubtitle}</span>
            </h1>
            <p>{t.heroDescription}</p>
            <p>{t.heroDetails}</p>
            <p>{t.heroStatement}</p>
          </div>

          <aside className="hero-side">
            <HeroVisual />
            <div className="skills-panel">
              <h2>{t.skillsTitle}</h2>
              <div className="skills-list">
                {t.skillsItems.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
          </aside>
        </section>

        <section className="content-section">
          <div className="section-header">
            <div>
              <span className="section-eyebrow">{t.approachEyebrow}</span>
              <h2>{t.approachTitle}</h2>
            </div>
            <p>{t.approachDescription}</p>
          </div>

          <div className="principles-grid">
            {t.approachItems.map((item) => (
              <article key={item.title} className="principle-card">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section">
          <div className="section-header">
            <span className="section-eyebrow">{t.teamValueEyebrow}</span>
            <h2>{t.teamValueTitle}</h2>
          </div>
          <div className="team-value">
            <div className="team-value-list">
              {t.teamValueItems.map((item) => (
                <article key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="content-section">
          <div className="investigation-copy">
            <span className="section-eyebrow">{t.investigationEyebrow}</span>
            <h2>{t.investigationTitle}</h2>
            <p>{t.investigationDescription}</p>
          </div>
          <div className="investigation-panel">
            <div className="hero-timeline" aria-label={t.heroNote}>
              {t.heroNote.split('→').map((step) => (
                <span key={step.trim()}>{step.trim()}</span>
              ))}
            </div>
          </div>
        </section>

        <section className="impact-section">
          <div className="impact-header">
            <span className="section-eyebrow">{t.impactEyebrow}</span>
            <h2>{t.impactTitle}</h2>
          </div>

          <div className="impact-grid">
            {t.impactItems.map((item) => (
              <div key={item} className="impact-card">
                {item}
              </div>
            ))}
          </div>
        </section>

        <section className="section-block">
          <div className="section-header">
            <div>
              <span className="section-eyebrow">{t.casesEyebrow}</span>
              <h2>{t.casesTitle}</h2>
            </div>
            <p>{t.casesDescription}</p>
          </div>

          <div className="filter-bar">
            <span className="filter-label">{t.casesFilterLabel}</span>
            <div className="filter-pill-group">
              {categoryOptions.map((key) => {
                const label = key === 'all' ? t.filterAll : categoryMeta[key]?.[locale] ?? key;
                return (
                  <button
                    key={key}
                    type="button"
                    className={`filter-pill ${key !== 'all' ? `category-${key}` : ''} ${selectedCategory === key ? 'active' : ''}`}
                    onClick={() => setSelectedCategory(key)}
                  >
                    {label}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="cases-grid">
            {filteredCases.map((item) => (
              <CaseCard key={item.id} item={item} locale={locale} />
            ))}
          </div>
        </section>

        <section className="final-cta">
          <p>{t.finalCtaLead}</p>
          <h2>{t.finalCtaTitle}</h2>
          <p>{t.finalCtaDescription}</p>
        </section>
      </main>

      <footer className="footer" aria-label={t.footerTitle}>
        <span>{t.footerTitle}</span>
        <div className="footer-links">
          <a
            className="footer-link"
            href="mailto:cat123_93@mail.ru"
            aria-label={`${t.footerEmailLabel}: cat123_93@mail.ru`}
            title="cat123_93@mail.ru"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path d="M4 6h16v12H4z" />
              <path d="m4 7 8 6 8-6" />
            </svg>
          </a>
          <a
            className="footer-link"
            href="https://t.me/baranka_18"
            target="_blank"
            rel="noreferrer"
            aria-label={`${t.footerTelegramLabel}: @baranka_18`}
            title="@baranka_18"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path d="M21 4 3 11.5l7 2.2L13 20l3.2-8.4L21 4z" />
              <path d="m10 13.7 6.2-5.1" />
            </svg>
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
