"use client";
import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import {
  Car,
  Bike,
  Bus,
  Star,
  Users,
  Fuel,
  Shield,
  Clock,
  IndianRupee,
  ArrowRight,
  SlidersHorizontal,
  Search,
  Zap,
  CheckCircle2,
  X,
} from "lucide-react";
import { motion } from "framer-motion";

type VehicleType = "all" | "car" | "bike" | "scooter" | "shuttle" | "rideshare";

const vehicles = [
  {
    id: 1,
    name: "Swift Dzire",
    type: "car" as VehicleType,
    category: "Sedan",
    seats: 4,
    rating: 4.8,
    trips: 1240,
    pricePerKm: 12,
    baseFare: 150,
    ac: true,
    driver: "Rajesh K.",
    driverRating: 4.9,
    eta: "8 min",
    features: ["AC", "GPS", "Music"],
    gradient: "from-cyan-400/20 to-blue-500/20",
    icon: Car,
  },
  {
    id: 2,
    name: "Royal Enfield",
    type: "bike" as VehicleType,
    category: "Motorcycle",
    seats: 1,
    rating: 4.6,
    trips: 860,
    pricePerKm: 5,
    baseFare: 50,
    ac: false,
    driver: "Vikram S.",
    driverRating: 4.7,
    eta: "5 min",
    features: ["Helmet", "GPS"],
    gradient: "from-amber-400/20 to-orange-500/20",
    icon: Bike,
  },
  {
    id: 3,
    name: "Ertiga MPV",
    type: "car" as VehicleType,
    category: "SUV",
    seats: 7,
    rating: 4.9,
    trips: 2100,
    pricePerKm: 16,
    baseFare: 200,
    ac: true,
    driver: "Amit P.",
    driverRating: 4.8,
    eta: "12 min",
    features: ["AC", "GPS", "Music", "Water"],
    gradient: "from-violet-400/20 to-purple-500/20",
    icon: Car,
  },
  {
    id: 4,
    name: "Local Bus",
    type: "shuttle" as VehicleType,
    category: "Public Transport",
    seats: 40,
    rating: 4.2,
    trips: 5600,
    pricePerKm: 2,
    baseFare: 20,
    ac: false,
    driver: "GSRTC",
    driverRating: 4.0,
    eta: "20 min",
    features: ["Fixed Route"],
    gradient: "from-emerald-400/20 to-green-500/20",
    icon: Bus,
  },
  {
    id: 5,
    name: "Honda Activa",
    type: "scooter" as VehicleType,
    category: "Scooter",
    seats: 1,
    rating: 4.5,
    trips: 3200,
    pricePerKm: 4,
    baseFare: 30,
    ac: false,
    driver: "Self Drive",
    driverRating: 0,
    eta: "3 min",
    features: ["Helmet", "Storage"],
    gradient: "from-pink-400/20 to-rose-500/20",
    icon: Bike,
  },
  {
    id: 6,
    name: "Ride Share",
    type: "rideshare" as VehicleType,
    category: "Shared Ride",
    seats: 3,
    rating: 4.4,
    trips: 1800,
    pricePerKm: 7,
    baseFare: 80,
    ac: true,
    driver: "Multiple",
    driverRating: 4.5,
    eta: "15 min",
    features: ["AC", "Shared"],
    gradient: "from-sky-400/20 to-cyan-500/20",
    icon: Users,
  },
];

const filterTypes: { label: string; value: VehicleType }[] = [
  { label: "All", value: "all" },
  { label: "Cars", value: "car" },
  { label: "Bikes", value: "bike" },
  { label: "Scooters", value: "scooter" },
  { label: "Shuttles", value: "shuttle" },
  { label: "Ride Share", value: "rideshare" },
];

