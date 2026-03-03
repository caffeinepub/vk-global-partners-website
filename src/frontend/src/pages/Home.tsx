import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Award,
  Building2,
  CheckCircle2,
  Cog,
  Factory,
  Globe,
  Layers,
  Search,
  ShieldCheck,
  Star,
  TrendingDown,
  Truck,
  Users,
  Wrench,
} from "lucide-react";
import { useEffect } from "react";

const serviceCards = [
  {
    icon: Search,
    title: "Market Research",
    description:
      "Comprehensive supplier identification, competitor analysis, pricing intelligence, and product feasibility research.",
    color: "text-[oklch(0.52_0.22_255)]",
    bg: "bg-[oklch(0.94_0.04_255)]",
  },
  {
    icon: Users,
    title: "Vendor Sourcing",
    description:
      "Identify and qualify the best vendors for your requirements across India and globally.",
    color: "text-[oklch(0.45_0.18_200)]",
    bg: "bg-[oklch(0.94_0.03_200)]",
  },
  {
    icon: ShieldCheck,
    title: "Quality Assurance",
    description:
      "Rigorous quality inspection coordination and compliance verification at every stage.",
    color: "text-[oklch(0.45_0.15_160)]",
    bg: "bg-[oklch(0.94_0.03_160)]",
  },
  {
    icon: Truck,
    title: "Logistics Coordination",
    description:
      "End-to-end supply chain management and logistics coordination for seamless delivery.",
    color: "text-[oklch(0.50_0.15_60)]",
    bg: "bg-[oklch(0.95_0.03_60)]",
  },
];

const whyUs = [
  {
    icon: Star,
    title: "Transparency",
    description:
      "Clear communication and complete visibility into every step of the procurement process — no hidden fees, no surprises.",
  },
  {
    icon: TrendingDown,
    title: "Cost Efficiency",
    description:
      "Leveraging extensive supplier networks and expert negotiation skills to deliver the best value for your budget.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Assurance",
    description:
      "Stringent quality checks and supplier audits ensure every product meets your exacting standards.",
  },
  {
    icon: Award,
    title: "Industry Expertise",
    description:
      "Deep domain knowledge across manufacturing, engineering, and construction sectors built over years of practice.",
  },
];

const industries = [
  { icon: Factory, label: "Industrial Machinery" },
  { icon: Cog, label: "Manufacturing" },
  { icon: Building2, label: "Construction Materials" },
  { icon: Wrench, label: "Engineering Components" },
  { icon: Layers, label: "Custom Fabrication" },
  { icon: Globe, label: "Import & Export" },
];

