import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Eye, Filter, Briefcase } from "lucide-react";
import { SpotlightCard } from "./ui/SpotlightCard";

const projects = [
  {
    id: 1,
    title: "Fluence - Core Frontend Platform",
    description:
      "Enterprise-grade web application built with React.js, Next.js, and TypeScript. Features advanced state management with Redux, seamless API integration, and modular component architecture. Implemented performance optimizations resulting in 35% faster load times and improved user engagement.",
    image: "/api/placeholder/600/400",
    tags: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Redux",
      "API Integration",
      "Performance Optimization",
      "Custom Hooks",
      "Test Cases",
      "Jira",
    ],
    category: ["Frontend", "Web"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
    color: "emerald",
    details: {
      duration: "6 months",
      teamSize: "2 developers",
      impact: "40% faster load times",
    },
  },
  {
    id: 2,
    title: "SFA Platform - Government Sports Authority",
    description:
      "Comprehensive cross-platform solution for government sports authorities featuring both web and mobile applications. Built with React Native and React.js, deployed to iOS App Store and Google Play Store. Includes real-time data sync, offline functionality, and government API integrations.",
    image: "/api/placeholder/600/400",
    tags: [
      "React Native",
      "React.js",
      "Expo",
      "API Integration",
      "iOS",
      "Android",
      "Play Store Deployment",
      "Apple App Store Deployment",
    ],
    category: ["Frontend", "Web", "Mobile"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
    color: "blue",
    details: {
      duration: "8 months",
      platforms: "iOS, Android, Web",
      impact: "Deployed to Web, App/Android Stores",
    },
  },
  {
    id: 3,
    title: "Unity Education Solutions Platform",
    description:
      "Scalable educational technology platform with comprehensive frontend modules across web and mobile applications. Features student management, course delivery, progress tracking, and interactive learning modules. Built with modern React architecture and responsive design principles.",
    image: "/api/placeholder/600/400",
    tags: [
      "React.js",
      "React Native",
      "TypeScript",
      "Frappe",
      "Deployment",
      "Responsive Design",
      "Play Store Deployment",
      "App Store Deployment",
      "Team Leadership",
    ],
    category: ["Frontend", "Web", "Mobile"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
    color: "purple",
    details: {
      duration: "10 months",
      modules: "12+ core modules",
      impact: "Multi-platform deployment",
    },
  },
  {
    id: 4,
    title: "Transportation Management System (TMS)",
    description:
      "Complex enterprise TMS featuring custom reusable UI components, comprehensive vehicle tracking, route optimization, and driver management. Backend built with Python Flask and MySQL, frontend with React.js and TypeScript. Improved operational efficiency and reduced manual processes by 45%.",
    image: "/api/placeholder/600/400",
    tags: [
      "React.js",
      "TypeScript",
      "Python",
      "MySQL",
      "API Integration",
      "Generic Components",
      "Jira",
    ],
    category: "Full Stack",
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
    color: "cyan",
    details: {
      duration: "1 year 6 months",
      modules:
        "Invoicing, Accounting, Tracking, Routing, Vehicle Management, Driver Management",
      impact: "45% process automation",
    },
  },
  {
    id: 5,
    title: "ComplianceOne - SaaS Analytics Dashboard",
    description:
      "Built a SaaS-based compliance dashboard to track assessments, monitor compliance posture, and visualize data using interactive charts. Developed responsive UI, integrated APIs, and optimized performance for large-scale usage.",
    image: "/api/placeholder/600/400",

    tags: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Dashboard UI",
      "Data Visualization",
      "API Integration",
      "Performance Optimization",
      "Responsive Design",
    ],
    category: ["Frontend", "Web", "Dashboard"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
    color: "purple",
    details: {
      duration: "6 months",
      platforms: ["Web"],
      impact: "Complete Tool",
    },
  },
  {
    id: 6,
    title: "AI-Powered Frontend Agentic Workflows",
    description:
      "Revolutionary automation system that transforms Business Requirements Documents (BRDs) into functional UI components using AI agents. Features 10+ specialized agents for code generation, validation, and reviews. Improved team delivery speed by 40% and code consistency by 60%.",
    image: "/api/placeholder/600/400",
    tags: [
      "AI Automation",
      "Workflow Design",
      "Code Generation",
      "BRD Processing",
    ],
    category: "AI",
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
    color: "orange",
    details: {
      duration: "8 months",
      agents: "10+ specialized AI agents",
      impact: "40% faster delivery, 60% better consistency",
    },
  },
  {
    id: 7,
    title: "Interactive Dashboard Components",
    description:
      "Modern React component library with advanced data visualization components, responsive charts, and interactive elements. Built with TypeScript and styled with Tailwind CSS, featuring customizable themes and accessibility compliance.",
    image: "/api/placeholder/600/400",
    tags: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Data Visualization",
      "Component Library",
      "Accessibility",
    ],
    category: "Frontend",
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
    color: "pink",
    details: {
      duration: "4 months",
      components: "25+ reusable components",
      impact: "High performance & accessibility",
    },
  },
  {
    id: 8,
    title: "Super Shopee - Cross-Platform Ecommerce App",
    description:
      "Cross-platform ecommerce application built using React Native with robust state management and API integrations. Features include real-time inventory updates, secure payment gateways, order tracking, and high-performance UI optimized for both Android and iOS",
    image: "/api/placeholder/600/400",
    tags: [
      "React Native",
      "Redux",
      "Firebase",
      "REST API",
      "Stripe Payment Integration",
      "iOS",
      "Android",
      "Play Store Deployment",
      "Apple App Store Deployment",
    ],
    category: ["Frontend", "Mobile"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
    color: "purple",
    details: {
      duration: "6 months",
      platforms: "iOS, Android",
      impact: "Live on Play Store & App Store",
    },
  },
  {
    id: 9,
    title: "Multi-Website Development - Business & Portfolio Solutions",
    description:
      "Developed and delivered multiple responsive and high-performance websites for various clients including business, portfolio, and service-based platforms. Focused on modern UI/UX, SEO optimization, and scalable frontend architecture using React.js and other web technologies. Ensured cross-browser compatibility and fast-loading experiences.",
    image: "/api/placeholder/600/400",
    tags: [
      "React.js",
      "Next.js",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Responsive Design",
      "SEO Optimization",
      "API Integration",
      "Deployment",
    ],
    category: ["Web", "Frontend"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
    color: "green",
    details: {
      duration: "Ongoing",
      platforms: "Web",
      impact: "Multiple websites delivered.",
    },
  },
];

const categories = ["All", "Full Stack", "Frontend", "Web", "Mobile", "AI"];

function getGradientClasses(color: string) {
  const gradients = {
    emerald: "bg-gradient-to-br from-emerald-400/20 to-emerald-600/30",
    blue: "bg-gradient-to-br from-blue-400/20 to-blue-600/30",
    purple: "bg-gradient-to-br from-purple-400/20 to-purple-600/30",
    cyan: "bg-gradient-to-br from-cyan-400/20 to-cyan-600/30",
    pink: "bg-gradient-to-br from-pink-400/20 to-pink-600/30",
    orange: "bg-gradient-to-br from-orange-400/20 to-orange-600/30",
  };
  return gradients[color as keyof typeof gradients] || gradients.emerald;
}

export function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const filteredProjects = projects.filter(
    (project) =>
      activeCategory === "All" ||
      (Array.isArray(project.category)
        ? project.category.includes(activeCategory)
        : project.category === activeCategory),
  );

  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <section
      id="projects"
      className="py-20 relative bg-gradient-to-br from-neutral-50/50 to-emerald-50/30"
    >
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 text-purple-600 text-sm font-medium backdrop-blur-sm mb-4">
            <Briefcase className="w-4 h-4" />
            Featured Work
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-neutral-900 to-purple-600 bg-clip-text text-transparent mb-4">
            Projects & Applications
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            A showcase of modern applications built with cutting-edge
            technologies and best practices
          </p>
        </motion.div>

        {/* Featured Projects */}
        <motion.div
          className="mb-12"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.1 } },
          }}
        >
          <h3 className="text-2xl font-semibold text-neutral-900 mb-6 flex items-center gap-2">
            <Eye className="w-6 h-6 text-emerald-600" />
            Featured Projects
          </h3>
          <div className="grid gap-8 lg:grid-cols-2 auto-rows-fr">
            {featuredProjects.slice(0, 4).map((project) => (
              <motion.div
                key={project.id}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  show: { opacity: 1, y: 0 },
                }}
                onHoverStart={() => setHoveredProject(project.id)}
                onHoverEnd={() => setHoveredProject(null)}
                className="flex"
              >
                <FeaturedProjectCard
                  project={project}
                  isHovered={hoveredProject === project.id}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-10"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.05 } },
          }}
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                show: { opacity: 1, scale: 1 },
              }}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-gradient-to-r from-emerald-500 to-cyan-500 text-white shadow-lg"
                  : "bg-white/80 text-neutral-600 hover:bg-emerald-50 hover:text-emerald-600 border border-neutral-200"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="flex items-center gap-2">
                <Filter className="w-4 h-4" />
                {category}
              </div>
            </motion.button>
          ))}
        </motion.div>

        {/* All Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
            initial="hidden"
            animate="show"
            exit="hidden"
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.1 } },
            }}
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={{
                  hidden: { opacity: 0, scale: 0.8, y: 20 },
                  show: { opacity: 1, scale: 1, y: 0 },
                }}
                layout
                onHoverStart={() => setHoveredProject(project.id)}
                onHoverEnd={() => setHoveredProject(null)}
              >
                <ProjectCard
                  project={project}
                  isHovered={hoveredProject === project.id}
                />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* CTA Section */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <p className="text-lg text-neutral-600 mb-6">
            Interested in working together on your next project?
          </p>
          {/* <Button size="lg" className="group">
            <ExternalLink className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
            View More on GitHub
          </Button> */}
        </motion.div>
      </div>
    </section>
  );
}

