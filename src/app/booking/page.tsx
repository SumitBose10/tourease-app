"use client";
import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import {
  CreditCard,
  MapPin,
  Car,
  Clock,
  Route,
  IndianRupee,
  Shield,
  CheckCircle2,
  ArrowRight,
  Wallet,
  Receipt,
  Tag,
  ChevronDown,
  User,
  Phone,
  Calendar,
} from "lucide-react";
import { motion } from "framer-motion";

function BookingContent() {
  const searchParams = useSearchParams();
  const destination = searchParams.get("destination") || "Goa";
  const routeName = searchParams.get("route") || `${destination} Explorer`;
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [promoApplied, setPromoApplied] = useState(false);
  const [step, setStep] = useState(1);

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="page-container">
        <div className="text-center mb-12">
          <motion.h1
            className="section-heading !text-3xl md:!text-4xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Complete Your{" "}
            <span className="gradient-text">Booking</span>
          </motion.h1>
          <motion.p
            className="text-slate-400 mt-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Review your trip details and confirm your ride.
          </motion.p>
        </div>

        {/* Progress Steps */}
        <div className="flex items-center justify-center gap-2 mb-12 max-w-md mx-auto">
          {["Details", "Payment", "Confirm"].map((s, i) => (
            <div key={s} className="flex items-center gap-2 flex-1">
              <div
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium w-full justify-center transition-all ${
                  step >= i + 1
                    ? "bg-cyan-400/15 text-cyan-400 border border-cyan-400/20"
                    : "bg-white/5 text-slate-500 border border-white/5"
                }`}
              >
                {step > i + 1 ? (
                  <CheckCircle2 className="w-4 h-4" />
                ) : (
                  <span className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center text-xs">
                    {i + 1}
                  </span>
                )}
                {s}
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Left - Form */}
          <div className="lg:col-span-2 space-y-6">
            {/* Trip Summary */}
            <motion.div
              className="card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <Route className="w-5 h-5 text-cyan-400" />
                Trip Summary
              </h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between py-2 border-b border-white/5">
                  <span className="text-sm text-slate-400 flex items-center gap-2">
                    <MapPin className="w-4 h-4" /> Route
                  </span>
                  <span className="text-sm text-white font-medium">
                    {routeName}
                  </span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-white/5">
                  <span className="text-sm text-slate-400 flex items-center gap-2">
                    <Car className="w-4 h-4" /> Vehicle
                  </span>
                  <span className="text-sm text-white font-medium">
                    Swift Dzire (Sedan)
                  </span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-white/5">
                  <span className="text-sm text-slate-400 flex items-center gap-2">
                    <Calendar className="w-4 h-4" /> Date
                  </span>
                  <span className="text-sm text-white font-medium">
                    May 1, 2026
                  </span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-white/5">
                  <span className="text-sm text-slate-400 flex items-center gap-2">
                    <Clock className="w-4 h-4" /> Duration
                  </span>
                  <span className="text-sm text-white font-medium">
                    6h 30m (42 km)
                  </span>
                </div>
                <div className="flex items-center justify-between py-2">
                  <span className="text-sm text-slate-400 flex items-center gap-2">
                    <User className="w-4 h-4" /> Driver
                  </span>
                  <span className="text-sm text-white font-medium">
                    Rajesh K. ★ 4.9
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              className="card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <User className="w-5 h-5 text-violet-400" />
                Contact Information
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-slate-300 mb-1.5 block">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="input"
                    placeholder="John Doe"
                    defaultValue="Sumit Bose"
                  />
                </div>
                <div>
                  <label className="text-sm text-slate-300 mb-1.5 block">
                    Phone Number
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                    <input
                      type="tel"
                      className="input !pl-10"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Payment */}
            <motion.div
              className="card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <CreditCard className="w-5 h-5 text-pink-400" />
                Payment Method
              </h3>
              <div className="grid grid-cols-3 gap-3 mb-6">
                {[
                  { id: "card", label: "Card", icon: CreditCard },
                  { id: "wallet", label: "Wallet", icon: Wallet },
                  { id: "upi", label: "UPI", icon: IndianRupee },
                ].map((m) => (
                  <button
                    key={m.id}
                    onClick={() => setPaymentMethod(m.id)}
                    className={`flex flex-col items-center gap-1.5 py-3 rounded-xl transition-all ${
                      paymentMethod === m.id
                        ? "bg-cyan-400/15 text-cyan-400 border border-cyan-400/20"
                        : "bg-white/5 text-slate-400 border border-white/5 hover:bg-white/10"
                    }`}
                  >
                    <m.icon className="w-5 h-5" />
                    <span className="text-xs font-medium">{m.label}</span>
                  </button>
                ))}
              </div>

              {paymentMethod === "card" && (
                <div className="space-y-4">
                  <div>
                    <label className="text-sm text-slate-300 mb-1.5 block">
                      Card Number
                    </label>
                    <input
                      type="text"
                      className="input"
                      placeholder="4242 4242 4242 4242"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-sm text-slate-300 mb-1.5 block">
                        Expiry
                      </label>
                      <input
                        type="text"
                        className="input"
                        placeholder="MM/YY"
                      />
                    </div>
                    <div>
                      <label className="text-sm text-slate-300 mb-1.5 block">
                        CVV
                      </label>
                      <input
                        type="text"
                        className="input"
                        placeholder="•••"
                      />
                    </div>
                  </div>
                </div>
              )}

              <div className="flex items-center gap-2 mt-4 text-xs text-slate-500">
                <Shield className="w-3.5 h-3.5 text-emerald-400" />
                Your payment is secured with 256-bit SSL encryption
              </div>
            </motion.div>
          </div>

          {/* Right - Price Breakdown */}
          <div className="space-y-6">
            <motion.div
              className="card sticky top-24"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <Receipt className="w-5 h-5 text-cyan-400" />
                Price Details
              </h3>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400">Base fare</span>
                  <span className="text-white">₹150</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400">Distance (42 km × ₹12)</span>
                  <span className="text-white">₹504</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400">Platform fee</span>
                  <span className="text-white">₹25</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400">GST (5%)</span>
                  <span className="text-white">₹34</span>
                </div>

                {promoApplied && (
                  <div className="flex justify-between text-sm">
                    <span className="text-emerald-400">Promo discount</span>
                    <span className="text-emerald-400">-₹100</span>
                  </div>
                )}

                <div className="border-t border-white/10 pt-3 flex justify-between">
                  <span className="font-semibold text-white">Total</span>
                  <span className="text-xl font-bold gradient-text">
                    ₹{promoApplied ? 613 : 713}
                  </span>
                </div>
              </div>

              {/* Promo Code */}
              {!promoApplied && (
                <div className="mb-6">
                  <div className="flex gap-2">
                    <div className="relative flex-1">
                      <Tag className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                      <input
                        type="text"
                        className="input !pl-9 text-sm"
                        placeholder="Promo code"
                        defaultValue="TOUREASE100"
                      />
                    </div>
                    <button
                      onClick={() => setPromoApplied(true)}
                      className="btn-secondary text-sm !px-4"
                    >
                      Apply
                    </button>
                  </div>
                </div>
              )}

              {promoApplied && (
                <div className="mb-6 p-3 rounded-xl bg-emerald-400/10 border border-emerald-400/20 flex items-center gap-2 text-sm text-emerald-400">
                  <CheckCircle2 className="w-4 h-4" />
                  TOUREASE100 applied — ₹100 off!
                </div>
              )}

              <button
                onClick={() => setStep(3)}
                className="btn-primary w-full !py-3 text-base"
              >
                <Shield className="w-4 h-4" />
                Pay ₹{promoApplied ? 613 : 713}
              </button>

              <div className="mt-4 space-y-2 text-xs text-slate-500">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  Free cancellation up to 1 hour before
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  Instant booking confirmation
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  24/7 customer support
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function BookingPage() {
  return (
    <Suspense fallback={<div className="min-h-screen pt-24 pb-16 flex items-center justify-center text-white">Loading...</div>}>
      <BookingContent />
    </Suspense>
  );
}
