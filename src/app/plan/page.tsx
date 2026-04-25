"use client";
import { useState, Suspense, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import {
  MapPin,
  Calendar,
  Clock,
  Route,
  ArrowRight,
  Plus,
  X,
  Navigation,
  Sparkles,
  IndianRupee,
  Car,
  Bike,
  Bus,
  Zap,
  CheckCircle2,
  Map,
  Shuffle,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const attractionsMap: Record<string, string[]> = {
  Goa: [
    "Calangute Beach",
    "Fort Aguada",
    "Basilica of Bom Jesus",
    "Dudhsagar Falls",
    "Anjuna Flea Market",
    "Chapora Fort",
    "Palolem Beach",
    "Se Cathedral",
  ],
  Jaipur: ["Hawa Mahal", "Amer Fort", "City Palace", "Jantar Mantar", "Jal Mahal", "Nahargarh Fort", "Albert Hall Museum", "Birla Mandir"],
  Manali: ["Rohtang Pass", "Solang Valley", "Hadimba Temple", "Vashisht Baths", "Old Manali", "Jogini Waterfall", "Manu Temple", "Beas River"],
  Varanasi: ["Dashashwamedh Ghat", "Kashi Vishwanath Temple", "Sarnath", "Manikarnika Ghat", "Assi Ghat", "Ramnagar Fort", "Banaras Hindu University", "Tulsi Manas Temple"],
  Kerala: ["Munnar Tea Gardens", "Alleppey Backwaters", "Wayanad", "Kochi", "Thekkady", "Kovalam Beach", "Kumarakom", "Varkala Beach"],
  Udaipur: ["City Palace", "Lake Pichola", "Jag Mandir", "Fateh Sagar Lake", "Saheliyon Ki Bari", "Sajjangarh Palace", "Vintage Car Museum", "Ambrai Ghat"],
  Rishikesh: ["Laxman Jhula", "Ram Jhula", "Triveni Ghat", "Parmarth Niketan", "Neelkanth Mahadev Temple", "Beatles Ashram", "Shivpuri", "Neer Garh Waterfall"],
  Darjeeling: ["Tiger Hill", "Batasia Loop", "Darjeeling Himalayan Railway", "Peace Pagoda", "Padmaja Naidu Himalayan Zoological Park", "Happy Valley Tea Estate", "Ghoom Monastery", "Observatory Hill"],
};

const getSuggestedRoutes = (destination: string, stopsCount: number) => {
  const stops = stopsCount > 0 ? stopsCount : 4;
  return [
    {
      name: `${destination} Explorer`,
      stops: stops,
      duration: `${Math.max(2, Math.floor(stops * 1.5))}h ${Math.floor((stops * 1.5 % 1) * 60)}m`,
      distance: `${Math.max(10, stops * 8)} km`,
      cost: `₹${Math.max(400, stops * 150)}`,
      transport: "Car",
      efficiency: 92,
    },
    {
      name: `Heritage Trail`,
      stops: Math.max(1, stops - 1),
      duration: `${Math.max(1, Math.floor(stops * 1.2))}h 15m`,
      distance: `${Math.max(8, stops * 6)} km`,
      cost: `₹${Math.max(250, stops * 100)}`,
      transport: "Bike",
      efficiency: 88,
    },
    {
      name: `Budget Adventure`,
      stops: stops + 1,
      duration: `${Math.max(3, stops * 2)}h`,
      distance: `${Math.max(15, stops * 10)} km`,
      cost: `₹${Math.max(100, stops * 50)}`,
      transport: "Bus",
      efficiency: 78,
    },
  ];
};

const transportIcons: Record<string, React.ElementType> = {
  Car: Car,
  Bike: Bike,
  Bus: Bus,
};

function PlanContent() {
  const searchParams = useSearchParams();
  const initialDestination = searchParams.get("destination") || "Goa";
  const [destination, setDestination] = useState(initialDestination);
  const currentAttractions = attractionsMap[destination] || attractionsMap["Goa"];

  const [selectedAttractions, setSelectedAttractions] = useState<string[]>(
    currentAttractions.slice(0, 3)
  );

  useEffect(() => {
    setSelectedAttractions(currentAttractions.slice(0, 3));
  }, [destination]);
  const [showResults, setShowResults] = useState(false);

  const dynamicRoutes = getSuggestedRoutes(destination, selectedAttractions.length);

  const toggleAttraction = (name: string) => {
    setSelectedAttractions((prev) =>
      prev.includes(name) ? prev.filter((a) => a !== name) : [...prev, name]
    );
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="page-container">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.span
            className="badge badge-violet mb-4 inline-flex"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Route className="w-3.5 h-3.5" /> AI-Powered Planning
          </motion.span>
          <motion.h1
            className="section-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Plan Your{" "}
            <span className="gradient-text">Perfect Route</span>
          </motion.h1>
          <motion.p
            className="mt-3 text-slate-400 max-w-lg mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Enter your destination and attractions, and our AI will optimize
            the best routes for you.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Left Panel - Input */}
          <div className="lg:col-span-2 space-y-6">
            <motion.div
              className="card"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-cyan-400" />
                Trip Details
              </h3>

              <div className="space-y-4">
                <div>
                  <label className="text-sm text-slate-300 mb-1.5 block">
                    Destination City
                  </label>
                  <div className="relative">
                    <Navigation className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                    <input
                      type="text"
                      className="input !pl-10"
                      value={destination}
                      onChange={(e) => setDestination(e.target.value)}
                      placeholder="Enter city name"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-sm text-slate-300 mb-1.5 block">
                      Start Date
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                      <input
                        type="date"
                        className="input !pl-10"
                        defaultValue="2026-05-01"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm text-slate-300 mb-1.5 block">
                      End Date
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                      <input
                        type="date"
                        className="input !pl-10"
                        defaultValue="2026-05-03"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Attractions */}
            <motion.div
              className="card"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
            >
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-violet-400" />
                Select Attractions
              </h3>
              <p className="text-sm text-slate-400 mb-4">
                Pick the places you&apos;d like to visit. We&apos;ll optimize
                the best route.
              </p>
              <div className="flex flex-wrap gap-2">
                {currentAttractions.map((attr) => {
                  const selected = selectedAttractions.includes(attr);
                  return (
                    <button
                      key={attr}
                      onClick={() => toggleAttraction(attr)}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm transition-all ${
                        selected
                          ? "bg-cyan-400/15 text-cyan-400 border border-cyan-400/30"
                          : "bg-white/5 text-slate-400 border border-white/5 hover:bg-white/10"
                      }`}
                    >
                      {selected ? (
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      ) : (
                        <Plus className="w-3.5 h-3.5" />
                      )}
                      {attr}
                    </button>
                  );
                })}
              </div>
              <p className="text-xs text-slate-500 mt-3">
                {selectedAttractions.length} attractions selected
              </p>
            </motion.div>

            <motion.button
              className="btn-primary w-full !py-3.5 text-base"
              onClick={() => setShowResults(true)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Zap className="w-5 h-5" />
              Optimize Route
            </motion.button>
          </div>

          {/* Right Panel - Results / Map */}
          <div className="lg:col-span-3 space-y-6">
            {/* Map Placeholder */}
            <motion.div
              className="card !p-0 overflow-hidden h-[300px] relative"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-violet-500/5 flex items-center justify-center">
                <div className="text-center">
                  <Map className="w-16 h-16 text-white/10 mx-auto mb-3" />
                  <p className="text-slate-500 text-sm">
                    Interactive map will appear here
                  </p>
                  <p className="text-slate-600 text-xs mt-1">
                    Google Maps API integration
                  </p>
                </div>
              </div>
              {/* Simulated dots */}
              <div className="absolute top-[30%] left-[25%] w-3 h-3 rounded-full bg-cyan-400 animate-pulse-slow shadow-lg shadow-cyan-400/30" />
              <div className="absolute top-[50%] left-[45%] w-3 h-3 rounded-full bg-violet-400 animate-pulse-slow shadow-lg shadow-violet-400/30" style={{ animationDelay: "1s" }} />
              <div className="absolute top-[35%] left-[65%] w-3 h-3 rounded-full bg-pink-400 animate-pulse-slow shadow-lg shadow-pink-400/30" style={{ animationDelay: "2s" }} />
              <div className="absolute top-[60%] left-[30%] w-3 h-3 rounded-full bg-emerald-400 animate-pulse-slow shadow-lg shadow-emerald-400/30" style={{ animationDelay: "0.5s" }} />
            </motion.div>

            {/* Route Results */}
            <AnimatePresence>
              {showResults && (
                <motion.div
                  className="space-y-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                      <Shuffle className="w-5 h-5 text-cyan-400" />
                      Optimized Routes
                    </h3>
                    <span className="text-xs text-slate-500">
                      {dynamicRoutes.length} routes found
                    </span>
                  </div>

                  {dynamicRoutes.map((route, i) => {
                    const TransportIcon = transportIcons[route.transport] || Car;
                    return (
                      <motion.div
                        key={route.name}
                        className="card group cursor-pointer"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                      >
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400/20 to-violet-400/20 flex items-center justify-center">
                              <TransportIcon className="w-5 h-5 text-cyan-400" />
                            </div>
                            <div>
                              <h4 className="font-semibold text-white">
                                {route.name}
                              </h4>
                              <p className="text-xs text-slate-400">
                                {route.stops} stops · {route.transport}
                              </p>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-lg font-bold text-cyan-400">
                              {route.cost}
                            </div>
                            <div className="text-xs text-slate-500">
                              estimated
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center gap-4 text-sm text-slate-400">
                          <span className="flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5" /> {route.duration}
                          </span>
                          <span className="flex items-center gap-1">
                            <Route className="w-3.5 h-3.5" /> {route.distance}
                          </span>
                          <span className="flex items-center gap-1 ml-auto">
                            <Zap className="w-3.5 h-3.5 text-emerald-400" />
                            <span className="text-emerald-400 font-medium">
                              {route.efficiency}%
                            </span>{" "}
                            efficient
                          </span>
                        </div>

                        {/* Efficiency Bar */}
                        <div className="mt-3 h-1.5 rounded-full bg-white/5 overflow-hidden">
                          <motion.div
                            className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400"
                            initial={{ width: 0 }}
                            animate={{
                              width: `${route.efficiency}%`,
                            }}
                            transition={{ delay: 0.3 + i * 0.1, duration: 0.8 }}
                          />
                        </div>

                        <Link
                          href={`/vehicles?destination=${encodeURIComponent(destination)}&route=${encodeURIComponent(route.name)}`}
                          className="mt-4 btn-primary w-full !py-2.5 text-sm"
                        >
                          Select Route
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </motion.div>
                    );
                  })}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PlanPage() {
  return (
    <Suspense fallback={<div className="min-h-screen pt-24 pb-16 flex items-center justify-center text-white">Loading...</div>}>
      <PlanContent />
    </Suspense>
  );
}