function FeaturedProjectCard({
  project,
  isHovered,
}: {
  project: (typeof projects)[0];
  isHovered: boolean;
}) {
  return (
    <SpotlightCard
      variant="default"
      glowColor={
        project.color as
          | "emerald"
          | "blue"
          | "purple"
          | "cyan"
          | "pink"
          | "orange"
      }
      className="group overflow-hidden w-full p-6 h-full"
    >
      <div className="relative h-full flex flex-col min-h-[180px]">
        {/* Project Image Placeholder */}
        <div
          className={`h-32 rounded-lg mb-4 relative overflow-hidden flex-shrink-0 ${getGradientClasses(project.color)}`}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-white/20"
            animate={
              isHovered ? { scale: 1.1, rotate: 5 } : { scale: 1, rotate: 0 }
            }
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-3xl font-bold text-white/40">
              {project.title
                .split(" ")
                .map((word) => word[0])
                .join("")}{" "}
            </div>
          </div>
          {project.featured && (
            <div className="absolute top-2 right-2">
              <div className="px-2 py-1 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-medium">
                Featured
              </div>
            </div>
          )}
        </div>

        <div className="flex-1 flex flex-col space-y-3 min-h-0">
          <div>
            <h3 className="text-lg font-bold text-neutral-900 mb-1 group-hover:text-emerald-600 transition-colors">
              {project.title}
            </h3>
            {/* <p className="text-neutral-600 leading-relaxed text-sm line-clamp-3"> */}
            <p className="text-neutral-600 leading-relaxed text-sm">
              {/* {project.description.length > 140 ? `${project.description.substring(0, 140)}...` : project.description} */}
              {project.description}
            </p>
          </div>

          {/* Project Details - More Compact */}
          <div className="grid grid-cols-2 gap-2 text-xs text-neutral-500 bg-neutral-50 rounded-md p-2">
            <div className="flex flex-col">
              <span className="font-medium text-neutral-700 text-xs">
                Duration
              </span>
              <span className="text-xs">{project.details?.duration}</span>
            </div>
            <div className="flex flex-col">
              <span className="font-medium text-neutral-700 text-xs">
                Impact
              </span>
              <span className="text-emerald-600 font-medium text-xs">
                {project.details?.impact}
              </span>
            </div>
          </div>

          <div className="flex flex-wrap gap-1 flex-grow">
            {project.tags.slice(0, 10).map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 text-xs font-medium bg-neutral-100 text-neutral-700 rounded-full hover:bg-emerald-100 hover:text-emerald-700 transition-colors"
              >
                {tag}
              </span>
            ))}
            {/* {project.tags.length > 4 && (
              <span className="px-2 py-1 text-xs font-medium bg-neutral-100 text-neutral-600 rounded-full">
                +{project.tags.length - 4}
              </span>
            )} */}
          </div>

          {/* <div className="flex gap-2 mt-auto pt-3">
            <Button size="sm" className="flex-1 group">
              <ExternalLink className="w-3 h-3 mr-1 group-hover:rotate-12 transition-transform" />
              Demo
            </Button>
            <Button variant="outline" size="sm" className="flex-1 group">
              <ExternalLink className="w-3 h-3 mr-1 group-hover:scale-110 transition-transform" />
              Code
            </Button>
          </div> */}
        </div>
      </div>
    </SpotlightCard>
  );
}

