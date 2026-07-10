export type Product = {
  slug: string;
  name: string;
  description: string;
  category: string;
  price: string;
  rating: string;
  features: string[];
};

export const products: Product[] = [
  {
    slug: 'gohighlevel',
    name: 'GoHighLevel',
    description: 'All-in-one CRM and marketing automation platform for agencies and businesses.',
    category: 'CRM & Marketing Automation',
    price: '$97/mo',
    rating: '★★★★★',
    features: ['CRM', 'Funnels', 'Automation'],
  },
  {
    slug: 'hostinger',
    name: 'Hostinger',
    description: 'Fast, budget-friendly web hosting with WordPress support, free SSL, and beginner-friendly tools.',
    category: 'Web Hosting',
    price: '$2.99/mo',
    rating: '★★★★★',
    features: ['WordPress', 'Free SSL', 'LiteSpeed', 'Easy Setup'],
  },
];
