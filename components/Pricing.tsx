export default function Pricing() {
  return (
    <section className="py-20 px-4">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-4xl font-bold text-center mb-12">Simple Pricing</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {['Starter', 'Unlimited', 'SaaS Pro'].map((plan) => (
            <div key={plan} className="rounded-lg border border-slate-200 p-8 bg-white text-center">
              <h3 className="text-2xl font-bold mb-4">{plan}</h3>
              <p className="text-slate-600">Perfect for growing teams</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
