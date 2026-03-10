import { Dumbbell, Users, Timer, Trophy, Zap, Heart } from "lucide-react";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard = ({ icon, title, description }: ServiceCardProps) => (
  <article className="group rounded-lg bg-card p-8 transition-all duration-300 hover:shadow-[var(--shadow-glow)] hover:-translate-y-1 border border-border">
    <div className="mb-4 inline-flex rounded-md bg-primary/10 p-3 text-primary">
      {icon}
    </div>
    <h3 className="mb-2 text-2xl text-foreground">{title}</h3>
    <p className="text-muted-foreground leading-relaxed">{description}</p>
  </article>
);

const services = [
  { icon: <Dumbbell className="h-7 w-7" />, title: "STRENGTH TRAINING", description: "State-of-the-art free weights, machines, and functional training zones for every level." },
  { icon: <Users className="h-7 w-7" />, title: "GROUP CLASSES", description: "High-energy HIIT, spinning, yoga, and boxing classes led by certified instructors." },
  { icon: <Timer className="h-7 w-7" />, title: "PERSONAL TRAINING", description: "One-on-one sessions with expert coaches who build programs tailored to your goals." },
  { icon: <Trophy className="h-7 w-7" />, title: "COMPETITIONS", description: "Monthly fitness challenges and community events to keep you motivated." },
  { icon: <Zap className="h-7 w-7" />, title: "NUTRITION PLANS", description: "Custom meal plans designed by sports nutritionists to fuel your transformation." },
  { icon: <Heart className="h-7 w-7" />, title: "RECOVERY ZONE", description: "Saunas, cold plunge pools, and stretching areas to optimize your recovery." },
];

const ServicesSection = () => (
  <section id="services" className="py-24 bg-background" aria-label="Our Services">
    <div className="container mx-auto px-4">
      <div className="mb-16 text-center">
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">What We Offer</p>
        <h2 className="text-5xl md:text-6xl text-foreground">OUR SERVICES</h2>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <ServiceCard key={s.title} {...s} />
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
