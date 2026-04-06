const metrics = [
  { label: "Delivery speed", value: "↑ 40%", hint: "with agentic workflows" },
  { label: "UI consistency", value: "A+", hint: "design-system driven" },
  { label: "Build health", value: "Green", hint: "lint, type, hooks" },
];

export function Impact() {
  return (
    <section id="impact" className="py-12 border-t border-neutral-200">
      <h2 className="text-2xl font-semibold">Impact</h2>
      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        {metrics.map((m) => (
          <div
            key={m.label}
            className="rounded-xl border border-neutral-200 p-5 bg-gradient-to-b from-neutral-50 to-transparent hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-shadow"
          >
            <div className="text-3xl font-semibold">{m.value}</div>
            <div className="mt-1 text-sm text-neutral-700">{m.label}</div>
            <div className="mt-2 text-xs text-neutral-500">{m.hint}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