export default function Home() {
  useEffect(() => {
    document.title =
      "VK Global Partners | Procurement & Market Research Company in India";

    let descMeta = document.querySelector('meta[name="description"]');
    if (!descMeta) {
      descMeta = document.createElement("meta");
      descMeta.setAttribute("name", "description");
      document.head.appendChild(descMeta);
    }
    descMeta.setAttribute(
      "content",
      "Leading procurement company in India. Sourcing partner in Noida offering industrial procurement services, market research, and global sourcing solutions.",
    );

    let keywordsMeta = document.querySelector('meta[name="keywords"]');
    if (!keywordsMeta) {
      keywordsMeta = document.createElement("meta");
      keywordsMeta.setAttribute("name", "keywords");
      document.head.appendChild(keywordsMeta);
    }
    keywordsMeta.setAttribute(
      "content",
      "Procurement company in India, Sourcing partner in Noida, Market research company India, Industrial procurement services, Global sourcing India",
    );
  }, []);

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src="/assets/generated/hero-global-trade.dim_1600x700.jpg"
            alt="Global trade and procurement"
            className="w-full h-full object-cover scale-105"
            loading="eager"
            style={{ objectPosition: "60% center" }}
          />
          <div className="absolute inset-0 hero-overlay" />
        </div>

        {/* Fine grid depth layer */}
        <div className="absolute inset-0 hero-grid-pattern" />

        {/* Decorative watermark — editorial layer */}
        <div
          className="absolute right-0 top-1/2 -translate-y-1/2 select-none pointer-events-none hidden lg:block"
          aria-hidden="true"
        >
          <span
            className="hero-display text-[clamp(160px,18vw,280px)] text-white/[0.035] leading-none"
            style={{ letterSpacing: "-0.06em" }}
          >
            VKGP
          </span>
        </div>

        {/* Content */}
        <div className="relative container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
          <div className="max-w-[680px]">
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2.5 stat-surface rounded-full px-4 py-2 mb-10">
              <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.20_255)] animate-pulse" />
              <span className="text-white/85 text-[11px] font-bold uppercase tracking-[0.18em]">
                Procurement Specialists — Noida, India
              </span>
            </div>

            {/* FIX 1: Oversized editorial headline */}
            <h1
              className="hero-display text-[clamp(48px,7vw,88px)] text-white mb-8"
              style={{ textShadow: "0 2px 40px oklch(0.10 0.06 260 / 0.5)" }}
            >
              Your Trusted <br className="hidden sm:block" />
              <span
                className="relative inline-block"
                style={{
                  background:
                    "linear-gradient(95deg, oklch(0.82 0.16 255) 0%, oklch(0.92 0.10 230) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Procurement
              </span>{" "}
              Partner
              <br className="hidden sm:block" />
              <span className="text-white/55 text-[0.55em] font-bold tracking-[-0.01em] block mt-1">
                Market Research · Vendor Sourcing · Supply Chain
              </span>
            </h1>

            <p
              className="text-white/75 text-lg sm:text-xl leading-relaxed mb-10 max-w-xl font-body"
              style={{ fontWeight: 400 }}
            >
              VK Global Partners delivers end-to-end procurement solutions and
              market intelligence to manufacturers, importers, exporters, and
              industrial buyers — across India and globally.
            </p>

            {/* Trust indicators */}
            <div className="flex flex-wrap gap-3 mb-12">
              {[
                "ISO-Compliant Processes",
                "500+ Vendors Network",
                "Pan-India Coverage",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 stat-surface rounded-lg px-3 py-1.5 text-white/80 text-sm"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-[oklch(0.72_0.18_255)] flex-shrink-0" />
                  <span className="text-xs font-medium">{item}</span>
                </div>
              ))}
            </div>

            {/* FIX 1: Upgraded CTAs — primary with glow ring, secondary crisp white */}
            <div className="flex flex-wrap gap-4">
              <Button
                asChild
                size="lg"
                data-ocid="hero.primary_button"
                className="relative bg-[oklch(0.55_0.24_255)] hover:bg-[oklch(0.50_0.24_255)] text-white border-0 font-bold px-9 h-13 text-[15px] transition-all duration-200"
                style={{
                  boxShadow:
                    "0 0 0 0 oklch(0.52 0.22 255 / 0), 0 4px 16px oklch(0.22 0.09 255 / 0.4)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow =
                    "0 0 0 4px oklch(0.52 0.22 255 / 0.30), 0 8px 24px oklch(0.22 0.09 255 / 0.5)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow =
                    "0 0 0 0 oklch(0.52 0.22 255 / 0), 0 4px 16px oklch(0.22 0.09 255 / 0.4)";
                }}
              >
                <Link to="/contact">Request a Consultation</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                data-ocid="hero.secondary_button"
                className="bg-transparent border-2 border-white/60 text-white hover:bg-white hover:text-[oklch(0.18_0.07_260)] font-bold px-9 h-13 text-[15px] transition-all duration-200"
              >
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* ── Services Overview ─────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <p className="text-[oklch(0.52_0.22_255)] text-xs font-bold uppercase tracking-[0.16em] mb-3">
                What We Do
              </p>
              <h2
                className="font-display font-black text-[clamp(28px,4vw,44px)] text-foreground leading-[1.0]"
                style={{ letterSpacing: "-0.03em" }}
              >
                Comprehensive
                <br />
                Procurement Services
              </h2>
            </div>
            <p className="text-muted-foreground text-base leading-relaxed max-w-sm md:text-right">
              End-to-end solutions from supplier identification to delivery,
              tailored to your industry.
            </p>
          </div>

          {/* FIX 3: Premium card elevation */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {serviceCards.map((service) => (
              <div
                key={service.title}
                className="card-premium rounded-2xl p-7 group"
              >
                <div
                  className={`w-12 h-12 rounded-xl ${service.bg} flex items-center justify-center mb-6`}
                >
                  <service.icon className={`w-6 h-6 ${service.color}`} />
                </div>
                <h3
                  className="font-display font-bold text-[17px] text-foreground mb-2.5"
                  style={{ letterSpacing: "-0.02em" }}
                >
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <Button
              asChild
              variant="outline"
              className="border-[oklch(0.72_0.12_255)] text-[oklch(0.38_0.14_255)] hover:bg-[oklch(0.94_0.04_255)] hover:border-[oklch(0.52_0.22_255)] font-semibold transition-all duration-200"
            >
              <Link to="/services" className="flex items-center gap-2">
                Explore All Services <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ─────────────────────────────────────── */}
      {/* FIX 2: Asymmetric layout — large stat/pull-quote left, list right */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 brand-gradient" />
        <div className="absolute inset-0 section-dot-pattern opacity-10" />

        {/* Large decorative number */}
        <div
          className="absolute right-8 bottom-0 select-none pointer-events-none hidden xl:block"
          aria-hidden="true"
        >
          <span className="font-display font-black text-[320px] leading-none text-white/[0.04]">
            4
          </span>
        </div>

        <div className="relative container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left — header + pull quote + stats */}
            <div className="lg:col-span-4">
              <p className="text-[oklch(0.70_0.16_255)] text-xs font-bold uppercase tracking-[0.18em] mb-4">
                Our Advantage
              </p>
              <h2
                className="font-display text-4xl md:text-5xl font-black text-white leading-[0.95] mb-6"
                style={{ letterSpacing: "-0.03em" }}
              >
                Why
                <br />
                Choose
                <br />
                Us?
              </h2>

              {/* Pull quote */}
              <blockquote className="border-l-2 border-[oklch(0.55_0.22_255)] pl-5 mb-10">
                <p className="text-white/60 text-base leading-relaxed italic">
                  "We combine deep market knowledge with transparent processes
                  to deliver procurement outcomes that consistently exceed
                  expectations."
                </p>
              </blockquote>

              {/* Stat blocks */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { n: "500+", label: "Verified Suppliers" },
                  { n: "200+", label: "Projects Delivered" },
                  { n: "10+", label: "Years Experience" },
                  { n: "100%", label: "Transparency" },
                ].map((s) => (
                  <div
                    key={s.label}
                    className="bg-white/08 border border-white/12 rounded-xl p-4"
                    style={{ background: "oklch(1 0 0 / 0.08)" }}
                  >
                    <div
                      className="font-display font-black text-2xl text-white mb-0.5"
                      style={{ letterSpacing: "-0.03em" }}
                    >
                      {s.n}
                    </div>
                    <div className="text-white/55 text-xs font-medium">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — 4 numbered items */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-5 lg:pt-8">
              {whyUs.map((item, i) => (
                <div
                  key={item.title}
                  className="group relative rounded-2xl p-7 border border-white/10 overflow-hidden transition-all duration-250 hover:border-white/20"
                  style={{ background: "oklch(1 0 0 / 0.07)" }}
                >
                  {/* Big background number */}
                  <span
                    className="absolute top-3 right-4 font-display font-black text-7xl leading-none text-white/[0.06] select-none pointer-events-none group-hover:text-white/[0.10] transition-colors duration-200"
                    aria-hidden="true"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center mb-5"
                    style={{ background: "oklch(0.52 0.22 255 / 0.25)" }}
                  >
                    <item.icon className="w-5 h-5 text-[oklch(0.80_0.14_255)]" />
                  </div>
                  <h3
                    className="font-display font-bold text-[17px] text-white mb-2"
                    style={{ letterSpacing: "-0.02em" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Industries We Serve ───────────────────────────────── */}
      <section className="py-20 md:py-24 bg-background">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <p className="text-[oklch(0.52_0.22_255)] text-xs font-bold uppercase tracking-[0.16em] mb-3">
                Sectors
              </p>
              <h2
                className="font-display font-black text-[clamp(28px,4vw,44px)] text-foreground leading-[1.0]"
                style={{ letterSpacing: "-0.03em" }}
              >
                Industries
                <br />
                We Serve
              </h2>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Deep expertise across key industrial sectors — we understand your
              supply chain challenges intimately.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {industries.map((industry) => (
              <div
                key={industry.label}
                className="card-premium rounded-2xl p-5 text-center flex flex-col items-center gap-3 group"
              >
                <div className="w-11 h-11 rounded-xl bg-[oklch(0.94_0.04_255)] flex items-center justify-center group-hover:bg-[oklch(0.52_0.22_255)] transition-colors duration-200">
                  <industry.icon className="w-5 h-5 text-[oklch(0.52_0.22_255)] group-hover:text-white transition-colors duration-200" />
                </div>
                <span
                  className="text-xs font-bold text-foreground leading-tight text-center"
                  style={{ letterSpacing: "-0.01em" }}
                >
                  {industry.label}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <Button
              asChild
              variant="outline"
              className="border-[oklch(0.72_0.12_255)] text-[oklch(0.38_0.14_255)] hover:bg-[oklch(0.94_0.04_255)] hover:border-[oklch(0.52_0.22_255)] font-semibold transition-all duration-200"
            >
              <Link to="/industries" className="flex items-center gap-2">
                View All Industries <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ── CTA Banner ────────────────────────────────────────── */}
      <section className="relative py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0 brand-gradient" />
        <div className="absolute inset-0 section-dot-pattern opacity-10" />
        {/* Large decorative text */}
        <div
          className="absolute inset-y-0 right-0 flex items-center select-none pointer-events-none overflow-hidden hidden lg:flex"
          aria-hidden="true"
        >
          <span
            className="font-display font-black text-[160px] leading-none text-white/[0.05]"
            style={{ letterSpacing: "-0.05em" }}
          >
            NOW
          </span>
        </div>
        <div className="relative container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            <div>
              <h2
                className="font-display font-black text-3xl md:text-4xl text-white mb-3"
                style={{ letterSpacing: "-0.03em" }}
              >
                Ready to Optimize
                <br className="hidden sm:block" /> Your Supply Chain?
              </h2>
              <p className="text-white/65 text-base max-w-lg">
                Talk to our procurement experts today — reduce costs, improve
                quality, and streamline your sourcing.
              </p>
            </div>
            <div className="flex-shrink-0">
              <Button
                asChild
                size="lg"
                className="bg-white text-[oklch(0.20_0.08_258)] hover:bg-white/90 border-0 font-bold px-10 h-12 text-base transition-all duration-200"
                style={{
                  boxShadow: "0 4px 20px oklch(0.10 0.06 260 / 0.4)",
                }}
              >
                <Link to="/contact">Contact Us Today</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