function VehiclesContent() {
  const searchParams = useSearchParams();
  const destination = searchParams.get("destination") || "Goa";
  const routeName = searchParams.get("route") || `${destination} Explorer`;
  const [activeFilter, setActiveFilter] = useState<VehicleType>("all");
  const [sortBy, setSortBy] = useState<"price" | "rating" | "eta">("price");

  const filtered = vehicles
    .filter((v) => activeFilter === "all" || v.type === activeFilter)
    .sort((a, b) => {
      if (sortBy === "price") return a.pricePerKm - b.pricePerKm;
      if (sortBy === "rating") return b.rating - a.rating;
      return parseInt(a.eta) - parseInt(b.eta);
    });

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="page-container">
        <div className="text-center mb-12">
          <motion.span
            className="badge badge-violet mb-4 inline-flex"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Car className="w-3.5 h-3.5" /> Vehicle Marketplace
          </motion.span>
          <motion.h1
            className="section-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Compare &{" "}
            <span className="gradient-text">Book Transport</span>
          </motion.h1>
          <motion.p
            className="mt-3 text-slate-400 max-w-lg mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Find the perfect ride at the best price. Compare vehicles, check
            ratings, and book instantly.
          </motion.p>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          <div className="flex flex-wrap gap-2">
            {filterTypes.map((f) => (
              <button
                key={f.value}
                onClick={() => setActiveFilter(f.value)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                  activeFilter === f.value
                    ? "bg-cyan-400/15 text-cyan-400 border border-cyan-400/20"
                    : "bg-white/5 text-slate-400 border border-white/5 hover:text-white hover:bg-white/10"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-500">Sort by:</span>
            {(["price", "rating", "eta"] as const).map((s) => (
              <button
                key={s}
                onClick={() => setSortBy(s)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all capitalize ${
                  sortBy === s
                    ? "bg-violet-400/15 text-violet-400"
                    : "text-slate-500 hover:text-slate-300"
                }`}
              >
                {s === "eta" ? "ETA" : s}
              </button>
            ))}
          </div>
        </div>

        {/* Vehicle Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((v, i) => {
            const VIcon = v.icon;
            return (
              <motion.div
                key={v.id}
                className="card group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${v.gradient} flex items-center justify-center`}
                    >
                      <VIcon className="w-6 h-6 text-white/70" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">{v.name}</h3>
                      <p className="text-xs text-slate-500">{v.category}</p>
                    </div>
                  </div>
                  <span className="badge badge-cyan">
                    <Clock className="w-3 h-3" />
                    {v.eta}
                  </span>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-2 mb-4">
                  <div className="bg-white/3 rounded-xl p-2.5 text-center">
                    <div className="text-xs text-slate-500">Per km</div>
                    <div className="text-sm font-semibold text-white">
                      ₹{v.pricePerKm}
                    </div>
                  </div>
                  <div className="bg-white/3 rounded-xl p-2.5 text-center">
                    <div className="text-xs text-slate-500">Rating</div>
                    <div className="text-sm font-semibold text-amber-400 flex items-center justify-center gap-0.5">
                      <Star className="w-3 h-3 fill-amber-400" />
                      {v.rating}
                    </div>
                  </div>
                  <div className="bg-white/3 rounded-xl p-2.5 text-center">
                    <div className="text-xs text-slate-500">Seats</div>
                    <div className="text-sm font-semibold text-white flex items-center justify-center gap-0.5">
                      <Users className="w-3 h-3" />
                      {v.seats}
                    </div>
                  </div>
                </div>

                {/* Features */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {v.features.map((f) => (
                    <span
                      key={f}
                      className="px-2 py-0.5 rounded-md bg-white/5 text-xs text-slate-400"
                    >
                      {f}
                    </span>
                  ))}
                </div>

                {/* Driver */}
                <div className="flex items-center justify-between mb-4 py-3 border-t border-white/5">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-gradient-to-br from-cyan-400/30 to-violet-400/30 flex items-center justify-center text-[10px] font-bold text-white">
                      {v.driver.charAt(0)}
                    </div>
                    <div>
                      <span className="text-xs text-slate-300">{v.driver}</span>
                      {v.driverRating > 0 && (
                        <div className="flex items-center gap-0.5">
                          <Star className="w-2.5 h-2.5 text-amber-400 fill-amber-400" />
                          <span className="text-[10px] text-slate-500">
                            {v.driverRating}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-white">
                      ₹{v.baseFare}
                    </div>
                    <div className="text-[10px] text-slate-500">base fare</div>
                  </div>
                </div>

                <Link
                  href={`/booking?destination=${encodeURIComponent(destination)}&route=${encodeURIComponent(routeName)}`}
                  className="btn-primary w-full !py-2.5 text-sm"
                >
                  Book Now
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default function VehiclesPage() {
  return (
    <Suspense fallback={<div className="min-h-screen pt-24 pb-16 flex items-center justify-center text-white">Loading...</div>}>
      <VehiclesContent />
    </Suspense>
  );
}
