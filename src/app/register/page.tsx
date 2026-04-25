"use client";
import Link from "next/link";
import { useState } from "react";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  Compass,
  Globe,
  User,
  Phone,
} from "lucide-react";

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center relative pt-20 pb-12 px-4">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-violet-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 left-1/4 w-[350px] h-[350px] bg-cyan-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2 mb-4">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-violet-500 flex items-center justify-center">
              <Compass className="w-5 h-5 text-white" />
            </div>
            <span className="text-2xl font-bold font-[var(--font-outfit)]">
              <span className="text-white">Tour</span>
              <span className="gradient-text">Ease</span>
            </span>
          </Link>
          <h1 className="text-2xl font-bold text-white">Create your account</h1>
          <p className="text-slate-400 text-sm mt-1">
            Start your smart travel journey today
          </p>
        </div>

        <div className="card !p-8">
          <div className="grid grid-cols-2 gap-3 mb-6">
            <button className="flex items-center justify-center gap-2 py-2.5 rounded-xl border border-white/10 bg-white/5 text-sm text-slate-300 hover:bg-white/10 hover:border-white/20 transition-all">
              <Globe className="w-4 h-4" />
              Google
            </button>
            <button className="flex items-center justify-center gap-2 py-2.5 rounded-xl border border-white/10 bg-white/5 text-sm text-slate-300 hover:bg-white/10 hover:border-white/20 transition-all">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 21.99 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.1 21.99C7.79 22.03 6.8 20.68 5.96 19.47C4.25 16.99 2.97 12.5 4.7 9.56C5.55 8.09 7.13 7.17 8.82 7.15C10.1 7.13 11.32 8.02 12.11 8.02C12.89 8.02 14.37 6.94 15.92 7.11C16.57 7.14 18.39 7.38 19.56 9.07C19.47 9.13 17.29 10.39 17.31 13.03C17.34 16.19 20.05 17.26 20.08 17.27C20.05 17.34 19.62 18.86 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z" />
              </svg>
              Apple
            </button>
          </div>

          <div className="flex items-center gap-3 mb-6">
            <div className="flex-1 h-px bg-white/10" />
            <span className="text-xs text-slate-500 uppercase tracking-wider">
              or register with email
            </span>
            <div className="flex-1 h-px bg-white/10" />
          </div>

          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-sm text-slate-300 mb-1.5 block">
                  First Name
                </label>
                <div className="relative">
                  <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                  <input
                    type="text"
                    className="input !pl-10"
                    placeholder="John"
                  />
                </div>
              </div>
              <div>
                <label className="text-sm text-slate-300 mb-1.5 block">
                  Last Name
                </label>
                <input
                  type="text"
                  className="input"
                  placeholder="Doe"
                />
              </div>
            </div>

            <div>
              <label className="text-sm text-slate-300 mb-1.5 block">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                <input
                  type="email"
                  className="input !pl-10"
                  placeholder="you@example.com"
                />
              </div>
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

            <div>
              <label className="text-sm text-slate-300 mb-1.5 block">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                <input
                  type={showPassword ? "text" : "password"}
                  className="input !pl-10 !pr-10"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300 transition-colors"
                >
                  {showPassword ? (
                    <EyeOff className="w-4 h-4" />
                  ) : (
                    <Eye className="w-4 h-4" />
                  )}
                </button>
              </div>
              {/* Password strength */}
              <div className="flex gap-1.5 mt-2">
                <div className="h-1 flex-1 rounded-full bg-emerald-400" />
                <div className="h-1 flex-1 rounded-full bg-emerald-400" />
                <div className="h-1 flex-1 rounded-full bg-white/10" />
                <div className="h-1 flex-1 rounded-full bg-white/10" />
              </div>
              <p className="text-xs text-slate-500 mt-1">
                Minimum 8 characters with numbers and symbols
              </p>
            </div>

            <div className="flex items-start gap-2">
              <input
                type="checkbox"
                id="terms"
                className="w-4 h-4 mt-0.5 rounded border-white/20 bg-white/5 text-cyan-400 focus:ring-cyan-400/30"
              />
              <label htmlFor="terms" className="text-sm text-slate-400">
                I agree to the{" "}
                <Link href="#" className="text-cyan-400 hover:text-cyan-300">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link href="#" className="text-cyan-400 hover:text-cyan-300">
                  Privacy Policy
                </Link>
              </label>
            </div>

            <button type="submit" className="btn-primary w-full !py-3">
              Create Account
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          <p className="text-center text-sm text-slate-400 mt-6">
            Already have an account?{" "}
            <Link
              href="/login"
              className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
