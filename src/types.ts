export type Locale = 'en' | 'ru';

export interface CaseTranslation {
  title: string;
  category: string;
  summary: string;
  highlights: string[];
}

export interface CaseItem {
  id: string;
  status: string;
  translations: Record<Locale, CaseTranslation>;
}
