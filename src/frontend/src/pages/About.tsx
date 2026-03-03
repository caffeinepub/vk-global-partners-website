import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  CheckCircle2,
  Eye,
  Globe,
  ShieldCheck,
  Star,
  TrendingDown,
  Users,
} from "lucide-react";
import { useEffect } from "react";

const coreValues = [
  {
    icon: Star,
    title: "Integrity",
    description:
      "We uphold the highest ethical standards in every transaction and business relationship.",
    bg: "bg-[oklch(0.94_0.04_255)]",
    color: "text-[oklch(0.52_0.22_255)]",
  },
  {
    icon: Eye,
    title: "Transparency",
    description:
      "Complete visibility into all procurement activities — you always know where things stand.",
    bg: "bg-[oklch(0.94_0.03_200)]",
    color: "text-[oklch(0.45_0.18_200)]",
  },
  {
    icon: TrendingDown,
    title: "Cost Efficiency",
    description:
      "Delivering maximum value through smart sourcing, negotiation, and supply chain optimization.",
    bg: "bg-[oklch(0.94_0.03_160)]",
    color: "text-[oklch(0.45_0.15_160)]",
  },
  {
    icon: ShieldCheck,
    title: "Quality Focus",
    description:
      "Uncompromising quality standards with thorough inspection and verification processes.",
    bg: "bg-[oklch(0.95_0.03_60)]",
    color: "text-[oklch(0.50_0.15_60)]",
  },
  {
    icon: Users,
    title: "Client-Centric",
    description:
      "Your success is our success. Every decision is guided by your business goals and requirements.",
    bg: "bg-[oklch(0.94_0.04_300)]",
    color: "text-[oklch(0.45_0.15_300)]",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description:
      "Access to a vast network of verified suppliers and partners across India and internationally.",
    bg: "bg-[oklch(0.94_0.03_30)]",
    color: "text-[oklch(0.50_0.15_30)]",
  },
];

const highlights = [
  "10+ years of procurement expertise",
  "500+ verified supplier network",
  "Pan-India operations from Noida",
  "Serving global importers & exporters",
  "ISO-compliant quality processes",
  "Dedicated relationship managers",
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
              Strategic sourcing experts and experienced procurement
              professionals — your reliable partner for domestic and
              international trade.
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
                    <div className="font-display font-bold text-2xl">10+</div>
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
                VK Global Partners is a leading procurement and market research
                firm headquartered in Sector 63, Noida. We specialize in
                providing comprehensive sourcing solutions to manufacturers,
                importers, exporters, and industrial buyers across India and
                globally.
              </p>
              <p className="text-muted-foreground text-base leading-relaxed mb-8">
                Our team of seasoned procurement professionals leverages deep
                industry knowledge, an extensive verified supplier network, and
                rigorous quality processes to help clients reduce costs, ensure
                quality, and streamline their supply chains — whether they're
                sourcing domestically or internationally.
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
                To empower businesses with reliable, transparent, and
                cost-effective procurement solutions that enable them to compete
                and thrive in domestic and international markets. We are
                committed to being the bridge between buyers and the best
                suppliers — delivering value at every stage of the supply chain.
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
                To be India's most trusted procurement and market research
                partner — recognized globally for our integrity, expertise, and
                ability to deliver world-class sourcing outcomes. We envision a
                future where businesses of all sizes can access enterprise-level
                procurement capabilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Core Values ───────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <p className="text-[oklch(0.52_0.22_255)] text-xs font-bold uppercase tracking-[0.16em] mb-3">
                What We Stand For
              </p>
              <h2
                className="font-display font-black text-[clamp(28px,4vw,44px)] text-foreground leading-[1.0]"
                style={{ letterSpacing: "-0.03em" }}
              >
                Our Core
                <br />
                Values
              </h2>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              These principles guide every decision we make and every
              relationship we build.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {coreValues.map((value) => (
              <div key={value.title} className="card-premium rounded-2xl p-7">
                <div
                  className={`w-12 h-12 rounded-xl ${value.bg} flex items-center justify-center mb-5`}
                >
                  <value.icon className={`w-6 h-6 ${value.color}`} />
                </div>
                <h3
                  className="font-display font-bold text-[17px] text-foreground mb-2"
                  style={{ letterSpacing: "-0.02em" }}
                >
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
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
