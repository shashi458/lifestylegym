import heroImg from "@/assets/hero-gym.jpg";
import { Button } from "@/components/ui/button";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden" aria-label="Hero">
    <img
      src={heroImg}
      alt="Iron Forge Gym interior with professional equipment"
      className="absolute inset-0 w-full h-full object-cover"
      loading="eager"
    />
    <div className="absolute inset-0 bg-background/70" />
    <div className="relative z-10 container mx-auto px-4 text-center animate-fade-up">
      <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-primary">Premium Fitness Experience</p>
      <h1 className="text-6xl sm:text-8xl md:text-9xl text-foreground leading-[0.9] mb-6">
        FORGE YOUR<br />
        <span className="text-primary">STRONGEST</span> SELF
      </h1>
      <p className="mx-auto max-w-xl text-lg text-muted-foreground mb-10">
        Expert trainers. World-class equipment. A community that pushes you beyond your limits.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button variant="hero" size="lg" className="px-10 py-6">
          Start Free Trial
        </Button>
        <Button variant="heroOutline" size="lg" className="px-10 py-6">
          View Plans
        </Button>
      </div>
    </div>
  </section>
);

export default HeroSection;
