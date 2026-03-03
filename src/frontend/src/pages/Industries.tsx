import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Cog,
  Factory,
  Globe,
  Layers,
  Wrench,
} from "lucide-react";
import { useEffect } from "react";

const industries = [
  {
    icon: Factory,
    title: "Industrial Machinery",
    description:
      "We source heavy equipment, industrial machinery, and specialized manufacturing tools for businesses requiring precision engineering and reliable performance. Our supplier network covers OEM and aftermarket options across all major machinery categories.",
    capabilities: [
      "Heavy manufacturing equipment",
      "CNC machines & automation",
      "Material handling systems",
      "Industrial power equipment",
    ],
    color: "text-[oklch(0.52_0.22_255)]",
    bg: "bg-[oklch(0.94_0.04_255)]",
  },
  {
    icon: Cog,
    title: "Manufacturing",
    description:
      "Comprehensive raw material and component procurement for manufacturing operations. We help manufacturers secure reliable supply of the inputs they need to maintain production schedules and quality standards.",
    capabilities: [
      "Raw material procurement",
      "Production components",
      "Consumables & supplies",
      "Specialty materials",
    ],
    color: "text-[oklch(0.45_0.18_200)]",
    bg: "bg-[oklch(0.94_0.03_200)]",
  },
  {
    icon: Building2,
    title: "Construction Materials",
    description:
      "End-to-end procurement of construction materials including cement, structural steel, aggregates, and finishing materials. We work with developers, contractors, and infrastructure companies to optimize their material supply chains.",
    capabilities: [
      "Structural steel & TMT bars",
      "Cement & aggregates",
      "Electrical & plumbing",
      "Finishes & façades",
    ],
    color: "text-[oklch(0.45_0.15_160)]",
    bg: "bg-[oklch(0.94_0.03_160)]",
  },
  {
    icon: Wrench,
    title: "Engineering Components",
    description:
      "Sourcing precision-engineered parts, fasteners, bearings, seals, and technical components for engineering and maintenance applications. We work with both domestic manufacturers and import channels.",
    capabilities: [
      "Precision machined parts",
      "Fasteners & hardware",
      "Bearings & seals",
      "Hydraulic & pneumatic components",
    ],
    color: "text-[oklch(0.50_0.15_60)]",
    bg: "bg-[oklch(0.95_0.03_60)]",
  },
  {
    icon: Layers,
    title: "Custom Fabrication",
    description:
      "Connecting businesses with qualified fabricators for bespoke manufacturing requirements — from one-off prototypes to series production of custom assemblies and sub-systems.",
    capabilities: [
      "Sheet metal fabrication",
      "Structural fabrication",
      "Custom assemblies",
      "Prototype development",
    ],
    color: "text-[oklch(0.45_0.15_300)]",
    bg: "bg-[oklch(0.94_0.04_300)]",
  },
  {
    icon: Globe,
    title: "Import & Export Businesses",
    description:
      "Specialized support for cross-border trade facilitators — helping importers find reliable Indian suppliers and exporters access international buyers. We handle documentation, compliance, and logistics coordination.",
    capabilities: [
      "Supplier-buyer matching",
      "Trade documentation support",
      "Regulatory compliance",
      "International freight coordination",
    ],
    color: "text-[oklch(0.50_0.15_30)]",
    bg: "bg-[oklch(0.94_0.03_30)]",
  },
];

