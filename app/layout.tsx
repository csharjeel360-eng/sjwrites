import type { Metadata, Viewport } from 'next';
import './globals.css';
import Script from 'next/script';
import { SiteShell } from '@/components/site-shell';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#4f46e5',
};

export const metadata: Metadata = {
  title: {
    default: 'Software Deals Hub | Best CRM, SaaS & Affiliate Software Reviews',
    template: '%s | Software Deals Hub',
  },
  description:
    'Discover honest reviews and comparisons for top CRM software, marketing platforms, automation tools, funnels, hosting, and AI products in one modern affiliate hub.',
  keywords: ['software deals', 'affiliate software', 'CRM', 'marketing automation', 'AI tools', 'software reviews', 'SaaS comparison'],
  metadataBase: new URL('https://softwaredealshub.com'),
  alternates: { canonical: '/' },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/logo.svg',
    shortcut: '/logo.svg',
    apple: '/logo.svg',
  },
  openGraph: {
    title: 'Software Deals Hub',
    description:
      'Compare leading business software and discover affiliate-ready reviews for CRM, marketing, automation, AI, and hosting tools.',
    url: 'https://softwaredealshub.com',
    siteName: 'Software Deals Hub',
    type: 'website',
    images: [{ url: '/unnamed.jpg', width: 1200, height: 630, alt: 'Software Deals Hub' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Software Deals Hub',
    description:
      'Modern affiliate hub for discovering high-impact software products and deals.',
    images: ['/unnamed.jpg'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const GTM_ID = 'GTM-TQCV2FSF';
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Script id="gtm-script" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
 'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'Software Deals Hub',
              url: 'https://softwaredealshub.com',
              description:
                'Curated affiliate reviews and comparisons for top software tools, CRM platforms, marketing tools, hosting, and AI solutions.',
            }),
          }}
        />
        <noscript>
          <iframe src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`} height="0" width="0" style={{ display: 'none', visibility: 'hidden' }} />
        </noscript>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
