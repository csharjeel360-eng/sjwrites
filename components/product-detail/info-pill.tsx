type InfoPillProps = {
  label: string;
  value: string;
};

export function InfoPill({ label, value }: InfoPillProps) {
  return (
    <div className="rounded-[1.25rem] border border-indigo-100/80 bg-white/90 p-4 text-left shadow-[0_12px_40px_rgba(79,70,229,0.08)] backdrop-blur dark:border-indigo-900/40 dark:bg-slate-900/80">
      <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-500 dark:text-slate-400">{label}</p>
      <p className="mt-1 text-sm font-semibold text-slate-950 dark:text-white">{value}</p>
    </div>
  );
}
