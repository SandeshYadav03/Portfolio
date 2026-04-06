import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import {
  ChevronDown,
  Mail,
  MapPin,
  Phone,
  Send,
  CheckCircle,
  MessageSquare,
} from "lucide-react";
import { Button } from "./ui/Button";
import { SpotlightCard } from "./ui/SpotlightCard";
import { smoothScroll } from "../lib/utils";

const CONTACT_EMAIL = "sandeshyadav5108@gmail.com";

const COUNTRY_CODES = [
  { code: "+91", label: "India (+91)" },
  { code: "+1", label: "United States (+1)" },
  { code: "+44", label: "United Kingdom (+44)" },
  { code: "+61", label: "Australia (+61)" },
  { code: "+971", label: "UAE (+971)" },
  { code: "+65", label: "Singapore (+65)" },
  { code: "+81", label: "Japan (+81)" },
  { code: "+49", label: "Germany (+49)" },
  { code: "+33", label: "France (+33)" },
  { code: "+86", label: "China (+86)" },
  { code: "+82", label: "South Korea (+82)" },
  { code: "+55", label: "Brazil (+55)" },
] as const;

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    countryCode: "+91",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [countryCodeOpen, setCountryCodeOpen] = useState(false);
  const countryCodeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!countryCodeOpen) return;
    const onPointerDown = (e: PointerEvent) => {
      if (countryCodeRef.current?.contains(e.target as Node)) return;
      setCountryCodeOpen(false);
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setCountryCodeOpen(false);
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [countryCodeOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, countryCode, phone, message } = formData;
    const fullPhone = `${countryCode} ${phone.trim()}`.trim();
    const subject = `Portfolio inquiry from ${name}`;
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${fullPhone}`,
      "",
      "Message:",
      message,
    ].join("\n");
    const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailto, "_blank", "noopener,noreferrer");
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        countryCode: "+91",
        phone: "",
        message: "",
      });
    }, 4000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // const socialLinks = [
  //   { icon: ExternalLink, href: 'https://github.com', label: 'GitHub', color: 'text-neutral-700 hover:text-neutral-900' },
  //   { icon: User, href: 'https://linkedin.com', label: 'LinkedIn', color: 'text-blue-600 hover:text-blue-700' },
  //   { icon: ExternalLink, href: 'https://twitter.com', label: 'Twitter', color: 'text-sky-500 hover:text-sky-600' },
  // ]

  return (
    <section
      id="contact"
      className="py-8 relative bg-gradient-to-br from-emerald-50/50 to-cyan-50/30"
    >
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border border-emerald-500/20 text-emerald-600 text-sm font-medium backdrop-blur-sm mb-4">
            <MessageSquare className="w-4 h-4" />
            Get In Touch
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-neutral-900 to-emerald-600 bg-clip-text text-transparent mb-4">
            Let's Work Together
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your next project
            and create something amazing together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SpotlightCard className="p-8" variant="default">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-neutral-700 mb-2"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 bg-white/80 backdrop-blur-sm"
                      placeholder="John Doe"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-neutral-700 mb-2"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 bg-white/80 backdrop-blur-sm"
                      placeholder="john@example.com"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <span
                      id="phone-label"
                      className="block text-sm font-medium text-neutral-700 mb-2"
                    >
                      Contact number
                    </span>
                    <div className="flex gap-2">
                      <div ref={countryCodeRef} className="relative shrink-0">
                        <button
                          type="button"
                          id="country-code"
                          aria-label="Country calling code"
                          aria-expanded={countryCodeOpen}
                          aria-haspopup="listbox"
                          onClick={() => setCountryCodeOpen((o) => !o)}
                          className="flex min-h-[50px] w-16 items-center justify-center gap-0.5 self-stretch rounded-lg border border-neutral-200 bg-white/80 px-1.5 py-3 text-sm text-neutral-800 backdrop-blur-sm tabular-nums transition-all hover:border-neutral-300 focus:border-transparent focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                        >
                          <span>{formData.countryCode}</span>
                          <ChevronDown
                            className={`size-3.5 shrink-0 text-neutral-500 transition-transform ${countryCodeOpen ? "rotate-180" : ""}`}
                            aria-hidden
                          />
                        </button>
                        {countryCodeOpen && (
                          <ul
                            role="listbox"
                            aria-labelledby="phone-label"
                            className="absolute left-0 top-[calc(100%+4px)] z-50 max-h-60 min-w-[12.5rem] overflow-auto rounded-lg border border-neutral-200 bg-white py-1 shadow-lg"
                          >
                            {COUNTRY_CODES.map(({ code, label }) => (
                              <li key={code} role="presentation">
                                <button
                                  type="button"
                                  role="option"
                                  aria-selected={formData.countryCode === code}
                                  className={`w-full px-3 py-2.5 text-left text-sm transition-colors hover:bg-emerald-50 focus:bg-emerald-50 focus:outline-none ${
                                    formData.countryCode === code
                                      ? "bg-emerald-50/80 font-medium text-emerald-800"
                                      : "text-neutral-800"
                                  }`}
                                  onClick={() => {
                                    setFormData((prev) => ({
                                      ...prev,
                                      countryCode: code,
                                    }));
                                    setCountryCodeOpen(false);
                                  }}
                                >
                                  {label}
                                </button>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        autoComplete="tel-national"
                        inputMode="tel"
                        aria-labelledby="phone-label"
                        className="min-w-0 flex-1 px-4 py-3 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 bg-white/80 backdrop-blur-sm"
                        placeholder="9999999999"
                      />
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35 }}
                  >
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-neutral-700 mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 bg-white/80 backdrop-blur-sm resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.45 }}
                >
                  <Button
                    type="submit"
                    disabled={submitted}
                    className="w-full group relative overflow-hidden"
                    size="lg"
                  >
                    <motion.div
                      className="flex items-center justify-center gap-2"
                      animate={submitted ? { scale: 0 } : { scale: 1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      <span>Send Message</span>
                    </motion.div>

                    <motion.div
                      className="absolute inset-0 flex items-center justify-center px-2 text-center"
                      initial={{ scale: 0 }}
                      animate={submitted ? { scale: 1 } : { scale: 0 }}
                      transition={{ duration: 0.3, delay: submitted ? 0.1 : 0 }}
                    >
                      <div className="flex flex-col items-center gap-1 sm:flex-row sm:gap-2">
                        <CheckCircle className="w-5 h-5 shrink-0" />
                        <span className="text-sm leading-tight">
                          Check your email app — finish sending there
                        </span>
                      </div>
                    </motion.div>
                  </Button>
                </motion.div>
              </form>
            </SpotlightCard>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Contact Details */}
            <SpotlightCard className="p-8" variant="default">
              <h3 className="text-2xl font-bold text-neutral-900 mb-6">
                Contact Information
              </h3>

              <div className="space-y-4">
                <motion.div
                  className="flex items-start gap-4 group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <div className="p-3 rounded-lg bg-emerald-100 group-hover:bg-emerald-200 transition-colors">
                    <Mail className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-neutral-900">Email</h4>
                    <a
                      href={`mailto:${CONTACT_EMAIL}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-600 hover:text-emerald-700 transition-colors"
                    >
                      {CONTACT_EMAIL}
                    </a>
                  </div>
                </motion.div>
                <motion.div
                  className="flex items-start gap-4 group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="p-3 rounded-lg bg-purple-100 group-hover:bg-purple-200 transition-colors">
                    <Phone className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-neutral-900">Phone</h4>
                    <a
                      href="tel:+917517323320"
                      className="text-purple-600 hover:text-purple-700 transition-colors"
                    >
                      +91 75173 23320
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start gap-4 group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="p-3 rounded-lg bg-blue-100 group-hover:bg-blue-200 transition-colors">
                    <MapPin className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-neutral-900">Location</h4>
                    <p className="text-neutral-600">Pune, Maharashtra, India</p>
                  </div>
                </motion.div>
              </div>
            </SpotlightCard>

            {/* Social Links */}
            {/* <SpotlightCard className="p-8" variant="default">
              <h3 className="text-2xl font-bold text-neutral-900 mb-6">Connect With Me</h3>

              <div className="grid grid-cols-1 gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-4 p-4 rounded-lg border border-neutral-200 hover:border-emerald-300 transition-all duration-300 group hover:shadow-lg ${social.color}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <social.icon className="w-6 h-6 group-hover:scale-110 transition-transform" />
                    <span className="font-medium">{social.label}</span>
                    <motion.div
                      className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity"
                      whileHover={{ x: 5 }}
                    >
                      →
                    </motion.div>
                  </motion.a>
                ))}
              </div>
            </SpotlightCard> */}

            {/* Quick Stats */}
            <SpotlightCard className="p-8" variant="glow">
              <div className="text-center">
                <motion.div
                  className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent mb-2"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  24-48h
                </motion.div>
                <p className="text-sm text-neutral-600">
                  Average Response Time
                </p>
              </div>
            </SpotlightCard>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-neutral-900 mb-4">
              Ready to start your next project?
            </h3>
            <p className="text-neutral-600 mb-8">
              Whether you need a new website, mobile app, or want to modernize
              your existing application, I'm here to help bring your vision to
              life with cutting-edge technology and design.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                className="group"
                onClick={() => smoothScroll("contact")}
              >
                <Mail className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                Start a Conversation
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="group"
                onClick={() => smoothScroll("contact")}
              >
                <Phone className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Schedule a Call
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
