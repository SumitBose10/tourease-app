"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  MapPin,
  Menu,
  X,
  Compass,
  User,
  LogIn,
} from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/explore", label: "Explore" },
  { href: "/plan", label: "Plan Trip" },
  { href: "/vehicles", label: "Vehicles" },
  { href: "/packages", label: "Packages" },
  { href: "/tracking", label: "Tracking" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-18">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-400 to-violet-500 flex items-center justify-center transition-transform group-hover:scale-110 group-hover:rotate-3">
                <Compass className="w-5 h-5 text-white" />
              </div>
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-cyan-400 to-violet-500 blur-lg opacity-40 group-hover:opacity-60 transition-opacity" />
            </div>
            <span className="text-xl font-bold font-[var(--font-outfit)]">
              <span className="text-white">Tour</span>
              <span className="gradient-text">Ease</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3.5 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                  pathname === link.href
                    ? "text-cyan-400 bg-cyan-400/10"
                    : "text-slate-300 hover:text-white hover:bg-white/5"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/login"
              className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-slate-300 hover:text-white transition-colors"
            >
              <LogIn className="w-4 h-4" />
              Login
            </Link>
            <Link href="/register" className="btn-primary !py-2 !px-5 text-sm">
              <User className="w-4 h-4" />
              Sign Up
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-xl text-slate-300 hover:text-white hover:bg-white/5 transition-all"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="glass border-t border-white/5 px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                pathname === link.href
                  ? "text-cyan-400 bg-cyan-400/10"
                  : "text-slate-300 hover:text-white hover:bg-white/5"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-3 border-t border-white/5 flex flex-col gap-2">
            <Link
              href="/login"
              onClick={() => setIsOpen(false)}
              className="btn-secondary text-sm text-center"
            >
              Login
            </Link>
            <Link
              href="/register"
              onClick={() => setIsOpen(false)}
              className="btn-primary text-sm text-center"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
