'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { ArrowRight, ExternalLink, Rocket, Sparkles, X } from 'lucide-react';

type ProductVariant = 'gohighlevel' | 'hostinger';

type PopupId = 'welcome' | 'exitIntent' | 'scroll' | 'bootcamp' | 'ai' | 'certifications';

type PopupConfig = {
  id: PopupId;
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  secondaryAction?: 'close' | 'link';
};

const popupConfigsByProduct: Record<ProductVariant, Record<PopupId, PopupConfig>> = {
  gohighlevel: {
    welcome: {
      id: 'welcome',
      title: '🎉 Welcome to the Complete GoHighLevel Guide',
      description: 'Learn everything about GoHighLevel, explore its features, compare plans, and start your free trial when you are ready.',
      ctaLabel: 'Start 30-Day Free Trial',
      ctaHref: 'https://www.gohighlevel.com/protrial?fp_ref=sharjeel72',
      secondaryLabel: 'Continue Reading',
      secondaryHref: '#',
      secondaryAction: 'close',
    },
    exitIntent: {
      id: 'exitIntent',
      title: 'Wait! Don’t Leave Yet 👋',
      description: 'Start your 30-day free trial today and discover why thousands of agencies use GoHighLevel to grow their business.',
      ctaLabel: 'Start Free Trial',
      ctaHref: 'https://www.gohighlevel.com/protrial?fp_ref=sharjeel72',
      secondaryLabel: 'View Pricing',
      secondaryHref: 'https://www.gohighlevel.com/pricing?fp_ref=sharjeel72',
      secondaryAction: 'link',
    },
    scroll: {
      id: 'scroll',
      title: 'Ready to Try GoHighLevel?',
      description: 'You have explored most of the features. Experience everything yourself with a free trial.',
      ctaLabel: 'Start Free Trial',
      ctaHref: 'https://www.gohighlevel.com/protrial?fp_ref=sharjeel72',
      secondaryLabel: 'Maybe Later',
      secondaryHref: '#',
      secondaryAction: 'close',
    },
    bootcamp: {
      id: 'bootcamp',
      title: 'Master GoHighLevel Faster',
      description: 'Join the official 30-day bootcamp and learn step-by-step how to use GoHighLevel like a professional.',
      ctaLabel: 'Join Bootcamp',
      ctaHref: 'https://www.gohighlevel.com/highlevel-bootcamp?fp_ref=sharjeel72',
    },
    ai: {
      id: 'ai',
      title: 'Discover GoHighLevel AI',
      description: 'See how AI Employees, AI Chat, and AI Automation can save time and grow your business.',
      ctaLabel: 'Explore AI Features',
      ctaHref: 'https://www.gohighlevel.com/ai?fp_ref=sharjeel72',
    },
    certifications: {
      id: 'certifications',
      title: 'Become a Certified GoHighLevel Expert',
      description: 'Earn certifications, build trust with clients, and unlock exclusive opportunities inside the HighLevel ecosystem.',
      ctaLabel: 'Explore Certifications',
      ctaHref: 'https://www.gohighlevel.com/certifications?fp_ref=sharjeel85',
    },
  },
  hostinger: {
    welcome: {
      id: 'welcome',
      title: '🚀 Welcome to Hostinger',
      description: 'See why Hostinger is a strong choice for fast, affordable, beginner-friendly hosting and WordPress sites.',
      ctaLabel: 'Get Hostinger',
      ctaHref: 'https://www.hostinger.com/pk/pricing?REFERRALCODE=VN0CSHARJBH0',
      secondaryLabel: 'Continue Reading',
      secondaryHref: '#',
      secondaryAction: 'close',
    },
    exitIntent: {
      id: 'exitIntent',
      title: 'Wait! Don’t Leave Before You Compare',
      description: 'Hostinger offers simple setup, strong performance, and pricing that is hard to beat for new sites and small businesses.',
      ctaLabel: 'View Pricing',
      ctaHref: 'https://www.hostinger.com/pk/pricing?REFERRALCODE=VN0CSHARJBH0',
      secondaryLabel: 'See Plans',
      secondaryHref: '#plans',
      secondaryAction: 'link',
    },
    scroll: {
      id: 'scroll',
      title: 'Ready to Launch with Hostinger?',
      description: 'You have seen the main reasons to choose Hostinger. Start your setup with a plan that fits your site.',
      ctaLabel: 'Get Started',
      ctaHref: 'https://www.hostinger.com/pk/pricing?REFERRALCODE=VN0CSHARJBH0',
      secondaryLabel: 'Maybe Later',
      secondaryHref: '#',
      secondaryAction: 'close',
    },
    bootcamp: {
      id: 'bootcamp',
      title: 'Hostinger Beginner Setup',
      description: 'Get started quickly with a beginner-friendly hosting platform and a simple control panel.',
      ctaLabel: 'Explore Hosting',
      ctaHref: 'https://www.hostinger.com/pk/pricing?REFERRALCODE=VN0CSHARJBH0',
    },
    ai: {
      id: 'ai',
      title: 'Hostinger AI Website Builder',
      description: 'Create a site faster with Hostinger’s website tools and guided setup experience.',
      ctaLabel: 'Try Hostinger',
      ctaHref: 'https://www.hostinger.com/pk/pricing?REFERRALCODE=VN0CSHARJBH0',
    },
    certifications: {
      id: 'certifications',
      title: 'Hostinger for Growing Websites',
      description: 'See how Hostinger can support your next step with performance, reliability, and simple management.',
      ctaLabel: 'Compare Plans',
      ctaHref: 'https://www.hostinger.com/pk/pricing?REFERRALCODE=VN0CSHARJBH0',
    },
  },
};

