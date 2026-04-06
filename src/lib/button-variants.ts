import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 transform hover:scale-[1.02] active:scale-[0.98]",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-r from-emerald-500 to-cyan-500 text-white hover:from-emerald-600 hover:to-cyan-600 shadow-lg hover:shadow-xl hover:shadow-emerald-500/20",
        destructive:
          "bg-red-500 text-red-50 hover:bg-red-600 shadow-lg hover:shadow-xl hover:shadow-red-500/20",
        outline:
          "border-2 border-emerald-500/20 bg-transparent text-emerald-600 hover:bg-emerald-500/10 hover:border-emerald-500/40",
        secondary:
          "bg-neutral-900/80 text-white hover:bg-neutral-800/80 backdrop-blur-sm border border-white/10",
        ghost: "hover:bg-emerald-500/10 hover:text-emerald-600",
        link: "text-emerald-600 underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);
