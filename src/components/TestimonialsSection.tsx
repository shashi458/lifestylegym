import { Star } from "lucide-react";

interface TestimonialProps {
  name: string;
  role: string;
  quote: string;
}

const testimonials: TestimonialProps[] = [
  { name: "Marcus J.", role: "Member for 2 years", quote: "LIFE TIME GYMS completely transformed my physique. The trainers genuinely care about your progress." },
  { name: "Sarah L.", role: "Member for 1 year", quote: "Best group classes in the city. The energy in the HIIT sessions is unmatched." },
  { name: "David R.", role: "Member for 3 years", quote: "I've tried every gym in town. Nothing comes close to the equipment and atmosphere here." },
];

const TestimonialsSection = () => (
  <section id="testimonials" className="py-24 bg-card" aria-label="Testimonials">
    <div className="container mx-auto px-4">
      <div className="mb-16 text-center">
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">Success Stories</p>
        <h2 className="text-5xl md:text-6xl text-foreground">WHAT MEMBERS SAY</h2>
      </div>
      <div className="grid gap-8 md:grid-cols-3">
        {testimonials.map((t) => (
          <blockquote key={t.name} className="rounded-lg border border-border bg-background p-8">
            <div className="mb-4 flex gap-1 text-primary">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <p className="mb-6 text-muted-foreground italic leading-relaxed">"{t.quote}"</p>
            <footer>
              <cite className="not-italic">
                <span className="block font-semibold text-foreground">{t.name}</span>
                <span className="text-sm text-muted-foreground">{t.role}</span>
              </cite>
            </footer>
          </blockquote>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
