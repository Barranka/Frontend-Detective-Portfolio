import { useMemo, useState } from 'react';
import { caseFiles } from './data/cases';
import type { Locale } from './types';
import en from './locales/en';
import ru from './locales/ru';
import CaseCard from './components/CaseCard';
import LanguageSwitcher from './components/LanguageSwitcher';
import Mascot from './components/Mascot';

const translations = { en, ru } as const;

const metrics = [
  { label: '10 000+ objects on the map optimization', ru: '10 000+ объектов — оптимизация карты' },
  { label: '40 min → 6 min build', ru: '40 мин → 6 мин — время сборки' },
  { label: '20+ components migrated to VUE 3', ru: '20+ компонентов мигрировано на VUE 3' },
  { label: '0 manual release steps', ru: 'Релизы без ручных шагов' },
];

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
          <div className="brand">Engineering Case Files</div>
        </div>
        <LanguageSwitcher locale={locale} onChange={setLocale} />
      </header>

      <main>
        <section className="hero-panel">
          <div className="hero-copy">
            <span className="eyebrow">{t.heroEyebrow}</span>
            <h1>{t.heroTitle}</h1>
            <p>{t.heroDescription}</p>
            <p className="hero-note">{t.heroNote}</p>

            <div className="badges-grid">
              {metrics.map((metric) => (
                <div key={locale === 'en' ? metric.label : metric.ru} className="badge-card">
                  {locale === 'en' ? metric.label : metric.ru}
                </div>
              ))}
            </div>
          </div>

          <div className="hero-visual">
            <Mascot />
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
      </main>
    </div>
  );
}

export default App;
