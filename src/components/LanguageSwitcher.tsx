'use client';

import { useState, useRef, useEffect } from 'react';
import { useRouter, usePathname } from '@/i18n/navigation';
import { useLocale } from 'next-intl';

const languages = [
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'de', label: 'Deutsch', flag: '🇩🇪' },
  { code: 'sv', label: 'Svenska', flag: '🇸🇪' },
  { code: 'fr', label: 'Français', flag: '🇫🇷' },
  { code: 'fi', label: 'Suomi', flag: '🇫🇮' },
];

interface Props {
  dropdown?: boolean;
}

export default function LanguageSwitcher({ dropdown = true }: Props) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  const current = languages.find((l) => l.code === locale) || languages[0];

  useEffect(() => {
    if (!dropdown) return;
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [dropdown]);

  const switchLocale = (code: string) => {
    router.replace(pathname, { locale: code });
    setOpen(false);
  };

  const cycleLocale = () => {
    const idx = languages.findIndex((l) => l.code === locale);
    const next = languages[(idx + 1) % languages.length];
    router.replace(pathname, { locale: next.code });
  };

  return (
    <div ref={ref} className="relative">
      {/* Trigger */}
      <button
        onClick={dropdown ? () => setOpen(!open) : cycleLocale}
        className="group flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 transition-all hover:bg-zinc-200 dark:hover:bg-zinc-800"
      >
        <span className="flex items-center gap-2 text-sm font-medium">
          <span>{current.flag}</span>
          <span className="uppercase tracking-wide text-zinc-700 dark:text-zinc-300 group-hover:text-zinc-900 dark:group-hover:text-white">{current.code}</span>
        </span>

        {dropdown && (
          <div
            className={`flex items-center justify-center transition-transform duration-200 text-zinc-500 dark:text-zinc-400 ${open ? 'rotate-180' : ''}`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 9l6 6 6-6" />
            </svg>
          </div>
        )}
      </button>

      {/* Dropdown — only when dropdown=true */}
      {dropdown && (
        <div
          className={`absolute right-0 mt-3 w-48 rounded-2xl border border-zinc-200/50 dark:border-zinc-800/50 bg-white/90 dark:bg-zinc-950/90 backdrop-blur-xl shadow-2xl overflow-hidden transition-all duration-300 origin-top-right ${
            open ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'
          }`}
        >
          <div className="p-1.5">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => switchLocale(lang.code)}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-medium transition-all ${
                  lang.code === locale
                    ? 'text-zinc-900 bg-zinc-100 dark:text-white dark:bg-zinc-800'
                    : 'text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:text-white dark:hover:bg-zinc-900'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-base">{lang.flag}</span>
                  <span>{lang.label}</span>
                </div>
                {lang.code === locale && (
                  <div className="size-1.5 rounded-full bg-blue-500 shadow-sm" />
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
