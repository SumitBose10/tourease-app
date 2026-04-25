"use client";
import Link from "next/link";
import {
  MapPin,
  Route,
  Car,
  Shield,
  Clock,
  Star,
  ArrowRight,
  Zap,
  Globe,
  CreditCard,
  Navigation,
  Users,
  ChevronRight,
  Sparkles,
  TrendingDown,
  Map,
  CheckCircle2,
} from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
  }),
};

const features = [
  {
    icon: Route,
    title: "Smart Route Planning",
    description: "AI-powered optimization that finds the best routes across multiple stops, saving you time and money.",
    color: "from-cyan-400 to-cyan-600",
    glow: "cyan",
  },
  {
    icon: Car,
    title: "Multi-Vehicle Booking",
    description: "Compare cars, bikes, scooters, shuttles & more. Find the perfect ride at the best price.",
    color: "from-violet-400 to-violet-600",
    glow: "violet",
  },
  {
    icon: CreditCard,
    title: "Budget Packages",
    description: "Pre-designed travel packages tailored to your budget—daily, weekend, weekly or custom.",
    color: "from-pink-400 to-pink-600",
    glow: "pink",
  },
  {
    icon: Navigation,
    title: "Live Tracking",
    description: "Real-time GPS tracking, ETA updates, trip sharing, and emergency contacts for safety.",
    color: "from-emerald-400 to-emerald-600",
    glow: "emerald",
  },
  {
    icon: Shield,
    title: "Trust & Safety",
    description: "Verified drivers, transparent ratings, encrypted payments, and 24/7 support.",
    color: "from-amber-400 to-amber-600",
    glow: "amber",
  },
  {
    icon: Star,
    title: "Ratings & Reviews",
    description: "Community-driven trust scores, verified feedback, and driver accountability system.",
    color: "from-rose-400 to-rose-600",
    glow: "rose",
  },
];

const stats = [
  { value: "50K+", label: "Happy Travelers", icon: Users },
  { value: "200+", label: "Cities Covered", icon: Globe },
  { value: "35%", label: "Avg. Savings", icon: TrendingDown },
  { value: "4.9", label: "User Rating", icon: Star },
];

const steps = [
  {
    num: "01",
    title: "Choose Destination",
    description: "Enter your city, dates, and attractions you want to visit.",
    icon: MapPin,
  },
  {
    num: "02",
    title: "Get Smart Routes",
    description: "Our AI optimizes routes, estimates costs, and suggests transport modes.",
    icon: Map,
  },
  {
    num: "03",
    title: "Book & Go",
    description: "Compare options, book instantly, and track your ride in real-time.",
    icon: Zap,
  },
];

const testimonials = [
  {
    name: "Rahul Singh",
    role: "Student Explorer",
    text: "TourEase saved me over ₹3,000 on my Goa trip. The route planning is insanely good!",
    rating: 5,
    avatar: "RS",
  },
  {
    name: "Priya Sharma",
    role: "Family Traveler",
    text: "Planning family trips is so much easier now. The budget packages are perfect for us.",
    rating: 5,
    avatar: "PS",
  },
  {
    name: "Alex Chen",
    role: "Solo Traveler",
    text: "As a solo international traveler, the live tracking and safety features give me real peace of mind.",
    rating: 5,
    avatar: "AC",
  },
];

