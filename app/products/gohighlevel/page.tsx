import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { ArrowRight, BadgeCheck, BarChart3, Bot, CalendarCheck2, CheckCircle2, CircleDollarSign, Compass, Crown, Layers3, MessageCircle, MessageSquareMore, MonitorPlay, Package2, ReceiptText, Send, ShieldCheck, Smartphone, Sparkles, Star, TrendingUp, Users, Wand2, Workflow, Zap } from 'lucide-react';
import { SectionHeading } from '@/components/product-detail/section-heading';
import { InfoPill } from '@/components/product-detail/info-pill';
import { PopupManager } from '@/components/product-detail/popup-manager';

const featureCards = [
  { title: 'CRM', description: 'Keep contacts, deals, and follow-ups in one place.', benefit: 'Stay organized without juggling spreadsheets.', icon: Users },
  { title: 'Sales Pipelines', description: 'Track every lead from first contact to close.', benefit: 'Improve visibility and conversion rates.', icon: Layers3 },
  { title: 'Website Builder', description: 'Create simple, polished websites without coding.', benefit: 'Launch faster and look more professional.', icon: MonitorPlay },
  { title: 'Landing Pages', description: 'Build conversion-focused pages for campaigns and offers.', benefit: 'Turn traffic into leads more reliably.', icon: Compass },
  { title: 'Sales Funnels', description: 'Guide visitors through each step of your offer.', benefit: 'Increase signups, bookings, and sales.', icon: TrendingUp },
  { title: 'Email Marketing', description: 'Send campaigns, automations, and follow-up emails.', benefit: 'Nurture leads without manual work.', icon: Send },
  { title: 'SMS Marketing', description: 'Reach leads and clients through text messaging.', benefit: 'Boost response rates and reminders.', icon: MessageSquareMore },
  { title: 'WhatsApp Messaging', description: 'Connect with customers where they already communicate.', benefit: 'Improve engagement and support.', icon: MessageCircle },
  { title: 'Appointment Booking', description: 'Let prospects book calls or visits in seconds.', benefit: 'Reduce back-and-forth and lost leads.', icon: CalendarCheck2 },
  { title: 'Workflow Automation', description: 'Automate tasks like tagging, follow-ups, and alerts.', benefit: 'Save hours every week.', icon: Workflow },
  { title: 'AI Employee', description: 'Use AI tools to assist with follow-ups and support.', benefit: 'Increase productivity with less effort.', icon: Bot },
  { title: 'AI Chatbot', description: 'Add smart chat experiences to your site and funnels.', benefit: 'Capture more leads around the clock.', icon: Sparkles },
  { title: 'Membership Sites', description: 'Create exclusive communities and paid content.', benefit: 'Monetize your audience more easily.', icon: Package2 },
  { title: 'Online Courses', description: 'Deliver courses and digital products in one place.', benefit: 'Simplify teaching and upsells.', icon: BadgeCheck },
  { title: 'Invoices', description: 'Generate invoices and manage billing inside the platform.', benefit: 'Keep sales and finance in sync.', icon: ReceiptText },
  { title: 'Payments', description: 'Accept payments securely for services and products.', benefit: 'Shorten the path from interest to purchase.', icon: CircleDollarSign },
  { title: 'Reputation Management', description: 'Collect reviews and manage your brand visibility.', benefit: 'Build trust and improve local credibility.', icon: ShieldCheck },
  { title: 'White Label', description: 'Offer the platform under your own brand.', benefit: 'Create a premium agency experience.', icon: Crown },
  { title: 'Mobile App', description: 'Manage your business from your phone on the go.', benefit: 'Stay productive anywhere.', icon: Smartphone },
  { title: 'Analytics', description: 'Monitor campaign performance and business trends.', benefit: 'Make smarter decisions with data.', icon: BarChart3 },
  { title: 'Reporting Dashboard', description: 'View a clear snapshot of team and sales activity.', benefit: 'Spot opportunities faster.', icon: Wand2 },
];

const whoShouldUse = [
  'Marketing Agencies',
  'Local Businesses',
  'Coaches',
  'Consultants',
  'Real Estate',
  'Dentists',
  'Gyms',
  'Freelancers',
  'SaaS Companies',
  'Healthcare',
  'Restaurants',
];

