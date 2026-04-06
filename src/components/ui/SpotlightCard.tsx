import type { ReactNode } from "react";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

type Props = {
  className?: string;
  children: ReactNode;
  variant?: "default" | "glass" | "glow";
  glowColor?: "emerald" | "blue" | "purple" | "cyan" | "pink" | "orange";
};

export function SpotlightCard({
  className = "",
  children,
  variant = "default",
  glowColor = "emerald",
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    el.style.setProperty("--mx", `${x}px`);
    el.style.setProperty("--my", `${y}px`);
  }

  const variants = {
    default:
      "border-neutral-200/60 bg-white/90 hover:border-emerald-300/60 text-neutral-900 shadow-lg hover:shadow-xl",
    glass:
      "border-white/20 bg-neutral-900/40 hover:border-emerald-400/40 text-white backdrop-blur-md",
    glow: "border-emerald-500/30 bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 hover:border-emerald-500/50 text-neutral-900 shadow-xl shadow-emerald-500/20",
  };

  const glowColors = {
    emerald: "rgba(16,185,129,0.15)",
    blue: "rgba(59,130,246,0.15)",
    purple: "rgba(168,85,247,0.15)",
    cyan: "rgba(34,211,238,0.15)",
    pink: "rgba(236,72,153,0.15)",
    orange: "rgba(251,146,60,0.15)",
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        "relative rounded-xl border transition-all duration-500 transform hover:scale-[1.02]",
        variants[variant],
        className,
      )}
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-xl transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at var(--mx) var(--my), ${glowColors[glowColor]}, transparent 40%)`,
          opacity: isHovered ? 1 : 0,
        }}
      />
      {variant === "glow" && isHovered && (
        <motion.div
          className="absolute -inset-1 rounded-xl bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 blur-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          exit={{ opacity: 0 }}
        />
      )}
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
