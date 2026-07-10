import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  CheckCircle2,
  Crown,
  Globe2,
  HardDrive,
  Layers3,
  LifeBuoy,
  LockKeyhole,
  MessageCircle,
  Monitor,
  Package2,
  Play,
  Rocket,
  ShieldCheck,
  Sparkles,
  Star,
  TrendingUp,
  Wand2,
  Zap,
  Shield,
  Server,
  Cpu,
  Cloud,
  Globe,
  Workflow,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { SectionHeading } from '@/components/product-detail/section-heading';
import { InfoPill } from '@/components/product-detail/info-pill';
import { PopupManager } from '@/components/product-detail/popup-manager';

const problems = [
  { title: 'Slow website performance', description: 'Pages that lag can hurt trust, rankings, and conversions.', icon: Zap },
  { title: 'Expensive hosting plans', description: 'Many providers charge more for basic features than they should.', icon: TrendingUp },
  { title: 'Weak support', description: 'When things break, fast help matters more than marketing promises.', icon: LifeBuoy },
  { title: 'Confusing control panels', description: 'A clunky dashboard can make simple tasks feel frustrating.', icon: Monitor },
  { title: 'Downtime and reliability issues', description: 'Visitors leave fast when your site is unavailable.', icon: Server },
  { title: 'Security gaps', description: 'You need SSL, backups, malware protection, and more built in.', icon: Shield },
];

const solutions = [
  { title: 'LiteSpeed infrastructure', description: 'Fast servers and caching help pages load quickly for visitors.', icon: Rocket },
  { title: 'Affordable plans', description: 'Hostinger keeps pricing approachable for beginners and growing teams.', icon: BadgeCheck },
  { title: '24/7 expert support', description: 'Get help whenever you need it, including during setup and troubleshooting.', icon: MessageCircle },
  { title: 'Easy hPanel', description: 'The control panel is simple, modern, and beginner friendly.', icon: Layers3 },
  { title: 'Free SSL and security', description: 'Secure your site from day one with certificates and protection tools.', icon: LockKeyhole },
  { title: 'Daily backups', description: 'Restore quickly if anything goes wrong.', icon: HardDrive },
];

const featureCards = [
  { title: 'LiteSpeed Web Server', description: 'High performance infrastructure designed to keep sites fast.', icon: Cpu },
  { title: 'Free Domain', description: 'Some plans include a free domain to simplify your setup.', icon: Globe2 },
  { title: 'Free SSL', description: 'Protect your visitors and improve trust with HTTPS.', icon: ShieldCheck },
  { title: 'Email Hosting', description: 'Run professional email with your own domain.', icon: MessageCircle },
  { title: 'WordPress Hosting', description: 'Optimized environments for WordPress websites and stores.', icon: Package2 },
  { title: 'Managed WordPress', description: 'Less maintenance and more focus on your content and growth.', icon: Sparkles },
  { title: 'AI Website Builder', description: 'Create a site quickly with guided tools and smart templates.', icon: Wand2 },
  { title: 'Website Migration', description: 'Move existing websites with less hassle and fewer technical headaches.', icon: Workflow },
  { title: 'Malware Protection', description: 'Stay ahead of threats with built-in scanning and prevention.', icon: Shield },
  { title: 'DDoS Protection', description: 'Reduce the risk of downtime from traffic spikes.', icon: Cloud },
  { title: 'Automatic Backups', description: 'Restore your data with confidence if something breaks.', icon: HardDrive },
  { title: 'Global Data Centers', description: 'Choose a nearby location for better performance.', icon: Globe },
];

const plans = [
  { name: 'Premium', price: '$2.99', period: '/mo', description: 'A strong choice for individuals and small sites.', features: ['100 websites', 'Free domain', 'Free SSL', 'Weekly backups'], cta: 'Get Premium', href: 'https://www.hostinger.com/pk/pricing?REFERRALCODE=VN0CSHARJBH0', recommended: false },
  { name: 'Business', price: '$3.99', period: '/mo', description: 'Best for growing sites that need more performance and tools.', features: ['100 websites', 'Daily backups', 'Advanced cache', 'Free CDN'], cta: 'Get Business', href: 'https://www.hostinger.com/pk/pricing?REFERRALCODE=VN0CSHARJBH0', recommended: true },
  { name: 'Cloud Startup', price: '$9.99', period: '/mo', description: 'Ideal for agencies, stores, or traffic-heavy websites.', features: ['200 websites', 'Dedicated resources', 'Enhanced performance', 'Priority support'], cta: 'Get Cloud Startup', href: 'https://www.hostinger.com/pk/pricing?REFERRALCODE=VN0CSHARJBH0', recommended: false },
];

