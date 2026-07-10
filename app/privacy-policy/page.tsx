import type { Metadata } from 'next';
import { LegalPage } from '@/components/legal-page';

export const metadata: Metadata = {
  title: 'Privacy Policy | Software Deals Hub',
  description: 'Read the privacy policy for Software Deals Hub, including how we handle visitor information and website analytics.',
  alternates: { canonical: '/privacy-policy' },
};

const sections = [
  {
    heading: 'Information we collect',
    body: (
      <>
        <p>We may collect basic information such as browser details, IP address, and analytics data when visitors interact with our website.</p>
        <p>If you subscribe to our newsletter or contact us, we may also collect your email address and related details.</p>
      </>
    ),
  },
  {
    heading: 'How we use information',
    body: (
      <>
        <p>We use collected information to improve website performance, understand traffic patterns, and provide a better experience for readers.</p>
        <p>We may also use your contact details to reply to inquiries or send occasional updates if you opt in.</p>
      </>
    ),
  },
  {
    heading: 'Cookies and analytics',
    body: (
      <>
        <p>Our site may use cookies or analytics tools to understand how visitors browse and engage with the content.</p>
        <p>You can usually disable cookies through your browser settings if you prefer not to allow them.</p>
      </>
    ),
  },
];

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      description="This privacy policy explains how Software Deals Hub collects, uses, and protects information gathered through our website."
      sections={sections}
    />
  );
}