export default function Home() {
  return (
    <>
      {/* ======== HERO SECTION ======== */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        {/* BG Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-cyan-500/8 rounded-full blur-[120px] animate-pulse-slow" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-violet-500/8 rounded-full blur-[120px] animate-pulse-slow" style={{ animationDelay: "1.5s" }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-500/5 rounded-full blur-[150px]" />
          {/* Grid */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={0}
          >
            <span className="badge badge-cyan mb-6 inline-flex">
              <Sparkles className="w-3.5 h-3.5" />
              Smart Tourism Platform
            </span>
          </motion.div>

          <motion.h1
            className="section-heading !text-4xl sm:!text-5xl md:!text-6xl lg:!text-7xl !leading-tight max-w-4xl mx-auto"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={1}
          >
            Travel Smart.{" "}
            <span className="gradient-text">Save More.</span>
            <br />
            Explore Better.
          </motion.h1>

          <motion.p
            className="mt-6 text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={2}
          >
            Plan optimized routes, compare transport options, and reduce travel
            expenses with AI-powered tourism intelligence.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={3}
          >
            <Link href="/plan" className="btn-primary text-base px-8 py-3.5">
              Start Planning
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/explore" className="btn-secondary text-base px-8 py-3.5">
              Explore Destinations
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={4}
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="glass rounded-2xl p-5 text-center group hover:border-cyan-400/20 transition-all duration-300"
              >
                <stat.icon className="w-5 h-5 text-cyan-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white font-[var(--font-outfit)]">
                  {stat.value}
                </div>
                <div className="text-xs text-slate-400 mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-5 h-8 rounded-full border border-slate-600 flex items-start justify-center p-1.5">
            <div className="w-1 h-2 bg-cyan-400 rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* ======== FEATURES SECTION ======== */}
      <section className="py-24 relative" id="features">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="badge badge-violet mb-4 inline-flex">
              <Zap className="w-3.5 h-3.5" /> Core Features
            </span>
            <h2 className="section-heading">
              Everything You Need for{" "}
              <span className="gradient-text">Smarter Travel</span>
            </h2>
            <p className="mt-4 text-slate-400 max-w-xl mx-auto">
              From route planning to live tracking — one platform for your
              entire travel journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                className="card group relative overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                {/* Glow corner */}
                <div
                  className={`absolute -top-12 -right-12 w-24 h-24 bg-gradient-to-br ${feature.color} rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                />
                <div
                  className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4`}
                >
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ======== HOW IT WORKS ======== */}
      <section className="py-24 relative bg-gradient-to-b from-transparent via-cyan-500/[0.02] to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="badge badge-cyan mb-4 inline-flex">
              <Route className="w-3.5 h-3.5" /> How It Works
            </span>
            <h2 className="section-heading">
              Three Steps to{" "}
              <span className="gradient-text">Your Perfect Trip</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-16 left-[20%] right-[20%] h-px bg-gradient-to-r from-cyan-400/30 via-violet-400/30 to-pink-400/30" />

            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                className="relative text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
              >
                <div className="relative inline-flex mb-6">
                  <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-cyan-400/10 to-violet-400/10 border border-white/5 flex items-center justify-center">
                    <step.icon className="w-8 h-8 text-cyan-400" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-8 h-8 rounded-xl bg-gradient-to-br from-cyan-400 to-violet-500 text-white text-xs font-bold flex items-center justify-center shadow-lg">
                    {step.num}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-slate-400 max-w-xs mx-auto">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ======== TESTIMONIALS ======== */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="badge badge-pink mb-4 inline-flex">
              <Star className="w-3.5 h-3.5" /> Testimonials
            </span>
            <h2 className="section-heading">
              Loved by <span className="gradient-text">Travelers</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                className="card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(t.rating)].map((_, j) => (
                    <Star
                      key={j}
                      className="w-4 h-4 text-amber-400 fill-amber-400"
                    />
                  ))}
                </div>
                <p className="text-slate-300 text-sm leading-relaxed mb-6 italic">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-violet-500 flex items-center justify-center text-white text-sm font-bold">
                    {t.avatar}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">
                      {t.name}
                    </div>
                    <div className="text-xs text-slate-400">{t.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ======== CTA ======== */}
      <section className="py-24 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden">
            {/* BG */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-violet-500/20 to-pink-500/20" />
            <div className="absolute inset-0 glass" />

            <div className="relative p-10 md:p-16 text-center">
              <h2 className="section-heading !text-3xl md:!text-4xl mb-4">
                Ready to Travel{" "}
                <span className="gradient-text">Smarter?</span>
              </h2>
              <p className="text-slate-300 max-w-lg mx-auto mb-8">
                Join thousands of travelers who save time and money with
                AI-powered route planning and smart bookings.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/register" className="btn-primary text-base px-8 py-3.5">
                  Get Started Free
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/explore" className="btn-secondary text-base px-8 py-3.5">
                  Browse Destinations
                </Link>
              </div>
              <div className="mt-8 flex items-center justify-center gap-6 text-sm text-slate-400">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Free to start
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" /> No credit card
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Cancel anytime
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
