import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, CheckCircle2, Compass, Crown, Sparkles, TrendingUp } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Best CRM Software | Top CRM Platforms for Agencies, SMBs & Growing Teams',
  description:
    'Compare the best CRM software for agencies, small businesses, and growing teams. Explore features, pricing, automation, and which platform fits your workflow best.',
  alternates: { canonical: '/best-crm-software' },
  keywords: ['best CRM software', 'CRM software for agencies', 'best CRM for small business', 'CRM comparison', 'sales automation software'],
  openGraph: {
    title: 'Best CRM Software | Reviews and Comparisons',
    description: 'Find the best CRM software for agencies, SMBs, and growing businesses with clear comparisons and affiliate-friendly insights.',
    url: 'https://softwaredealshub.com/best-crm-software',
    type: 'article',
    images: [{ url: '/unnamed.jpg', width: 1200, height: 630, alt: 'Best CRM software guide' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best CRM Software',
    description: 'Discover the top CRM platforms for agencies, SMBs, and scaling teams.',
    images: ['/unnamed.jpg'],
  },
};

const bestCrmOptions = [
  {
    name: 'GoHighLevel',
    reason: 'Best for agencies that want CRM, funnels, automation, and white-label tools in one place.',
    href: '/products/gohighlevel',
  },
  {
    name: 'HubSpot',
    reason: 'Best for teams that want polished inbound CRM workflows and a strong ecosystem.',
    href: '/products/gohighlevel',
  },
  {
    name: 'Zoho CRM',
    reason: 'Best for cost-conscious teams that still want automation and sales pipeline management.',
    href: '/products/gohighlevel',
  },
];

const checklist = [
  'Contact and deal management',
  'Email and SMS automation',
  'Sales pipeline visibility',
  'Lead capture and follow-up tools',
  'Reporting and onboarding support',
];

export default function BestCrmSoftwarePage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(79,70,229,0.16),_transparent_45%)]" />
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <nav aria-label="Breadcrumb" className="mb-8 text-sm text-slate-500 dark:text-slate-400">
            <div className="flex flex-wrap items-center gap-2">
              <Link href="/" className="hover:text-indigo-600">Home</Link>
              <span>/</span>
              <span className="text-slate-700 dark:text-slate-200">Best CRM Software</span>
            </div>
          </nav>

          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white/80 px-3 py-1.5 text-sm font-medium text-indigo-700 shadow-sm backdrop-blur dark:border-indigo-400/30 dark:bg-slate-900/70 dark:text-indigo-300">
                <Sparkles className="h-4 w-4" />
                SEO-focused software guide
              </div>
              <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl dark:text-white">
                Best CRM Software for Agencies, Small Businesses, and Scaling Teams
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
                Choosing the right CRM can improve sales visibility, automate follow-ups, and help your team operate with less friction. This guide highlights the leading options for modern businesses.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/products/gohighlevel" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 px-6 py-3 font-semibold text-white shadow-lg shadow-indigo-500/20 transition hover:-translate-y-1">
                  Explore GoHighLevel <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="/products/hostinger" className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white/80 px-6 py-3 font-semibold text-slate-700 backdrop-blur transition hover:border-indigo-300 hover:text-indigo-700 dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-200">
                  View Hostinger <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="rounded-[2rem] border border-indigo-100/70 bg-white/85 p-6 shadow-[0_20px_80px_rgba(15,23,42,0.08)] backdrop-blur-xl dark:border-slate-800 dark:bg-slate-900/70">
              <div className="rounded-[1.5rem] border border-indigo-100 bg-gradient-to-br from-indigo-50 via-white to-violet-50 p-6 dark:border-indigo-900/40 dark:from-indigo-950/60 dark:via-slate-900 dark:to-violet-950/60">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-600 to-violet-600 text-white">
                    <TrendingUp className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.25em] text-indigo-600 dark:text-indigo-300">What matters most</p>
                    <h2 className="text-xl font-semibold text-slate-950 dark:text-white">The right CRM should simplify growth</h2>
                  </div>
                </div>
                <ul className="mt-6 space-y-3 text-sm text-slate-700 dark:text-slate-300">
                  {checklist.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-indigo-600" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <section className="rounded-[2rem] border border-slate-200/70 bg-white/80 p-8 shadow-[0_20px_70px_rgba(15,23,42,0.05)] backdrop-blur dark:border-slate-800 dark:bg-slate-900/70">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-indigo-600 dark:text-indigo-300">Why it matters</p>
              <h2 className="mt-3 text-3xl font-semibold text-slate-950 dark:text-white">A strong CRM helps your team stay organized and close more deals</h2>
              <p className="mt-4 text-base leading-8 text-slate-600 dark:text-slate-300">
                Whether you run a service business, digital agency, or local brand, the right CRM gives your team a single place to track conversations, automate follow-ups, and improve visibility across the sales process.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                { title: 'Better pipeline visibility', text: 'Track deals, tasks, and client activity without scattered spreadsheets.' },
                { title: 'More efficient follow-up', text: 'Automate reminders, nurture flows, and sales handoffs with less manual work.' },
                { title: 'Faster onboarding', text: 'Give your team a clear system that supports new clients and internal processes.' },
                { title: 'Higher conversion potential', text: 'Turn more leads into booked calls, signed clients, and repeat business.' },
              ].map((item) => (
                <div key={item.title} className="rounded-[1.4rem] border border-slate-200 bg-slate-50 p-5 shadow-sm dark:border-slate-800 dark:bg-slate-950/70">
                  <h3 className="text-lg font-semibold text-slate-950 dark:text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-20">
          <div className="mb-8 flex items-center gap-3">
            <Compass className="h-6 w-6 text-indigo-600" />
            <h2 className="text-3xl font-semibold text-slate-950 dark:text-white">Top CRM options to consider</h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {bestCrmOptions.map((option) => (
              <article key={option.name} className="rounded-[1.75rem] border border-slate-200/70 bg-white/85 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(79,70,229,0.12)] dark:border-slate-800 dark:bg-slate-900/70">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-600 to-violet-600 text-white">
                  <Crown className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-slate-950 dark:text-white">{option.name}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{option.reason}</p>
                <Link href={option.href} className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 hover:text-indigo-700 dark:text-indigo-300">
                  Read more <ArrowRight className="h-4 w-4" />
                </Link>
              </article>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
