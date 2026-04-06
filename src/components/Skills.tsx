import { motion } from "framer-motion";
import { useState } from "react";
import { SpotlightCard } from "./ui/SpotlightCard";
import {
  Code2,
  Smartphone,
  Zap,
  Database,
  Palette,
  Settings,
  CheckCircle,
  Star,
  TrendingUp,
  Layers,
} from "lucide-react";

const skillGroups = [
  {
    title: "Frontend Development",
    icon: Code2,
    items: [
      { name: "React", level: 95, years: 3 },
      { name: "TypeScript", level: 90, years: 3 },
      { name: "Next.js", level: 85, years: 2 },
      { name: "Tailwind CSS", level: 90, years: 2 },
      { name: "Angular", level: 75, years: 1 },
    ],
    color: "emerald",
    bgGradient: "from-emerald-500/10 to-cyan-500/10",
  },
  {
    title: "Mobile Development",
    icon: Smartphone,
    items: [
      { name: "React Native", level: 90, years: 2 },
      { name: "Expo", level: 90, years: 2 },
      { name: "iOS Deployment", level: 90, years: 2 },
      { name: "Android Deployment", level: 90, years: 2 },
    ],
    color: "blue",
    bgGradient: "from-blue-500/10 to-purple-500/10",
  },
  {
    title: "Backend & Database",
    icon: Database,
    items: [
      { name: "Python (Flask)", level: 80, years: 2 },
      { name: "MySQL", level: 75, years: 2 },
      { name: "RESTful APIs", level: 85, years: 3 },
      { name: "API Integration", level: 90, years: 3 },
    ],
    color: "purple",
    bgGradient: "from-purple-500/10 to-pink-500/10",
  },
  {
    title: "UI/UX & Design",
    icon: Palette,
    items: [
      { name: "Component Design", level: 90, years: 3 },
      { name: "Design Systems", level: 85, years: 2 },
      { name: "Responsive Design", level: 95, years: 3 },
      { name: "Accessibility", level: 80, years: 2 },
    ],
    color: "orange",
    bgGradient: "from-orange-500/10 to-red-500/10",
  },
  {
    title: "Development Tools",
    icon: Settings,
    items: [
      { name: "Git & GitHub", level: 90, years: 3 },
      { name: "VS Code", level: 95, years: 3 },
      { name: "Postman", level: 85, years: 2 },
      { name: "Agile/Scrum", level: 80, years: 2 },
    ],
    color: "cyan",
    bgGradient: "from-cyan-500/10 to-blue-500/10",
  },
  {
    title: "AI & Automation",
    icon: Zap,
    items: [
      { name: "Claude AI", level: 85, years: 2 },
      { name: "Cursor AI", level: 80, years: 2 },
      { name: "Workflow Automation", level: 75, years: 2 },
      { name: "Code Generation", level: 70, years: 2 },
    ],
    color: "violet",
    bgGradient: "from-violet-500/10 to-purple-500/10",
  },
];

export function Skills() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border border-emerald-500/20 text-emerald-600 text-sm font-medium backdrop-blur-sm mb-4">
            <Star className="w-4 h-4" />
            Skills & Technologies
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-neutral-900 to-emerald-600 bg-clip-text text-transparent mb-4">
            Technical Expertise
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            3+ years of hands-on experience building scalable applications with
            modern technologies
          </p>
        </motion.div>

        <motion.div
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.1 } },
          }}
        >
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.title}
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0 },
              }}
              onHoverStart={() => setActiveCategory(group.title)}
              onHoverEnd={() => setActiveCategory(null)}
            >
              <SkillCard
                group={group}
                isActive={activeCategory === group.title}
                index={index}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-8"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
          }}
        >
          {[
            { value: "3+", label: "Years Experience", icon: TrendingUp },
            { value: "30+", label: "Projects Completed", icon: CheckCircle },
            { value: "15+", label: "Technologies", icon: Layers },
            { value: "100%", label: "Client Satisfaction", icon: Star },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                show: { opacity: 1, scale: 1 },
              }}
              className="text-center group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 border border-emerald-500/20 mb-4 group-hover:scale-110 transition-transform">
                <stat.icon className="w-8 h-8 text-emerald-600" />
              </div>
              <motion.div
                className="text-3xl font-bold text-neutral-900 mb-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: index * 0.2 + 0.5 }}
              >
                {stat.value}
              </motion.div>
              <div className="text-sm text-neutral-600">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function SkillCard({
  group,
  isActive,
  index,
}: {
  group: (typeof skillGroups)[0];
  isActive: boolean;
  index: number;
}) {
  return (
    <SpotlightCard
      className="p-6 h-full"
      variant="default"
      glowColor={group.color as "emerald" | "blue" | "purple" | "cyan"}
    >
      <div className="h-full flex flex-col">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div
              className={`p-3 rounded-xl bg-gradient-to-br ${group.bgGradient} border border-emerald-500/20`}
            >
              <group.icon className="w-6 h-6 text-emerald-600" />
            </div>
            <h3 className="text-lg font-semibold text-neutral-900">
              {group.title}
            </h3>
          </div>
          <motion.div
            className="w-3 h-3 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500"
            animate={isActive ? { scale: [1, 1.2, 1] } : {}}
            transition={{ duration: 0.6, repeat: isActive ? Infinity : 0 }}
          />
        </div>

        <div className="flex-1 space-y-4">
          {group.items.map((skill, skillIndex) => (
            <motion.div
              key={skill.name}
              className="group/skill"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 + skillIndex * 0.05 }}
            >
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-neutral-700 group-hover/skill:text-emerald-600 transition-colors">
                  {skill.name}
                </span>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-neutral-500">
                    {skill.years}y
                  </span>
                  <span className="text-xs font-medium text-emerald-600">
                    {skill.level}%
                  </span>
                </div>
              </div>
              <div className="w-full bg-neutral-200 rounded-full h-2 overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full relative"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{
                    duration: 1,
                    delay: index * 0.1 + skillIndex * 0.1,
                  }}
                >
                  <div className="absolute inset-0 bg-white/20 animate-pulse rounded-full" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SpotlightCard>
  );
}
