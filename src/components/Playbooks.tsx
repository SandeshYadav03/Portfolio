// removed unused motion import
import { SpotlightCard } from "./ui/SpotlightCard";

const playbooks = [
  {
    title: "AI‑Accelerated UI",
    steps: ["Parse BRD", "Scaffold UI", "Static checks", "Review gates"],
    blurb:
      "Agents help with the boring parts while I focus on product polish and correctness.",
  },
  {
    title: "Design System First",
    steps: ["Tokens", "Primitives", "Patterns", "Docs"],
    blurb:
      "Consistent, accessible components that speed up teams and prevent UI drift.",
  },
  {
    title: "Mobile‑First Delivery",
    steps: ["Layouts", "Perf budget", "Native feel", "Store ready"],
    blurb:
      "React Native with a focus on interaction quality and performance targets.",
  },
];

export function Playbooks() {
  return (
    <section id="playbooks" className="py-12 border-t border-neutral-200">
      <h2 className="text-2xl font-semibold">Playbooks</h2>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {playbooks.map((p) => (
          <PlaybookCard key={p.title} {...p} />
        ))}
      </div>
    </section>
  );
}

function PlaybookCard({
  title,
  steps,
  blurb,
}: {
  title: string;
  steps: string[];
  blurb: string;
}) {
  return (
    <SpotlightCard className="p-5 bg-neutral-50">
      <h3 className="font-medium">{title}</h3>
      <div className="mt-3 flex flex-wrap gap-2 text-xs text-neutral-600">
        {steps.map((s) => (
          <span
            key={s}
            className="rounded-full border border-neutral-200 px-3 py-1"
          >
            {s}
          </span>
        ))}
      </div>
      <p className="mt-3 text-sm text-neutral-700">{blurb}</p>
    </SpotlightCard>
  );
}
