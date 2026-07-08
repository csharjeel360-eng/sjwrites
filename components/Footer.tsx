export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <h3 className="font-semibold text-white mb-4">Product</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="/features" className="hover:text-white">Features</a></li>
              <li><a href="/pricing" className="hover:text-white">Pricing</a></li>
              <li><a href="/comparison" className="hover:text-white">Comparison</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="/blog" className="hover:text-white">Blog</a></li>
              <li><a href="/offers" className="hover:text-white">Offers</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="/privacy-policy" className="hover:text-white">Privacy</a></li>
              <li><a href="/terms" className="hover:text-white">Terms</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="/affiliate-disclosure" className="hover:text-white">Affiliate Disclosure</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-sm text-slate-400">
          <p>&copy; 2026 GoHighLevel Affiliate Guide. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
