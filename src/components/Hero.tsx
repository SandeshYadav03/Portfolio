import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import {
  ChevronDown,
  Briefcase,
  Mail,
  Code,
  Smartphone,
  Zap,
  Database,
  Layers,
  Cpu,
  Workflow,
} from "lucide-react";
import { Button } from "./ui/Button";
import { smoothScroll } from "../lib/utils";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) * 0.01,
        y: (e.clientY - window.innerHeight / 2) * 0.01,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const skills = [
    {
      name: "React JS",
      icon: Code,
      color: "from-blue-400 to-cyan-500",
    },
    {
      name: "React Native",
      icon: Smartphone,
      color: "from-green-400 to-emerald-500",
    },
    {
      name: "TypeScript",
      icon: Layers,
      color: "from-blue-600 to-indigo-600",
    },
    {
      name: "Next.js",
      icon: Zap,
      color: "from-gray-700 to-black",
    },
    {
      name: "Angular",
      icon: Cpu,
      color: "from-red-500 to-rose-600",
    },
    {
      name: "Python",
      icon: Code,
      color: "from-yellow-400 to-blue-500",
    },
    {
      name: "MySQL",
      icon: Database,
      color: "from-blue-500 to-orange-400",
    },
    {
      name: "Agile",
      icon: Workflow,
      color: "from-purple-500 to-indigo-500",
    },
    // {
    //   name: 'AI Agents',
    //   icon: BrainCircuit,
    //   color: 'from-pink-500 to-violet-600'
    // },
  ];

  return (
    <motion.section
      ref={sectionRef}
      style={{ y, opacity }}
      className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-emerald-400/20 to-cyan-400/20 rounded-full blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          style={{
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-purple-400/15 to-pink-400/15 rounded-full blur-3xl"
          animate={{
            x: [0, -40, 0],
            y: [0, 30, 0],
            scale: [1, 0.9, 1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          style={{
            transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)`,
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-yellow-400/10 to-orange-400/10 rounded-full blur-2xl"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          style={{
            transform: `translate(-50%, -50%) translate(${mousePosition.x * 2}px, ${mousePosition.y * 2}px)`,
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-6"
        >
          {/* <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border border-emerald-500/20 text-emerald-600 text-sm font-medium backdrop-blur-sm"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <Zap className="w-4 h-4" />
            Available for new opportunities
          </motion.div> */}
        </motion.div>

        <motion.h1
          className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="bg-gradient-to-r from-neutral-900 via-emerald-600 to-cyan-600 bg-clip-text text-transparent">
            Frontend
          </span>
          {/* <br /> */}
          <span className="bg-gradient-to-r from-emerald-600 via-cyan-600 to-purple-600 bg-clip-text text-transparent ml-4">
            Engineer
          </span>
        </motion.h1>

        <motion.p
          className="text-xl sm:text-2xl text-neutral-600 max-w-4xl mx-auto mb-12 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Crafting exceptional digital experiences with{" "}
          <span className="text-emerald-600 font-semibold">React</span>,{" "}
          <span className="text-black-400 font-semibold">React Native</span>,{" "}
          <span className="text-blue-600 font-semibold">TypeScript</span>, and{" "}
          <span className="text-purple-600 font-semibold">
            Modern Web Technologies
          </span>
        </motion.p>

        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-16"
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.1, delayChildren: 0.6 } },
          }}
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0 },
            }}
          >
            <Button
              size="lg"
              className="group"
              type="button"
              onClick={() => smoothScroll("contact")}
            >
              <Mail className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
              Let's Work Together
            </Button>
          </motion.div>
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0 },
            }}
          >
            <Button
              variant="outline"
              size="lg"
              className="group"
              type="button"
              onClick={() => smoothScroll("projects")}
            >
              <Briefcase className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              View My Work
            </Button>
          </motion.div>
        </motion.div>

        {/* Skills Showcase */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto mb-20"
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.1, delayChildren: 0.8 } },
          }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                show: { opacity: 1, scale: 1 },
              }}
              className="group relative"
            >
              <motion.div
                className={`relative p-6 rounded-2xl bg-gradient-to-br ${skill.color} backdrop-blur-sm border border-white/20 text-white overflow-hidden`}
                whileHover={{ scale: 1.05, rotate: index % 2 === 0 ? 2 : -2 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <skill.icon className="w-8 h-8 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <p className="text-sm font-medium text-center">{skill.name}</p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center text-neutral-400 cursor-pointer group"
            onClick={() =>
              document
                .getElementById("skills")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            <span className="text-sm mb-2 group-hover:text-emerald-600 transition-colors">
              Explore my work
            </span>
            <ChevronDown className="w-6 h-6 group-hover:text-emerald-600 transition-colors" />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