type PopupConfig = {
  id: PopupId;
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  secondaryAction?: 'close' | 'link';
};


const STORAGE_KEY = 'gohighlevel-popup-state';
const SESSION_KEY = 'gohighlevel-popup-session';
const US_TIME_ZONE = 'America/New_York';

function formatUsTime(date: Date) {
  return new Intl.DateTimeFormat('en-US', {
    timeZone: US_TIME_ZONE,
    hour: 'numeric',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
    timeZoneName: 'short',
  }).format(date);
}

function getTimeZoneOffsetMinutes(date: Date, timeZone: string) {
  const utcDate = new Date(date.toLocaleString('en-US', { timeZone: 'UTC' }));
  const tzDate = new Date(date.toLocaleString('en-US', { timeZone }));
  return (tzDate.getTime() - utcDate.getTime()) / 60000;
}

function getNextMidnightInUs() {
  const now = new Date();
  const formatter = new Intl.DateTimeFormat('en-CA', {
    timeZone: US_TIME_ZONE,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hourCycle: 'h23',
  });
  const parts = formatter.formatToParts(now);
  const map = Object.fromEntries(parts.map((part) => [part.type, part.value]));
  const year = Number(map.year);
  const month = Number(map.month);
  const day = Number(map.day);
  const midnightUtc = Date.UTC(year, month - 1, day + 1, 0, 0, 0);
  const offsetMinutes = getTimeZoneOffsetMinutes(new Date(midnightUtc), US_TIME_ZONE);
  return new Date(midnightUtc - offsetMinutes * 60000);
}

function readStorage<T>(key: string): T | null {
  if (typeof window === 'undefined') return null;
  try {
    const value = window.localStorage.getItem(key);
    return value ? (JSON.parse(value) as T) : null;
  } catch {
    return null;
  }
}

function writeStorage(key: string, value: unknown) {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // ignore storage errors
  }
}

function readSessionState(): Record<string, boolean> {
  if (typeof window === 'undefined') return {};
  try {
    const value = window.sessionStorage.getItem(SESSION_KEY);
    return value ? (JSON.parse(value) as Record<string, boolean>) : {};
  } catch {
    return {};
  }
}

function writeSessionState(value: Record<string, boolean>) {
  if (typeof window === 'undefined') return;
  try {
    window.sessionStorage.setItem(SESSION_KEY, JSON.stringify(value));
  } catch {
    // ignore storage errors
  }
}

function canShowPopup(id: PopupId) {
  const storage = readStorage<Record<string, { lastShown?: number }>>(STORAGE_KEY) || {};
  const sessionState = readSessionState();

  if (id === 'welcome') {
    return !sessionState.welcome;
  }

  if (id === 'exitIntent') {
    return !sessionState.exitIntent;
  }

  return !storage[id]?.lastShown;
}

function markPopupSeen(id: PopupId) {
  const storage = readStorage<Record<string, { lastShown?: number }>>(STORAGE_KEY) || {};
  storage[id] = { lastShown: Date.now() };
  writeStorage(STORAGE_KEY, storage);

  const sessionState = readSessionState();
  if (id === 'welcome' || id === 'exitIntent') {
    sessionState[id] = true;
    writeSessionState(sessionState);
  }
}

function trackEvent(action: string, popupId: PopupId) {
  if (typeof window === 'undefined') return;
  const detail = { popupId, timestamp: Date.now() };
  window.dispatchEvent(new CustomEvent('gohighlevel-popup-event', { detail: { action, ...detail } }));
  console.info(`[Popup Analytics] ${action}: ${popupId}`);
}

