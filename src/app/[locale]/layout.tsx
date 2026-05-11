import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { LangSetter } from '@/components/LangSetter';
import Header from '@/components/header/Header';
import Preloader from '@/components/Preloader';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import CustomCursor from '@/components/CustomCursor';

export const metadata: Metadata = {
  title: 'UltraTechHub — Digital Agency',
  description: 'Cutting-edge web solutions for forward-thinking businesses.',
};

import { ThemeProvider } from '@/components/ThemeProvider';

import SmoothScroll from '@/components/ui/SmoothScroll';

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as 'en' | 'de' | 'sv' | 'fr' | 'fi')) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem
        disableTransitionOnChange
      >
        <CustomCursor />
        <Preloader />
        <LangSetter locale={locale} />
        <Header />
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </ThemeProvider>
    </NextIntlClientProvider>
  );
}
