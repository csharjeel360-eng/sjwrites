import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StickyCTA from '@/components/StickyCTA';
import SectionAffiliateCta from '@/components/SectionAffiliateCta';
import { AFFILIATE_LINK } from '@/components/Constants';

const productCatalog: Record<string, { name: string; title: string; description: string; badge: string; highlights: string[]; ctaLabel: string }> = {
  gohighlevel: {
    name: 'GoHighLevel',
    title: 'A complete CRM, funnel, and marketing automation platform',
    description:
      'This product page is now reachable from its own URL while still living on the same domain. It is perfect for affiliate-style landing pages that need a clean product-focused experience.',
    badge: 'Product landing page',
    highlights: ['CRM', 'Funnels', 'Email + SMS', 'Automation'],
    ctaLabel: 'Start free trial',
  },
  'go-highlevel': {
    name: 'GoHighLevel',
    title: 'A complete CRM, funnel, and marketing automation platform',
    description:
      'This alias routes to the same landing experience so visitors can access the page from different URLs without changing your domain.',
    badge: 'Alias URL',
    highlights: ['All-in-one dashboard', 'Lead workflows', 'Website builder', 'Reputation tools'],
    ctaLabel: 'Open GoHighLevel',
  },
  crm: {
    name: 'CRM Suite',
    title: 'Customer relationship management built for growth',
    description:
      'Use this page as another product destination from the same domain. It can be shared separately while still pointing back to your main brand hub.',
    badge: 'Product route',
    highlights: ['Lead tracking', 'Automations', 'Pipeline views', 'Team collaboration'],
    ctaLabel: 'See CRM offers',
  },
  automation: {
    name: 'Automation Platform',
    title: 'Automate campaigns, follow-ups, and sales tasks',
    description:
      'A dedicated landing page for automation-focused visitors, with the same single-domain setup and easy navigation to other products.',
    badge: 'Product route',
    highlights: ['Workflow engine', 'SMS follow-up', 'Triggers', 'Reporting'],
    ctaLabel: 'Explore automation',
  },
};

const productLinks = [
  { slug: 'gohighlevel', title: 'GoHighLevel', description: 'Main product landing page' },
  { slug: 'gohighlevel-pricing', title: 'Pricing', description: 'Pricing and plan details' },
  { slug: 'gohighlevel-features', title: 'Features', description: 'Feature overview page' },
  { slug: 'crm', title: 'CRM Suite', description: 'CRM-focused product page' },
  { slug: 'automation', title: 'Automation Platform', description: 'Automation-focused product page' },
];

export default async function ProductRoutePage({ params }: { params: Promise<{ product: string }> }) {
  const { product } = await params;
  const productData = productCatalog[product] ?? productCatalog.gohighlevel;

  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <Header />
      <section className="relative overflow-hidden pt-24">
        <div className="absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-violet-500/10 via-sky-400/5 to-transparent" aria-hidden="true" />
        <div className="relative mx-auto flex max-w-7xl flex-col gap-10 px-4 py-20 sm:px-6 lg:px-8 lg:flex-row lg:items-center lg:py-24">
          <div className="max-w-2xl">
            <div className="inline-flex items-center rounded-full border border-violet-200 bg-white/80 px-4 py-2 text-sm font-semibold text-violet-700 shadow-sm">
              <Sparkles className="mr-2 h-4 w-4" />
              {productData.badge}
            </div>
            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
              {productData.title}
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-700">
              {productData.description}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-violet-600 via-indigo-600 to-sky-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-500/20 transition hover:-translate-y-0.5">
                {productData.ctaLabel}
              </a>
              <Link href="/" className="inline-flex items-center justify-center rounded-full border border-violet-600 px-6 py-3 text-sm font-semibold text-violet-600 transition hover:bg-violet-50">
                Back to home
              </Link>
            </div>
          </div>

          <div className="w-full max-w-xl rounded-[2rem] border border-slate-200/80 bg-white p-8 shadow-[0_30px_120px_-40px_rgba(15,23,42,0.35)]">
            <div className="rounded-[1.5rem] bg-slate-950 p-6 text-white">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-400">{productData.name}</p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {productData.highlights.map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-white/10 p-4 text-sm font-medium">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-slate-200/80 bg-white p-8 shadow-sm sm:p-10">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">Multi-product setup</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                One domain, many product landing pages
              </h2>
            </div>
            <SectionAffiliateCta label={`View ${productData.name} offers`} />
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {productLinks.map((item) => (
              <Link key={item.slug} href={`/${item.slug}`} className="rounded-2xl border border-slate-200 bg-slate-50 p-6 transition hover:-translate-y-1 hover:border-violet-300 hover:bg-white">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-600">{item.title}</p>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
                <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-slate-950">
                  Open page <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <StickyCTA />
    </main>
  );
}
