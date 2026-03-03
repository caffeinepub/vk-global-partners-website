import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  CheckCircle2,
  Globe,
  Search,
  ShieldCheck,
  Star,
  TrendingUp,
  Truck,
  Users,
} from "lucide-react";
import { useEffect } from "react";

const coreStrengths = [
  {
    icon: Globe,
    title: "International Procurement Strategy",
    description:
      "Developing and executing procurement strategies that connect businesses with reliable global suppliers and markets.",
    bg: "bg-[oklch(0.94_0.04_255)]",
    color: "text-[oklch(0.52_0.22_255)]",
  },
  {
    icon: Search,
    title: "Market Research & Supplier Mapping",
    description:
      "In-depth market intelligence and comprehensive supplier mapping to identify the best sourcing opportunities.",
    bg: "bg-[oklch(0.94_0.03_200)]",
    color: "text-[oklch(0.45_0.18_200)]",
  },
  {
    icon: Truck,
    title: "Supply Chain Optimization",
    description:
      "Streamlining supply chains for maximum efficiency — reducing lead times, cutting costs, and improving reliability.",
    bg: "bg-[oklch(0.94_0.03_160)]",
    color: "text-[oklch(0.45_0.15_160)]",
  },
  {
    icon: ShieldCheck,
    title: "Government & Institutional Coordination",
    description:
      "Expert navigation of government processes, documentation, and institutional frameworks to ensure compliance.",
    bg: "bg-[oklch(0.95_0.03_60)]",
    color: "text-[oklch(0.50_0.15_60)]",
  },
  {
    icon: Users,
    title: "Stakeholder Management",
    description:
      "Building and maintaining productive relationships with suppliers, buyers, and institutional partners at every level.",
    bg: "bg-[oklch(0.94_0.04_300)]",
    color: "text-[oklch(0.45_0.15_300)]",
  },
  {
    icon: TrendingUp,
    title: "Business Growth Advisory",
    description:
      "Strategic guidance to help businesses scale their procurement operations and achieve sustainable long-term growth.",
    bg: "bg-[oklch(0.94_0.03_30)]",
    color: "text-[oklch(0.50_0.15_30)]",
  },
];

const highlights = [
  "Over 4 years of procurement experience",
  "500+ verified supplier network",
  "Pan-India operations from Noida",
  "Serving global importers & exporters",
  "ISO-compliant quality processes",
  "Dedicated relationship managers",
];

const founderQualities = [
  "Structured and compliant",
  "Cost-efficient",
  "Risk-mitigated",
  "Strategically aligned for long-term growth",
];

const experienceItems = [
  "International supplier identification",
  "Vendor evaluation and negotiation",
  "Market feasibility research",
  "Supply chain coordination",
  "Government liaison and documentation support",
];

