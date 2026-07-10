import type { Metadata } from 'next';
import { LegalPage } from '@/components/legal-page';

export const metadata: Metadata = {
  title: 'Disclaimer | Software Deals Hub',
  description: 'Read the disclaimer for Software Deals Hub, including our policy on informational content and affiliate relationships.',
  alternates: { canonical: '/disclaimer' },
};

const sections = [
  {
    heading: 'Informational content',
    body: (
      <>
        <p>The information on this website is provided for general informational purposes and should not be treated as financial, legal, or professional advice.</p>
        <p>Readers should do their own research before making decisions involving software purchases, subscriptions, or business investments.</p>
      </>
    ),
  },
  {
    heading: 'Affiliate relationships',
    body: (
      <>
        <p>We may receive compensation from third-party companies when visitors use our affiliate links.</p>
        <p>This compensation does not influence our editorial opinion, though it may help support our publishing efforts.</p>
      </>
    ),
  },
  {
    heading: 'Accuracy of information',
    body: (
      <>
        <p>We strive to keep our content accurate and up to date, but product features, pricing, and policies can change over time.</p>
        <p>Readers should verify details directly with the product provider before relying on them.</p>
      </>
    ),
  },
];

export default function DisclaimerPage() {
  return (
    <LegalPage
      title="Disclaimer"
      description="This disclaimer explains the nature of our content and the limits of the information provided on Software Deals Hub."
      sections={sections}
    />
  );
}
