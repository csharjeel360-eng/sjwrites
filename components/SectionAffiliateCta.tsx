import { AFFILIATE_LINK } from './Constants';
import { ArrowRight } from 'lucide-react';

interface SectionAffiliateCTAProps {
  label?: string;
}

export default function SectionAffiliateCta({ label = 'Start Free Trial' }: SectionAffiliateCTAProps) {
  return (
    <a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-violet-600 via-indigo-600 to-sky-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-500/20 transition duration-300 hover:-translate-y-0.5">
      {label}
      <ArrowRight className="h-4 w-4" />
    </a>
  );
}
