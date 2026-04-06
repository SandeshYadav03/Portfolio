const tools = [
  "React",
  "React Native",
  "Next.js",
  "TypeScript",
  "TanStack Query",
  "Tailwind",
  "Shadcn/UI",
  "Mantine",
  "MUI",
  "Claude",
  "Cursor",
  "Flask",
  "MySQL",
];

export function ToolbeltMarquee() {
  return (
    <section
      aria-label="Toolbelt"
      className="py-8 border-t border-neutral-200 overflow-hidden"
    >
      <div className="[mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
        <div className="flex gap-6 animate-[scroll_30s_linear_infinite] whitespace-nowrap will-change-transform">
          {Array.from({ length: 2 }).map((_, pass) => (
            <div key={pass} className="flex gap-6">
              {tools.map((t) => (
                <span
                  key={`${t}-${pass}`}
                  className="rounded-full border border-neutral-200 px-3 py-1 text-xs text-neutral-700 bg-neutral-50"
                >
                  {t}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
      <style>
        {`@keyframes scroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }`}
      </style>
    </section>
  );
}
