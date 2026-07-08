export default function Benefits() {
  return (
    <section className="py-20 px-4">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-4xl font-bold text-center mb-12">Key Benefits</h2>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="rounded-lg p-6 bg-white border border-slate-200">
            <h3 className="font-semibold mb-2">Save Money</h3>
            <p className="text-slate-600">Replace multiple subscriptions with one platform</p>
          </div>
          <div className="rounded-lg p-6 bg-white border border-slate-200">
            <h3 className="font-semibold mb-2">Save Time</h3>
            <p className="text-slate-600">Automate your entire workflow</p>
          </div>
          <div className="rounded-lg p-6 bg-white border border-slate-200">
            <h3 className="font-semibold mb-2">Increase Sales</h3>
            <p className="text-slate-600">Built-in tools to convert more leads</p>
          </div>
        </div>
      </div>
    </section>
  );
}
