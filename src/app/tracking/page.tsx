"use client";
import {
  Navigation,
  MapPin,
  Clock,
  Phone,
  Shield,
  Share2,
  AlertTriangle,
  Car,
  User,
  Star,
  MessageSquare,
  Route,
  CheckCircle2,
  Circle,
} from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const stops = [
  { name: "Hotel Meridien", time: "9:00 AM", status: "completed" },
  { name: "Calangute Beach", time: "9:35 AM", status: "completed" },
  { name: "Fort Aguada", time: "10:45 AM", status: "current" },
  { name: "Sinquerim Beach", time: "11:30 AM", status: "upcoming" },
  { name: "Dudhsagar Falls", time: "1:00 PM", status: "upcoming" },
];

export default function TrackingPage() {
  const [progress, setProgress] = useState(0);
  const [eta, setEta] = useState(12);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) return 0;
        return p + 0.3;
      });
      setEta((e) => (e > 1 ? e - 0.05 : 12));
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="page-container">
        <div className="text-center mb-10">
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-400/10 border border-emerald-400/20 text-emerald-400 text-sm font-medium mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Ride in Progress
          </motion.div>
          <motion.h1
            className="section-heading !text-3xl md:!text-4xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Live <span className="gradient-text">Tracking</span>
          </motion.h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Map */}
          <motion.div
            className="lg:col-span-2 card !p-0 h-[450px] relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-violet-500/5">
              {/* Simulated Road */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 450">
                <path
                  d="M 80,350 Q 200,300 300,250 T 500,180 T 720,100"
                  fill="none"
                  stroke="rgba(255,255,255,0.05)"
                  strokeWidth="40"
                  strokeLinecap="round"
                />
                <path
                  d="M 80,350 Q 200,300 300,250 T 500,180 T 720,100"
                  fill="none"
                  stroke="rgba(6,182,212,0.3)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeDasharray="8 6"
                />
                {/* Completed path */}
                <path
                  d="M 80,350 Q 200,300 300,250 T 500,180 T 720,100"
                  fill="none"
                  stroke="url(#trackGradient)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeDasharray="1000"
                  strokeDashoffset={1000 - progress * 10}
                />
                <defs>
                  <linearGradient id="trackGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#06b6d4" />
                    <stop offset="100%" stopColor="#8b5cf6" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Stop markers */}
              {[
                { x: "10%", y: "77%", done: true },
                { x: "30%", y: "60%", done: true },
                { x: "50%", y: "45%", done: false, current: true },
                { x: "68%", y: "35%", done: false },
                { x: "87%", y: "20%", done: false },
              ].map((dot, i) => (
                <div
                  key={i}
                  className="absolute"
                  style={{ left: dot.x, top: dot.y, transform: "translate(-50%, -50%)" }}
                >
                  {dot.current ? (
                    <>
                      <div className="w-5 h-5 rounded-full bg-cyan-400 border-2 border-white shadow-lg shadow-cyan-400/40 relative z-10" />
                      <div className="absolute inset-0 w-5 h-5 rounded-full bg-cyan-400 animate-ping opacity-30" />
                    </>
                  ) : dot.done ? (
                    <div className="w-3.5 h-3.5 rounded-full bg-emerald-400 border-2 border-emerald-900" />
                  ) : (
                    <div className="w-3.5 h-3.5 rounded-full bg-white/20 border-2 border-white/10" />
                  )}
                </div>
              ))}

              {/* Car icon at current position */}
              <motion.div
                className="absolute z-20"
                style={{ left: `${Math.min(50 + progress * 0.3, 87)}%`, top: `${Math.max(45 - progress * 0.2, 20)}%` }}
                animate={{ x: [0, 2, -2, 0], y: [0, -1, 1, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-violet-500 flex items-center justify-center shadow-lg shadow-cyan-400/30 -translate-x-1/2 -translate-y-1/2">
                  <Car className="w-4 h-4 text-white" />
                </div>
              </motion.div>
            </div>

            {/* ETA Overlay */}
            <div className="absolute top-4 right-4 glass rounded-2xl p-4 min-w-[140px]">
              <div className="text-xs text-slate-400 mb-1">Arriving in</div>
              <div className="text-2xl font-bold text-white font-[var(--font-outfit)]">
                {Math.round(eta)} min
              </div>
              <div className="text-xs text-cyan-400">{(eta * 0.8).toFixed(1)} km away</div>
            </div>
          </motion.div>

          {/* Right Panel */}
          <div className="space-y-6">
            {/* Driver Card */}
            <motion.div
              className="card"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 to-violet-500 flex items-center justify-center text-white font-bold">
                  RK
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-white">Rajesh Kumar</div>
                  <div className="flex items-center gap-1 text-xs text-slate-400">
                    <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                    4.9 · 1,240 trips
                  </div>
                </div>
                <span className="badge badge-success">Verified</span>
              </div>

              <div className="flex items-center justify-between py-2 border-t border-white/5 text-sm">
                <span className="text-slate-400">Vehicle</span>
                <span className="text-white">Swift Dzire · GJ-01-AB-1234</span>
              </div>

              <div className="grid grid-cols-2 gap-2 mt-4">
                <button className="btn-secondary !py-2.5 text-sm gap-1.5">
                  <Phone className="w-4 h-4" /> Call
                </button>
                <button className="btn-secondary !py-2.5 text-sm gap-1.5">
                  <MessageSquare className="w-4 h-4" /> Chat
                </button>
              </div>
            </motion.div>

            {/* Trip Progress */}
            <motion.div
              className="card"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
            >
              <h3 className="text-sm font-semibold text-white mb-4 flex items-center gap-2">
                <Route className="w-4 h-4 text-cyan-400" />
                Trip Progress
              </h3>
              <div className="space-y-0">
                {stops.map((stop, i) => (
                  <div key={stop.name} className="flex gap-3">
                    <div className="flex flex-col items-center">
                      {stop.status === "completed" ? (
                        <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                      ) : stop.status === "current" ? (
                        <div className="relative">
                          <Circle className="w-5 h-5 text-cyan-400 shrink-0" />
                          <div className="absolute inset-0 w-5 h-5 rounded-full border-2 border-cyan-400 animate-ping opacity-30" />
                        </div>
                      ) : (
                        <Circle className="w-5 h-5 text-slate-600 shrink-0" />
                      )}
                      {i < stops.length - 1 && (
                        <div
                          className={`w-px h-8 ${
                            stop.status === "completed"
                              ? "bg-emerald-400/30"
                              : "bg-white/10"
                          }`}
                        />
                      )}
                    </div>
                    <div className="pb-6">
                      <div
                        className={`text-sm font-medium ${
                          stop.status === "current"
                            ? "text-cyan-400"
                            : stop.status === "completed"
                            ? "text-slate-400"
                            : "text-slate-500"
                        }`}
                      >
                        {stop.name}
                      </div>
                      <div className="text-xs text-slate-600">{stop.time}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Safety */}
            <motion.div
              className="card !py-4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="grid grid-cols-2 gap-2">
                <button className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/5 text-sm text-slate-300 hover:bg-white/10 transition-all">
                  <Share2 className="w-4 h-4 text-cyan-400" /> Share Trip
                </button>
                <button className="flex items-center gap-2 px-3 py-2 rounded-xl bg-red-500/10 text-sm text-red-400 hover:bg-red-500/20 transition-all">
                  <AlertTriangle className="w-4 h-4" /> SOS
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
