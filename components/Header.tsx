'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Menu } from 'lucide-react';
import { useEffect, useState } from 'react';
import { AFFILIATE_LINK } from './Constants';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Products', href: '/gohighlevel' },
  { label: 'Pricing', href: '/gohighlevel-pricing' },
  { label: 'Features', href: '/gohighlevel-features' },
  { label: 'Offers', href: '/offers' },
  { label: 'Affiliate Disclosure', href: '/affiliate-disclosure' },
  { label: 'Blog', href: '/blog' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState('24:00:00');

  useEffect(() => {
    function getMsToEndOfDay() {
      const now = new Date();
      const end = new Date(now);
      end.setHours(23, 59, 59, 999);
      return Math.max(0, end.getTime() - now.getTime());
    }

    function format(ms: number) {
      const totalSeconds = Math.floor(ms / 1000);
      const hours = Math.floor(totalSeconds / 3600)
        .toString()
        .padStart(2, '0');
      const minutes = Math.floor((totalSeconds % 3600) / 60)
        .toString()
        .padStart(2, '0');
      const seconds = Math.floor(totalSeconds % 60)
        .toString()
        .padStart(2, '0');
      return `${hours}:${minutes}:${seconds}`;
    }

    setTimeLeft(format(getMsToEndOfDay()));

    const id = setInterval(() => {
      const ms = getMsToEndOfDay();
      setTimeLeft(format(ms));
    }, 1000);

    return () => clearInterval(id);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-slate-200/70 bg-slate-50/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2 px-4 py-2 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-1.5">
          <Image 
            src="/unnamed.jpg" 
            alt="GoHighLevel" 
            width={32} 
            height={10}
            priority
            className="h-auto w-auto"
          />
          <span className="hidden sm:inline text-xs font-semibold text-slate-950">GoHighLevel</span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex">
          {navItems.map((item) => (
            <Link key={item.label} href={item.href} className="transition hover:text-slate-950">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <div aria-live="polite" className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-rose-50 to-orange-50 px-2.5 py-1.5 text-[10px] font-semibold text-rose-700 shadow-sm border border-rose-200/50 sm:px-3 sm:py-1.5 sm:text-sm">
            <span className="uppercase tracking-[0.15em] text-rose-600 text-[9px] sm:text-xs">Offer ends</span>
            <span className="font-bold text-rose-700 tabular-nums">{timeLeft}</span>
          </div>

          <a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-violet-600 via-indigo-600 to-sky-600 px-3 py-2 text-xs font-semibold text-white shadow-lg shadow-violet-500/25 transition duration-300 hover:-translate-y-0.5 sm:px-5 sm:py-2.5 sm:text-sm">
            Get Started
          </a>

          <button type="button" className="inline-flex rounded-full border border-slate-200 bg-white p-2 text-slate-700 md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle navigation">
            <Menu className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-slate-200 bg-white/95 px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-3 text-sm font-medium text-slate-700">
            {navItems.map((item) => (
              <Link key={item.label} href={item.href} className="rounded-xl px-2 py-2 transition hover:bg-slate-100" onClick={() => setOpen(false)}>
                {item.label}
              </Link>
            ))}
            <div className="mt-2 flex flex-wrap items-center gap-2">
              <div aria-hidden className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-rose-50 to-orange-50 px-3 py-1.5 text-sm font-semibold text-rose-700 border border-rose-200/50">
                <span className="text-[11px] uppercase tracking-[0.15em]">Offer ends</span>
                <span className="font-bold text-rose-700 tabular-nums">{timeLeft}</span>
              </div>
              <a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-violet-600 via-indigo-600 to-sky-600 px-4 py-2 text-sm font-semibold text-white">
                Get Started
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
