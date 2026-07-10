import type { Metadata } from 'next';
import { LegalPage } from '@/components/legal-page';

export const metadata: Metadata = {
  title: 'About Us | Software Deals Hub',
  description: 'Learn more about Software Deals Hub, our mission, and how we review software tools for businesses and affiliate marketers.',
  alternates: { canonical: '/about' },
};

const sections = [
  {
    heading: 'Who we are',
    body: (
      <>
        <p>Software Deals Hub helps entrepreneurs, marketers, and agencies discover practical software tools with clear reviews, comparisons, and actionable insights.</p>
        <p>Our focus is on tools that can support growth, automation, client delivery, and online operations without overwhelming readers with technical jargon.</p>
      </>
    ),
  },
  {
    heading: 'What we do',
    body: (
      <>
        <p>We publish curated reviews and guides around platforms such as CRM software, marketing tools, hosting services, and other business software.</p>
        <p>Our content is designed to help readers compare options and decide which tools might fit their workflow or goals.</p>
      </>
    ),
  },
  {
    heading: 'Affiliate disclosure',
    body: (
      <>
        <p>Some of the links on this website may be affiliate links. If you purchase through them, we may earn a commission at no additional cost to you.</p>
        <p>This helps support our content and allows us to continue publishing software reviews and comparison guides.</p>
      </>
    ),
  },
];

export default function AboutPage() {
  return (
    <LegalPage
      title="About Us"
      description="Software Deals Hub is a curated software review and comparison site focused on helping online businesses find useful tools with confidence."
      sections={sections}
    />
  );
}