export default function About() {
  useEffect(() => {
    document.title =
      "About Us | VK Global Partners — Strategic Sourcing Experts";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute(
      "content",
      "Learn about VK Global Partners — experienced procurement professionals and strategic sourcing experts based in Noida, India. Trusted by domestic and international clients.",
    );
  }, []);

  return (
    <>
      {/* ── Page Hero ─────────────────────────────────────────── */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 brand-gradient" />
        <div className="absolute inset-0 section-dot-pattern opacity-15" />
        <div className="relative container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-white/60 text-sm mb-4">
              <Link to="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <span>/</span>
              <span className="text-white">About Us</span>
            </div>
            <h1
              className="font-display font-black text-[clamp(36px,5vw,60px)] text-white mb-4 leading-[0.95]"
              style={{ letterSpacing: "-0.035em" }}
            >
              About VK Global Partners
            </h1>
            <p className="text-white/75 text-lg">
              A procurement and consulting firm built on precision,
              transparency, and strategic execution — your reliable partner for
              domestic and international trade.
            </p>
          </div>
        </div>
      </section>

      {/* ── Company Overview ──────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/assets/generated/about-team.dim_800x500.jpg"
                alt="VK Global Partners team"
                className="w-full h-auto object-cover"
              />
              {/* Stats overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[oklch(0.14_0.06_260)] to-transparent">
                <div className="grid grid-cols-3 gap-4 text-white text-center">
                  <div>
                    <div className="font-display font-bold text-2xl">500+</div>
                    <div className="text-xs text-white/70 mt-0.5">
                      Verified Vendors
                    </div>
                  </div>
                  <div>
                    <div className="font-display font-bold text-2xl">4+</div>
                    <div className="text-xs text-white/70 mt-0.5">
                      Years Experience
                    </div>
                  </div>
                  <div>
                    <div className="font-display font-bold text-2xl">200+</div>
                    <div className="text-xs text-white/70 mt-0.5">
                      Projects Delivered
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div>
              <p className="text-[oklch(0.52_0.22_255)] text-sm font-bold uppercase tracking-widest mb-3">
                Who We Are
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Procurement Excellence Since Our Founding
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed mb-5">
                V K Global Partners is a procurement and consulting firm built
                on the principles of precision, transparency, and strategic
                execution. Founded by V K Pathak, the firm operates at the
                intersection of structured governance and global enterprise.
              </p>
              <p className="text-muted-foreground text-base leading-relaxed mb-8">
                With over 4 years of professional experience in procurement and
                supply chain management, we specialize in enabling businesses to
                build reliable sourcing networks, conduct strategic market
                research, and optimize procurement operations across domestic
                and international markets.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {highlights.map((item) => (
                  <div key={item} className="flex items-center gap-2.5 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-[oklch(0.52_0.22_255)] flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>

              <Button
                asChild
                className="brand-gradient text-white border-0 font-semibold hover:opacity-90 transition-opacity"
              >
                <Link to="/contact" className="flex items-center gap-2">
                  Get in Touch <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Founder's Profile ─────────────────────────────────── */}
      <section className="py-20 md:py-24 bg-[oklch(0.12_0.05_260)]">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[oklch(0.65_0.18_255)] text-xs font-bold uppercase tracking-[0.16em] mb-10 text-center">
            Founder's Profile
          </p>
          <div
            className="card-premium rounded-2xl overflow-hidden"
            style={{ background: "oklch(0.16 0.07 260)" }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
              {/* Avatar / decorative column */}
              <div
                className="lg:col-span-4 flex flex-col items-center justify-center p-10 lg:p-12 relative"
                style={{
                  background:
                    "linear-gradient(145deg, oklch(0.22 0.12 255) 0%, oklch(0.16 0.08 260) 100%)",
                }}
              >
                {/* Decorative rings */}
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at 50% 50%, oklch(0.70 0.20 255) 0%, transparent 60%)",
                  }}
                />
                {/* Founder photo */}
                <div
                  className="relative z-10 w-36 h-36 rounded-2xl overflow-hidden mb-6 shadow-2xl"
                  style={{
                    boxShadow: "0 8px 32px oklch(0.22 0.12 255 / 0.6)",
                  }}
                >
                  <img
                    src="/assets/uploads/My-photo-1.jpeg"
                    alt="V K Pathak — Founder, VK Global Partners"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <h3
                  className="relative z-10 font-display font-black text-2xl text-white text-center mb-1"
                  style={{ letterSpacing: "-0.03em" }}
                >
                  V K Pathak
                </h3>
                <p className="relative z-10 text-[oklch(0.72_0.14_255)] text-sm font-medium text-center">
                  Founder & Procurement Professional
                </p>
                {/* Decorative badge */}
                <div
                  className="relative z-10 mt-6 flex items-center gap-2 rounded-full px-4 py-2 border"
                  style={{
                    background: "oklch(1 0 0 / 0.08)",
                    borderColor: "oklch(1 0 0 / 0.15)",
                  }}
                >
                  <ShieldCheck className="w-3.5 h-3.5 text-[oklch(0.72_0.18_255)]" />
                  <span className="text-white/70 text-xs font-bold uppercase tracking-wider">
                    Official · India Post
                  </span>
                </div>
              </div>

              {/* Bio column */}
              <div className="lg:col-span-8 p-8 lg:p-12 flex flex-col justify-center">
                <p className="text-white/80 text-base leading-relaxed mb-5">
                  V K Pathak is a procurement professional and entrepreneur with
                  a strong foundation in systems management and stakeholder
                  coordination.
                </p>
                <p className="text-white/80 text-base leading-relaxed mb-7">
                  In addition to leading V K Global Partners, he serves as an
                  official with India Post, contributing to operational
                  efficiency and institutional reliability within one of India's
                  most trusted public service organizations.
                </p>

                <p className="text-white/60 text-sm italic mb-5">
                  This dual exposure — governance discipline and global business
                  strategy — enables him to deliver procurement solutions that
                  are:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {founderQualities.map((q) => (
                    <div key={q} className="flex items-center gap-3">
                      <CheckCircle2
                        className="w-4 h-4 flex-shrink-0"
                        style={{ color: "oklch(0.70 0.18 255)" }}
                      />
                      <span className="text-white/85 text-sm font-medium">
                        {q}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Mission & Vision ──────────────────────────────────── */}
      <section className="py-20 md:py-24 bg-[oklch(0.94_0.03_255)]">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="card-premium rounded-2xl p-8 md:p-10">
              <div className="w-14 h-14 rounded-2xl brand-gradient flex items-center justify-center mb-6">
                <Star className="w-7 h-7 text-white" />
              </div>
              <h3
                className="font-display font-black text-2xl text-foreground mb-4"
                style={{ letterSpacing: "-0.03em" }}
              >
                Our Mission
              </h3>
              <p className="text-muted-foreground text-base leading-relaxed">
                To empower businesses through precise, transparent, and
                cost-effective procurement solutions — building reliable
                sourcing networks and optimizing supply chains for domestic and
                international markets.
              </p>
            </div>

            {/* Vision */}
            <div className="card-premium rounded-2xl p-8 md:p-10">
              <div className="w-14 h-14 rounded-2xl bg-[oklch(0.22_0.09_255)] flex items-center justify-center mb-6">
                <Globe className="w-7 h-7 text-white" />
              </div>
              <h3
                className="font-display font-black text-2xl text-foreground mb-4"
                style={{ letterSpacing: "-0.03em" }}
              >
                Our Vision
              </h3>
              <p className="text-muted-foreground text-base leading-relaxed">
                To bridge the excellence of governance with the dynamism of
                global business — creating procurement partnerships and
                strategic solutions that are reliable, scalable, and built for
                long-term success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Our Experience ────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <p className="text-[oklch(0.52_0.22_255)] text-xs font-bold uppercase tracking-[0.16em] mb-3">
              Our Experience
            </p>
            <h2
              className="font-display font-black text-[clamp(28px,4vw,44px)] text-foreground leading-[1.05] mb-6"
              style={{ letterSpacing: "-0.03em" }}
            >
              4+ Years of Hands-On
              <br />
              Procurement Experience
            </h2>
            <p className="text-muted-foreground text-base">
              We have worked on:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
            {experienceItems.map((item, i) => (
              <div
                key={item}
                className="card-premium rounded-2xl p-6 flex items-start gap-4"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "oklch(0.94 0.04 255)" }}
                >
                  <CheckCircle2 className="w-5 h-5 text-[oklch(0.52_0.22_255)]" />
                </div>
                <div>
                  <span className="text-[oklch(0.65_0.14_255)] text-xs font-bold uppercase tracking-wider block mb-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-foreground text-sm font-semibold leading-snug">
                    {item}
                  </p>
                </div>
              </div>
            ))}
            {/* Closing statement card spanning remaining space */}
            <div
              className="card-premium rounded-2xl p-6 flex items-center sm:col-span-2 lg:col-span-1"
              style={{ background: "oklch(0.94 0.04 255)" }}
            >
              <p className="text-[oklch(0.30_0.10_260)] text-sm leading-relaxed italic">
                Our experience spans multiple sectors, supporting clients in
                building dependable sourcing frameworks and competitive
                procurement strategies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Core Strengths ────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-[oklch(0.94_0.03_255)]">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <p className="text-[oklch(0.52_0.22_255)] text-xs font-bold uppercase tracking-[0.16em] mb-3">
                Core Strengths
              </p>
              <h2
                className="font-display font-black text-[clamp(28px,4vw,44px)] text-foreground leading-[1.0]"
                style={{ letterSpacing: "-0.03em" }}
              >
                What We
                <br />
                Do Best
              </h2>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Six areas where we consistently deliver exceptional results for
              our clients — domestic and international.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {coreStrengths.map((strength) => (
              <div
                key={strength.title}
                className="card-premium rounded-2xl p-7"
              >
                <div
                  className={`w-12 h-12 rounded-xl ${strength.bg} flex items-center justify-center mb-5`}
                >
                  <strength.icon className={`w-6 h-6 ${strength.color}`} />
                </div>
                <h3
                  className="font-display font-bold text-[17px] text-foreground mb-2"
                  style={{ letterSpacing: "-0.02em" }}
                >
                  {strength.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {strength.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────── */}
      <section className="py-16 bg-[oklch(0.14_0.06_260)]">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to Partner With Us?
          </h2>
          <p className="text-white/70 text-base mb-8 max-w-xl mx-auto">
            Let's discuss how VK Global Partners can transform your procurement
            operations and help you achieve better outcomes.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-[oklch(0.52_0.22_255)] hover:bg-[oklch(0.46_0.22_255)] text-white border-0 font-semibold px-10"
          >
            <Link to="/contact">Schedule a Consultation</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
