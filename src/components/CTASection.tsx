import { Button } from "@/components/ui/button";

const CTASection = () => (
  <section className="py-24 bg-card" aria-label="Call to action">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-5xl md:text-7xl text-foreground mb-6">
        READY TO <span className="text-primary">TRANSFORM?</span>
      </h2>
      <p className="mx-auto max-w-lg text-lg text-muted-foreground mb-10">
        Join hundreds of members who have already changed their lives. Your first week is completely free.
      </p>
      <Button variant="hero" size="lg" className="px-12 py-6 text-xl">
        Claim Your Free Week
      </Button>
    </div>
  </section>
);

export default CTASection;
