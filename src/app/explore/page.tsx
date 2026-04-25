"use client";
import Link from "next/link";
import {
  MapPin,
  Star,
  Clock,
  Users,
  ArrowRight,
  Search,
  SlidersHorizontal,
  TrendingUp,
  Heart,
} from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const destinations = [
  {
    name: "Goa",
    region: "West India",
    tagline: "Beaches, nightlife & Portuguese heritage",
    attractions: 42,
    rating: 4.8,
    avgCost: "₹1,200",
    popular: true,
    gradient: "from-cyan-400/20 to-blue-500/20",
    borderGlow: "hover:border-cyan-400/30",
  },
  {
    name: "Jaipur",
    region: "Rajasthan",
    tagline: "Pink City — palaces, forts & culture",
    attractions: 35,
    rating: 4.7,
    avgCost: "₹800",
    popular: true,
    gradient: "from-pink-400/20 to-rose-500/20",
    borderGlow: "hover:border-pink-400/30",
  },
  {
    name: "Manali",
    region: "Himachal Pradesh",
    tagline: "Mountains, adventure & snow-capped peaks",
    attractions: 28,
    rating: 4.9,
    avgCost: "₹1,500",
    popular: true,
    gradient: "from-emerald-400/20 to-teal-500/20",
    borderGlow: "hover:border-emerald-400/30",
  },
  {
    name: "Varanasi",
    region: "Uttar Pradesh",
    tagline: "Spiritual capital — ghats, temples & culture",
    attractions: 31,
    rating: 4.6,
    avgCost: "₹600",
    popular: false,
    gradient: "from-amber-400/20 to-orange-500/20",
    borderGlow: "hover:border-amber-400/30",
  },
  {
    name: "Kerala",
    region: "South India",
    tagline: "Backwaters, spices & lush green landscapes",
    attractions: 38,
    rating: 4.8,
    avgCost: "₹1,000",
    popular: true,
    gradient: "from-green-400/20 to-emerald-500/20",
    borderGlow: "hover:border-green-400/30",
  },
  {
    name: "Udaipur",
    region: "Rajasthan",
    tagline: "City of Lakes — romance & royal heritage",
    attractions: 24,
    rating: 4.7,
    avgCost: "₹900",
    popular: false,
    gradient: "from-violet-400/20 to-purple-500/20",
    borderGlow: "hover:border-violet-400/30",
  },
  {
    name: "Rishikesh",
    region: "Uttarakhand",
    tagline: "Yoga capital — adventure rafting & peace",
    attractions: 20,
    rating: 4.5,
    avgCost: "₹700",
    popular: false,
    gradient: "from-sky-400/20 to-blue-500/20",
    borderGlow: "hover:border-sky-400/30",
  },
  {
    name: "Darjeeling",
    region: "West Bengal",
    tagline: "Tea gardens, toy train & Himalayan views",
    attractions: 22,
    rating: 4.6,
    avgCost: "₹850",
    popular: false,
    gradient: "from-lime-400/20 to-green-500/20",
    borderGlow: "hover:border-lime-400/30",
  },
];

const categories = ["All", "Popular", "Budget-Friendly", "Adventure", "Cultural", "Beach"];

export default function ExplorePage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = destinations.filter((d) => {
    const matchesSearch =
      d.name.toLowerCase().includes(search.toLowerCase()) ||
      d.region.toLowerCase().includes(search.toLowerCase());
    const matchesCategory =
      activeCategory === "All" || (activeCategory === "Popular" && d.popular) || activeCategory !== "Popular";
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="page-container">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.span
            className="badge badge-cyan mb-4 inline-flex"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <MapPin className="w-3.5 h-3.5" /> Explore Destinations
          </motion.span>
          <motion.h1
            className="section-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Discover{" "}
            <span className="gradient-text">Amazing Places</span>
          </motion.h1>
          <motion.p
            className="mt-3 text-slate-400 max-w-lg mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Browse popular tourist destinations and plan your perfect trip with
            optimized routes and transport options.
          </motion.p>
        </div>

        {/* Search + Filter */}
        <motion.div
          className="flex flex-col sm:flex-row gap-3 mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
            <input
              type="text"
              className="input !pl-10"
              placeholder="Search destinations..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <button className="btn-secondary !py-2.5 gap-2">
            <SlidersHorizontal className="w-4 h-4" /> Filters
          </button>
        </motion.div>

        {/* Categories */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                activeCategory === cat
                  ? "bg-cyan-400/15 text-cyan-400 border border-cyan-400/20"
                  : "bg-white/5 text-slate-400 border border-white/5 hover:text-white hover:bg-white/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Destination Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filtered.map((dest, i) => (
            <motion.div
              key={dest.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
            >
              <Link href={`/plan?destination=${encodeURIComponent(dest.name)}`} className="block">
                <div
                  className={`card group relative overflow-hidden ${dest.borderGlow}`}
                >
                  {/* Gradient Top */}
                  <div
                    className={`h-32 -mx-6 -mt-6 mb-4 bg-gradient-to-br ${dest.gradient} flex items-center justify-center relative`}
                  >
                    <MapPin className="w-12 h-12 text-white/20" />
                    {dest.popular && (
                      <span className="absolute top-3 right-3 badge badge-cyan text-[10px]">
                        <TrendingUp className="w-3 h-3" /> Popular
                      </span>
                    )}
                    <button
                      className="absolute top-3 left-3 w-8 h-8 rounded-lg bg-black/30 backdrop-blur flex items-center justify-center text-white/50 hover:text-pink-400 transition-colors"
                      onClick={(e) => e.preventDefault()}
                    >
                      <Heart className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                    {dest.name}
                  </h3>
                  <p className="text-xs text-slate-500 mb-2">{dest.region}</p>
                  <p className="text-sm text-slate-400 mb-4 line-clamp-2">
                    {dest.tagline}
                  </p>

                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span className="flex items-center gap-1">
                      <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                      {dest.rating}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {dest.attractions} spots
                    </span>
                    <span className="font-medium text-cyan-400">
                      {dest.avgCost}/day
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
