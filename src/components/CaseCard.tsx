import type { CaseItem, Locale } from '../types';

interface CaseCardProps {
  item: CaseItem;
  locale: Locale;
}

export default function CaseCard({ item, locale }: CaseCardProps) {
  const translation = item.translations[locale];

  return (
    <article className="case-card">
      <div className="case-card-top">
        <span className="case-index">CASE {item.id}</span>
        <span className="case-status">{item.status}</span>
      </div>
      <h3 className="case-title">{translation.title}</h3>
      <p className="case-category">{translation.category}</p>
      <p className="case-summary">{translation.summary}</p>
      <div className="case-highlights">
        {translation.highlights.map((highlight) => (
          <span key={highlight} className="highlight-pill">
            {highlight}
          </span>
        ))}
      </div>
    </article>
  );
}
