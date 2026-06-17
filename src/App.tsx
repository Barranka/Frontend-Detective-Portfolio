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
  { label: '10 000+ objects on the map', ru: '10 000+ отрисовка объектов на карте' },
  { label: '40 min → 6 min build', ru: '40 мин → 6 мин сборка' },
  { label: '20+ components migrated', ru: '20+ компонентов мигрировано' },
  { label: '7 products on one UI library', ru: '7 проектов использовали одну UI-библиотеку' },
  { label: '0 manual release steps', ru: '0 ручных шагов релиза' },
  { label: '15 articles on Habr and LinkedIn', ru: '15 статей на Хабр и LinkedIn' },
];

function App() {
  const [locale, setLocale] = useState<Locale>('ru');
  const t = translations[locale];

  return (
    <div className="page-shell">
      <header className="topbar">
        <div>
          <div className="brand">Engineering Case Files</div>
          <div className="subtext">{t.navSubtitle}</div>
        </div>
        <LanguageSwitcher locale={locale} onChange={setLocale} />
      </header>

      <main>
        <section className="hero-panel">
          <div className="hero-copy">
            <span className="eyebrow">{t.heroEyebrow}</span>
            <h1>{t.heroTitle}</h1>
            <p>{t.heroDescription}</p>
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
            <div className="hero-panel-details">
              <p>{t.heroNote}</p>
              <div className="hero-queue">
                <span>{t.heroTag1}</span>
                <span>{t.heroTag2}</span>
                <span>{t.heroTag3}</span>
              </div>
            </div>
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

          <div className="cases-grid">
            {caseFiles.map((item) => (
              <CaseCard key={item.id} item={item} locale={locale} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
