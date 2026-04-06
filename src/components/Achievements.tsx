import { motion } from "framer-motion";

const achievements = [
  {
    title: "Agentic Frontend Pipeline",
    desc: "Built a 10–12 agent pipeline that generates production-ready UI scaffolding from BRDs, cutting delivery time and cost while boosting throughput.",
    tags: [
      "Claude",
      "Cursor",
      "TypeScript",
      "React",
      "Code Quality Automation",
    ],
  },
  {
    title: "Responsive Web & Mobile Apps",
    desc: "Led teams delivering multiple web and mobile apps with strict code quality and consistent design systems.",
    tags: ["React", "React Native", "Next.js", "Tailwind", "MUI", "Shadcn/UI"],
  },
];

export function Achievements() {
  return (
    <section id="projects" className="py-12 border-t border-white/10">
      <h2 className="text-2xl font-semibold">Key Achievements</h2>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {achievements.map((a) => (
          <AchievementCard key={a.title} {...a} />
        ))}
      </div>
    </section>
  );
}

function AchievementCard({
  title,
  desc,
  tags,
}: {
  title: string;
  desc: string;
  tags: string[];
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className="rounded-xl border border-white/10 p-5 bg-gradient-to-b from-white/5 to-transparent hover:from-white/10 transition-colors"
    >
      <h3 className="font-medium">{title}</h3>
      <p className="mt-2 text-sm text-neutral-300">{desc}</p>
      <div className="mt-3 flex flex-wrap gap-2 text-xs text-neutral-400">
        {tags.map((t) => (
          <span
            key={t}
            className="rounded-full border border-white/10 px-3 py-1"
          >
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
