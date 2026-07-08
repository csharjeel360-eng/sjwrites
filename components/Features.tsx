export default function Features() {
  const features = ['CRM', 'Sales Funnels', 'Email Marketing', 'SMS Marketing', 'Websites', 'Appointment Booking', 'Automations', 'Reputation Management'];
  
  return (
    <section className="py-20 px-4">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-4xl font-bold text-center mb-12">Powerful Features</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div key={feature} className="rounded-lg border border-slate-200 p-6 bg-white">
              <p className="font-semibold text-slate-900">{feature}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FeaturesLimited({ limit }: { limit?: number }) {
  return <Features />;
}
