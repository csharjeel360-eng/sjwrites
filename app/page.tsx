import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, Play, Sparkles, Star } from 'lucide-react';
import { ProductCard } from '@/components/product-card';
import { products } from '@/lib/products';

export const metadata: Metadata = {
  title: 'Software Deals Hub | Discover the Best Software to Grow Your Business',
  description:
    'Explore curated software deals for CRM, marketing automation, funnels, hosting, and AI tools with modern affiliate landing pages and in-depth reviews.',
  alternates: { canonical: '/' },
  keywords: ['software deals', 'best CRM software', 'marketing automation tools', 'AI software', 'affiliate software reviews'],
  openGraph: {
    title: 'Software Deals Hub | Best CRM, SaaS & AI Software Reviews',
    description: 'Compare top business software and discover affiliate-ready reviews for CRM, automation, hosting, and AI tools.',
    url: 'https://softwaredealshub.com',
    type: 'website',
    images: [{ url: '/unnamed.jpg', width: 1200, height: 630, alt: 'Software Deals Hub homepage' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Software Deals Hub',
    description: 'Curated software reviews and deals for growing businesses.',
    images: ['/unnamed.jpg'],
  },
};

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(129,140,248,0.2),_transparent_48%)]" />
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-28">
          <div className="max-w-2xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white/80 px-4 py-2 text-sm font-medium text-indigo-700 shadow-sm backdrop-blur dark:border-indigo-400/30 dark:bg-slate-900/70 dark:text-indigo-300">
              <Sparkles className="h-4 w-4" />
              Curated SaaS tools for modern teams
            </div>
            <h1 className="text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl dark:text-white">
              Discover the Best Software to Grow Your Business
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
              Compare trusted business tools, CRM software, marketing platforms, automation tools, and AI software—all in one place.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="#software"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 px-6 py-3 font-semibold text-white shadow-lg shadow-indigo-500/20 transition hover:translate-y-[-2px]"
              >
                Browse Software <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="#top-picks"
                className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white/80 px-6 py-3 font-semibold text-slate-700 backdrop-blur transition hover:border-indigo-300 hover:text-indigo-700 dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-200"
              >
                <Play className="h-4 w-4" /> View Top Picks
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-slate-600 dark:text-slate-400">
              <div className="flex items-center gap-2">
                <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                <span>4.9/5 average ratings</span>
              </div>
              <div>⚡ Fast, mobile-first experience</div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/60 bg-white/70 p-6 shadow-[0_25px_70px_rgba(15,23,42,0.08)] backdrop-blur-xl dark:border-slate-800 dark:bg-slate-900/70">
            <div className="rounded-[1.5rem] border border-indigo-100 bg-gradient-to-br from-indigo-50 via-white to-violet-50 p-6 dark:border-indigo-900/40 dark:from-indigo-950/60 dark:via-slate-900 dark:to-violet-950/60">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-indigo-600 dark:text-indigo-300">Featured picks</p>
                  <h2 className="mt-2 text-2xl font-semibold text-slate-950 dark:text-white">GoHighLevel & Hostinger</h2>
                </div>
                <div className="rounded-2xl bg-gradient-to-br from-indigo-600 to-violet-600 px-4 py-3 text-sm font-semibold text-white">Top choices</div>
              </div>
              <p className="mt-5 text-sm leading-7 text-slate-600 dark:text-slate-300">
                Two standout platforms for agencies and modern businesses: GoHighLevel for growth and automation, and Hostinger for fast, affordable hosting.
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <Link href="/products/gohighlevel" className="rounded-2xl border border-white/70 bg-white/80 p-4 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-slate-800 dark:bg-slate-900/70">
                  <p className="text-sm font-semibold text-slate-950 dark:text-white">GoHighLevel</p>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">CRM, funnels, automation, and white-label tools.</p>
                </Link>
                <Link href="/products/hostinger" className="rounded-2xl border border-white/70 bg-white/80 p-4 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-slate-800 dark:bg-slate-900/70">
                  <p className="text-sm font-semibold text-slate-950 dark:text-white">Hostinger</p>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Fast hosting, WordPress support, and simple setup.</p>
                </Link>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/products/gohighlevel" className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200">
                  GoHighLevel details <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="/products/hostinger" className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white/80 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-violet-300 hover:text-violet-700 dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-200">
                  Hostinger details <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main id="software" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-indigo-600 dark:text-indigo-300">Products</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-950 dark:text-white">Browse software that moves the needle</h2>
          </div>
          <Link href="/products/gohighlevel" className="text-sm font-semibold text-indigo-600 hover:text-indigo-700 dark:text-indigo-300">
            View full product page →
          </Link>
        </div>

        <div id="top-picks" className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>

        <section className="mt-20 rounded-[2rem] border border-indigo-100 bg-gradient-to-br from-white via-indigo-50/70 to-violet-50/70 p-8 shadow-soft dark:border-indigo-900/40 dark:from-slate-900 dark:via-slate-900 dark:to-violet-950/50">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-indigo-600 dark:text-indigo-300">Newsletter</p>
              <h3 className="mt-3 text-3xl font-semibold text-slate-950 dark:text-white">Get curated software picks in your inbox</h3>
              <p className="mt-4 text-slate-600 dark:text-slate-300">
                Receive fresh reviews, new tools, and affiliate-ready insights every week.
              </p>
            </div>
            <form className="flex flex-col gap-3 sm:flex-row">
              <label className="sr-only" htmlFor="newsletter-email">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-full border border-slate-200 bg-white px-4 py-3 text-sm shadow-sm focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-200 dark:border-slate-700 dark:bg-slate-950"
              />
              <button className="rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 transition hover:translate-y-[-2px]">
                Subscribe
              </button>
            </form>
          </div>
        </section>
      </main>
    </>
  );
}
