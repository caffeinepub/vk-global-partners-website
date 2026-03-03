import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Link } from "@tanstack/react-router";
import {
  AlertCircle,
  CheckCircle2,
  Loader2,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import { useEffect, useState } from "react";
import { useActor } from "../hooks/useActor";

interface FormState {
  name: string;
  companyName: string;
  email: string;
  phone: string;
  requirement: string;
}

const initialForm: FormState = {
  name: "",
  companyName: "",
  email: "",
  phone: "",
  requirement: "",
};

type SubmitStatus = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const { actor } = useActor();
  const [form, setForm] = useState<FormState>(initialForm);
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [errors, setErrors] = useState<Partial<FormState>>({});

  useEffect(() => {
    document.title =
      "Contact Us | VK Global Partners — Get a Procurement Quote";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute(
      "content",
      "Contact VK Global Partners in Noida for procurement and sourcing inquiries. Call +91 9220406592 or fill our inquiry form.",
    );
  }, []);

  const validate = (): boolean => {
    const newErrors: Partial<FormState> = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.companyName.trim())
      newErrors.companyName = "Company name is required";
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!form.phone.trim()) newErrors.phone = "Phone number is required";
    if (!form.requirement.trim())
      newErrors.requirement = "Please describe your requirement";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormState]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("loading");
    try {
      if (!actor) {
        setStatus("error");
        return;
      }
      const success = await actor.submitContactForm(
        form.name,
        form.companyName,
        form.email,
        form.phone,
        form.requirement,
      );
      if (success) {
        setStatus("success");
        setForm(initialForm);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

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
              <span className="text-white">Contact</span>
            </div>
            <h1
              className="font-display font-black text-[clamp(36px,5vw,60px)] text-white mb-4 leading-[0.95]"
              style={{ letterSpacing: "-0.035em" }}
            >
              Get in Touch
            </h1>
            <p className="text-white/75 text-lg">
              Ready to discuss your procurement needs? Our team is here to help
              you find the best sourcing solutions.
            </p>
          </div>
        </div>
      </section>

      {/* ── Contact Content ───────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* ── Form ── */}
            <div className="lg:col-span-3">
              <div className="card-premium rounded-2xl p-8 md:p-10">
                <h2
                  className="font-display font-black text-2xl text-foreground mb-2"
                  style={{ letterSpacing: "-0.03em" }}
                >
                  Send an Inquiry
                </h2>
                <p className="text-muted-foreground text-sm mb-8">
                  Fill in the form below and our team will get back to you
                  within 24 business hours.
                </p>

                {/* Success message */}
                {status === "success" && (
                  <div
                    data-ocid="contact.success_state"
                    className="mb-6 p-4 rounded-xl bg-green-50 border border-green-200 flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-green-800 text-sm">
                        Thank you! We'll get back to you shortly.
                      </p>
                      <p className="text-green-700 text-sm mt-0.5">
                        Your inquiry has been received. Expect a response within
                        24 business hours.
                      </p>
                    </div>
                  </div>
                )}

                {/* Error message */}
                {status === "error" && (
                  <div
                    data-ocid="contact.error_state"
                    className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 flex items-start gap-3"
                  >
                    <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-red-800 text-sm">
                        Something went wrong
                      </p>
                      <p className="text-red-700 text-sm mt-0.5">
                        Please try again or contact us directly at{" "}
                        <a href="tel:+919220406592" className="underline">
                          +91 9220406592
                        </a>
                        .
                      </p>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  {/* Name & Company row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <Label
                        htmlFor="name"
                        className="text-sm font-medium text-foreground"
                      >
                        Full Name <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Rajesh Kumar"
                        autoComplete="name"
                        data-ocid="contact.name.input"
                        className={errors.name ? "border-destructive" : ""}
                      />
                      {errors.name && (
                        <p className="text-destructive text-xs">
                          {errors.name}
                        </p>
                      )}
                    </div>

                    <div className="space-y-1.5">
                      <Label
                        htmlFor="companyName"
                        className="text-sm font-medium text-foreground"
                      >
                        Company Name <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="companyName"
                        name="companyName"
                        type="text"
                        value={form.companyName}
                        onChange={handleChange}
                        placeholder="Acme Industries Pvt. Ltd."
                        autoComplete="organization"
                        data-ocid="contact.company.input"
                        className={
                          errors.companyName ? "border-destructive" : ""
                        }
                      />
                      {errors.companyName && (
                        <p className="text-destructive text-xs">
                          {errors.companyName}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Email & Phone row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <Label
                        htmlFor="email"
                        className="text-sm font-medium text-foreground"
                      >
                        Email Address{" "}
                        <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="rajesh@example.com"
                        autoComplete="email"
                        data-ocid="contact.email.input"
                        className={errors.email ? "border-destructive" : ""}
                      />
                      {errors.email && (
                        <p className="text-destructive text-xs">
                          {errors.email}
                        </p>
                      )}
                    </div>

                    <div className="space-y-1.5">
                      <Label
                        htmlFor="phone"
                        className="text-sm font-medium text-foreground"
                      >
                        Phone Number <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        autoComplete="tel"
                        data-ocid="contact.phone.input"
                        className={errors.phone ? "border-destructive" : ""}
                      />
                      {errors.phone && (
                        <p className="text-destructive text-xs">
                          {errors.phone}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Requirement */}
                  <div className="space-y-1.5">
                    <Label
                      htmlFor="requirement"
                      className="text-sm font-medium text-foreground"
                    >
                      Requirement / Message{" "}
                      <span className="text-destructive">*</span>
                    </Label>
                    <Textarea
                      id="requirement"
                      name="requirement"
                      value={form.requirement}
                      onChange={handleChange}
                      placeholder="Please describe your procurement requirement, the products you need, estimated quantities, and any specific quality or compliance requirements..."
                      rows={5}
                      autoComplete="off"
                      data-ocid="contact.requirement.textarea"
                      className={`resize-none ${errors.requirement ? "border-destructive" : ""}`}
                    />
                    {errors.requirement && (
                      <p className="text-destructive text-xs">
                        {errors.requirement}
                      </p>
                    )}
                  </div>

                  {/* Submit */}
                  <Button
                    type="submit"
                    size="lg"
                    disabled={status === "loading"}
                    data-ocid="contact.submit_button"
                    className="w-full brand-gradient text-white border-0 font-semibold h-12 text-base hover:opacity-90 transition-opacity"
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      "Send Inquiry"
                    )}
                  </Button>
                </form>
              </div>
            </div>

            {/* ── Contact Info ── */}
            <div className="lg:col-span-2 space-y-6">
              {/* Phone */}
              <div className="bg-card rounded-xl border border-border p-6">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 rounded-xl brand-gradient flex items-center justify-center">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
                      Phone
                    </p>
                    <a
                      href="tel:+919220406592"
                      className="font-display font-bold text-xl text-foreground hover:text-[oklch(0.52_0.22_255)] transition-colors"
                    >
                      +91 9220406592
                    </a>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm">
                  Available Monday–Saturday, 9 AM–7 PM IST
                </p>
              </div>

              {/* Address */}
              <div className="bg-card rounded-xl border border-border p-6">
                <div className="flex items-start gap-4 mb-3">
                  <div className="w-12 h-12 rounded-xl bg-[oklch(0.22_0.09_255)] flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1">
                      Office Address
                    </p>
                    <p className="font-medium text-foreground text-base leading-relaxed">
                      C - 7/11, Sector 63,
                      <br />
                      Noida, Uttar Pradesh,
                      <br />
                      India
                    </p>
                  </div>
                </div>
              </div>

              {/* WhatsApp */}
              <a
                href="https://wa.me/919220406592"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-xl p-6 hover:opacity-90 transition-opacity group"
                style={{ backgroundColor: "#25D366" }}
              >
                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-display font-bold text-white text-lg">
                    Chat on WhatsApp
                  </p>
                  <p className="text-white/80 text-sm">
                    Quick response for urgent inquiries
                  </p>
                </div>
              </a>

              {/* Map */}
              <div className="rounded-xl overflow-hidden border border-border shadow-sm">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.0!2d77.372!3d28.6139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sSector+63%2C+Noida%2C+Uttar+Pradesh!5e0!3m2!1sen!2sin!4v1"
                  width="100%"
                  height="300"
                  style={{ border: 0, display: "block" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="VK Global Partners Office Location"
                  data-ocid="contact.map_marker"
                />
              </div>

              {/* Quick info */}
              <div className="bg-[oklch(0.94_0.03_255)] rounded-xl p-6 space-y-3">
                <h4 className="font-display font-bold text-sm text-foreground uppercase tracking-wide">
                  Why Reach Out?
                </h4>
                {[
                  "Free initial consultation",
                  "Response within 24 business hours",
                  "No-obligation procurement assessment",
                  "Detailed cost-saving analysis",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2.5 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-[oklch(0.52_0.22_255)] flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
