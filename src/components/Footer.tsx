import { Dumbbell, MapPin, Phone, Mail } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border bg-background py-16" role="contentinfo">
    <div className="container mx-auto px-4">
      <div className="grid gap-10 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Dumbbell className="h-6 w-6 text-primary" />
            <span className="font-display text-2xl text-foreground">LIFE TIME GYMS</span>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Premium fitness facility dedicated to helping you achieve your strongest self since 2018.
          </p>
        </div>
        <nav aria-label="Quick links">
          <h4 className="mb-4 text-xl text-foreground">QUICK LINKS</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="#services" className="hover:text-primary transition-colors">Services</a></li>
            <li><a href="#pricing" className="hover:text-primary transition-colors">Pricing</a></li>
            <li><a href="#testimonials" className="hover:text-primary transition-colors">Testimonials</a></li>
          </ul>
        </nav>
        <div>
          <h4 className="mb-4 text-xl text-foreground">HOURS</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>Mon–Fri: 5AM – 11PM</li>
            <li>Saturday: 6AM – 10PM</li>
            <li>Sunday: 7AM – 9PM</li>
          </ul>
        </div>
        <address className="not-italic">
          <h4 className="mb-4 text-xl text-foreground">CONTACT</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-primary" /> 123 Fitness Ave, Downtown</li>
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-primary" /> (555) 123-4567</li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-primary" /> info@ironforge.gym</li>
          </ul>
        </address>
      </div>
      <div className="mt-12 border-t border-border pt-8 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} LIFE TIME GYMS Gym. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
