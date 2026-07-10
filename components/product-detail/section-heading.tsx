import type { ReactNode } from 'react';

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  children?: ReactNode;
};

export function SectionHeading({ eyebrow, title, description, align = 'left', children }: SectionHeadingProps) {
  return (
    <div className={align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      <p className="text-sm font-semibold uppercase tracking-[0.32em] text-indigo-600 dark:text-indigo-300">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-semibold tracking-[-0.02em] text-slate-950 sm:text-4xl dark:text-white">{title}</h2>
      {description ? <p className="mt-4 text-base leading-8 text-slate-600 dark:text-slate-300">{description}</p> : null}
      {children}
    </div>
  );
}
