import type { Metadata } from 'next';
import { LegalPage } from '@/components/legal-page';

export const metadata: Metadata = {
  title: 'Terms of Service | Software Deals Hub',
  description: 'Review the terms of use for Software Deals Hub and the conditions for using our website content and services.',
  alternates: { canonical: '/terms' },
};

const sections = [
  {
    heading: 'Use of the site',
    body: (
      <>
        <p>You may use this website for personal and informational purposes, provided you comply with all applicable laws and regulations.</p>
        <p>Do not use the site in a way that may harm, disrupt, or overload our services or other users.</p>
      </>
    ),
  },
  {
    heading: 'Intellectual property',
    body: (
      <>
        <p>All content on this site, including text, graphics, layouts, and branding, is owned or licensed by Software Deals Hub unless otherwise noted.</p>
        <p>You may not copy or republish our content without permission.</p>
      </>
    ),
  },
  {
    heading: 'Limitation of liability',
    body: (
      <>
        <p>Software Deals Hub provides information for educational and informational purposes only.</p>
        <p>We are not liable for any direct, indirect, or incidental damages resulting from the use of our website or the products discussed on it.</p>
      </>
    ),
  },
];

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Service"
      description="By using Software Deals Hub, you agree to the terms described below regarding website use, content, and liability."
      sections={sections}
    />
  );
}
