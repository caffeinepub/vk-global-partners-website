import { Button } from "@/components/ui/button";
import { Link, useRouterState } from "@tanstack/react-router";
import { Globe, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", to: "/" as const, ocid: "nav.home.link" },
  { label: "About Us", to: "/about" as const, ocid: "nav.about.link" },
  { label: "Services", to: "/services" as const, ocid: "nav.services.link" },
  {
    label: "Industries",
    to: "/industries" as const,
    ocid: "nav.industries.link",
  },
  { label: "Contact", to: "/contact" as const, ocid: "nav.contact.link" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  // biome-ignore lint/correctness/useExhaustiveDependencies: intentionally triggers on path change only
  useEffect(() => {
    setMobileOpen(false);
  }, [currentPath]);

  const isActive = (to: string) =>
    to === "/" ? currentPath === "/" : currentPath.startsWith(to);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "nav-blur bg-white/90 shadow-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2.5 flex-shrink-0 group"
            data-ocid="nav.home.link"
          >
            <div className="w-9 h-9 rounded-lg brand-gradient flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow">
              <Globe className="w-5 h-5 text-white" strokeWidth={2} />
            </div>
            <span className="font-display font-bold text-base md:text-lg tracking-tight leading-tight">
              <span
                className={`transition-colors duration-300 ${
                  scrolled ? "text-foreground" : "text-white"
                }`}
              >
                VK{" "}
              </span>
              <span
                className={`transition-colors duration-300 ${
                  scrolled
                    ? "text-[oklch(0.52_0.22_255)]"
                    : "text-[oklch(0.75_0.15_255)]"
                }`}
              >
                GLOBAL PARTNERS
              </span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                data-ocid={link.ocid}
                className={`px-3.5 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
                  isActive(link.to)
                    ? scrolled
                      ? "text-[oklch(0.52_0.22_255)] bg-[oklch(0.94_0.03_255)]"
                      : "text-white bg-white/20"
                    : scrolled
                      ? "text-foreground hover:text-[oklch(0.52_0.22_255)] hover:bg-[oklch(0.94_0.03_255)]"
                      : "text-white/90 hover:text-white hover:bg-white/15"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button
              asChild
              size="sm"
              data-ocid="nav.cta.button"
              className="brand-gradient text-white border-0 hover:opacity-90 hover:shadow-lg font-semibold px-5 transition-all duration-200"
            >
              <Link to="/contact">Get a Quote</Link>
            </Button>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            className={`md:hidden p-2 rounded-md transition-colors ${
              scrolled ? "text-foreground" : "text-white"
            }`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          mobileOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white border-t border-border shadow-lg px-4 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              data-ocid={link.ocid}
              className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                isActive(link.to)
                  ? "text-[oklch(0.52_0.22_255)] bg-[oklch(0.94_0.03_255)]"
                  : "text-foreground hover:text-[oklch(0.52_0.22_255)] hover:bg-[oklch(0.94_0.03_255)]"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-3 pt-3 border-t border-border">
            <Button
              asChild
              className="w-full brand-gradient text-white border-0 font-semibold"
              data-ocid="nav.cta.button"
            >
              <Link to="/contact">Get a Quote</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
