import type { CaseItem, Locale } from '../types';

interface CaseCardProps {
  item: CaseItem;
  locale: Locale;
}

export default function CaseCard({ item, locale }: CaseCardProps) {
  const translation = item.translations[locale];
  const statusLabel = locale === 'ru' ? (item.status === 'Solved' ? 'Решено' : item.status) : item.status;
  const categoryClasses = item.categoryTags?.map((tag) => `category-${tag}`).join(' ') ?? `category-${item.categoryKey}`;

  return (
    <article className={`case-card ${categoryClasses}`}>
      <div className="case-card-top">
        <span className="case-index">CASE {item.id}</span>
        <span className="case-status">{statusLabel}</span>
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