const stats = [
  { value: '99.9%', label: 'Uptime reliability' },
  { value: 'LiteSpeed', label: 'High-performance servers' },
  { value: '8+', label: 'Global data centers' },
  { value: 'NVMe', label: 'Fast SSD/NVMe storage' },
];

const competitors = [
  { feature: 'Price', hostinger: '$2.99/mo+', bluehost: '$2.95/mo+', namecheap: '$1.58/mo+' },
  { feature: 'Speed', hostinger: 'Excellent', bluehost: 'Good', namecheap: 'Good' },
  { feature: 'SSL', hostinger: 'Included', bluehost: 'Included', namecheap: 'Included' },
  { feature: 'Domain', hostinger: 'Free on eligible plans', bluehost: 'Usually paid', namecheap: 'Usually paid' },
  { feature: 'Support', hostinger: '24/7 live support', bluehost: '24/7 support', namecheap: 'Ticket-based' },
  { feature: 'AI tools', hostinger: 'Included', bluehost: 'Limited', namecheap: 'Limited' },
  { feature: 'Control panel', hostinger: 'Simple hPanel', bluehost: 'Traditional', namecheap: 'Classic' },
  { feature: 'Backups', hostinger: 'Daily on higher tiers', bluehost: 'Paid add-on', namecheap: 'Limited' },
  { feature: 'WordPress optimization', hostinger: 'Strong', bluehost: 'Strong', namecheap: 'Moderate' },
];

const testimonials = [
  { name: 'Nina Alvarez', role: 'Blogger', quote: 'I moved my site to Hostinger and saw faster load times almost immediately.', rating: 5 },
  { name: 'Marcus Reed', role: 'Freelancer', quote: 'The setup was simple, the support is helpful, and the pricing is hard to beat.', rating: 5 },
  { name: 'Sofia Park', role: 'Small Business Owner', quote: 'Hostinger helped me launch my website quickly without spending a fortune.', rating: 5 },
];

const faqs = [
  { question: 'Is Hostinger beginner friendly?', answer: 'Yes. The interface is simple, the onboarding is clear, and most users can get started within minutes.' },
  { question: 'Does Hostinger include free SSL?', answer: 'Yes, SSL is included on most plans and helps secure your site with HTTPS.' },
  { question: 'Can I migrate my website?', answer: 'Hostinger offers migration support and tools to help move existing websites with less friction.' },
  { question: 'Is WordPress supported?', answer: 'Yes. Hostinger is a popular choice for WordPress hosting and offers specialized options.' },
  { question: 'Is there a money-back guarantee?', answer: 'Hostinger typically offers a money-back guarantee, giving you time to evaluate the service.' },
  { question: 'Which plan should I choose?', answer: 'Premium is great for beginners, Business is a strong all-rounder, and Cloud Startup helps with heavier traffic or more demanding projects.' },
  { question: 'Does it include email hosting?', answer: 'Yes, many plans allow you to create professional email accounts tied to your domain.' },
];

function ProblemCard({ title, description, icon: Icon }: { title: string; description: string; icon: LucideIcon }) {
  return (
    <div className="rounded-[1.4rem] border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-[0_16px_45px_rgba(15,23,42,0.08)] dark:border-slate-800 dark:bg-slate-900">
      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-rose-500/10 text-rose-600">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="mt-4 text-lg font-semibold text-slate-950 dark:text-white">{title}</h3>
      <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">{description}</p>
    </div>
  );
}

