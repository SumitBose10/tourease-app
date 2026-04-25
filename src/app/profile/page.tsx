"use client";
import {
  User,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Star,
  Route,
  Car,
  Clock,
  CreditCard,
  Settings,
  Bell,
  Shield,
  LogOut,
  ChevronRight,
  Edit3,
  Wallet,
  Award,
  TrendingUp,
  Heart,
  History,
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const tripHistory = [
  {
    id: 1,
    route: "Beach Explorer",
    destination: "Goa",
    date: "Apr 20, 2026",
    vehicle: "Swift Dzire",
    cost: "₹713",
    status: "completed",
    rating: 5,
  },
  {
    id: 2,
    route: "Heritage Trail",
    destination: "Jaipur",
    date: "Apr 12, 2026",
    vehicle: "Ertiga MPV",
    cost: "₹1,245",
    status: "completed",
    rating: 4,
  },
  {
    id: 3,
    route: "City Explorer",
    destination: "Udaipur",
    date: "Mar 28, 2026",
    vehicle: "Honda Activa",
    cost: "₹380",
    status: "completed",
    rating: 5,
  },
  {
    id: 4,
    route: "Mountain Ride",
    destination: "Manali",
    date: "Mar 15, 2026",
    vehicle: "Royal Enfield",
    cost: "₹920",
    status: "cancelled",
    rating: 0,
  },
];

const profileStats = [
  { icon: Route, label: "Total Trips", value: "23" },
  { icon: TrendingUp, label: "Money Saved", value: "₹4,200" },
  { icon: Star, label: "Avg Rating Given", value: "4.7" },
  { icon: Heart, label: "Saved Places", value: "12" },
];

const menuItems = [
  { icon: Wallet, label: "Wallet & Payments", desc: "Balance: ₹1,500", href: "#" },
  { icon: Bell, label: "Notifications", desc: "3 unread", href: "#" },
  { icon: Heart, label: "Saved Destinations", desc: "12 saved", href: "/explore" },
  { icon: Shield, label: "Privacy & Security", desc: "2FA enabled", href: "#" },
  { icon: Settings, label: "App Settings", desc: "Language, theme", href: "#" },
];

export default function ProfilePage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="page-container">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Left - Profile Card & Menu */}
          <div className="space-y-6">
            {/* Profile Card */}
            <motion.div
              className="card text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="relative inline-block mb-4">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-cyan-400 to-violet-500 flex items-center justify-center text-white text-3xl font-bold mx-auto">
                  SB
                </div>
                <button className="absolute bottom-0 right-0 w-8 h-8 rounded-full bg-cyan-400 flex items-center justify-center text-white shadow-lg shadow-cyan-400/30 hover:scale-110 transition-transform">
                  <Edit3 className="w-3.5 h-3.5" />
                </button>
                <div className="absolute -top-1 -right-1">
                  <span className="badge badge-success text-[10px]">
                    <Award className="w-3 h-3" /> Pro
                  </span>
                </div>
              </div>
              <h2 className="text-xl font-bold text-white font-[var(--font-outfit)]">
                Sumit Bose
              </h2>
              <p className="text-sm text-slate-400 mb-4">
                Explorer since March 2026
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center justify-center gap-2 text-slate-400">
                  <Mail className="w-3.5 h-3.5" /> sumit@example.com
                </div>
                <div className="flex items-center justify-center gap-2 text-slate-400">
                  <Phone className="w-3.5 h-3.5" /> +91 98765 43210
                </div>
                <div className="flex items-center justify-center gap-2 text-slate-400">
                  <MapPin className="w-3.5 h-3.5" /> Kolkata, India
                </div>
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-2 gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              {profileStats.map((stat) => (
                <div key={stat.label} className="card !p-4 text-center">
                  <stat.icon className="w-5 h-5 text-cyan-400 mx-auto mb-1.5" />
                  <div className="text-lg font-bold text-white font-[var(--font-outfit)]">
                    {stat.value}
                  </div>
                  <div className="text-[10px] text-slate-500">{stat.label}</div>
                </div>
              ))}
            </motion.div>

            {/* Menu */}
            <motion.div
              className="card !p-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {menuItems.map((item, i) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/5 transition-all group"
                >
                  <div className="w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center text-slate-400 group-hover:text-cyan-400 transition-colors">
                    <item.icon className="w-4 h-4" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium text-white">
                      {item.label}
                    </div>
                    <div className="text-xs text-slate-500">{item.desc}</div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-600 group-hover:text-slate-400 transition-colors" />
                </Link>
              ))}
              <button className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-red-500/5 transition-all group w-full text-left mt-1 border-t border-white/5">
                <div className="w-9 h-9 rounded-xl bg-red-500/10 flex items-center justify-center text-red-400">
                  <LogOut className="w-4 h-4" />
                </div>
                <span className="text-sm font-medium text-red-400">
                  Sign Out
                </span>
              </button>
            </motion.div>
          </div>

          {/* Right - Travel History */}
          <div className="lg:col-span-2 space-y-6">
            <motion.div
              className="flex items-center justify-between"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <History className="w-5 h-5 text-cyan-400" />
                Travel History
              </h2>
              <span className="text-sm text-slate-500">
                {tripHistory.length} trips
              </span>
            </motion.div>

            {tripHistory.map((trip, i) => (
              <motion.div
                key={trip.id}
                className="card group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 + i * 0.05 }}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-cyan-400/20 to-violet-400/20 flex items-center justify-center">
                      <Route className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">
                        {trip.route}
                      </h3>
                      <p className="text-xs text-slate-400 flex items-center gap-1">
                        <MapPin className="w-3 h-3" /> {trip.destination}
                      </p>
                    </div>
                  </div>
                  <span
                    className={`badge ${
                      trip.status === "completed"
                        ? "badge-success"
                        : "bg-red-400/15 text-red-400 border border-red-400/20"
                    }`}
                  >
                    {trip.status === "completed" ? "Completed" : "Cancelled"}
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-3 border-t border-b border-white/5">
                  <div>
                    <div className="text-[10px] text-slate-500 uppercase tracking-wider">
                      Date
                    </div>
                    <div className="text-sm text-white flex items-center gap-1 mt-0.5">
                      <Calendar className="w-3 h-3 text-slate-500" />
                      {trip.date}
                    </div>
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-500 uppercase tracking-wider">
                      Vehicle
                    </div>
                    <div className="text-sm text-white flex items-center gap-1 mt-0.5">
                      <Car className="w-3 h-3 text-slate-500" />
                      {trip.vehicle}
                    </div>
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-500 uppercase tracking-wider">
                      Cost
                    </div>
                    <div className="text-sm text-white font-semibold mt-0.5">
                      {trip.cost}
                    </div>
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-500 uppercase tracking-wider">
                      Rating
                    </div>
                    <div className="flex items-center gap-0.5 mt-0.5">
                      {trip.rating > 0 ? (
                        [...Array(trip.rating)].map((_, j) => (
                          <Star
                            key={j}
                            className="w-3 h-3 text-amber-400 fill-amber-400"
                          />
                        ))
                      ) : (
                        <span className="text-xs text-slate-500">—</span>
                      )}
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between mt-3">
                  <button className="text-xs text-slate-400 hover:text-cyan-400 transition-colors">
                    View Details
                  </button>
                  {trip.status === "completed" && (
                    <Link
                      href="/plan"
                      className="text-xs text-cyan-400 hover:text-cyan-300 font-medium transition-colors flex items-center gap-1"
                    >
                      Book Again <ChevronRight className="w-3 h-3" />
                    </Link>
                  )}
                </div>
              </motion.div>
            ))}

            {/* Travel Summary Card */}
            <motion.div
              className="rounded-2xl glass p-6 md:p-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">
                    Your Travel Impact
                  </h3>
                  <p className="text-xs text-slate-400">
                    Since joining TourEase
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold gradient-text font-[var(--font-outfit)]">
                    ₹4,200
                  </div>
                  <div className="text-xs text-slate-500 mt-1">
                    Saved on transport
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-bold gradient-text font-[var(--font-outfit)]">
                    14h
                  </div>
                  <div className="text-xs text-slate-500 mt-1">
                    Time saved planning
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-bold gradient-text font-[var(--font-outfit)]">
                    320 km
                  </div>
                  <div className="text-xs text-slate-500 mt-1">
                    Routes optimized
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
