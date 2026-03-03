import { Link } from "@tanstack/react-router";
import { Globe, Mail, MapPin, Phone } from "lucide-react";

const quickLinks = [
  { label: "Home", to: "/" as const, ocid: "footer.home.link" },
  { label: "About Us", to: "/about" as const, ocid: "footer.about.link" },
  { label: "Services", to: "/services" as const, ocid: "footer.services.link" },
  {
    label: "Industries",
    to: "/industries" as const,
    ocid: "footer.industries.link",
  },
  { label: "Contact", to: "/contact" as const, ocid: "footer.contact.link" },
];

const serviceLinks = [
  "Market Research",
  "Vendor Sourcing",
  "Quality Inspection",
  "Logistics Coordination",
  "Supply Chain Management",
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[oklch(0.14_0.06_260)] text-white">
      {/* Main footer content */}
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Company info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 rounded-lg bg-[oklch(0.52_0.22_255)] flex items-center justify-center">
                <Globe className="w-5 h-5 text-white" strokeWidth={2} />
              </div>
              <span className="font-display font-bold text-lg tracking-tight">
                VK{" "}
                <span className="text-[oklch(0.70_0.15_255)]">
                  GLOBAL PARTNERS
                </span>
              </span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-6 max-w-xs">
              Your Trusted Procurement Partner in India. We provide end-to-end
              sourcing, market research, and supply chain solutions for global
              businesses.
            </p>
            <div className="space-y-3">
              <a
                href="tel:+919220406592"
                className="flex items-center gap-3 text-sm text-white/80 hover:text-white transition-colors group"
              >
                <div className="w-8 h-8 rounded-md bg-white/10 flex items-center justify-center group-hover:bg-[oklch(0.52_0.22_255)] transition-colors">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                +91 9220406592
              </a>
              <div className="flex items-start gap-3 text-sm text-white/80">
                <div className="w-8 h-8 rounded-md bg-white/10 flex items-center justify-center mt-0.5 flex-shrink-0">
                  <MapPin className="w-3.5 h-3.5" />
                </div>
                <span>
                  C - 7/11, Sector 63, Noida,
                  <br />
                  Uttar Pradesh, India
                </span>
              </div>
              <a
                href="mailto:info@vkglobalpartners.com"
                className="flex items-center gap-3 text-sm text-white/80 hover:text-white transition-colors group"
              >
                <div className="w-8 h-8 rounded-md bg-white/10 flex items-center justify-center group-hover:bg-[oklch(0.52_0.22_255)] transition-colors">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                info@vkglobalpartners.com
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-display font-bold text-white text-sm uppercase tracking-widest mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    data-ocid={link.ocid}
                    className="text-sm text-white/70 hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-[oklch(0.52_0.22_255)] group-hover:w-2 transition-all duration-200" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-bold text-white text-sm uppercase tracking-widest mb-5">
              Our Services
            </h4>
            <ul className="space-y-3">
              {serviceLinks.map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="text-sm text-white/70 hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-[oklch(0.52_0.22_255)] group-hover:w-2 transition-all duration-200" />
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/50">
            <p>© {currentYear} VK Global Partners. All rights reserved.</p>
            <p>C - 7/11, Sector 63, Noida, Uttar Pradesh, India</p>
            <p>
              Built with love using{" "}
              <a
                href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors underline underline-offset-2"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
