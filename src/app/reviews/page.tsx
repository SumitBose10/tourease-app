"use client";
import { useState } from "react";
import {
  Star,
  ThumbsUp,
  Shield,
  Flag,
  Search,
  SlidersHorizontal,
  MessageSquare,
  User,
  Car,
  CheckCircle2,
  TrendingUp,
  Award,
} from "lucide-react";
import { motion } from "framer-motion";

const reviews = [
  {
    id: 1,
    user: "Ananya Mehta",
    avatar: "AM",
    rating: 5,
    date: "2 days ago",
    driver: "Rajesh Kumar",
    vehicle: "Swift Dzire",
    route: "Beach Explorer — Goa",
    comment:
      "Absolutely amazing experience! Rajesh was punctual, professional, and knew all the best spots. The route optimization saved us at least 2 hours. Highly recommended!",
    helpful: 24,
    verified: true,
    tags: ["On Time", "Clean Vehicle", "Friendly"],
  },
  {
    id: 2,
    user: "Vikram Joshi",
    avatar: "VJ",
    rating: 5,
    date: "5 days ago",
    driver: "Amit Patel",
    vehicle: "Ertiga MPV",
    route: "Heritage Trail — Jaipur",
    comment:
      "Perfect for our family trip. The Ertiga was spacious,  AC was great, and Amit was very careful with driving. Kids loved the trip! Will definitely book again.",
    helpful: 18,
    verified: true,
    tags: ["Family Friendly", "Spacious", "Safe"],
  },
  {
    id: 3,
    user: "Sarah Johnson",
    avatar: "SJ",
    rating: 4,
    date: "1 week ago",
    driver: "Vikram Singh",
    vehicle: "Royal Enfield",
    route: "Mountain Ride — Manali",
    comment:
      "Thrilling ride through the mountains! Vikram is an excellent rider and the bike was in perfect condition. Only wish the helmet had a better visor. Overall great value!",
    helpful: 31,
    verified: true,
    tags: ["Adventure", "Great Views", "Skilled Driver"],
  },
  {
    id: 4,
    user: "Rahul Gupta",
    avatar: "RG",
    rating: 5,
    date: "1 week ago",
    driver: "Self Drive",
    vehicle: "Honda Activa",
    route: "City Explorer — Goa",
    comment:
      "Rented the Activa for 2 days and it was so convenient! Pickup and drop was smooth, scooter was clean, and the price was unbeatable. Saved so much compared to cabs.",
    helpful: 15,
    verified: false,
    tags: ["Budget Friendly", "Self Drive", "Convenient"],
  },
  {
    id: 5,
    user: "Priya Nair",
    avatar: "PN",
    rating: 4,
    date: "2 weeks ago",
    driver: "GSRTC",
    vehicle: "Local Bus",
    route: "Budget Trip — Kerala",
    comment:
      "TourEase made navigating Kerala's bus system so easy! The route planner showed me exactly which buses to take and when. Spent only ₹200 the entire day on transport.",
    helpful: 42,
    verified: true,
    tags: ["Budget Friendly", "Public Transport", "Good Routes"],
  },
  {
    id: 6,
    user: "Alex Chen",
    avatar: "AC",
    rating: 5,
    date: "2 weeks ago",
    driver: "Multiple",
    vehicle: "Ride Share",
    route: "Weekend Escape — Udaipur",
    comment:
      "As a solo international traveler, I felt completely safe with the live tracking and trip sharing features. The ride-sharing option also helped me meet fellow travelers. Love this app!",
    helpful: 56,
    verified: true,
    tags: ["Safe", "Solo Traveler", "Social"],
  },
];

const ratingDistribution = [
  { stars: 5, count: 3420, percent: 72 },
  { stars: 4, count: 890, percent: 19 },
  { stars: 3, count: 285, percent: 6 },
  { stars: 2, count: 98, percent: 2 },
  { stars: 1, count: 47, percent: 1 },
];

const stats = [
  { label: "Total Reviews", value: "4,740", icon: MessageSquare },
  { label: "Average Rating", value: "4.8", icon: Star },
  { label: "Verified Reviews", value: "92%", icon: CheckCircle2 },
  { label: "Repeat Bookings", value: "67%", icon: TrendingUp },
];

type FilterType = "all" | "5" | "4" | "3" | "verified";