function SolutionCard({ title, description, icon: Icon }: { title: string; description: string; icon: LucideIcon }) {
  return (
    <div className="rounded-[1.4rem] border border-violet-200 bg-violet-50 p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-[0_16px_45px_rgba(139,92,246,0.14)] dark:border-violet-900/40 dark:bg-violet-950/30">
      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-violet-600 text-white">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="mt-4 text-lg font-semibold text-slate-950 dark:text-white">{title}</h3>
      <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">{description}</p>
    </div>
  );
}

export const metadata: Metadata = {
  title: 'Hostinger Review | Fast, Affordable Hosting for WordPress & Small Business',
  description: 'A detailed Hostinger review covering features, pricing, pros and cons, performance, plans, and why it is a strong affiliate choice for beginners and growing websites.',
  alternates: { canonical: '/products/hostinger' },
  keywords: ['Hostinger review', 'Hostinger hosting', 'best web hosting', 'WordPress hosting', 'affordable web hosting', 'Hostinger pricing', 'buy Hostinger'],
  openGraph: {
    title: 'Hostinger Review | Fast, Affordable Hosting for WordPress & Small Business',
    description: 'See how Hostinger compares for speed, pricing, support, WordPress hosting, and beginner-friendly setup.',
    url: 'https://softwaredealshub.com/products/hostinger',
    type: 'article',
    images: [{ url: '/0x0.png', width: 1200, height: 630, alt: 'Hostinger review page' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hostinger Review',
    description: 'Detailed Hostinger review with pricing, features, pros, cons, and affiliate recommendations.',
    images: ['/0x0.png'],
  },
};

export default function HostingerPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: 'Hostinger',
        description: 'Fast, affordable web hosting with WordPress support, free SSL, AI website builder, and global infrastructure.',
        brand: { '@type': 'Brand', name: 'Hostinger' },
        category: 'Web Hosting',
        offers: { '@type': 'Offer', priceCurrency: 'USD', price: '2.99', availability: 'https://schema.org/InStock' },
        aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.8', reviewCount: '800' },
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map((faq) => ({ '@type': 'Question', name: faq.question, acceptedAnswer: { '@type': 'Answer', text: faq.answer } })),
      }) }} />

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(139,92,246,0.18),_transparent_45%)]" />
        <div className="absolute inset-x-0 top-0 -z-10 h-72 bg-gradient-to-b from-violet-100/70 via-white to-transparent dark:from-violet-950/40 dark:via-slate-950 dark:to-transparent" />
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <nav aria-label="Breadcrumb" className="mb-8 text-sm text-slate-500 dark:text-slate-400">
            <div className="flex flex-wrap items-center gap-2">
              <Link href="/" className="hover:text-violet-600">Home</Link>
              <span>/</span>
              <Link href="/products/gohighlevel" className="hover:text-violet-600">Products</Link>
              <span>/</span>
              <span className="text-slate-700 dark:text-slate-200">Hostinger</span>
            </div>
          </nav>

          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <div className="mb-6 inline-flex items-center rounded-full border border-violet-200 bg-white/80 px-3 py-1.5 text-sm font-medium text-violet-700 shadow-sm backdrop-blur dark:border-violet-900/40 dark:bg-slate-900/70 dark:text-violet-300">
                Fast, affordable hosting for modern websites
              </div>
              <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl dark:text-white">
                Hostinger Review: A practical hosting choice for beginners, creators, and growing businesses.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
                Hostinger combines strong performance, simple setup, and competitive pricing in a package that is easy to trust for WordPress sites, portfolios, and small business websites.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-slate-600 dark:text-slate-300">
                <div className="flex items-center gap-2 rounded-full bg-white/80 px-3 py-2 shadow-sm backdrop-blur dark:bg-slate-900/70">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="font-medium">4.8/5 trusted by millions</span>
                </div>
                <div className="rounded-full border border-slate-200 bg-white/70 px-3 py-2 shadow-sm dark:border-slate-800 dark:bg-slate-900/70">Free SSL included</div>
                <div className="rounded-full border border-slate-200 bg-white/70 px-3 py-2 shadow-sm dark:border-slate-800 dark:bg-slate-900/70">Beginner friendly</div>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <a href="https://www.hostinger.com/pk/pricing?REFERRALCODE=VN0CSHARJBH0" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 px-6 py-3 font-semibold text-white shadow-[0_16px_45px_rgba(139,92,246,0.24)] transition hover:-translate-y-1">
                  Get Hostinger <ArrowRight className="h-4 w-4" />
                </a>
                <a href="#plans" className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white/80 px-6 py-3 font-semibold text-slate-700 backdrop-blur transition hover:border-violet-300 hover:text-violet-700 dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-200">
                  <Play className="h-4 w-4" /> View Plans
                </a>
              </div>
            </div>

            <div className="rounded-[2rem] border border-violet-100/70 bg-white/85 p-6 shadow-[0_20px_80px_rgba(15,23,42,0.08)] backdrop-blur-xl dark:border-slate-800 dark:bg-slate-900/70">
              <div className="rounded-[1.75rem] border border-violet-100 bg-gradient-to-br from-violet-50 via-white to-fuchsia-50 p-6 dark:border-violet-900/40 dark:from-violet-950/60 dark:via-slate-900 dark:to-fuchsia-950/60">
                <div className="overflow-hidden rounded-[1.5rem] border border-violet-100 bg-white/80 p-2 shadow-sm dark:border-violet-900/40 dark:bg-slate-900/70">
                  <Image src="/0x0.png" alt="Hostinger logo" width={640} height={360} className="h-auto w-full rounded-[1.2rem] object-cover" priority />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <InfoPill label="Starting Price" value="From $2.99/mo" />
                  <InfoPill label="Best For" value="WordPress & SMBs" />
                  <InfoPill label="Support" value="24/7 Chat" />
                  <InfoPill label="Type" value="Shared + Managed" />
                </div>

                <div className="mt-6 rounded-[1.5rem] border border-white/70 bg-slate-950 p-4 text-white shadow-xl dark:border-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                  </div>
                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    <div className="rounded-[1rem] border border-slate-800 bg-slate-900/80 p-4">
                      <p className="text-sm text-slate-400">Launch time</p>
                      <p className="mt-2 text-2xl font-semibold">Minutes</p>
                    </div>
                    <div className="rounded-[1rem] border border-slate-800 bg-slate-900/80 p-4">
                      <p className="text-sm text-slate-400">Uptime</p>
                      <p className="mt-2 text-2xl font-semibold">99.9%</p>
                    </div>
                    <div className="rounded-[1rem] border border-slate-800 bg-gradient-to-br from-violet-500 to-fuchsia-500 p-4 sm:col-span-2">
                      <p className="text-sm text-violet-100">Why people choose it</p>
                      <p className="mt-2 text-2xl font-semibold">Fast setup, strong value, and simple management</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <section className="rounded-[2rem] border border-slate-200/70 bg-white/80 p-8 shadow-[0_20px_70px_rgba(15,23,42,0.05)] backdrop-blur dark:border-slate-800 dark:bg-slate-900/70">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <SectionHeading eyebrow="What is Hostinger?" title="A hosting platform built for speed, simplicity, and affordability" description="Hostinger is a web hosting company that offers shared hosting, WordPress plans, cloud hosting, VPS, and website tools that help users launch and manage websites without complexity." />
            </div>
            <div className="rounded-[1.6rem] border border-violet-100 bg-violet-50 p-6 dark:border-violet-900/40 dark:bg-violet-950/30">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-violet-600 dark:text-violet-300">Why it stands out</p>
              <ul className="mt-5 space-y-3 text-sm text-slate-700 dark:text-slate-300">
                <li className="flex items-center gap-3"><CheckCircle2 className="h-5 w-5 text-violet-600" /> Trusted by millions of users worldwide</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="h-5 w-5 text-violet-600" /> Beginner friendly with an easy control panel</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="h-5 w-5 text-violet-600" /> Affordable entry pricing and strong feature value</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="h-5 w-5 text-violet-600" /> Global infrastructure designed for performance</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mt-20">
          <SectionHeading eyebrow="Common problems" title="The hosting issues that hold websites back" description="Many people do not need a complicated hosting setup. They need reliability, speed, support, and clear value." align="center" />
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {problems.map((problem) => (
              <ProblemCard key={problem.title} {...problem} />
            ))}
          </div>
        </section>

        <section className="mt-20">
          <SectionHeading eyebrow="How Hostinger solves them" title="The practical advantages that make hosting easier" description="Hostinger focuses on removing friction so you can get online quickly and spend less time managing technical details." align="center" />
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {solutions.map((solution) => (
              <SolutionCard key={solution.title} {...solution} />
            ))}
          </div>
        </section>

        <section className="mt-20 rounded-[2.25rem] border border-violet-100/70 bg-gradient-to-br from-white via-violet-50/80 to-fuchsia-50/80 p-8 shadow-[0_24px_80px_rgba(139,92,246,0.1)] dark:border-slate-800 dark:from-slate-900 dark:via-slate-900 dark:to-fuchsia-950/50">
          <SectionHeading eyebrow="Key features" title="Everything you need to launch and grow your site" description="From first-time setup to scaling over time, the platform is packed with useful tools." align="center" />
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {featureCards.map((feature) => {
              const Icon = feature.icon;
              return (
                <div key={feature.title} className="rounded-[1.5rem] border border-slate-200/80 bg-white/85 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(139,92,246,0.12)] dark:border-slate-800 dark:bg-slate-900/70">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 to-fuchsia-600 text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-slate-950 dark:text-white">{feature.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </section>

        <section className="mt-20 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <div className="rounded-[1.4rem] border border-violet-100 bg-gradient-to-br from-violet-100/80 to-fuchsia-100/80 p-6 dark:border-violet-900/40 dark:from-violet-950/40 dark:to-fuchsia-950/40">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.32em] text-violet-600 dark:text-violet-300">Hostinger at a glance</p>
                  <h3 className="mt-2 text-2xl font-semibold text-slate-950 dark:text-white">Simple control, strong value</h3>
                </div>
                <div className="rounded-full bg-white/80 p-3 shadow-sm dark:bg-slate-900/80">
                  <Monitor className="h-5 w-5 text-violet-600" />
                </div>
              </div>
              <div className="mt-6 space-y-3">
                {['Beginner friendly', 'Great performance', 'Excellent value', 'Reliable uptime', 'Strong security', 'Scalable plans'].map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-[1rem] border border-white/70 bg-white/80 px-4 py-3 text-sm font-medium text-slate-700 dark:border-slate-800 dark:bg-slate-950/70 dark:text-slate-300">
                    <CheckCircle2 className="h-4 w-4 text-violet-600" /> {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div>
            <SectionHeading eyebrow="Why choose Hostinger" title="A host that balances price, speed, and ease of use" description="For many users, the best hosting choice is not the one with the most features — it is the one that helps them get online quickly, reliably, and without confusion." />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                { title: 'Easy for beginners', description: 'The dashboard is clean and approachable.' },
                { title: 'Strong performance', description: 'LiteSpeed and caching help deliver faster pages.' },
                { title: 'Built-in security', description: 'SSL, backups, and protection tools come included.' },
                { title: 'Great upgrade path', description: 'You can scale from simple to more demanding plans.' },
              ].map((item) => (
                <div key={item.title} className="rounded-[1.3rem] border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                  <h3 className="font-semibold text-slate-950 dark:text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="plans" className="mt-20">
          <SectionHeading eyebrow="Hosting plans" title="Choose the plan that matches your website goals" description="Hostinger offers plans that work for beginners, creators, and growing businesses without forcing you into an oversized setup." />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {plans.map((plan) => (
              <div key={plan.name} className={`rounded-[2rem] border p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(139,92,246,0.12)] ${plan.recommended ? 'border-violet-300 bg-gradient-to-br from-violet-600 via-fuchsia-600 to-violet-700 text-white' : 'border-slate-200/70 bg-white/90 text-slate-900 dark:border-slate-800 dark:bg-slate-900/70 dark:text-white'}`}>
                {plan.recommended ? <div className="mb-4 inline-flex rounded-full bg-white/20 px-3 py-1 text-sm font-semibold">Recommended</div> : null}
                <h3 className="text-2xl font-semibold">{plan.name}</h3>
                <p className={`mt-3 text-sm leading-7 ${plan.recommended ? 'text-violet-100' : 'text-slate-600 dark:text-slate-300'}`}>{plan.description}</p>
                <div className="mt-6 text-4xl font-semibold">{plan.price}<span className={`text-base font-medium ${plan.recommended ? 'text-violet-100' : 'text-slate-500'}`}>{plan.period}</span></div>
                <ul className={`mt-6 space-y-3 text-sm ${plan.recommended ? 'text-violet-100' : 'text-slate-600 dark:text-slate-300'}`}>
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3"><CheckCircle2 className="h-5 w-5" />{feature}</li>
                  ))}
                </ul>
                <a href={plan.href} className={`mt-8 inline-flex w-full justify-center rounded-full px-5 py-3 font-semibold transition ${plan.recommended ? 'bg-white text-violet-700 hover:bg-violet-50' : 'bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white'}`}>{plan.cta}</a>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-20 rounded-[2rem] border border-slate-200/70 bg-white/85 p-8 shadow-[0_20px_70px_rgba(15,23,42,0.05)] dark:border-slate-800 dark:bg-slate-900/70">
          <SectionHeading eyebrow="Performance highlights" title="A hosting platform designed for speed and dependability" description="Performance matters because visitors judge your site in seconds." />
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-[1.5rem] border border-violet-100 bg-violet-50 p-6 text-center shadow-sm dark:border-violet-900/40 dark:bg-violet-950/30">
                <p className="text-3xl font-semibold text-slate-950 dark:text-white">{stat.value}</p>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-20 overflow-hidden rounded-[2rem] border border-slate-200/70 bg-white/85 p-6 shadow-[0_20px_70px_rgba(15,23,42,0.05)] dark:border-slate-800 dark:bg-slate-900/70">
          <SectionHeading eyebrow="Hostinger vs competitors" title="A straightforward comparison for buyers who care about value" description="Hostinger is often appealing because it pairs strong fundamentals with approachable pricing." />
          <div className="mt-8 overflow-x-auto">
            <table className="min-w-full text-left text-sm">
              <thead>
                <tr className="border-b border-slate-200 text-slate-500 dark:border-slate-800 dark:text-slate-400">
                  <th className="px-3 py-3">Feature</th>
                  <th className="px-3 py-3">Hostinger</th>
                  <th className="px-3 py-3">Bluehost</th>
                  <th className="px-3 py-3">Namecheap</th>
                </tr>
              </thead>
              <tbody>
                {competitors.map((row) => (
                  <tr key={row.feature} className="border-b border-slate-100 dark:border-slate-800">
                    <td className="px-3 py-4 font-semibold text-slate-950 dark:text-white">{row.feature}</td>
                    <td className="px-3 py-4 text-slate-700 dark:text-slate-300">{row.hostinger}</td>
                    <td className="px-3 py-4 text-slate-700 dark:text-slate-300">{row.bluehost}</td>
                    <td className="px-3 py-4 text-slate-700 dark:text-slate-300">{row.namecheap}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-20 grid gap-6 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-emerald-200/70 bg-emerald-50/80 p-8 shadow-sm dark:border-emerald-900/40 dark:bg-emerald-950/40">
            <SectionHeading eyebrow="Pros" title="The strongest reasons to choose Hostinger" />
            <ul className="mt-6 space-y-3 text-sm text-slate-700 dark:text-slate-300">
              {['Affordable entry pricing', 'Beginner friendly dashboard', 'Good speed and LiteSpeed performance', 'Free SSL and helpful security tools', 'Easy WordPress setup', 'Helpful support when you need it'].map((item) => (
                <li key={item} className="flex items-center gap-3"><CheckCircle2 className="h-5 w-5 text-emerald-600" />{item}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-[2rem] border border-amber-200/70 bg-amber-50/80 p-8 shadow-sm dark:border-amber-900/40 dark:bg-amber-950/40">
            <SectionHeading eyebrow="Cons" title="A few things to keep in mind" />
            <ul className="mt-6 space-y-3 text-sm text-slate-700 dark:text-slate-300">
              {['Renewal pricing can increase over time', 'Some features depend on the plan tier', 'Advanced users may want deeper customization'].map((item) => (
                <li key={item} className="flex items-center gap-3"><ShieldCheck className="h-5 w-5 text-amber-600" />{item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mt-20">
          <SectionHeading eyebrow="Who should buy Hostinger" title="A strong fit for many kinds of website owners" description="Hostinger works especially well when you want straightforward hosting that does not feel overwhelming." align="center" />
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {['Bloggers', 'Freelancers', 'Small businesses', 'Agencies', 'Developers', 'Students', 'Portfolio websites', 'eCommerce stores'].map((audience) => (
              <div key={audience} className="rounded-[1.5rem] border border-slate-200/70 bg-white/85 p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-[0_16px_50px_rgba(139,92,246,0.1)] dark:border-slate-800 dark:bg-slate-900/70">
                <h3 className="text-lg font-semibold text-slate-950 dark:text-white">{audience}</h3>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-20">
          <SectionHeading eyebrow="Customer reviews" title="What people appreciate most about Hostinger" description="The platform earns praise for being practical, affordable, and easy to use." align="center" />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div key={testimonial.name} className="rounded-[1.8rem] border border-slate-200/70 bg-white/85 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(139,92,246,0.12)] dark:border-slate-800 dark:bg-slate-900/70">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-violet-600 to-fuchsia-600 text-sm font-semibold text-white">
                    {testimonial.name.split(' ').map((part) => part[0]).join('')}
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-950 dark:text-white">{testimonial.name}</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400">{testimonial.role}</p>
                  </div>
                </div>
                <div className="mt-4 flex gap-1 text-amber-400">
                  {Array.from({ length: testimonial.rating }).map((_, index) => <Star key={index} className="h-4 w-4 fill-current" />)}
                </div>
                <p className="mt-4 text-sm leading-8 text-slate-600 dark:text-slate-300">“{testimonial.quote}”</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-20 rounded-[2rem] border border-slate-200/70 bg-white/85 p-8 shadow-[0_20px_70px_rgba(15,23,42,0.05)] dark:border-slate-800 dark:bg-slate-900/70">
          <SectionHeading eyebrow="FAQ" title="Questions people ask before switching to Hostinger" description="A straightforward overview for first-time buyers and existing site owners." />
          <div className="mt-8 space-y-4">
            {faqs.map((faq) => (
              <details key={faq.question} className="rounded-[1.25rem] border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-950/70">
                <summary className="cursor-pointer font-semibold text-slate-950 dark:text-white">{faq.question}</summary>
                <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <PopupManager />

        <section className="mt-20 rounded-[2.5rem] border border-violet-100/70 bg-gradient-to-br from-violet-600 via-fuchsia-600 to-violet-700 p-8 text-white shadow-[0_24px_80px_rgba(139,92,246,0.28)]">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-violet-100">Ready to launch?</p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Choose Hostinger and get online with a hosting platform that is fast, affordable, and beginner friendly.</h2>
            <p className="mt-4 text-base leading-8 text-violet-100">If you decide to buy, using my affiliate link helps support this site at no extra cost to you. It is a simple way to get started with a trusted host while supporting the content you are reading.</p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a href="https://www.hostinger.com/pk/pricing?REFERRALCODE=VN0CSHARJBH0" className="rounded-full bg-white px-6 py-3 font-semibold text-violet-700">Get Hostinger</a>
              <a href="#plans" className="rounded-full border border-white/40 px-6 py-3 font-semibold text-white">Compare Plans</a>
            </div>
          </div>
        </section>
      </main>

      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-200 bg-white/95 px-4 py-3 shadow-[0_-12px_30px_rgba(15,23,42,0.12)] backdrop-blur lg:hidden dark:border-slate-800 dark:bg-slate-950/95">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3">
          <div>
            <p className="text-sm font-semibold text-slate-950 dark:text-white">Try Hostinger today</p>
            <p className="text-xs text-slate-500 dark:text-slate-400">Fast setup • beginner friendly</p>
          </div>
          <a href="https://www.hostinger.com/pk/pricing?REFERRALCODE=VN0CSHARJBH0" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 px-4 py-2 text-sm font-semibold text-white">
            Get started <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </>
  );
}