export default function Industries() {
  useEffect(() => {
    document.title =
      "Industries We Serve | VK Global Partners — Procurement Specialists";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute(
      "content",
      "VK Global Partners serves industrial machinery, manufacturing, construction, engineering components, custom fabrication, and import/export businesses across India.",
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
              <span className="text-white">Industries</span>
            </div>
            <h1
              className="font-display font-black text-[clamp(36px,5vw,60px)] text-white mb-4 leading-[0.95]"
              style={{ letterSpacing: "-0.035em" }}
            >
              Industries We Serve
            </h1>
            <p className="text-white/75 text-lg">
              Deep sector expertise across the industries that drive India's
              manufacturing and trade economy.
            </p>
          </div>
        </div>
      </section>

      {/* ── Industries image banner ───────────────────────────── */}
      <section className="relative h-64 md:h-80 overflow-hidden">
        <img
          src="/assets/generated/industries-manufacturing.dim_700x450.jpg"
          alt="Industrial manufacturing facility"
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background: "oklch(0.14 0.06 260 / 0.5)",
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <p className="font-display text-lg font-semibold text-white/80 mb-1">
              Serving
            </p>
            <p className="font-display text-4xl md:text-5xl font-bold">
              6 Key Industries
            </p>
          </div>
        </div>
      </section>

      {/* ── Industries Grid ───────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <p className="text-[oklch(0.52_0.22_255)] text-xs font-bold uppercase tracking-[0.16em] mb-3">
                Sector Coverage
              </p>
              <h2
                className="font-display font-black text-[clamp(28px,4vw,44px)] text-foreground leading-[1.0]"
                style={{ letterSpacing: "-0.03em" }}
              >
                Specialized Expertise
                <br />
                Across Sectors
              </h2>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              We understand the unique procurement challenges in each industry
              and tailor our approach accordingly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {industries.map((industry) => (
              <div
                key={industry.title}
                className="card-premium rounded-2xl overflow-hidden group"
              >
                {/* Header */}
                <div className="p-7 pb-5">
                  <div
                    className={`w-12 h-12 rounded-xl ${industry.bg} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-200`}
                  >
                    <industry.icon className={`w-6 h-6 ${industry.color}`} />
                  </div>
                  <h3
                    className="font-display font-bold text-[18px] text-foreground mb-3"
                    style={{ letterSpacing: "-0.02em" }}
                  >
                    {industry.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {industry.description}
                  </p>
                </div>

                {/* Capabilities */}
                <div className="px-7 pb-7 pt-4 border-t border-[oklch(0.91_0.015_250)]">
                  <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-3">
                    What We Source
                  </p>
                  <div className="space-y-2">
                    {industry.capabilities.map((cap) => (
                      <div
                        key={cap}
                        className="flex items-center gap-2 text-sm"
                      >
                        <CheckCircle2
                          className={`w-4 h-4 ${industry.color} flex-shrink-0`}
                        />
                        <span className="text-foreground">{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process section ───────────────────────────────────── */}
      <section className="py-16 md:py-20 bg-[oklch(0.94_0.03_255)]">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">
              Our Procurement Process
            </h2>
            <p className="text-muted-foreground text-base max-w-xl mx-auto">
              A proven methodology refined across hundreds of sourcing projects.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                label: "Requirements Analysis",
                desc: "Deep-dive into your needs",
              },
              {
                step: "02",
                label: "Market Research",
                desc: "Identify the best sources",
              },
              {
                step: "03",
                label: "Vendor Qualification",
                desc: "Vet & shortlist suppliers",
              },
              {
                step: "04",
                label: "Execute & Monitor",
                desc: "Manage to completion",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-14 h-14 rounded-2xl brand-gradient flex items-center justify-center mx-auto mb-4">
                  <span className="font-display font-bold text-white text-sm">
                    {item.step}
                  </span>
                </div>
                <h4 className="font-display font-bold text-sm text-foreground mb-1.5">
                  {item.label}
                </h4>
                <p className="text-muted-foreground text-xs">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────── */}
      <section className="py-16 bg-[oklch(0.14_0.06_260)]">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            <div>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-3">
                Don't See Your Industry?
              </h2>
              <p className="text-white/70 text-base max-w-lg">
                We work across many sectors not listed here. Reach out and let's
                explore how we can support your procurement needs.
              </p>
            </div>
            <Button
              asChild
              size="lg"
              className="flex-shrink-0 bg-[oklch(0.52_0.22_255)] hover:bg-[oklch(0.46_0.22_255)] text-white border-0 font-semibold px-10"
            >
              <Link to="/contact" className="flex items-center gap-2">
                Contact Our Team <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
