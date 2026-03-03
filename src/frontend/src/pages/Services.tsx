import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  DollarSign,
  Handshake,
  Microscope,
  Network,
  Search,
  ShieldCheck,
  Truck,
  Users,
} from "lucide-react";
import { useEffect } from "react";

const marketResearchServices = [
  {
    icon: Search,
    title: "Supplier Identification",
    description:
      "Comprehensive mapping of qualified suppliers across India and globally. We vet, verify, and shortlist vendors that meet your technical specifications, capacity requirements, and quality standards.",
    features: [
      "Multi-source supplier database",
      "Factory capability assessment",
      "Financial health checks",
      "Reference validation",
    ],
  },
  {
    icon: BarChart3,
    title: "Competitor Analysis",
    description:
      "In-depth intelligence on competitor sourcing strategies, pricing, and supply chain structures to help you identify gaps and opportunities in the market.",
    features: [
      "Market positioning analysis",
      "Pricing benchmarking",
      "Supplier overlap mapping",
      "Strategic sourcing insights",
    ],
  },
  {
    icon: Microscope,
    title: "Product Feasibility Research",
    description:
      "Detailed feasibility studies to evaluate whether a product can be sourced, manufactured, or imported profitably and at the required quality level.",
    features: [
      "Technical specification review",
      "Manufacturing capability analysis",
      "Regulatory compliance checks",
      "Market demand assessment",
    ],
  },
  {
    icon: DollarSign,
    title: "Pricing Intelligence",
    description:
      "Real-time and historical pricing data to ensure you're always negotiating from a position of knowledge, with fair market benchmarks and cost breakdowns.",
    features: [
      "Live market price tracking",
      "Historical price trend analysis",
      "Cost structure breakdowns",
      "Seasonal pricing patterns",
    ],
  },
];

const procurementServices = [
  {
    icon: Users,
    title: "Vendor Sourcing",
    description:
      "Identify, qualify, and onboard the best vendors for your specific requirements — from standard commodities to highly specialized technical components.",
    features: [
      "RFQ management",
      "Vendor shortlisting",
      "Onboarding support",
      "Performance tracking",
    ],
  },
  {
    icon: Handshake,
    title: "Negotiation Support",
    description:
      "Expert negotiation on your behalf to secure the best possible terms — price, quality, lead times, and payment conditions — from your suppliers.",
    features: [
      "Price negotiation",
      "Contract term structuring",
      "Payment terms optimization",
      "Long-term agreement setup",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Quality Inspection Coordination",
    description:
      "Rigorous quality control at every stage — pre-production, in-production, and pre-shipment — to ensure products meet your exact specifications.",
    features: [
      "Pre-shipment inspection",
      "In-line quality checks",
      "Lab testing coordination",
      "Defect reporting & follow-up",
    ],
  },
  {
    icon: Truck,
    title: "Logistics Coordination",
    description:
      "Seamless coordination of transportation, customs clearance, and freight management to ensure timely and cost-effective delivery.",
    features: [
      "Freight forwarding",
      "Customs documentation",
      "Multi-modal transport",
      "Real-time shipment tracking",
    ],
  },
  {
    icon: Network,
    title: "End-to-End Supply Chain Management",
    description:
      "Comprehensive supply chain oversight from order placement to final delivery, with full visibility and proactive issue resolution at every step.",
    features: [
      "Order management system",
      "Supplier relationship management",
      "Risk mitigation planning",
      "Performance reporting",
    ],
  },
];

export default function Services() {
  useEffect(() => {
    document.title =
      "Services | VK Global Partners — Procurement & Market Research Solutions";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute(
      "content",
      "Explore our comprehensive procurement services: market research, vendor sourcing, quality inspection, logistics coordination, and end-to-end supply chain management.",
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
              <span className="text-white">Services</span>
            </div>
            <h1
              className="font-display font-black text-[clamp(36px,5vw,60px)] text-white mb-4 leading-[0.95]"
              style={{ letterSpacing: "-0.035em" }}
            >
              Our Services
            </h1>
            <p className="text-white/75 text-lg">
              Comprehensive procurement and market research solutions to power
              your supply chain from end to end.
            </p>
          </div>
        </div>
      </section>

      {/* ── Market Research ───────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section header with image */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <p className="text-[oklch(0.52_0.22_255)] text-xs font-bold uppercase tracking-[0.16em] mb-3">
                Intelligence-First
              </p>
              <h2
                className="font-display font-black text-[clamp(28px,4vw,44px)] text-foreground leading-[1.0] mb-5"
                style={{ letterSpacing: "-0.03em" }}
              >
                Market
                <br />
                Research
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed mb-6">
                Informed procurement starts with intelligence. Our market
                research services provide the data, analysis, and insights you
                need to make confident sourcing decisions and negotiate from a
                position of strength.
              </p>
              <p className="text-muted-foreground text-base leading-relaxed">
                From identifying the right suppliers to understanding pricing
                dynamics across categories, our research team delivers
                actionable intelligence specific to your industry and
                requirements.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/assets/generated/services-market-research.dim_700x450.jpg"
                alt="Market research services"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Service cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {marketResearchServices.map((service) => (
              <div key={service.title} className="card-premium rounded-2xl p-7">
                <div className="flex items-start gap-5 mb-5">
                  <div className="w-12 h-12 rounded-xl bg-[oklch(0.94_0.04_255)] flex items-center justify-center flex-shrink-0">
                    <service.icon className="w-6 h-6 text-[oklch(0.52_0.22_255)]" />
                  </div>
                  <div>
                    <h3
                      className="font-display font-bold text-[17px] text-foreground mb-1.5"
                      style={{ letterSpacing: "-0.02em" }}
                    >
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2 pt-4 border-t border-[oklch(0.91_0.015_250)]">
                  {service.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-2 text-xs"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[oklch(0.52_0.22_255)] flex-shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Procurement Solutions ─────────────────────────────── */}
      <section className="py-20 md:py-28 bg-[oklch(0.94_0.03_255)]">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <p className="text-[oklch(0.52_0.22_255)] text-xs font-bold uppercase tracking-[0.16em] mb-3">
                End-to-End
              </p>
              <h2
                className="font-display font-black text-[clamp(28px,4vw,44px)] text-foreground leading-[1.0]"
                style={{ letterSpacing: "-0.03em" }}
              >
                Procurement
                <br />
                Solutions
              </h2>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              From first vendor contact to final delivery, we manage every
              aspect of your procurement process with precision and care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {procurementServices.map((service) => (
              <div key={service.title} className="card-premium rounded-2xl p-7">
                <div className="w-12 h-12 rounded-xl brand-gradient flex items-center justify-center mb-5">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3
                  className="font-display font-bold text-[17px] text-foreground mb-2.5"
                  style={{ letterSpacing: "-0.02em" }}
                >
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                  {service.description}
                </p>
                <div className="space-y-2 pt-4 border-t border-[oklch(0.91_0.015_250)]">
                  {service.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-2 text-xs"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[oklch(0.52_0.22_255)] flex-shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
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
                Need a Custom Procurement Solution?
              </h2>
              <p className="text-white/70 text-base max-w-lg">
                Every business is unique. Let us design a procurement strategy
                tailored to your specific needs and goals.
              </p>
            </div>
            <Button
              asChild
              size="lg"
              className="flex-shrink-0 bg-[oklch(0.52_0.22_255)] hover:bg-[oklch(0.46_0.22_255)] text-white border-0 font-semibold px-10"
            >
              <Link to="/contact" className="flex items-center gap-2">
                Discuss Your Requirements <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