export default function ReviewsPage() {
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");
  const [searchTerm, setSearchTerm] = useState("");

  const filtered = reviews.filter((r) => {
    const matchesFilter =
      activeFilter === "all" ||
      (activeFilter === "verified" && r.verified) ||
      r.rating === parseInt(activeFilter);
    const matchesSearch =
      r.user.toLowerCase().includes(searchTerm.toLowerCase()) ||
      r.comment.toLowerCase().includes(searchTerm.toLowerCase()) ||
      r.driver.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="page-container">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.span
            className="badge badge-pink mb-4 inline-flex"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Star className="w-3.5 h-3.5" /> Ratings & Reviews
          </motion.span>
          <motion.h1
            className="section-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            What Travelers{" "}
            <span className="gradient-text">Are Saying</span>
          </motion.h1>
        </div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {stats.map((s) => (
            <div
              key={s.label}
              className="card !p-5 text-center"
            >
              <s.icon className="w-5 h-5 text-cyan-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white font-[var(--font-outfit)]">
                {s.value}
              </div>
              <div className="text-xs text-slate-400 mt-1">{s.label}</div>
            </div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar - Rating Breakdown */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="card sticky top-24">
              <h3 className="text-sm font-semibold text-white mb-4 flex items-center gap-2">
                <Award className="w-4 h-4 text-amber-400" />
                Rating Breakdown
              </h3>

              {/* Overall */}
              <div className="text-center mb-6 pb-6 border-b border-white/5">
                <div className="text-4xl font-bold text-white font-[var(--font-outfit)]">
                  4.8
                </div>
                <div className="flex items-center justify-center gap-0.5 mt-1">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star
                      key={s}
                      className={`w-4 h-4 ${
                        s <= 4
                          ? "text-amber-400 fill-amber-400"
                          : "text-amber-400 fill-amber-400 opacity-60"
                      }`}
                    />
                  ))}
                </div>
                <div className="text-xs text-slate-500 mt-1">
                  4,740 reviews
                </div>
              </div>

              {/* Bars */}
              <div className="space-y-2.5">
                {ratingDistribution.map((r) => (
                  <button
                    key={r.stars}
                    onClick={() =>
                      setActiveFilter(
                        activeFilter === String(r.stars)
                          ? "all"
                          : (String(r.stars) as FilterType)
                      )
                    }
                    className="w-full flex items-center gap-2 group"
                  >
                    <span className="text-xs text-slate-400 w-3">
                      {r.stars}
                    </span>
                    <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                    <div className="flex-1 h-2 rounded-full bg-white/5 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-amber-400 to-amber-500 transition-all duration-500"
                        style={{ width: `${r.percent}%` }}
                      />
                    </div>
                    <span className="text-xs text-slate-500 w-10 text-right">
                      {r.percent}%
                    </span>
                  </button>
                ))}
              </div>

              {/* Filters */}
              <div className="mt-6 pt-6 border-t border-white/5 space-y-2">
                <h4 className="text-xs text-slate-500 font-medium uppercase tracking-wider mb-3">
                  Filter
                </h4>
                {(
                  [
                    { value: "all", label: "All Reviews" },
                    { value: "verified", label: "Verified Only" },
                    { value: "5", label: "5 Stars" },
                    { value: "4", label: "4 Stars" },
                  ] as { value: FilterType; label: string }[]
                ).map((f) => (
                  <button
                    key={f.value}
                    onClick={() => setActiveFilter(f.value)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all ${
                      activeFilter === f.value
                        ? "bg-cyan-400/10 text-cyan-400"
                        : "text-slate-400 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    {f.label}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Reviews List */}
          <div className="lg:col-span-3 space-y-5">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
              <input
                type="text"
                className="input !pl-10"
                placeholder="Search reviews..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {filtered.map((review, i) => (
              <motion.div
                key={review.id}
                className="card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-violet-500 flex items-center justify-center text-white text-sm font-bold">
                      {review.avatar}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-white text-sm">
                          {review.user}
                        </span>
                        {review.verified && (
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                        )}
                      </div>
                      <div className="text-xs text-slate-500">
                        {review.date}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, j) => (
                      <Star
                        key={j}
                        className={`w-3.5 h-3.5 ${
                          j < review.rating
                            ? "text-amber-400 fill-amber-400"
                            : "text-slate-600"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Trip Info */}
                <div className="flex flex-wrap gap-2 mb-3 text-xs text-slate-400">
                  <span className="flex items-center gap-1 px-2 py-1 rounded-md bg-white/5">
                    <Car className="w-3 h-3" /> {review.vehicle}
                  </span>
                  <span className="flex items-center gap-1 px-2 py-1 rounded-md bg-white/5">
                    <User className="w-3 h-3" /> {review.driver}
                  </span>
                  <span className="flex items-center gap-1 px-2 py-1 rounded-md bg-white/5">
                    <Star className="w-3 h-3" /> {review.route}
                  </span>
                </div>

                {/* Comment */}
                <p className="text-sm text-slate-300 leading-relaxed mb-4">
                  {review.comment}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {review.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded-md bg-emerald-400/10 text-emerald-400 text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-4 pt-3 border-t border-white/5">
                  <button className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-cyan-400 transition-colors">
                    <ThumbsUp className="w-3.5 h-3.5" />
                    Helpful ({review.helpful})
                  </button>
                  <button className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-slate-300 transition-colors">
                    <MessageSquare className="w-3.5 h-3.5" /> Reply
                  </button>
                  <button className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-red-400 transition-colors ml-auto">
                    <Flag className="w-3.5 h-3.5" /> Report
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
