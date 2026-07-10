import Link from 'next/link';
import type { ReactNode } from 'react';
import { ArrowLeft, ShieldCheck } from 'lucide-react';

type LegalSection = {
  heading: string;
  body: ReactNode;
};

export function LegalPage({
  title,
  description,
  sections,
}: {
  title: string;
  description: string;
  sections: LegalSection[];
}) {
  return (
    <section className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8">
      <Link href="/" className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 hover:text-indigo-700">
        <ArrowLeft className="h-4 w-4" /> Back to home
      </Link>

      <div className="rounded-[2rem] border border-slate-200/70 bg-white/85 p-8 shadow-[0_20px_70px_rgba(15,23,42,0.05)] backdrop-blur dark:border-slate-800 dark:bg-slate-900/70 sm:p-10">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-600 to-violet-600 text-white">
            <ShieldCheck className="h-5 w-5" />
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-indigo-600 dark:text-indigo-300">Legal & company info</p>
            <h1 className="mt-1 text-3xl font-semibold text-slate-950 dark:text-white">{title}</h1>
          </div>
        </div>

        <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">{description}</p>

        <div className="mt-10 space-y-8">
          {sections.map((section) => (
            <article key={section.heading} className="rounded-[1.5rem] border border-slate-200 bg-slate-50/80 p-6 dark:border-slate-800 dark:bg-slate-950/70">
              <h2 className="text-xl font-semibold text-slate-950 dark:text-white">{section.heading}</h2>
              <div className="mt-4 space-y-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{section.body}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