function ProjectCard({
  project,
  isHovered,
}: {
  project: (typeof projects)[0];
  isHovered: boolean;
  index?: number;
}) {
  return (
    <SpotlightCard
      variant="default"
      glowColor={
        project.color as
          | "emerald"
          | "blue"
          | "purple"
          | "cyan"
          | "pink"
          | "orange"
      }
      className="group h-full p-6"
    >
      <div className="h-full flex flex-col min-h-[380px]">
        {/* Project Image Placeholder */}
        <div
          className={`h-40 rounded-lg mb-4 relative overflow-hidden ${getGradientClasses(project.color)}`}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-white/10"
            animate={isHovered ? { scale: 1.05 } : { scale: 1 }}
            transition={{ duration: 0.3 }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-4xl font-bold text-white/30">
              {project.title
                .split(" ")
                .map((word) => word[0])
                .join("")}
            </div>
          </div>
        </div>

        <div className="flex-1 flex flex-col space-y-3">
          <div>
            <h3 className="text-lg font-semibold text-neutral-900 mb-2 group-hover:text-emerald-600 transition-colors">
              {project.title}
            </h3>
            {/* <p className="text-sm text-neutral-600 leading-relaxed line-clamp-3"> */}
            <p className="text-sm text-neutral-600 leading-relaxed">
              {/* {project.description.length > 120 ? `${project.description.substring(0, 120)}...` : project.description} */}
              {project.description}
            </p>
          </div>

          {/* Compact Project Info */}
          <div className="text-xs text-neutral-500 space-y-1">
            <div className="flex items-center justify-between">
              <span>Duration:</span>
              <span className="font-medium">{project.details?.duration}</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Impact:</span>
              <span className="text-emerald-600 font-medium text-xs">
                {project.details?.impact}
              </span>
            </div>
          </div>

          <div className="flex flex-wrap gap-1">
            {project.tags.slice(0, 10).map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 text-xs font-medium bg-neutral-100 text-neutral-600 rounded-full hover:bg-emerald-100 hover:text-emerald-600 transition-colors"
              >
                {tag}
              </span>
            ))}
            {project.tags.length > 3 && (
              <span className="px-2 py-1 text-xs font-medium bg-neutral-100 text-neutral-600 rounded-full">
                +{project.tags.length - 3}
              </span>
            )}
          </div>

          {/* <div className="flex gap-2 mt-auto pt-4">
            <Button size="sm" variant="outline" className="flex-1 group">
              <ExternalLink className="w-3 h-3 mr-1 group-hover:rotate-12 transition-transform" />
              Demo
            </Button>
            <Button size="sm" variant="ghost" className="flex-1 group">
              <ExternalLink className="w-3 h-3 mr-1 group-hover:scale-110 transition-transform" />
              Code
            </Button>
          </div> */}
        </div>
      </div>
    </SpotlightCard>
  );
}
