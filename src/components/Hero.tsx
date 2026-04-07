import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { useRef, useEffect, useState, useCallback } from "react";
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
  Sparkles,
  Stars,
  Circle,
} from "lucide-react";
import { Button } from "./ui/Button";
import { smoothScroll } from "../lib/utils";

// Floating particles component
const FloatingParticles = () => {
  const [particles, setParticles] = useState<
    Array<{ id: number; x: number; y: number; size: number; delay: number }>
  >([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      delay: Math.random() * 5,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-gradient-to-r from-emerald-400/30 to-cyan-400/30 backdrop-blur-sm"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() > 0.5 ? 20 : -20, 0],
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

// Typewriter effect hook
const useTypewriter = (
  words: string[],
  typeSpeed = 150,
  deleteSpeed = 100,
  delayBetweenWords = 2000,
) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[currentWordIndex];

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (currentText.length < currentWord.length) {
            setCurrentText(currentWord.slice(0, currentText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), delayBetweenWords);
          }
        } else {
          if (currentText.length > 0) {
            setCurrentText(currentText.slice(0, -1));
          } else {
            setIsDeleting(false);
            setCurrentWordIndex((prev) => (prev + 1) % words.length);
          }
        }
      },
      isDeleting ? deleteSpeed : typeSpeed,
    );

    return () => clearTimeout(timeout);
  }, [
    currentText,
    currentWordIndex,
    isDeleting,
    words,
    typeSpeed,
    deleteSpeed,
    delayBetweenWords,
  ]);

  return currentText;
};

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 25, stiffness: 700 };
  const mouseXSpring = useSpring(mouseX, springConfig);
  const mouseYSpring = useSpring(mouseY, springConfig);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  const roles = [
    "Engineer",
    "React Developer",
    "UI/UX Enthusiast",
    "Tech Innovator",
  ];
  const typewriterText = useTypewriter(roles, 100, 50, 1500);

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      const { clientX, clientY } = e;
      mouseX.set(clientX - 16);
      mouseY.set(clientY - 16);

      setMousePosition({
        x: (clientX - window.innerWidth / 2) * 0.015,
        y: (clientY - window.innerHeight / 2) * 0.015,
      });
    },
    [mouseX, mouseY],
  );

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove]);

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
    <>
      {/* Custom Cursor */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full mix-blend-difference pointer-events-none z-50 hidden lg:block"
        style={{
          x: mouseXSpring,
          y: mouseYSpring,
        }}
        variants={{
          default: {
            scale: 1,
            opacity: 0.7,
          },
          hover: {
            scale: 1.5,
            opacity: 1,
          },
        }}
        animate={cursorVariant}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
        }}
      />

      <motion.section
        ref={sectionRef}
        style={{ y, opacity, scale }}
        className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-20 sm:px-6"
      >
        {/* Advanced Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Floating Particles */}
          <FloatingParticles />

          {/* Main Background Blobs */}
          <motion.div
            className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-emerald-400/20 to-cyan-400/20 rounded-full blur-3xl"
            animate={{
              x: [0, 30, 0],
              y: [0, -20, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            style={{
              transform: `translate(${mousePosition.x * 1.5}px, ${mousePosition.y * 1.5}px)`,
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
              transform: `translate(${-mousePosition.x * 2}px, ${-mousePosition.y * 2}px)`,
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
              transform: `translate(-50%, -50%) translate(${mousePosition.x * 3}px, ${mousePosition.y * 3}px)`,
            }}
          />

          {/* Geometric Shapes */}
          <motion.div
            className="absolute top-1/4 right-1/4 w-4 h-4"
            animate={{
              rotate: [0, 360],
              scale: [1, 1.3, 1],
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          >
            <Stars className="w-full h-full text-emerald-400/40" />
          </motion.div>
          <motion.div
            className="absolute bottom-1/3 left-1/4 w-6 h-6"
            animate={{
              y: [0, -15, 0],
              rotate: [0, 180, 360],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          >
            <Circle className="w-full h-full text-cyan-400/30" />
          </motion.div>
          <motion.div
            className="absolute top-1/3 left-1/3 w-5 h-5"
            animate={{
              rotate: [0, -360],
              scale: [1, 1.5, 1],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          >
            <Sparkles className="w-full h-full text-purple-400/50" />
          </motion.div>
        </div>

        <div className="relative z-10 mx-auto w-full min-w-0 max-w-6xl text-center">
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
            className="mb-2 flex flex-wrap items-baseline justify-center gap-x-2 gap-y-1 px-1 pb-2 text-[clamp(1.875rem,8vw+0.25rem,3.5rem)] font-bold leading-[1.12] tracking-tight sm:gap-x-4 sm:text-7xl lg:text-8xl"
            initial={{ opacity: 0, y: 30, rotateX: 90 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{
              duration: 1.2,
              delay: 0.2,
              type: "spring",
              stiffness: 100,
              damping: 15,
            }}
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.2 },
            }}
            onMouseEnter={() => setCursorVariant("hover")}
            onMouseLeave={() => setCursorVariant("default")}
          >
            <motion.span
              className="bg-gradient-to-r from-neutral-900 via-emerald-600 to-cyan-600 bg-clip-text text-transparent"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Frontend
            </motion.span>
            <motion.span
              className="bg-gradient-to-r from-emerald-600 via-cyan-600 to-purple-600 bg-clip-text text-transparent inline-block min-w-[300px] text-left sm:min-w-[400px]"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {typewriterText}
              <motion.span
                className="inline-block w-1 h-[0.8em] bg-gradient-to-b from-emerald-600 to-cyan-600 ml-1"
                animate={{ opacity: [0, 1, 0] }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.span>
          </motion.h1>

          <motion.p
            className="mx-auto mb-8 max-w-4xl px-2 text-lg leading-relaxed text-neutral-600 sm:text-xl md:text-2xl backdrop-blur-sm bg-white/10 rounded-2xl p-6 border border-white/20"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.8,
              type: "spring",
              stiffness: 150,
              damping: 20,
            }}
            whileHover={{
              scale: 1.02,
              boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
              transition: { duration: 0.2 },
            }}
            onMouseEnter={() => setCursorVariant("hover")}
            onMouseLeave={() => setCursorVariant("default")}
          >
            Crafting exceptional digital experiences with{" "}
            <motion.span
              className="text-emerald-600 font-semibold"
              whileHover={{ scale: 1.1, color: "#10b981" }}
            >
              React
            </motion.span>
            ,{" "}
            <motion.span
              className="text-green-600 font-semibold"
              whileHover={{ scale: 1.1, color: "#16a34a" }}
            >
              React Native
            </motion.span>
            ,{" "}
            <motion.span
              className="text-blue-600 font-semibold"
              whileHover={{ scale: 1.1, color: "#2563eb" }}
            >
              TypeScript
            </motion.span>
            , and{" "}
            <motion.span
              className="text-purple-600 font-semibold"
              whileHover={{ scale: 1.1, color: "#9333ea" }}
            >
              Modern Web Technologies
            </motion.span>
          </motion.p>

          <motion.div
            className="mb-12 flex w-full min-w-0 flex-col items-stretch justify-center gap-4 px-1 sm:flex-row sm:flex-wrap sm:items-center"
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: {
                transition: { staggerChildren: 0.1, delayChildren: 0.6 },
              },
            }}
          >
            <motion.div
              className="w-full sm:w-auto"
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 },
              }}
            >
              <Button
                size="lg"
                className="group w-full sm:w-auto"
                type="button"
                onClick={() => smoothScroll("contact")}
              >
                <Mail className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                Let's Work Together
              </Button>
            </motion.div>
            <motion.div
              className="w-full sm:w-auto"
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 },
              }}
            >
              <Button
                variant="outline"
                size="lg"
                className="group w-full sm:w-auto"
                type="button"
                onClick={() => smoothScroll("projects")}
              >
                <Briefcase className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                View My Work
              </Button>
            </motion.div>
          </motion.div>

          {/* Skills Showcase with Advanced Glassmorphism */}
          <motion.div
            className="mx-auto mb-20 grid max-w-4xl grid-cols-1 gap-6 min-[420px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: {
                transition: { staggerChildren: 0.1, delayChildren: 1.0 },
              },
            }}
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                variants={{
                  hidden: { opacity: 0, scale: 0.8, y: 50 },
                  show: { opacity: 1, scale: 1, y: 0 },
                }}
                className="group relative"
              >
                <motion.div
                  className={`relative rounded-2xl border border-white/30 bg-gradient-to-br ${skill.color} p-4 text-white backdrop-blur-xl overflow-hidden min-[420px]:p-6 shadow-2xl`}
                  whileHover={{
                    scale: 1.08,
                    rotate: index % 2 === 0 ? 3 : -3,
                    z: 50,
                    boxShadow: "0 25px 50px rgba(0,0,0,0.25)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 25,
                  }}
                  style={{
                    transformStyle: "preserve-3d",
                  }}
                  onMouseEnter={() => setCursorVariant("hover")}
                  onMouseLeave={() => setCursorVariant("default")}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    animate={{
                      background: [
                        "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 100%)",
                        "linear-gradient(225deg, rgba(255,255,255,0.2) 0%, transparent 100%)",
                        "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 100%)",
                      ],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                  <motion.div
                    className="relative z-10"
                    whileHover={{ rotateY: 5, rotateX: 5 }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <skill.icon className="w-8 h-8 mx-auto mb-3 drop-shadow-lg" />
                    </motion.div>
                    <motion.p
                      className="text-sm font-medium text-center drop-shadow-md"
                      whileHover={{ scale: 1.05 }}
                    >
                      {skill.name}
                    </motion.p>
                  </motion.div>
                  {/* Shimmer Effect */}
                  <motion.div
                    className="absolute -inset-1 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transform -skew-x-12"
                    animate={{
                      x: [-100, 400],
                    }}
                    transition={{
                      duration: 1.5,
                      ease: "easeInOut",
                      repeat: Infinity,
                      repeatDelay: 3,
                    }}
                  />
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* Enhanced Scroll Indicator */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 1.4,
              duration: 0.8,
              type: "spring",
              stiffness: 150,
            }}
          >
            <motion.div
              animate={{
                y: [0, -15, 0],
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="flex flex-col items-center text-neutral-500 cursor-pointer group backdrop-blur-sm bg-white/10 rounded-full p-4 border border-white/20"
              onClick={() =>
                document
                  .getElementById("skills")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              whileHover={{
                scale: 1.1,
                backgroundColor: "rgba(16, 185, 129, 0.1)",
                borderColor: "rgba(16, 185, 129, 0.3)",
              }}
              onMouseEnter={() => setCursorVariant("hover")}
              onMouseLeave={() => setCursorVariant("default")}
            >
              <motion.span
                className="text-sm mb-2 group-hover:text-emerald-600 transition-colors duration-300 font-medium"
                whileHover={{ scale: 1.05 }}
              >
                Explore my work
              </motion.span>
              <motion.div
                whileHover={{ rotate: 180 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown className="w-6 h-6 group-hover:text-emerald-600 transition-colors duration-300" />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
}
