import { AFFILIATE_LINK } from './Constants';
import { ArrowRight } from 'lucide-react';

export default function StickyCTA() {
  return (
    <div className="fixed bottom-4 right-4 z-40 md:bottom-6 md:right-6">
      <a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-violet-600 via-indigo-600 to-sky-600 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-500/30 transition duration-300 hover:-translate-y-1">
        Get Started Free
        <ArrowRight className="h-4 w-4" />
      </a>
    </div>
  );
}