const benefits = [
  { title: 'Save Time', description: 'Automate repetitive follow-ups, reminders, and admin tasks.' },
  { title: 'Increase Sales', description: 'Use funnels, email, and booking flows to convert more leads.' },
  { title: 'Automate Marketing', description: 'Run campaigns from one place without switching tools.' },
  { title: 'Replace Multiple Tools', description: 'Bring CRM, forms, emails, and payments into one dashboard.' },
  { title: 'Generate More Leads', description: 'Create better landing pages, forms, and chatbot experiences.' },
  { title: 'Manage Customers', description: 'Track conversations, bookings, and payments in one system.' },
  { title: 'Grow Faster', description: 'Give your team more structure and visibility as you scale.' },
  { title: 'Reduce Monthly Software Costs', description: 'Swap several subscriptions for one simpler platform.' },
];

const replaceTable = [
  { tool: 'Mailchimp', replacement: 'Email marketing and automations', why: 'GoHighLevel combines outreach, CRM, and follow-up automation in one workflow.' },
  { tool: 'ClickFunnels', replacement: 'Landing pages and funnel building', why: 'You can build campaigns and conversion flows without a separate funnel tool.' },
  { tool: 'Calendly', replacement: 'Appointment scheduling', why: 'Booking and reminders are built into the same system.' },
  { tool: 'HubSpot', replacement: 'CRM and pipeline management', why: 'GoHighLevel offers a more agency-focused all-in-one experience.' },
  { tool: 'Pipedrive', replacement: 'Sales pipeline tracking', why: 'It brings lead management, tasks, and automations into one platform.' },
  { tool: 'Kajabi', replacement: 'Membership sites and online courses', why: 'You can create courses and communities without a separate teaching platform.' },
  { tool: 'Zapier', replacement: 'Workflow automations', why: 'Built-in automations reduce the need for extra integrations.' },
  { tool: 'Teachable', replacement: 'Course delivery', why: 'GoHighLevel helps you sell and manage programs from the same system.' },
];

const pricingTiers = [
  { name: 'Starter', price: '$97', period: '/month', bestFor: 'Small businesses and solo founders', features: ['CRM', 'Funnels', 'Email marketing', 'Basic automation'], cta: 'Start Free Trial', href: 'https://gohighlevel.com/annual?fp_ref=sharjeel72' },
  { name: 'Unlimited', price: '$297', period: '/month', bestFor: 'Agencies managing multiple clients', features: ['Unlimited contacts', 'Advanced workflows', 'White-label', 'Subaccounts'], cta: 'Start Free Trial', href: 'https://gohighlevel.com/annual?fp_ref=sharjeel72' },
  { name: 'SaaS Pro', price: '$497', period: '/month', bestFor: 'Scaling SaaS brands and larger teams', features: ['Advanced analytics', 'AI tools', 'Priority support', 'Custom workflows'], cta: 'Start Free Trial', href: 'https://www.gohighlevel.com/protrial?fp_ref=sharjeel72' },
];

const affiliateOffers = [
  { title: 'Start 30-Day Trial', description: 'Best for first-time users who want to test the platform.', href: 'https://www.gohighlevel.com/protrial?fp_ref=sharjeel72' },
  { title: 'Annual Starter & Unlimited', description: 'Ideal for users comparing the annual starter and unlimited plans.', href: 'https://gohighlevel.com/annual?fp_ref=sharjeel72' },
  { title: 'SaaS Pro Plan', description: 'Perfect for users exploring the premium SaaS Pro experience.', href: 'https://www.gohighlevel.com/protrial?fp_ref=sharjeel72' },
  { title: 'HighLevel Certifications', description: 'Great for audiences who want to prove platform expertise.', href: 'https://www.gohighlevel.com/certifications?fp_ref=sharjeel85' },
  { title: 'HighLevel Bootcamp', description: 'A strong option for beginners who want guided onboarding.', href: 'https://www.gohighlevel.com/highlevel-bootcamp?fp_ref=sharjeel72' },
  { title: 'Summer of AI', description: 'Ideal for audiences interested in AI automation and growth.', href: 'https://www.gohighlevel.com/ai?fp_ref=sharjeel72' },
  { title: 'Pricing Page', description: 'Useful for readers comparing all three plans side by side.', href: 'https://www.gohighlevel.com/pricing?fp_ref=sharjeel72' },
  { title: 'Premium Support', description: 'Best for users seeking faster, priority support.', href: 'https://www.gohighlevel.com/premium-support?fp_ref=sharjeel72' },
];

