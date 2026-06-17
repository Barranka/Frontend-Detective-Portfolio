import type { Locale } from '../types';

interface LanguageSwitcherProps {
  locale: Locale;
  onChange: (locale: Locale) => void;
}

const options: { code: Locale; label: string }[] = [
  { code: 'ru', label: 'RU' },
  { code: 'en', label: 'EN' },
];

export default function LanguageSwitcher({ locale, onChange }: LanguageSwitcherProps) {
  return (
    <div className="language-switcher" role="navigation" aria-label="Language switcher">
      {options.map((option) => (
        <button
          key={option.code}
          type="button"
          onClick={() => onChange(option.code)}
          className={locale === option.code ? 'active' : ''}
          aria-pressed={locale === option.code}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
