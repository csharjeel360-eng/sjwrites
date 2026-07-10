'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { ArrowUp, Menu, Moon, Search, Sun, X } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Best CRM', href: '/best-crm-software' },
  { label: 'About', href: '/about' },
  { label: 'GoHighLevel', href: '/products/gohighlevel' },
  { label: 'Hostinger', href: '/products/hostinger' },
  { label: 'Contact', href: '#contact' },
];

export function SiteShell({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldDark = savedTheme ? savedTheme === 'dark' : prefersDark;
    setDarkMode(shouldDark);
    document.body.classList.toggle('dark', shouldDark);
  }, []);

  useEffect(() => {
    const onScroll = () => setShowBackToTop(window.scrollY > 480);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggleTheme = () => {
    const nextMode = !darkMode;
    setDarkMode(nextMode);
    document.body.classList.toggle('dark', nextMode);
    window.localStorage.setItem('theme', nextMode ? 'dark' : 'light');
  };

  return (
    <div className="min-h-screen bg-transparent">
      <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/80">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-3 text-lg font-semibold text-slate-950 dark:text-white">
            <img src="/logo.svg" alt="Software Deals Hub logo" className="h-10 w-10 rounded-2xl object-cover shadow-sm" />
            <span>Software Deals Hub</span>
          </Link>

          <nav className="hidden items-center gap-6 lg:flex">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="text-sm font-medium text-slate-600 transition hover:text-indigo-600 dark:text-slate-300">
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <label className="flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-500 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400">
              <Search className="h-4 w-4" />
              <input aria-label="Search software" placeholder="Search" className="w-24 bg-transparent outline-none" />
            </label>
            <button
              type="button"
              onClick={toggleTheme}
              aria-label="Toggle dark mode"
              className="rounded-full border border-slate-200 bg-white p-2.5 text-slate-600 shadow-sm transition hover:border-indigo-300 hover:text-indigo-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300"
            >
              {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
          </div>

          <button
            type="button"
            aria-label="Open navigation menu"
            onClick={() => setIsMenuOpen((value) => !value)}
            className="rounded-full border border-slate-200 bg-white p-2.5 text-slate-600 shadow-sm lg:hidden dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="border-t border-slate-200 bg-white/95 px-4 py-4 lg:hidden dark:border-slate-800 dark:bg-slate-950/95">
            <nav className="flex flex-col gap-3">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} className="rounded-2xl px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-indigo-600 dark:text-slate-300 dark:hover:bg-slate-900" onClick={() => setIsMenuOpen(false)}>
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </header>

      <main>{children}</main>

      <footer id="contact" className="border-t border-slate-200 bg-slate-950 px-4 py-16 text-slate-300 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <img src="/logo.svg" alt="Software Deals Hub logo" className="h-12 w-12 rounded-2xl object-cover" />
              <h2 className="text-xl font-semibold text-white">Software Deals Hub</h2>
            </div>
            <p className="mt-4 text-sm leading-7 text-slate-400">
              Modern product discovery for affiliate marketers, agencies, and business builders.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">Explore</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li><Link href="/about" className="hover:text-white">About</Link></li>
              <li><Link href="/best-crm-software" className="hover:text-white">Best CRM Software</Link></li>
              <li><Link href="/products/gohighlevel" className="hover:text-white">GoHighLevel Review</Link></li>
              <li><Link href="/products/hostinger" className="hover:text-white">Hostinger Review</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-white">Terms</Link></li>
              <li><Link href="/disclaimer" className="hover:text-white">Disclaimer</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">Contact</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li><a href="mailto:hello@softwaredealshub.com" className="hover:text-white">hello@softwaredealshub.com</a></li>
              <li><a href="https://twitter.com" className="hover:text-white">Twitter</a></li>
              <li><a href="https://linkedin.com" className="hover:text-white">LinkedIn</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">Stay in the loop</h3>
            <p className="mt-4 text-sm leading-7 text-slate-400">Get tool reviews, comparisons, and promotions delivered weekly.</p>
          </div>
        </div>
      </footer>


    </div>
  );
}
