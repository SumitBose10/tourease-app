"use client";
import Link from "next/link";
import {
  Package,
  Clock,
  MapPin,
  Star,
  Car,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Crown,
  Zap,
  IndianRupee,
  Calendar,
  Users,
} from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const packages = [
  {
    name: "Day Explorer",
    duration: "1 Day",
    price: "₹999",
    originalPrice: "₹1,499",
    description: "Perfect for a quick day trip covering top attractions.",
    highlights: [
      "Up to 5 attractions",
      "Sedan transport included",
      "Route optimization",
      "Digital itinerary",
      "Customer support",
    ],
    attractions: 5,
    rating: 4.7,
    reviews: 342,
    popular: false,
    tier: "basic",
    gradient: "from-cyan-400 to-cyan-600",
    bgGradient: "from-cyan-400/5 to-cyan-600/5",
    borderColor: "hover:border-cyan-400/30",
  },
  {
    name: "Weekend Escape",
    duration: "2–3 Days",
    price: "₹2,499",
    originalPrice: "₹3,999",
    description: "The most popular choice for weekend getaways.",
    highlights: [
      "Up to 12 attractions",
      "SUV / Sedan options",
      "Optimized multi-day routes",
      "Hotel transfer included",
      "Live tracking",
      "24/7 priority support",
    ],
    attractions: 12,
    rating: 4.9,
    reviews: 1205,
    popular: true,
    tier: "popular",
    gradient: "from-violet-400 to-violet-600",
    bgGradient: "from-violet-400/10 to-violet-600/10",
    borderColor: "border-violet-400/30",
  },
  {
    name: "Week Voyager",
    duration: "5–7 Days",
    price: "₹5,999",
    originalPrice: "₹8,999",
    description: "Comprehensive travel package for an extended holiday.",
    highlights: [
      "Unlimited attractions",
      "Premium vehicle selection",
      "Multi-city route planning",
      "Hotel + airport transfers",
      "Personal travel concierge",
      "Live tracking & safety",
      "Full refund protection",
    ],
    attractions: 25,
    rating: 4.8,
    reviews: 567,
    popular: false,
    tier: "premium",
    gradient: "from-amber-400 to-amber-600",
    bgGradient: "from-amber-400/5 to-amber-600/5",
    borderColor: "hover:border-amber-400/30",
  },
];

const customOptions = [
  { icon: Calendar, label: "Custom Duration", desc: "1 day to 30 days" },
  { icon: MapPin, label: "Any Destination", desc: "200+ cities supported" },
  { icon: Car, label: "Vehicle Choice", desc: "Pick your ride" },
  { icon: Users, label: "Group Size", desc: "1 to 50+ travelers" },
];

export default function PackagesPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="page-container">
        <div className="text-center mb-16">
          <motion.span
            className="badge badge-pink mb-4 inline-flex"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Package className="w-3.5 h-3.5" /> Travel Packages
          </motion.span>
          <motion.h1
            className="section-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Budget-Friendly{" "}
            <span className="gradient-text">Travel Plans</span>
          </motion.h1>
          <motion.p
            className="mt-3 text-slate-400 max-w-lg mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Pre-designed packages with transport, routes, and attractions—all
            at the best price.
          </motion.p>
        </div>

        {/* Package Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20 max-w-5xl mx-auto">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.name}
              className={`relative rounded-2xl border transition-all duration-300 ${
                pkg.popular
                  ? `${pkg.borderColor} bg-gradient-to-b ${pkg.bgGradient}`
                  : `border-white/10 ${pkg.borderColor}`
              }`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="badge badge-violet">
                    <Crown className="w-3 h-3" /> Most Popular
                  </span>
                </div>
              )}

              <div className="p-6 lg:p-8">
                {/* Header */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-white">{pkg.name}</h3>
                    <span className="badge badge-cyan">{pkg.duration}</span>
                  </div>
                  <p className="text-sm text-slate-400">{pkg.description}</p>
                </div>

                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-white font-[var(--font-outfit)]">
                      {pkg.price}
                    </span>
                    <span className="text-sm text-slate-500 line-through">
                      {pkg.originalPrice}
                    </span>
                  </div>
                  <span className="text-xs text-emerald-400">
                    Save{" "}
                    {Math.round(
                      ((parseInt(pkg.originalPrice.replace(/[₹,]/g, "")) -
                        parseInt(pkg.price.replace(/[₹,]/g, ""))) /
                        parseInt(pkg.originalPrice.replace(/[₹,]/g, ""))) *
                        100
                    )}
                    %
                  </span>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {pkg.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                      <span className="text-slate-300">{h}</span>
                    </li>
                  ))}
                </ul>

                {/* Rating */}
                <div className="flex items-center gap-3 mb-6 text-sm">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                    <span className="font-medium text-white">{pkg.rating}</span>
                  </div>
                  <span className="text-slate-500">
                    ({pkg.reviews.toLocaleString()} reviews)
                  </span>
                </div>

                <Link
                  href="/booking"
                  className={`w-full text-center text-sm ${
                    pkg.popular ? "btn-primary" : "btn-secondary"
                  } !py-3`}
                >
                  {pkg.popular ? "Get Started" : "Choose Plan"}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Custom Package CTA */}
        <motion.div
          className="rounded-2xl glass p-8 md:p-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-10">
            <span className="badge badge-cyan mb-3 inline-flex">
              <Sparkles className="w-3.5 h-3.5" /> Custom Package
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 font-[var(--font-outfit)]">
              Need Something Specific?
            </h2>
            <p className="text-slate-400 max-w-md mx-auto text-sm">
              Build your own travel package tailored to your group, budget, and
              schedule.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {customOptions.map((opt) => (
              <div
                key={opt.label}
                className="text-center p-4 rounded-xl bg-white/3 border border-white/5"
              >
                <opt.icon className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
                <div className="text-sm font-medium text-white">{opt.label}</div>
                <div className="text-xs text-slate-500 mt-0.5">{opt.desc}</div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link href="/plan" className="btn-primary">
              Build Custom Package
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
