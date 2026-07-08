export default function OffersSection({ compact }: { compact?: boolean }) {
  return (
    <section className="py-20 px-4 bg-slate-50">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-4xl font-bold text-center mb-12">Special Offers</h2>
        <p className="text-center text-slate-600">Limited time offers for new customers</p>
      </div>
    </section>
  );
}