const faqs = [
  { question: 'What is GoHighLevel?', answer: 'GoHighLevel is an all-in-one platform for CRM, marketing automation, sales funnels, websites, email, SMS, appointments, and reputation management.' },
  { question: 'Is GoHighLevel good for beginners?', answer: 'It can feel overwhelming at first because it has many tools, but it is beginner-friendly once you focus on the core workflows.' },
  { question: 'Who should use GoHighLevel?', answer: 'It is especially useful for agencies, coaches, consultants, local businesses, and teams that want to replace several tools.' },
  { question: 'How much does it cost?', answer: 'Plans usually start at around $97/month for the Starter tier, with higher-tier options for agencies and larger teams.' },
  { question: 'Is there a free trial?', answer: 'Yes, GoHighLevel offers a free trial so you can test the experience before committing.' },
  { question: 'Can I replace my existing CRM?', answer: 'Many businesses use GoHighLevel as a full replacement for their CRM, email, funnel, and booking tools.' },
  { question: 'Can I create websites and funnels?', answer: 'Yes, GoHighLevel includes website building and funnel tools for capturing and converting leads.' },
  { question: 'Does it include AI features?', answer: 'Yes, the platform includes AI tools such as assistants, automation, and chatbot experiences.' },
];

export const metadata: Metadata = {
  title: 'GoHighLevel Review | CRM, Funnels, Automation & White Label',
  description: 'A beginner-friendly review of GoHighLevel covering CRM, funnels, automation, booking, AI, pricing, and who should use it.',
  alternates: { canonical: '/products/gohighlevel' },
  keywords: ['GoHighLevel review', 'GoHighLevel CRM', 'GoHighLevel funnel builder', 'GoHighLevel automation', 'white label CRM'],
  openGraph: {
    title: 'GoHighLevel Review | CRM, Funnels, Automation & White Label',
    description: 'Learn how GoHighLevel works for agencies, SMBs, and growing businesses with CRM, funnels, automation, and AI tools.',
    url: 'https://softwaredealshub.com/products/gohighlevel',
    type: 'article',
    images: [{ url: '/unnamed.jpg', width: 1200, height: 630, alt: 'GoHighLevel review page' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GoHighLevel Review',
    description: 'Detailed review of GoHighLevel for CRM, automation, funnels, and white-label growth.',
    images: ['/unnamed.jpg'],
  },
};

export default function GoHighLevelPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: 'GoHighLevel',
        description: 'An all-in-one CRM and marketing automation platform for agencies, marketers, and growing businesses.',
        brand: { '@type': 'Brand', name: 'GoHighLevel' },
        category: 'CRM & Marketing Automation Platform',
        offers: { '@type': 'Offer', priceCurrency: 'USD', price: '97', availability: 'https://schema.org/InStock' },
        aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', reviewCount: '1000' },
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map((faq) => ({ '@type': 'Question', name: faq.question, acceptedAnswer: { '@type': 'Answer', text: faq.answer } })),
      }) }} />

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(99,102,241,0.18),_transparent_45%)]" />
        <div className="absolute inset-x-0 top-0 -z-10 h-72 bg-gradient-to-b from-indigo-100/70 via-white to-transparent dark:from-indigo-950/40 dark:via-slate-950 dark:to-transparent" />
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <nav aria-label="Breadcrumb" className="mb-8 text-sm text-slate-500 dark:text-slate-400">
            <div className="flex flex-wrap items-center gap-2">
              <Link href="/" className="hover:text-indigo-600">Home</Link>
              <span>/</span>
              <Link href="/" className="hover:text-indigo-600">Products</Link>
              <span>/</span>
              <span className="text-slate-700 dark:text-slate-200">GoHighLevel</span>
            </div>
          </nav>

          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <div className="mb-6 flex h-16 w-16 items-center justify-center overflow-hidden rounded-[1.5rem] bg-white/80 p-1 shadow-[0_20px_60px_rgba(79,70,229,0.28)]">
                <Image src="/unnamed.jpg" alt="GoHighLevel logo" width={64} height={64} className="h-full w-full rounded-[1rem] object-cover" priority />
              </div>
              <div className="mb-5 inline-flex items-center rounded-full border border-indigo-200 bg-white/80 px-3 py-1.5 text-sm font-medium text-indigo-700 shadow-sm backdrop-blur dark:border-indigo-400/30 dark:bg-slate-900/70 dark:text-indigo-300">
                CRM & Marketing Automation Platform
              </div>
              <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl dark:text-white">
                Everything You Need to Know About GoHighLevel
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
                GoHighLevel is an all-in-one CRM, marketing automation, website builder, sales funnel, appointment scheduling, reputation management, email marketing, SMS marketing, AI, and white-label platform built for agencies and growing businesses.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-slate-600 dark:text-slate-300">
                <div className="flex items-center gap-2 rounded-full bg-white/80 px-3 py-2 shadow-sm backdrop-blur dark:bg-slate-900/70">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="font-medium">4.9/5</span>
                </div>
                <div className="rounded-full border border-slate-200 bg-white/70 px-3 py-2 shadow-sm dark:border-slate-800 dark:bg-slate-900/70">Best for Agencies</div>
                <div className="rounded-full border border-slate-200 bg-white/70 px-3 py-2 shadow-sm dark:border-slate-800 dark:bg-slate-900/70">30-Day Free Trial</div>
                <div className="rounded-full border border-slate-200 bg-white/70 px-3 py-2 shadow-sm dark:border-slate-800 dark:bg-slate-900/70">Official Affiliate</div>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <a href="https://www.gohighlevel.com/protrial?fp_ref=sharjeel72" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 px-6 py-3 font-semibold text-white shadow-[0_16px_45px_rgba(79,70,229,0.24)] transition hover:-translate-y-1">
                  Start 30-Day Free Trial <ArrowRight className="h-4 w-4" />
                </a>
                <a href="https://www.gohighlevel.com/pricing?fp_ref=sharjeel72" className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white/80 px-6 py-3 font-semibold text-slate-700 backdrop-blur transition hover:border-indigo-300 hover:text-indigo-700 dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-200">
                  View Pricing
                </a>
              </div>
            </div>

            <div className="rounded-[2rem] border border-indigo-100/70 bg-white/85 p-6 shadow-[0_20px_80px_rgba(15,23,42,0.08)] backdrop-blur-xl dark:border-slate-800 dark:bg-slate-900/70">
              <div className="rounded-[1.75rem] border border-indigo-100 bg-gradient-to-br from-indigo-50 via-white to-violet-50 p-6 dark:border-indigo-900/40 dark:from-indigo-950/60 dark:via-slate-900 dark:to-violet-950/60">
                <div className="grid gap-4 sm:grid-cols-2">
                  <InfoPill label="Starting Price" value="From $97/mo" />
                  <InfoPill label="Free Trial" value="30 Days" />
                  <InfoPill label="Best For" value="Agencies & SMBs" />
                  <InfoPill label="Platform Type" value="Cloud Based" />
                </div>
                <div className="mt-6 rounded-[1.5rem] border border-white/70 bg-white/80 p-5 dark:border-slate-800 dark:bg-slate-950/70">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">Quick summary</p>
                      <p className="mt-1 text-lg font-semibold text-slate-950 dark:text-white">One platform for growth</p>
                    </div>
                    <div className="rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 px-3 py-1.5 text-sm font-semibold text-white">New</div>
                  </div>
                  <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">
                    Instead of paying for a CRM, funnel tool, email platform, booking app, and chatbot separately, GoHighLevel combines many of those into one workspace.
                  </p>
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
              <SectionHeading eyebrow="Quick Overview" title="What is GoHighLevel and why do people use it?" description="It is designed to simplify the daily operations of agencies, consultants, and growing businesses by combining key tools in one place." />
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                { title: 'What it solves', text: 'It helps teams organize leads, automate follow-ups, and build sales funnels without juggling multiple subscriptions.' },
                { title: 'Who it helps', text: 'It is especially useful for agencies, local businesses, consultants, coaches, and service-based companies.' },
                { title: 'Why it stands out', text: 'The platform combines CRM, marketing, booking, and white-label features in a single dashboard.' },
                { title: 'What makes it different', text: 'Its focus on agencies and business owners makes it more practical for growth than a traditional CRM alone.' },
              ].map((item) => (
                <div key={item.title} className="rounded-[1.5rem] border border-slate-200/70 bg-slate-50 p-5 shadow-sm dark:border-slate-800 dark:bg-slate-950/70">
                  <h3 className="text-lg font-semibold text-slate-950 dark:text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="ai-features-section" className="mt-20">
          <SectionHeading eyebrow="Features" title="The tools you can use inside GoHighLevel" description="From lead capture to client management, this platform is built to help businesses do more with less complexity." align="center" />
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {featureCards.map((feature) => {
              const Icon = feature.icon;
              return (
                <article key={feature.title} className="rounded-[1.6rem] border border-slate-200/70 bg-white/85 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(79,70,229,0.12)] dark:border-slate-800 dark:bg-slate-900/70">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-600 to-violet-600 text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-slate-950 dark:text-white">{feature.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{feature.description}</p>
                  <p className="mt-4 text-sm font-medium text-indigo-600 dark:text-indigo-300">Benefit: {feature.benefit}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section className="mt-20 rounded-[2rem] border border-indigo-100/70 bg-gradient-to-br from-white via-indigo-50/80 to-violet-50/80 p-8 shadow-[0_24px_80px_rgba(79,70,229,0.1)] dark:border-slate-800 dark:from-slate-900 dark:via-slate-900 dark:to-violet-950/50">
          <SectionHeading eyebrow="How It Works" title="From first contact to final sale" description="The platform is designed to guide a lead through a simple growth journey." align="center" />
          <div className="mt-10 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            {['Capture Leads', 'Store Leads in CRM', 'Automate Follow-ups', 'Book Appointments', 'Close More Sales'].map((step, index) => (
              <div key={step} className="flex flex-col items-center gap-3 text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 text-sm font-semibold text-white shadow-lg">
                  {index + 1}
                </div>
                <div className="rounded-[1.25rem] border border-slate-200/70 bg-white/80 px-5 py-4 text-sm font-semibold text-slate-700 shadow-sm dark:border-slate-800 dark:bg-slate-950/70 dark:text-slate-200">{step}</div>
                {index < 4 ? <ArrowRight className="h-5 w-5 text-indigo-400" /> : null}
              </div>
            ))}
          </div>
        </section>

        <section className="mt-20">
          <SectionHeading eyebrow="Who Should Use It?" title="A strong fit for many kinds of businesses" description="GoHighLevel is especially popular with teams that need both automation and client relationship management in one place." align="center" />
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {whoShouldUse.map((audience) => (
              <div key={audience} className="rounded-[1.5rem] border border-slate-200/70 bg-white/85 p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-[0_16px_50px_rgba(79,70,229,0.1)] dark:border-slate-800 dark:bg-slate-900/70">
                <h3 className="text-lg font-semibold text-slate-950 dark:text-white">{audience}</h3>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-20">
          <SectionHeading eyebrow="Benefits" title="Why businesses choose GoHighLevel" description="The platform is appealing because it can replace several tools and simplify daily operations." />
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="rounded-[1.6rem] border border-slate-200/70 bg-white/85 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-[0_16px_50px_rgba(79,70,229,0.1)] dark:border-slate-800 dark:bg-slate-900/70">
                <h3 className="text-lg font-semibold text-slate-950 dark:text-white">{benefit.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-20 overflow-hidden rounded-[2rem] border border-slate-200/70 bg-white/85 p-6 shadow-[0_20px_70px_rgba(15,23,42,0.05)] dark:border-slate-800 dark:bg-slate-900/70">
          <SectionHeading eyebrow="Software It Can Replace" title="One platform instead of many separate tools" description="GoHighLevel brings multiple categories together so businesses can manage growth from one dashboard." />
          <div className="mt-8 overflow-x-auto">
            <table className="min-w-full text-left text-sm">
              <thead>
                <tr className="border-b border-slate-200 text-slate-500 dark:border-slate-800 dark:text-slate-400">
                  <th className="px-3 py-3">Tool</th>
                  <th className="px-3 py-3">GoHighLevel replaces</th>
                  <th className="px-3 py-3">Why this matters</th>
                </tr>
              </thead>
              <tbody>
                {replaceTable.map((row) => (
                  <tr key={row.tool} className="border-b border-slate-100 dark:border-slate-800">
                    <td className="px-3 py-4 font-semibold text-slate-950 dark:text-white">{row.tool}</td>
                    <td className="px-3 py-4 text-slate-700 dark:text-slate-300">{row.replacement}</td>
                    <td className="px-3 py-4 text-slate-700 dark:text-slate-300">{row.why}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-20">
          <SectionHeading eyebrow="Pricing" title="Choose the plan that fits your stage" description="GoHighLevel offers options for solo founders, agencies, and scaling teams." />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {pricingTiers.map((tier) => (
              <div key={tier.name} className="rounded-[2rem] border border-slate-200/70 bg-white/90 p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(79,70,229,0.12)] dark:border-slate-800 dark:bg-slate-900/70">
                <h3 className="text-2xl font-semibold text-slate-950 dark:text-white">{tier.name}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{tier.bestFor}</p>
                <div className="mt-6 text-4xl font-semibold text-slate-950 dark:text-white">{tier.price}<span className="text-base font-medium text-slate-500">{tier.period}</span></div>
                <ul className="mt-6 space-y-3 text-sm text-slate-600 dark:text-slate-300">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3"><CheckCircle2 className="h-5 w-5 text-indigo-600" />{feature}</li>
                  ))}
                </ul>
                <a href={tier.href} className="mt-8 inline-flex w-full justify-center rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 px-5 py-3 font-semibold text-white">{tier.cta}</a>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-20 grid gap-6 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-emerald-200/70 bg-emerald-50/80 p-8 shadow-sm dark:border-emerald-900/40 dark:bg-emerald-950/40">
            <SectionHeading eyebrow="Pros" title="What stands out" />
            <ul className="mt-6 space-y-3 text-sm text-slate-700 dark:text-slate-300">
              {['All-in-one platform', 'Powerful automation', 'Great CRM', 'White-label options', 'Excellent for agencies', 'Saves money by replacing many tools'].map((item) => (
                <li key={item} className="flex items-center gap-3"><CheckCircle2 className="h-5 w-5 text-emerald-600" />{item}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-[2rem] border border-amber-200/70 bg-amber-50/80 p-8 shadow-sm dark:border-amber-900/40 dark:bg-amber-950/40">
            <SectionHeading eyebrow="Cons" title="Things to know first" />
            <ul className="mt-6 space-y-3 text-sm text-slate-700 dark:text-slate-300">
              {['Learning curve for beginners', 'Many features may feel overwhelming initially'].map((item) => (
                <li key={item} className="flex items-center gap-3"><ShieldCheck className="h-5 w-5 text-amber-600" />{item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mt-20 rounded-[2rem] border border-slate-200/70 bg-white/85 p-8 shadow-[0_20px_70px_rgba(15,23,42,0.05)] dark:border-slate-800 dark:bg-slate-900/70">
          <SectionHeading eyebrow="FAQ" title="Common questions about GoHighLevel" description="A straightforward overview for new users and curious buyers." />
          <div className="mt-8 space-y-4">
            {faqs.map((faq) => (
              <details key={faq.question} className="rounded-[1.25rem] border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-950/70">
                <summary className="cursor-pointer font-semibold text-slate-950 dark:text-white">{faq.question}</summary>
                <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section id="certifications-section" className="mt-20 rounded-[2rem] border border-slate-200/70 bg-white/85 p-8 shadow-[0_20px_70px_rgba(15,23,42,0.05)] dark:border-slate-800 dark:bg-slate-900/70">
          <SectionHeading eyebrow="Affiliate Offers" title="Helpful HighLevel links for different audience types" description="These links are grouped to make it easier to direct readers to the most relevant offer based on their goals." />
          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {affiliateOffers.map((offer) => (
              <div key={offer.title} className="rounded-[1.5rem] border border-slate-200/70 bg-slate-50 p-5 shadow-sm dark:border-slate-800 dark:bg-slate-950/70">
                <h3 className="text-lg font-semibold text-slate-950 dark:text-white">{offer.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{offer.description}</p>
                <a href={offer.href} className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 dark:text-indigo-300">Open link <ArrowRight className="h-4 w-4" /></a>
              </div>
            ))}
          </div>
        </section>

        <PopupManager />

        <section className="mt-20 rounded-[2.5rem] border border-indigo-100/70 bg-gradient-to-br from-indigo-600 via-violet-600 to-sky-600 p-8 text-white shadow-[0_24px_80px_rgba(79,70,229,0.28)]">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-indigo-100">Ready to try it?</p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Ready to Grow Your Business with GoHighLevel?</h2>
            <p className="mt-4 text-base leading-8 text-indigo-100">Start your 30-day free trial today and see how GoHighLevel can help you manage leads, automate marketing, and grow your business from one powerful platform.</p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a href="https://www.gohighlevel.com/protrial?fp_ref=sharjeel72" className="rounded-full bg-white px-6 py-3 font-semibold text-indigo-700">Start Free Trial</a>
              <a href="https://www.gohighlevel.com/pricing?fp_ref=sharjeel72" className="rounded-full border border-white/40 px-6 py-3 font-semibold text-white">View Pricing</a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
