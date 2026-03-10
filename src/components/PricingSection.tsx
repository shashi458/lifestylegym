import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

interface PlanProps {
  name: string;
  price: string;
  period: string;
  features: string[];
  featured?: boolean;
}

const plans: PlanProps[] = [
  {
    name: "STARTER",
    price: "$29",
    period: "/month",
    features: ["Full gym access", "Locker room", "Free WiFi", "Basic app access"],
  },
  {
    name: "PRO",
    price: "$59",
    period: "/month",
    features: ["Everything in Starter", "Unlimited group classes", "1 PT session/month", "Nutrition guidance", "Recovery zone access"],
    featured: true,
  },
  {
    name: "ELITE",
    price: "$99",
    period: "/month",
    features: ["Everything in Pro", "4 PT sessions/month", "Priority booking", "Guest passes", "Exclusive events"],
  },
];

const PricingSection = () => (
  <section id="pricing" className="py-24 bg-background" aria-label="Pricing Plans">
    <div className="container mx-auto px-4">
      <div className="mb-16 text-center">
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">Membership</p>
        <h2 className="text-5xl md:text-6xl text-foreground">CHOOSE YOUR PLAN</h2>
      </div>
      <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`rounded-lg border p-8 flex flex-col ${
              plan.featured
                ? "border-primary bg-card shadow-[var(--shadow-glow)] scale-105"
                : "border-border bg-card"
            }`}
          >
            {plan.featured && (
              <span className="mb-4 inline-block self-start rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
                Most Popular
              </span>
            )}
            <h3 className="text-3xl text-foreground mb-2">{plan.name}</h3>
            <div className="mb-6">
              <span className="text-5xl font-display text-foreground">{plan.price}</span>
              <span className="text-muted-foreground">{plan.period}</span>
            </div>
            <ul className="mb-8 flex-1 space-y-3">
              {plan.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Check className="h-4 w-4 text-primary flex-shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
            <Button variant={plan.featured ? "hero" : "heroOutline"} size="lg" className="w-full">
              Get Started
            </Button>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default PricingSection;
