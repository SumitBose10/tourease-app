import Link from "next/link";
import {
  Compass,
  ExternalLink,
  Globe,
  Heart,
  Mail,
  MapPin,
  Phone,
  ArrowUpRight,
} from "lucide-react";

const footerLinks = {
  Product: [
    { label: "Route Planning", href: "/plan" },
    { label: "Vehicle Booking", href: "/vehicles" },
    { label: "Travel Packages", href: "/packages" },
    { label: "Live Tracking", href: "/tracking" },
    { label: "Reviews", href: "/reviews" },
  ],
  Company: [
    { label: "About Us", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Press", href: "#" },
    { label: "Partners", href: "#" },
  ],
  Support: [
    { label: "Help Center", href: "#" },
    { label: "Safety", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "Contact Us", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#0a0a16]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-5">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-400 to-violet-500 flex items-center justify-center">
                <Compass className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold font-[var(--font-outfit)]">
                <span className="text-white">Tour</span>
                <span className="gradient-text">Ease</span>
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Smart tourism transportation platform. Plan optimized routes,
              compare transport options, and explore better with intelligent
              travel planning.
            </p>
            <div className="flex items-center gap-3">
              {[
                { Icon: Globe, href: "#" },
                { Icon: Heart, href: "#" },
                { Icon: ExternalLink, href: "#" },
                { Icon: Mail, href: "#" },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-9 h-9 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-400/30 hover:bg-cyan-400/5 transition-all duration-300"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-sm font-semibold text-white mb-4 tracking-wide">
                {title}
              </h3>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-400 hover:text-cyan-400 transition-colors duration-200 flex items-center gap-1 group"
                    >
                      {link.label}
                      <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-0.5 translate-x-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-14 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} TourEase. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-slate-500">
            <span className="flex items-center gap-1">
              <MapPin className="w-3 h-3" /> India
            </span>
            <span className="flex items-center gap-1">
              <Phone className="w-3 h-3" /> +91 98765 43210
            </span>
            <span className="flex items-center gap-1">
              <Mail className="w-3 h-3" /> hello@tourease.in
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