export function PopupManager() {
  const pathname = usePathname();
  const productVariant: ProductVariant = pathname === '/products/hostinger' || pathname === '/products/hostinger/' ? 'hostinger' : 'gohighlevel';
  const isSupportedPage = pathname === '/products/gohighlevel' || pathname === '/products/gohighlevel/' || pathname === '/products/hostinger' || pathname === '/products/hostinger/';
  const [activePopup, setActivePopup] = useState<PopupId | null>(null);
  const [stickyVisible, setStickyVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [offerTimeLeft, setOfferTimeLeft] = useState(0);
  const dialogRef = useRef<HTMLDivElement | null>(null);

  const openPopup = (popupId: PopupId) => {
    if (activePopup || !canShowPopup(popupId)) return;
    markPopupSeen(popupId);
    setActivePopup(popupId);
    trackEvent('shown', popupId);
  };

  const closePopup = (popupId?: PopupId) => {
    if (popupId && popupId !== activePopup) return;
    setActivePopup(null);
    if (popupId) {
      trackEvent('closed', popupId);
    }
  };

  const handleCtaClick = (popupId: PopupId, href: string) => {
    trackEvent('cta_clicked', popupId);
    window.open(href, '_blank', 'noopener,noreferrer');
  };

  useEffect(() => {
    const syncOfferTimer = () => {
      const nextMidnight = getNextMidnightInUs();
      const remaining = Math.max(0, nextMidnight.getTime() - Date.now());
      setOfferTimeLeft(remaining);
    };

    syncOfferTimer();
    const timerId = window.setInterval(syncOfferTimer, 1000);

    return () => window.clearInterval(timerId);
  }, []);

  useEffect(() => {
    const mediaMatch = window.matchMedia('(max-width: 767px)');
    const updateMobile = () => setIsMobile(mediaMatch.matches);
    updateMobile();
    mediaMatch.addEventListener('change', updateMobile);

    const welcomeTimer = window.setTimeout(() => openPopup('welcome'), 800);
    const bootcampTimer = window.setTimeout(() => openPopup('bootcamp'), 90000);

    const handleScroll = () => {
      setStickyVisible(window.scrollY > 300);
      const scrollProgress = (window.scrollY + window.innerHeight) / document.documentElement.scrollHeight;
      if (scrollProgress > 0.6 && canShowPopup('scroll') && !activePopup) {
        openPopup('scroll');
      }
    };

    const handleMouseLeave = (event: MouseEvent) => {
      if (event.clientY <= 0 && window.innerWidth > 768 && canShowPopup('exitIntent') && !activePopup) {
        openPopup('exitIntent');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mouseout', handleMouseLeave);

    const aiSection = document.getElementById('ai-features-section');
    const certSection = document.getElementById('certifications-section');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target.id === 'ai-features-section' && canShowPopup('ai')) {
              openPopup('ai');
            }
            if (entry.target.id === 'certifications-section' && canShowPopup('certifications')) {
              openPopup('certifications');
            }
          }
        });
      },
      { threshold: 0.3 },
    );

    if (aiSection) observer.observe(aiSection);
    if (certSection) observer.observe(certSection);

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && activePopup) {
        closePopup(activePopup);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.clearTimeout(welcomeTimer);
      window.clearTimeout(bootcampTimer);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mouseout', handleMouseLeave);
      window.removeEventListener('keydown', handleKeyDown);
      mediaMatch.removeEventListener('change', updateMobile);
      observer.disconnect();
    };
  }, [activePopup]);

  useEffect(() => {
    if (!activePopup) {
      document.body.style.overflow = '';
      return;
    }
    document.body.style.overflow = 'hidden';
    const focusable = dialogRef.current?.querySelectorAll<HTMLElement>('a, button, [tabindex]:not([tabindex="-1"])');
    const first = focusable?.[0];
    first?.focus();

    return () => {
      document.body.style.overflow = '';
    };
  }, [activePopup]);

  if (!isSupportedPage) {
    return null;
  }

  const popup = activePopup ? popupConfigsByProduct[productVariant][activePopup] : null;
  const offerCountdown = useMemo(() => {
    const totalSeconds = Math.max(0, Math.floor(offerTimeLeft / 1000));
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    return `${hours.toString().padStart(2, '0')}h ${minutes.toString().padStart(2, '0')}m ${seconds.toString().padStart(2, '0')}s`;
  }, [offerTimeLeft]);

  const popupPanel = useMemo(() => {
    if (!popup) return null;
    const content = (
      <div
        className={`relative w-full ${isMobile ? 'max-w-full rounded-t-[24px] rounded-b-none' : 'max-w-lg rounded-[24px]'} border border-white/70 bg-white/80 p-5 shadow-2xl backdrop-blur-xl dark:border-slate-800 dark:bg-slate-900/80`}
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="popup-title"
        aria-describedby="popup-description"
      >
        <button
          type="button"
          aria-label="Close popup"
          onClick={() => closePopup(activePopup as PopupId)}
          className="absolute right-4 top-4 rounded-full border border-slate-200 bg-white/70 p-2 text-slate-600 transition hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-950/70 dark:text-slate-300"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="flex items-center gap-3">
          <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${productVariant === 'hostinger' ? 'bg-gradient-to-br from-violet-600 to-fuchsia-600' : 'bg-gradient-to-br from-indigo-600 to-violet-600'} text-white`}>
            <Sparkles className="h-5 w-5" />
          </div>
          <div>
            <p className={`text-sm font-semibold uppercase tracking-[0.25em] ${productVariant === 'hostinger' ? 'text-violet-600 dark:text-violet-300' : 'text-indigo-600 dark:text-indigo-300'}`}>{productVariant === 'hostinger' ? 'Hostinger' : 'GoHighLevel'}</p>
            <h3 id="popup-title" className="text-xl font-semibold text-slate-950 dark:text-white">{popup.title}</h3>
          </div>
        </div>

        <p id="popup-description" className="mt-5 text-sm leading-7 text-slate-600 dark:text-slate-300">{popup.description}</p>

        <div className="mt-6 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => handleCtaClick(activePopup as PopupId, popup.ctaHref)}
            className={`inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:translate-y-[-2px] ${productVariant === 'hostinger' ? 'bg-gradient-to-r from-violet-600 to-fuchsia-600 shadow-violet-500/20' : 'bg-gradient-to-r from-indigo-600 to-violet-600 shadow-indigo-500/20'}`}
          >
            {popup.ctaLabel} <ArrowRight className="h-4 w-4" />
          </button>
          {popup.secondaryLabel ? (
            popup.secondaryAction === 'link' && popup.secondaryHref ? (
              <a
                href={popup.secondaryHref}
                target="_blank"
                rel="noreferrer"
                onClick={() => trackEvent('cta_clicked', activePopup as PopupId)}
                className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white/80 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-indigo-300 hover:text-indigo-700 dark:border-slate-700 dark:bg-slate-950/70 dark:text-slate-200"
              >
                {popup.secondaryLabel} <ExternalLink className="h-4 w-4" />
              </a>
            ) : (
              <button
                type="button"
                onClick={() => closePopup(activePopup as PopupId)}
                className="rounded-full border border-slate-300 bg-white/80 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-indigo-300 hover:text-indigo-700 dark:border-slate-700 dark:bg-slate-950/70 dark:text-slate-200"
              >
                {popup.secondaryLabel}
              </button>
            )
          ) : null}
        </div>
      </div>
    );

    return (
      <div className="fixed inset-0 z-[70] flex items-end justify-center bg-slate-950/55 p-0 backdrop-blur-md sm:items-center sm:p-4" onClick={() => closePopup(activePopup as PopupId)}>
        <div className="w-full sm:w-auto" onClick={(event) => event.stopPropagation()}>
          {content}
        </div>
      </div>
    );
  }, [activePopup, popup, isMobile]);

  return (
    <>
      {popupPanel}

      <div className="fixed bottom-4 left-1/2 z-[60] flex w-[calc(100%-1rem)] max-w-5xl -translate-x-1/2 justify-center px-2 sm:bottom-6">
        <div className={`w-full rounded-[22px] border border-white/70 bg-white/90 p-3 shadow-2xl backdrop-blur-xl transition-all duration-300 dark:border-slate-800 dark:bg-slate-900/90 ${stickyVisible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'}`}>
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-600 to-violet-600 text-white">
                <Rocket className="h-4 w-4" />
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-950 dark:text-white">{productVariant === 'hostinger' ? 'Hostinger' : 'GoHighLevel'}</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">{productVariant === 'hostinger' ? 'Fast hosting for modern sites' : 'All-in-one growth platform'}</p>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <div className="rounded-full border border-amber-200 bg-amber-50 px-3 py-1.5 text-xs font-semibold text-amber-700 dark:border-amber-900/50 dark:bg-amber-950/40 dark:text-amber-300">
                Offer ends in {offerCountdown}
              </div>
              <a
                href={productVariant === 'hostinger' ? 'https://www.hostinger.com/pk/pricing?REFERRALCODE=VN0CSHARJBH0' : 'https://www.gohighlevel.com/protrial?fp_ref=sharjeel72'}
                target="_blank"
                rel="noreferrer"
                className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-white ${productVariant === 'hostinger' ? 'bg-gradient-to-r from-violet-600 to-fuchsia-600' : 'bg-gradient-to-r from-indigo-600 to-violet-600'}`}
              >
                {productVariant === 'hostinger' ? 'Get Hostinger' : 'Start Free Trial'} <ArrowRight className="h-4 w-4" />
              </a>
              <button type="button" aria-label="Hide sticky CTA" onClick={() => setStickyVisible(false)} className="rounded-full border border-slate-200 bg-white/80 p-2 text-slate-600 dark:border-slate-700 dark:bg-slate-950/70 dark:text-slate-300">
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
